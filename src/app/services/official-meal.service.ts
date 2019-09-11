import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class OfficialMealService {

    officialMeals = [
        {
            id: 1,
            categoy: 'plat',
            name: 'Welsh',
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

}
