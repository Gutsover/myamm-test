import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealModel } from '../models/Meal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private utilisateurService: UtilisateurService
  ) { }

  isAuth = false;

  signIn(utilisateur: Utilisateur) {
    return new Promise(
      (resolve, reject) => {
        // setTimeout(
        //   () => {
        //     this.isAuth = true;
        //     resolve(true);
        //   }, 2000
        // );

        const user = this.utilisateurService.authenticate(utilisateur.name, utilisateur.password);
        if (user) {
          this.save(user);
          resolve(user);
        } else {
          reject('login et mot de passe incorrect');
        }
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }

  save(utilisateur: Utilisateur) {
    localStorage.setItem('user', JSON.stringify(utilisateur));
  }

  clear() {
    localStorage.removeItem('user');
  }

  getUser(): Utilisateur {
    return JSON.parse(localStorage.getItem('user'));
  }

  isConnected(): boolean {
    const user = this.getUser();
    console.log(user);
    return true;
  }
}
