import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  numberMeal: number = 0;

  @Input() foodType = [];

  constructor() { }

  ngOnInit() {
  }

  more() {
    this.numberMeal = this.numberMeal + 1;
  }

  less() {
    if (this.numberMeal > 0) {
      this.numberMeal = this.numberMeal - 1;
    };    
  }

}
