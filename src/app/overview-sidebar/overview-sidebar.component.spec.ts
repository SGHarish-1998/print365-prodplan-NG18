import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSidebarComponent } from './overview-sidebar.component';

describe('OverviewSidebarComponent', () => {
  let component: OverviewSidebarComponent;
  let fixture: ComponentFixture<OverviewSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
