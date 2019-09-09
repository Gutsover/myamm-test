import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealModel } from '../models/Meal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MealService {
    meals = [
        {
            type: 'Plat',
            placeHolder: 'Nom du plat'
        },
        {
            type: 'Entrée',
            placeHolder: 'Nom de l entrée'
        },
        {
            type: 'Menu',
            placeHolder: 'entrée, plat, dessert...'
        },
        {
            type: 'Plat du Jour',
            placeHolder: 'entrée, plat, dessert...'
        }
    ];

    constructor(private http: HttpClient) { }

    findAll(): Observable<MealModel[]> {
       return this.http.get<MealModel[]>('http://localhost:8000/meals')
            .pipe(
                map((meals: MealModel[]) => meals)
            );
    }

    add(meal: MealModel) {

    }

    delete() {

    }

    update() {

    }
}
