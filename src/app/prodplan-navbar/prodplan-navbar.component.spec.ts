import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdplanNavbarComponent } from './prodplan-navbar.component';

describe('ProdplanNavbarComponent', () => {
  let component: ProdplanNavbarComponent;
  let fixture: ComponentFixture<ProdplanNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdplanNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdplanNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
