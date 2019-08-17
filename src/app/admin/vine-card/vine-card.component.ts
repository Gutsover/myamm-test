import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vine-card',
  templateUrl: './vine-card.component.html',
  styleUrls: ['./vine-card.component.scss']
})
export class VineCardComponent implements OnInit {

  titleCard: string = 'Vins';
  btnText: string = 'Ajouter';
  nameVine: string;
  vines = [];
  priceVine: number;
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.vines.push(this.nameVine);
    // this.nameVine = '';

    this.prices.push(this.priceVine);
    // this.priceVine = '';

    }


}
