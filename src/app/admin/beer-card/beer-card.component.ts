import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  titleCard: string = 'Bières';
  btnText: string = 'Ajouter';
  nameBeer: string = 'test';
  beers = [];
  priceBeer: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.beers.push(this.nameBeer);
    this.nameBeer = '';

    this.prices.push(this.priceBeer);
    this.priceBeer = '';

    }


}
