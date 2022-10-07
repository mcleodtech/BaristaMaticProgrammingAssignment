import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'

import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public inventory = this.drinkDispensor.getInventory()
  public ingredients$: Observable<any> = this.drinkDispensor.getIngredientList()

  constructor(private drinkDispensor: DrinkDispensorService) { }

  ngOnInit(): void { }


  resetInventory() {
    this.inventory = {
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

}
