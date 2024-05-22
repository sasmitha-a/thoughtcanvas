import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOfferCardComponent } from './pricing-offer-card.component';

describe('PricingOfferCardComponent', () => {
  let component: PricingOfferCardComponent;
  let fixture: ComponentFixture<PricingOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingOfferCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
