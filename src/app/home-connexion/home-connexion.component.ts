import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-home-connexion',
  templateUrl: './home-connexion.component.html',
  styleUrls: ['./home-connexion.component.scss']
})
export class HomeConnexionComponent implements OnInit {
  formUser = new Utilisateur();
  authStatus: boolean;

  constructor(private authService: AuthService,
    // private authGuard: AuthGuard,
    private router: Router,
    private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn(this.formUser).then(
      (user: Utilisateur) => {
        console.log('Sign in successful!');

        // if (this.formUser.role === 'admin') {
        //   this.router.navigate(['dashboard']);
        // } else {
        //   this.router.navigate(['uer']);
        // }

        this.authStatus = this.authService.isAuth;
        this.router.navigate(['dashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.formUser);
  }

}
