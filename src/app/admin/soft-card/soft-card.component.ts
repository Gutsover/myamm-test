import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-card',
  templateUrl: './soft-card.component.html',
  styleUrls: ['./soft-card.component.scss']
})
export class SoftCardComponent implements OnInit {

  titleCard: string = 'Boissons sans alcool';
  btnText: string = 'Ajouter';
  nameSoft: string;
  softs = [];
  priceSoft: number;
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.softs.push(this.nameSoft);
    this.nameSoft = '';

    this.prices.push(this.priceSoft);
    // this.priceSoft = '';

    }


}
