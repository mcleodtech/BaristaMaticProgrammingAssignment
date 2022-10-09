import { createReducer, on } from '@ngrx/store';

import * as InventoryActions from './inventory.actions'
import { InventoryInterface } from '../models/inventory.model';

export const initialState: InventoryInterface =  {
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

export const inventoryReducer = createReducer(
    initialState,
    on(InventoryActions.updateInventory, (state, action) => ({...state, ...action }) ),
    on(InventoryActions.restoreInventory, state => ({ ...state, ...initialState }) ),
    on(InventoryActions.getInventory, state => ({ ...state }))
)