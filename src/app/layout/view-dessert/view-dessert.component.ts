import { Component, OnInit } from '@angular/core';
import { DessertService } from '../../services/dessert.service';


@Component({
  selector: 'app-view-dessert',
  templateUrl: './view-dessert.component.html',
  styleUrls: ['./view-dessert.component.scss']
})
export class ViewDessertComponent implements OnInit {

  meals = [];

  constructor(private dessertService: DessertService) { }

  ngOnInit() {
    this.meals = this.dessertService.meals;
  }

}
