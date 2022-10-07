import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InventoryInterface } from '../models/inventory.model';

export const selectInventory = createFeatureSelector<InventoryInterface>('inventory')
