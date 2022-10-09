import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InventoryInterface } from '../models/inventory.model';

export const selectedInventory = createFeatureSelector<InventoryInterface>('inventory')

export const selectInventory = createSelector(
    selectedInventory,
    (inventory) => inventory
)