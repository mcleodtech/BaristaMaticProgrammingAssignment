import { createAction, props } from '@ngrx/store';

export const getInventory = createAction(
    '[Inventory] Get Inventory Success',
    props<{inventory: {[key: string]: number}}>()
)

export const updateInventory = createAction(
    '[Inventory] Update Inventory',
    props<{inventory: {[key: string]: number}}>()
)

export const restoreInventory = createAction(
    '[Inventory] Restore Inventory'
)