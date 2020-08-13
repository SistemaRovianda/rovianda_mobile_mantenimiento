import { createReducer, on } from "@ngrx/store";
import { Shop } from "src/app/shared/models/records.interface";
import * as fromActions from "./catalog-shop.actions";

export interface stateShop {
  entity: Shop[];
  error: string;
  loading: boolean;
}

const initialState: stateShop = {
  entity: [],
  error: null,
  loading: false,
};

export const catalogShopReducer = createReducer<stateShop>(
  initialState,
  on(fromActions.fetchAllShop, (state) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllShopSuccess, (state, { payload }) => ({
    ...state,
    entity: payload,
    loading: false,
  })),

  on(fromActions.fetchAllShopError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
