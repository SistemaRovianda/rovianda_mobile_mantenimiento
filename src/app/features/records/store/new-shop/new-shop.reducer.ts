import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./new-shop.actions";

export interface newState {
  entity: any;
  error: string;
  loading: boolean;
}

const initialState: newState = {
  entity: null,
  error: null,
  loading: false,
};

export const newShopReducer = createReducer<newState>(
  initialState,
  on(fromActions.newShop, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.newShopSuccess, (state, { payload }) => ({
    ...state,
    entity: payload,
    loading: false,
  })),

  on(fromActions.newShopError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
