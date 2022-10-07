import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'

import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public inventory$: Observable<Array<number>> = this.drinkDispensor.getInventory()
  public ingredients$: Observable<any> = this.drinkDispensor.getIngredientList()

  constructor(private drinkDispensor: DrinkDispensorService) { }

  ngOnInit(): void {
  }

}
