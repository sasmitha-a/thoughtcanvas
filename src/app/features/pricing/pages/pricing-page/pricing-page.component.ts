import { Component, OnInit } from '@angular/core';
import { PricingOffer } from '../../../../core/model/pricing-offer.model';
import { mockPricingOffers } from '../../../../../../backend/mock.backend';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent implements OnInit {

  pricingOffers:PricingOffer[] = [];

ngOnInit(): void {
  this.pricingOffers = mockPricingOffers; 
}

}
