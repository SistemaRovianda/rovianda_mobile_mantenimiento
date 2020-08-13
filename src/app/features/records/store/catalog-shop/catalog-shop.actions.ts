import { createAction, props } from "@ngrx/store";
import { Machine, Shop } from "src/app/shared/models/records.interface";

const FETCH_ALL_SHOP = "['SHOP'] Fetch All Shop";

const FETCH_ALL_SHOP_SUCCESS = "['SHOP'] Fetch All Shop Success";

const FETCH_ALL_SHOP_ERROR = "['SHOP'] Fetch All Shop Error";

export const fetchAllShop = createAction(FETCH_ALL_SHOP);

export const fetchAllShopSuccess = createAction(
  FETCH_ALL_SHOP_SUCCESS,
  props<{ payload: Shop[] }>()
);

export const fetchAllShopError = createAction(
  FETCH_ALL_SHOP_ERROR,
  props<{ error: string }>()
);
