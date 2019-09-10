import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealModel } from '../models/Meal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

    isAuth = false;
  
    signIn() {
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              resolve(true);
            }, 2000
          );
        }
      );
    }
  
    signOut() {
      this.isAuth = false;
    }
}
