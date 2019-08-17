import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss']
})
export class DessertCardComponent implements OnInit {

  titleCard: string = 'Desserts';
  btnText: string = 'Ajouter';
  nameDessert: string;
  desserts = [];
  priceDessert: number;
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.desserts.push(this.nameDessert);
    this.nameDessert = '';

    this.prices.push(this.priceDessert);
    // this.priceDessert = '';

    }

}
