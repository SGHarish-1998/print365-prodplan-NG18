import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OverviewTableComponent implements OnInit {
  demoDate = '2025-05-07';
  demoWeek = 'Wednesday week 19';


  private publicationService = inject(PublicationService);
  data: any;
  bookings: any;

  ngOnInit(): void {
    this.publicationService.getPublications().subscribe({
      next: (res) => {
        this.bookings = res.map((pub: any) => {
          const title = pub.Name || 'Untitled';
          const orderedCopies = pub.TotalPrintCopies?.toLocaleString() || '0';

          const editionObj = pub.Editions?.[0]?.Edition;
          const edition = editionObj?.Code || 'N/A';
          const editionCopies = pub.TotalPrintCopies?.toLocaleString() || '0';

          const firstSection = pub.Sections?.[0];
          const format = firstSection?.PaperFormat?.Name || 'Unknown';
          const paper = firstSection?.PaperType?.ShortName || 'N/A';
          const weight = `${firstSection?.SectionPaperWeight || 0} g`;

          // Get jobs from folders + mailroom jobs
          const jobEntries = [
            ...(pub.Folders || []).map((folder: { Folder: { Code: any; }; PrintingDate: string; }) => ({
              name: folder.Folder?.Code || 'Folder',
              date: this.formatDate(folder.PrintingDate)
            })),
            ...(pub.MailroomJobs || []).map((job: { MailroomLine: { Code: any; }; Date: string; }) => ({
              name: job.MailroomLine?.Code || 'Mailroom',
              date: this.formatDate(job.Date)
            }))
          ];

          const times = [
            ...(pub.Folders || []).map((f: { PrintingStartTime: string; PrintingEndTime: string; }) =>
              this.formatTimeRange(f.PrintingStartTime, f.PrintingEndTime)
            ),
            ...(pub.MailroomJobs || []).map((m: { StartTime: string; EndTime: string; }) =>
              this.formatTimeRange(m.StartTime, m.EndTime)
            )
          ];

          const copies = [
            ...(pub.Folders || []).map((f: { NumberOfCopies: { toLocaleString: () => any; }; }) => f.NumberOfCopies?.toLocaleString() || '0'),
            ...(pub.MailroomJobs || []).map((m: { NumberOfCopies: { toLocaleString: () => any; }; }) => m.NumberOfCopies?.toLocaleString() || '0')
          ];

          return {
            title,
            orderedCopies,
            edition,
            editionCopies,
            format,
            paper,
            weight,
            jobs: jobEntries,
            times,
            copies,
            lastEditions: Array(jobEntries.length).fill('all')
          };
        });
      },
      error: (err) => {
        console.error('❌ API Error:', err);
      }
    });
  }

  // Helper: format time range like "16:45 - 17:25"
  formatTimeRange(start: string, end: string): string {
    if (!start || !end) return 'N/A';
    const startTime = new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const endTime = new Date(end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${startTime} - ${endTime}`;
  }

  // Helper: format date like "5/5"
  formatDate(dateStr: string): string {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  }

}
