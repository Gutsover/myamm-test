import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyRight = '2019 Myamm';
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
