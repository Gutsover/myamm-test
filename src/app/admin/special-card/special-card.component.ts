import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss']
})
export class SpecialCardComponent implements OnInit {

  titleCard: string = 'Plat(s) du Jour';
  btnText: string = 'Ajouter';
  nameSpecial: string;
  specials = [];
  priceSpecial: number;
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.specials.push(this.nameSpecial);
    this.nameSpecial = '';

    this.prices.push(this.priceSpecial);
    // this.priceSpecial = '';

    }

}
