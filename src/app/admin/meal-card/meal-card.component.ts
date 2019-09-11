import { Component, Input, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {

  // Variables propre aux components, ne peut pas être modifié
  @Input() mealType: string;
  @Input() mealPlaceHolder: string;

  // Ce que renseigne l'admin, ne peux pas être modifié
  @Input() mealName: string;
  @Input() meals = [];
  @Input() mealPrice: number;
  @Input() prices = [];

  // @Input() indexOfMeal: number;

  constructor(private mealService: MealService) { }

  ngOnInit() {

  }

  // Method du btn addItem pour envoi des données des input dans l'affichage
  addItem() {
    this.meals.push(this.mealName);
    this.mealName = '';

    this.prices.push(this.mealPrice);
  }

}
