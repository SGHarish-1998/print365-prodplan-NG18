// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ProdplanNavbarComponent } from './prodplan-navbar/prodplan-navbar.component';
import { OverviewSidebarComponent } from './overview-sidebar/overview-sidebar.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavmenuComponent,
    ProdplanNavbarComponent,
    OverviewSidebarComponent,
    OverviewTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'p365-prodplan';
  selectedBooking: string | null = null;

  updateSidebar(bookingName: string): void {
    this.selectedBooking = bookingName;
  }
}
