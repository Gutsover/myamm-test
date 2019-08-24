import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-alcool',
  templateUrl: './view-alcool.component.html',
  styleUrls: ['./view-alcool.component.scss']
})
export class ViewAlcoolComponent implements OnInit {

  meals = [
    {
        type: 'Bière',
        placeHolder: 'Nom de la bière'
    },
    {
        type: 'Coktail',
        placeHolder: 'Nom du coktail'
    },
    {
        type: 'Vin',
        placeHolder: 'Nom du vin'
    },
    {
        type: 'Apéritif',
        placeHolder: 'Nom de l apéritif'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
