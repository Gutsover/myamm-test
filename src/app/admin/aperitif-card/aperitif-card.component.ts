import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aperitif-card',
  templateUrl: './aperitif-card.component.html',
  styleUrls: ['./aperitif-card.component.scss']
})
export class AperitifCardComponent implements OnInit {

  titleCard: string = 'Apéritifs';
  btnText: string = 'Ajouter';
  nameAperitif: string;
  aperitifs = [];
  priceAperitif: number;
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.aperitifs.push(this.nameAperitif);
    // this.nameAperitif = '';

    this.prices.push(this.priceAperitif);
    // this.priceAperitif = number;

    }


}
