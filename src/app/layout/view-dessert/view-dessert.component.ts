import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dessert',
  templateUrl: './view-dessert.component.html',
  styleUrls: ['./view-dessert.component.scss']
})
export class ViewDessertComponent implements OnInit {

  meals = [
    {
        type: 'Dessert',
        placeHolder: 'Nom du dessert'
    },
    {
        type: 'Digestif',
        placeHolder: 'Nom du digestif'
    },
    {
        type: 'Boisson chaude',
        placeHolder: 'Nom de la boisson chaude'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
