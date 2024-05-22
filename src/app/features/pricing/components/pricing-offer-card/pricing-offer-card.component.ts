import { Component, Input } from '@angular/core';
import { PricingOffer } from '../../../../core/model/pricing-offer.model';

@Component({
  selector: 'pricing-offer-card',
  templateUrl: './pricing-offer-card.component.html',
  styleUrl: './pricing-offer-card.component.scss'
})
export class PricingOfferCardComponent {
  @Input({
    required: true
  }) pricingOffer!:PricingOffer;
}
