import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAndLogoComponent } from './partner-and-logo.component';

describe('PartnerAndLogoComponent', () => {
  let component: PartnerAndLogoComponent;
  let fixture: ComponentFixture<PartnerAndLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAndLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerAndLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
