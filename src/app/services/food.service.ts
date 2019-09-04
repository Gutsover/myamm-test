import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Food } from '../models/Food.model';

const BASE_URL = 'http://127.0.0.1:4200/test';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) {}

  /**
   * Find all food.
   */
  findAll(): Observable<Food[]> {
    return this.http.get<Food[]>(BASE_URL, {
      withCredentials: true
    });
  }

  /**
   * Create a new food.
   */
  add(food: Food): Observable<Food> {
    return this.http.post<Food>(BASE_URL, food);
  }

  /**
   * Delete a food by its ID.
   */
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/${id}`);
  }

  /**
   * Find a food by its ID.
   */
  findOne(id: number): Observable<Food> {
    return this.http.get<Food>(`${BASE_URL}/${id}`);
  }
}