import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entree-card',
  templateUrl: './entree-card.component.html',
  styleUrls: ['./entree-card.component.scss']
})
export class EntreeCardComponent implements OnInit {

  titleCard: string = 'Les entrées';
  btnText: string = 'Ajouter';
  nameEntree: string = 'test';
  entrees = [];
  priceEntree: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.entrees.push(this.nameEntree);
    this.nameEntree = '';

    this.prices.push(this.priceEntree);
    this.priceEntree = '';

    }

}
