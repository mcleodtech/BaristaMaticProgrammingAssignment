import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs'

import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';

import { Store } from '@ngrx/store';
import { restoreInventory } from 'src/app/state/inventory.actions'
import { InventoryInterface } from 'src/app/models/inventory.model'
import { selectInventory } from 'src/app/state/inventory.selectors';
import { IngredentInterface } from 'src/app/models/ingredients.model'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {

  public inventory!: InventoryInterface
  public inventory$ = this.store.select(selectInventory)
  public ingredients$: Observable<IngredentInterface> = this.drinkDispensor.getIngredientList()
  
  constructor(private drinkDispensor: DrinkDispensorService, private store: Store) { }

  ngOnInit(): void {
    this.inventory$.subscribe(i => (this.inventory = i))
   }


  resetInventory(): void {
    this.drinkDispensor.resetOverage()
    this.store.dispatch(restoreInventory())
  }
}
