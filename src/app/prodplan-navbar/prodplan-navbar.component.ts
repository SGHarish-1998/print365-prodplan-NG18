// prodplan-navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-prodplan-navbar',
  templateUrl: './prodplan-navbar.component.html',
  styleUrls: ['./prodplan-navbar.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProdplanNavbarComponent {
  activeTab: string = 'overview';
  dropdownOpen: string | null = null;
  isLoading = false;
  bookingName = 'Booking 1';
  dateStr = new Date().toLocaleDateString();

  setActive(tab: string) {
    this.activeTab = tab;
    this.dropdownOpen = null;
  }

  toggleDropdown(menu: string) {
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }

  onRefresh() {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }

  printPage() {
    window.print();
  }

  exportToExcel() {
    console.log('Exporting to Excel...');
  }

  toggleReporting() {
    console.log('Toggling reporting view...');
  }

  toggleAutoScroll() {
    console.log('Toggling auto-scroll...');
  }
}
