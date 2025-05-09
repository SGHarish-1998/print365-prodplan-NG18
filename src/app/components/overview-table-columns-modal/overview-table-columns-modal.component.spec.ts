import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTableColumnsModalComponent } from './overview-table-columns-modal.component';

describe('OverviewTableColumnsModalComponent', () => {
  let component: OverviewTableColumnsModalComponent;
  let fixture: ComponentFixture<OverviewTableColumnsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewTableColumnsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewTableColumnsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
