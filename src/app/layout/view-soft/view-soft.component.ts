import { Component, OnInit } from '@angular/core';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-view-soft',
  templateUrl: './view-soft.component.html',
  styleUrls: ['./view-soft.component.scss']
})
export class ViewSoftComponent implements OnInit {

  meals = [];

  constructor(private softService: SoftService) { }

  ngOnInit() {
    this.meals = this.softService.meals;
  }

}
