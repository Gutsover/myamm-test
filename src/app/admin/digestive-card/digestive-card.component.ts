import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digestive-card',
  templateUrl: './digestive-card.component.html',
  styleUrls: ['./digestive-card.component.scss']
})
export class DigestiveCardComponent implements OnInit {

  titleCard: string = 'Digestifs';
  btnText: string = 'Ajouter';
  nameDigestive: string = 'test';
  digestives = [];
  priceDigestive: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.digestives.push(this.nameDigestive);
    this.nameDigestive = '';

    this.prices.push(this.priceDigestive);
    this.priceDigestive = '';

    }

}
