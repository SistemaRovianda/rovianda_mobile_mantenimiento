import { createAction, props } from "@ngrx/store";
import { Shop } from "src/app/shared/models/records.interface";

const NEW_SHOP = "['SHOP'] New shop";

const NEW_SHOP_SUCCESS = "['SHOP'] New shop Success";

const NEW_SHOP_ERROR = "['SHOP'] New shop Error";

export const newShop = createAction(NEW_SHOP, props<{ payload: Shop }>());

export const newShopSuccess = createAction(
  NEW_SHOP_SUCCESS,
  props<{ payload: Shop }>()
);

export const newShopError = createAction(
  NEW_SHOP_ERROR,
  props<{ error: string }>()
);
