import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';
import {Observable} from 'rxjs'
import { DrinkInterface } from 'src/app/models/drinks.model';
import { IngredentInterface } from 'src/app/models/ingredients.model';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {
  public disabled = false;
  public coffeeDrinks$: Observable<any> = this.drinkDispensor.getDrinkList()
  public ingredients$: Observable<any> = this.drinkDispensor.getIngredientList()
  private ingredient?: IngredentInterface;

  @Output('drinkStatusEmitter') drinkStatusEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private drinkDispensor: DrinkDispensorService) { }

  ngOnInit(): void {
    this.coffeeDrinks$.subscribe(drinks => {console.log(drinks)})
    this.ingredients$.subscribe(ingredients => this.ingredient = ingredients)
  }

  makeDrink(drink: DrinkInterface) {
    console.log(this.ingredient)
    this.drinkStatusEmitter.emit(`Making ${drink.name}`)
    
  }
}
