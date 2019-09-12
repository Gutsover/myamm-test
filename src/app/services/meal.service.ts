import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

    mealSubject = new Subject<MealModel[]>();

    // add(meal: MealModel) {
    // Voire .ts de meal-card Component
    // }

    // deleteItem(meal: MealModel) {
    //     const pos = this.meals.findIndex(x => x.id === meal.id);
    //       this.meals.splice(pos, 1);
    //       this.mealSubject.next(this.meals);
    //   }

    update() {

    }
}
