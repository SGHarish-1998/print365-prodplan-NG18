import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss'],
  standalone: true
})
export class NavmenuComponent {
  activeMenu: string | null = null;

  constructor(private eRef: ElementRef) {}

  toggleMenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.activeMenu = null;
    }
  }
}
