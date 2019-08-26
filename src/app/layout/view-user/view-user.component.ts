import { Component, OnInit } from '@angular/core';
import { UserFoodService } from '../../services/user-food.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})

export class ViewUserComponent implements OnInit {

  foods = [];

  constructor(private userFoodService: UserFoodService) { }

  ngOnInit() {
    this.foods = this.userFoodService.food;
  }

}
