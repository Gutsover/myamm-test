import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-beverage-card',
  templateUrl: './hot-beverage-card.component.html',
  styleUrls: ['./hot-beverage-card.component.scss']
})
export class HotBeverageCardComponent implements OnInit {

  titleCard: string = 'Boissons chaudes';
  btnText: string = 'Ajouter';
  nameHotBeverage: string = 'test';
  hotBeverages = [];
  priceHotBeverage: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.hotBeverages.push(this.nameHotBeverage);
    this.nameHotBeverage = '';

    this.prices.push(this.priceHotBeverage);
    this.priceHotBeverage = '';

    }


}
