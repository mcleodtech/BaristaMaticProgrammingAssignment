import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'

import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';

import { Store } from '@ngrx/store';
import { restoreInventory } from 'src/app/state/inventory.actions'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public inventory: any
  public inventory$ = this.drinkDispensor.getInventory()
  public ingredients$: Observable<any> = this.drinkDispensor.getIngredientList()
  
  private restoreInventory = {
    "inventory": {
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
  }

  private newInventory = {
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

  constructor(private drinkDispensor: DrinkDispensorService, private store: Store) { }

  ngOnInit(): void {
    this.inventory$.subscribe(i => this.inventory = i)
   }


  resetInventory() {
    this.inventory = this.newInventory
    this.store.dispatch(restoreInventory())
  }
}
