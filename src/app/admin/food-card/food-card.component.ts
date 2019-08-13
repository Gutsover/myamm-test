import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  titleCard = 'Ajouter un plat';
  titlePlace = 'Nom du plat';

  constructor() { }

  ngOnInit() {
  }

}
