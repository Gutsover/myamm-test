import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-card',
  templateUrl: './profil-card.component.html',
  styleUrls: ['./profil-card.component.scss']
})
export class ProfilCardComponent implements OnInit {

  userName: string = 'admin';
  userMail: string = '';
  numberTable: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
