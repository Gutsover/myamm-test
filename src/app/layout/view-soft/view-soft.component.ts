import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-soft',
  templateUrl: './view-soft.component.html',
  styleUrls: ['./view-soft.component.scss']
})
export class ViewSoftComponent implements OnInit {

  meals = [
    {
        type: 'Boisson sans Alcool',
        placeHolder: 'Nom de la boisson'
    },
    {
        type: 'Coktail sans Alcool',
        placeHolder: 'Nom du coktail'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
