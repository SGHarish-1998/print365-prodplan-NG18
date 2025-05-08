import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewSidebarComponent } from './overview-sidebar/overview-sidebar.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverviewSidebarComponent, OverviewTableComponent, NavmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'p365-prodplan';
}
