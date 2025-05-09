import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-overview-table-columns-modal',
  standalone: true,  
  imports: [FormsModule,CommonModule],
  templateUrl: './overview-table-columns-modal.component.html',
  styleUrls: ['./overview-table-columns-modal.component.scss']
})
export class OverviewTableColumnsModalComponent {
  @Output() close = new EventEmitter<void>();

  layoutName = '';
  
  columns = [
    { name: 'Booking', enabled: false, showWhen: 'always', width: 12 },
    { name: 'Ordered copies', enabled: true, showWhen: 'always', width: 4 },
    { name: 'Inserts', enabled: true, showWhen: 'always', width: 4 },
    { name: 'Attachments', enabled: true, showWhen: 'always', width: 6 },
    { name: 'Product', enabled: false, showWhen: 'normal', width: 6 },
    { name: 'Printing time', enabled: false, showWhen: 'normal', width: 6 },
    { name: 'Editions', enabled: true, showWhen: 'normal', width: 6 },
    { name: 'Pages', enabled: false, showWhen: 'normal', width: 6 },
    { name: 'Plates', enabled: false, showWhen: 'normal', width: 6 },
    { name: 'Format', enabled: true, showWhen: 'normal', width: 6 },
    { name: 'Paper', enabled: true, showWhen: 'normal', width: 6 },
    { name: 'Weight', enabled: true, showWhen: 'normal', width: 4 },
  ];

  closeModal() {
    this.close.emit();
  }
}
