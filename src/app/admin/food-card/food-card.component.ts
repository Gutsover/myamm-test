import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  titleCard: string = 'Les plats';
  btnText: string = 'Ajouter';
  nameMeal: string = 'test';
  meals = [];
  priceMeal: string  = '12';
  prices = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.meals.push(this.nameMeal);
    this.nameMeal = '';

    this.prices.push(this.priceMeal);
    this.priceMeal = '';

    }

}
