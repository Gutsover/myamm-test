import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealModel } from '../models/Meal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AlcoolService {
    meals = [
        {
            type: 'Bière',
            placeHolder: 'Nom de la bière'
        },
        {
            type: 'Cocktail',
            placeHolder: 'Nom du cocktail'
        },
        {
            type: 'Vin',
            placeHolder: 'Nom du vin'
        },
        {
            type: 'Apéritif',
            placeHolder: 'Nom de l apéritif'
        }
    ];

    constructor(private http: HttpClient) { }
}
