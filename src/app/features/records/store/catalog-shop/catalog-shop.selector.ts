import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";

const CATALOG_SHOP = (state: AppStateInterface) => state.catalogShops;

export const fetchAllShops = createSelector(
  CATALOG_SHOP,
  (state) => state.entity
);
