import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewSidebarComponent } from './overview-sidebar/overview-sidebar.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ProdplanNavbarComponent } from './prodplan-navbar/prodplan-navbar.component';
// import { CustomDatePickerComponent } from './shared/custom-date-picker/custom-date-picker.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverviewSidebarComponent, OverviewTableComponent, NavmenuComponent, ProdplanNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'p365-prodplan';
  selectedBooking: string | null = null;

  // This is triggered when the row is clicked in app-overview-table
  updateSidebar(bookingName: string) {
    this.selectedBooking = bookingName;
  }
  onDateSelected(date: Date | { start: Date, end: Date }) {
    console.log('Selected date(s):', date);
  }
}
