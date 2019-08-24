import { Component, OnInit } from '@angular/core';
import { AlcoolService } from '../../services/alcool.service';


@Component({
  selector: 'app-view-alcool',
  templateUrl: './view-alcool.component.html',
  styleUrls: ['./view-alcool.component.scss']
})
export class ViewAlcoolComponent implements OnInit {

  meals = [];

  constructor(private alcoolService: AlcoolService) { }

  ngOnInit() {
    this.meals = this.alcoolService.meals;
  }

}
