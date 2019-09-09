import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealModel } from '../models/Meal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DessertService {
    meals = [
        {
            type: 'Dessert',
            placeHolder: 'Nom du dessert'
        },
        {
            type: 'Digestif',
            placeHolder: 'Nom du digestif'
        },
        {
            type: 'Boisson Chaude',
            placeHolder: 'Nom de la boisson chaude'
        }
    ];

    constructor(private http: HttpClient) { }

}
