import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coktail-soft-card',
  templateUrl: './coktail-soft-card.component.html',
  styleUrls: ['./coktail-soft-card.component.scss']
})
export class CoktailSoftCardComponent implements OnInit {

  titleCard: string = 'Coktails sans alcool';
  btnText: string = 'Ajouter';
  nameCoktailSoft: string = 'test';
  coktailSofts = [];
  priceCoktailSoft: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.coktailSofts.push(this.nameCoktailSoft);
    this.nameCoktailSoft = '';

    this.prices.push(this.priceCoktailSoft);
    this.priceCoktailSoft = '';

    }


}
