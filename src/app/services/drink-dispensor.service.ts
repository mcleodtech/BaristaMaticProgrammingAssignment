import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DrinkInterface } from '../models/drinks.model';
import { IngredentInterface } from '../models/ingredients.model';
import { Observable, map, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DrinkDispensorService {

  private inventory: Array<number> = [10, 10, 10, 10, 10, 10, 10, 10, 10]

  constructor(private http: HttpClient) { }

  getDrinkList(): Observable<DrinkInterface> {
    return this.http.get<DrinkInterface>(`${environment.apiUrl}drinks`)
      .pipe(map((drink) => drink || []));
  }  

  getIngredientList(): Observable<IngredentInterface> {
    return this.http.get<IngredentInterface>(`${environment.apiUrl}ingredients`)
      .pipe(map((ingredient) => ingredient || []));
  }

  getInventory(): Observable<Array<number>> {
    return of<Array<number>>(this.inventory)
  }

  updateInventory(body: Array<number>) {
    return this.http.put(`${environment.apiUrl}ingredients`, body)
  }
}

