import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";

const RECORDS = (state: AppStateInterface) => state.listRecords;

export const fetchAllRecords = createSelector(
  RECORDS,
  (state) => state.products
);
