import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MealModel } from '../models/Meal.model';

@Injectable({
    providedIn: 'root'
})

export class OfficialMealService {

    officialMeals = [
        {
            id: 1,
            categoy: 'plat',
            name: 'Welsch',
            price: '9.60',
            
        },
        {
            id: 2,
            categoy: 'plat',
            name: 'Choucroutte',
            price: '9.40',
        },
        {
            id: 3,
            categoy: 'plat',
            name: 'Quiche Lorraine',
            price: '8.60',
        },
    ];

    constructor(private http: HttpClient) { }

    officialMealSubject = new Subject<MealModel[]>();

    findAll(): Observable<MealModel[]> {
        return this.http.get<MealModel[]>('http://localhost:8000/meals')
             .pipe(
                 map((meals: MealModel[]) => meals)
             );
     }

    // deleteItem(meal: MealModel) {
    //     const pos = this.officialMeals.findIndex(x => x.id === meal.id);
    //       this.officialMeals.splice(pos, 1);
    //       this.officialMealSubject.next(this.officialMeals);
    //   }

}
