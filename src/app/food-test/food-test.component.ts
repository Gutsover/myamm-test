import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../models/Food.model';

@Component({
  selector: 'app-food-test',
  templateUrl: './food-test.component.html',
  styleUrls: ['./food-test.component.scss']
})
export class FoodTestComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.findAll()
      .subscribe(
        (foods: Food[]) => {
          this.foods = foods;
        },
        err => {
          console.log(err);
        }
      );
  }

}
