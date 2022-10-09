import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DrinkInterface } from '../models/drinks.model';
import { IngredentInterface } from '../models/ingredients.model';
import { Observable, map } from 'rxjs'
import { InventoryInterface } from '../models/inventory.model'

@Injectable({
  providedIn: 'root'
})
export class DrinkDispensorService {

  private overage: string[] = [];

  public inventory: { [key: string]: number } = 
  {
    "Coffee": 10,
    "Decaf Coffee": 10,
    "Sugar": 10,
    "Cream": 10,
    "Steamed Milk": 10,
    "Foamed Milk": 10,
    "Espresso": 10,
    "Cocoa": 10,
    "Whipped Cream": 10,
  }

  constructor(private http: HttpClient) { }

  getDrinkList(): Observable<DrinkInterface> {
    return this.http.get<DrinkInterface>(`${environment.apiUrl}drinks`)
      .pipe(map((drink) => drink || []));
  }  

  getIngredientList(): Observable<IngredentInterface> {
    return this.http.get<IngredentInterface>(`${environment.apiUrl}ingredients`)
      .pipe(map((ingredient) => ingredient || []));
  }

  getInventory() {
    return this.http.get<InventoryInterface>(`${environment.apiUrl}ingredients`)
    .pipe(map((inventory) => inventory || []));

  }

  getOverage() {
    return this.overage
  }

  setOverage(val: string) {
    this.overage.push(val)
  }

  resetOverage() {
    this.overage = []
    return this.overage
  }
}

