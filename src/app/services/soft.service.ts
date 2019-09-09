import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealModel } from '../models/Meal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SoftService {
    meals = [
        {
            type: 'Boisson sans Alcool',
            placeHolder: 'Nom de la boisson'
        },
        {
            type: 'Cocktail sans Alcool',
            placeHolder: 'Nom du cocktail'
        }
    ];

    constructor(private http: HttpClient) { }

}
