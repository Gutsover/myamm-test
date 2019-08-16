import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss']
})
export class SpecialCardComponent implements OnInit {

  titleCard: string = 'Plat du jour';
  btnText: string = 'Ajouter';
  nameSpecial: string = 'test';
  specials = [];
  priceSpecial: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.specials.push(this.nameSpecial);
    this.nameSpecial = '';

    this.prices.push(this.priceSpecial);
    this.priceSpecial = '';

    }

}
