import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {

  @Input() mealType: string;
  @Input() mealPlaceHolder: string;

  @Input() mealName: string;
  @Input() meals = [];
  @Input() mealPrice: number;
  @Input() prices = [];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.meals.push(this.mealName);
    this.mealName = '';

    this.prices.push(this.mealPrice);
  }

}
