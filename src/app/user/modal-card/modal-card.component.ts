import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  @Input() foodType = [];

  constructor() { }

  ngOnInit() {
  }

}
