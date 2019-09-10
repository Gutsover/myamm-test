import { Component, OnInit } from '@angular/core';
import { UserFoodService } from '../../services/user-food.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})

export class ViewUserComponent implements OnInit {

  authStatus: boolean;
  foods = [];

  constructor(private userFoodService: UserFoodService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.foods = this.userFoodService.food;
    this.authStatus = this.authService.isAuth;
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['']);
  }

}
