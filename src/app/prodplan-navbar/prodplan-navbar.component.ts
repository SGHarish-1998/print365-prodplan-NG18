import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodplan-navbar',
  standalone: true,
  templateUrl: './prodplan-navbar.component.html',
  styleUrls: ['./prodplan-navbar.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class ProdplanNavbarComponent {
  activeTab = 'overview';
  dropdownOpen: string | null = null;
  isLoading = false;

  bookingName = 'Booking 1';
  dateStr = new Date().toLocaleDateString();

  setActive(tab: string): void {
    this.activeTab = tab;
    this.dropdownOpen = null;
  }

  toggleDropdown(menu: string): void {
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }

  onRefresh(): void {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 1000);
  }

  printPage(): void {
    window.print();
  }

  exportToExcel(): void {
    console.log('Exporting to Excel...');
  }

  toggleReporting(): void {
    console.log('Toggling reporting view...');
  }

  toggleAutoScroll(): void {
    console.log('Toggling auto-scroll...');
  }
}
