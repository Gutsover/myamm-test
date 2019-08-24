import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.scss']
})
export class ViewMealComponent implements OnInit {


  meals = [
    {
        type: 'Plat',
        placeHolder: 'Nom du plat'
    },
    {
        type: 'Entrée',
        placeHolder: 'Nom de l entrée'
    },
    {
        type: 'Menu',
        placeHolder: 'entrée, plat, dessert...'
    },
    {
        type: 'Plat du Jour',
        placeHolder: 'entrée, plat, dessert...'
    }
  ];

  constructor() { }
// private mealService: MealService
  ngOnInit() {
  }

}
