import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-connexion',
  templateUrl: './home-connexion.component.html',
  styleUrls: ['./home-connexion.component.scss']
})
export class HomeConnexionComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        // console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['dashboard']);
      }
    );
  }

}
