import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss']
})
export class DessertCardComponent implements OnInit {

  titleCard: string = 'Les desserts';
  btnText: string = 'Ajouter';
  nameDessert: string = 'test';
  desserts = [];
  priceDessert: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.desserts.push(this.nameDessert);
    this.nameDessert = '';

    this.prices.push(this.priceDessert);
    this.priceDessert = '';

    }

}
