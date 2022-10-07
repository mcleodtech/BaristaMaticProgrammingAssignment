import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';
import {Observable} from 'rxjs'
import { DrinkInterface } from 'src/app/models/drinks.model';
import { IngredentInterface } from 'src/app/models/ingredients.model';
import { Store } from '@ngrx/store';
import { updateInventory } from 'src/app/state/inventory.actions'

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {
  private overage: string[] = [];
  public coffeeDrinks$: Observable<any> = this.drinkDispensor.getDrinkList()
  public ingredients$: Observable<any> = this.drinkDispensor.getIngredientList()
  private ingredient?: IngredentInterface;
  private inventory: any

  @Output('drinkStatusEmitter') drinkStatusEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private drinkDispensor: DrinkDispensorService, private store: Store) { }

  ngOnInit(): void {
    this.coffeeDrinks$.subscribe(drinks => {console.log(drinks)})
    this.ingredients$.subscribe(ingredients => this.ingredient = ingredients)
    this.drinkDispensor.getInventory().subscribe(inventory => this.inventory = inventory)
  }

  makeDrink(drink: DrinkInterface) {
    this.drinkStatusEmitter.emit(`Making ${drink.name} Please Wait`)

    drink.ingredients.forEach(i => {
      if(this.inventory[i.ingredient] - i.units <= 0) {
        this.overage.push(drink.name);
        alert("Sorry Sold Out, Please Restock")
      } else {
        this.inventory[i.ingredient] = this.inventory[i.ingredient] - i.units
        this.store.dispatch(updateInventory(this.inventory))
      }
    })
    setTimeout(() => {this.drinkStatusEmitter.emit(`Enjoy your ${drink.name}!!`)}, 1000)
  }

  disabled(i: string) {
    return this.overage.includes(i)
  }

}
