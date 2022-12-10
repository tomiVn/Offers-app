import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from 'src/app/models/interfaces/offerInterface';

@Component({
  selector: 'app-offer-template',
  templateUrl: './offer-template.component.html',
  styleUrls: ['./offer-template.component.less']
})
export class OfferTemplateComponent implements OnInit {
  
  @Input() offer!:   IOffer;
  constructor() { }

  ngOnInit(): void {
  }

}
