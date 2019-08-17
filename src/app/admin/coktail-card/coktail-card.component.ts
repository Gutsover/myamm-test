import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coktail-card',
  templateUrl: './coktail-card.component.html',
  styleUrls: ['./coktail-card.component.scss']
})
export class CoktailCardComponent implements OnInit {

  titleCard: string = 'Coktails';
  btnText: string = 'Ajouter';
  nameCoktail: string;
  coktails = [];
  priceCoktail: number;
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.coktails.push(this.nameCoktail);
    // this.nameCoktail = '';

    this.prices.push(this.priceCoktail);
    // this.priceCoktail = '';

    }


}
