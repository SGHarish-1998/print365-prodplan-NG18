// src/app/overview-sidebar/overview-sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverviewTableColumnsModalComponent } from '../components/overview-table-columns-modal/overview-table-columns-modal.component';

@Component({
  selector: 'app-overview-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, OverviewTableColumnsModalComponent],
  templateUrl: './overview-sidebar.component.html',
  styleUrls: ['./overview-sidebar.component.scss']
})
export class OverviewSidebarComponent {
  form = {
    plant: null,
    textFilter: '',
    filterOption: '',
    format: '',
    paper: '',
    manager: '',
    table: '',
    dateRangeStart: '2025-05-06',
    dateRangeEnd: '2025-05-06',
  };

  groupedPlants = {
    plants: [
      { id: 'salzburg', name: 'Salzburg' },
      { id: 'karnten', name: 'Kärnten' },
      { id: 'wien', name: 'Wien' }
    ],
    folders: [
      { id: 's-sf1', name: 'S S-F1' },
      { id: 's-s20', name: 'S S-20' },
      { id: 's-s30', name: 'S S-30' },
      { id: 'k-kf1a', name: 'K K-F1A' },
      { id: 'k-kf2a', name: 'K K-F2A' },
      { id: 'k-kf3a', name: 'K K-F3A' },
      { id: 'w-w10a', name: 'W W-10a' },
      { id: 'w-w10b', name: 'W W-10b' },
      { id: 'w-w20', name: 'W W-20' },
      { id: 'w-w30', name: 'W W-30' },
      { id: 'w-w40', name: 'W W-40' },
      { id: 'w-w50', name: 'W W-50' },
      { id: 'w-w60', name: 'W W-60' },
      { id: 'w-w70', name: 'W W-70' }
    ]
  };

  filterOptions = [
    { value: 'approved', label: 'Only Approved' },
    { value: 'unapproved', label: 'Only Unapproved' }
  ];

  format = [
    { value: 'broadcast', label: 'BroadCast' },
    { value: 'panorama', label: 'Panorama' },
    { value: 'tabloid', label: 'Tabloid' }
  ];

  paperOptions = [
    'Papier 42_Std_Bruck',
    'Papier 42g Salmon',
    'Papier 42,5g',
    'Papier 42,5g Presse',
    'Papier 42,5g MGOE',
    'Papier 42,5 Presse Palm',
    'Papier 45g',
    'Papier 48,8g W72',
    'Papier 48,8g',
    'Papier 52g W72',
    'Papier 52g MGOE',
    'Papier 52g W80',
    'Papier 55g aufgeb.',
    'Papier 60g aufgeb.',
    'Papier 65g aufgeb.'
  ];

  managerOptions = [
    'Andrea Zechner',
    'Andreas Dvorak',
    'DZS Salzburg',
    'Nina Cernohorski',
    'Nina Cernohorski'
  ];

  tableOptions = {
    personal: ['DE-personal'],
    shared: ['Kompakt - nur Buchung'],
    standard: ['Standard', 'Job details', 'Booking details', 'Order']
  };

  resetForm() {
    this.form = {
      plant: null,
      textFilter: '',
      filterOption: '',
      format: '',
      paper: '',
      manager: '',
      table: '',
      dateRangeStart: '2025-05-06',
      dateRangeEnd: '2025-05-06'
    };
  }

  showModal = false;

  openSettings() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
