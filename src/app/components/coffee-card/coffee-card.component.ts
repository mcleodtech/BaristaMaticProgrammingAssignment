import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';
import {Observable} from 'rxjs'
import { DrinkInterface } from 'src/app/models/drinks.model';
import { IngredentInterface } from 'src/app/models/ingredients.model';
import { Store } from '@ngrx/store';
import { updateInventory } from 'src/app/state/inventory.actions'
import { selectInventory } from 'src/app/state/inventory.selectors';
import { InventoryInterface } from 'src/app/models/inventory.model'

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss'],
})
export class CoffeeCardComponent implements OnInit {
  
  public coffeeDrinks$: Observable<any> = this.drinkDispensor.getDrinkList()
  public ingredients$: Observable<IngredentInterface> = this.drinkDispensor.getIngredientList()
  public inventory$ = this.store.select(selectInventory)
  private ingredient!: IngredentInterface;
  private inventory!: InventoryInterface
  private newInventory!: InventoryInterface

  @Output('drinkStatusEmitter') drinkStatusEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private drinkDispensor: DrinkDispensorService, private store: Store) { }

  ngOnInit(): void {
    this.ingredients$.subscribe(ingredients => this.ingredient = ingredients)
    this.inventory$.subscribe(inventory => this.newInventory = inventory)
    this.inventory = { ...this.newInventory}
  }

  makeDrink(drink: DrinkInterface): void {
    this.inventory = { ...this.newInventory}
    this.drinkStatusEmitter.emit(`Making ${drink.name} Please Wait`)

    drink.ingredients.forEach(i => {
      if(this.inventory[i.ingredient] - i.units <= 0) {
        this.drinkDispensor.setOverage(drink.name);
        alert("Sorry Sold Out, Please Restock")
        return;
      } else {
        this.inventory[i.ingredient] = this.inventory[i.ingredient] - i.units
      }
    })
    this.store.dispatch(updateInventory(this.inventory))

    setTimeout(() => {this.drinkStatusEmitter.emit(`Enjoy your ${drink.name}!!`)}, 1000)
  }

  disabled(i: string): boolean {
    return this.drinkDispensor.getOverage().includes(i)
  }

}
