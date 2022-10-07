import { createAction, props } from '@ngrx/store';

export const addDrink = createAction(
    '[Inventory] Update Inventory',
    props<{inventory: Array<number>}>
)