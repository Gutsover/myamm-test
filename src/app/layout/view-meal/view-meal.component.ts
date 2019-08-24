import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.scss']
})
export class ViewMealComponent implements OnInit {
  meals: any[];
  // On injecte le service dans le constructor puis on implément le OnInit, création de la méthosde ngOnInit
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.meals = this.mealService.meals;
  }

}
