import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  titleCard: string = 'Menus proposés';
  btnText: string = 'Ajouter';
  nameMenu: string = 'test';
  Menus = [];
  priceMenu: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.Menus.push(this.nameMenu);
    this.nameMenu = '';

    this.prices.push(this.priceMenu);
    this.priceMenu = '';

    }

}
