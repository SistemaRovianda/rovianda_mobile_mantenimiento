import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";

const CATALOG_MACHINES = (state: AppStateInterface) => state.catalogMachine;

export const fetchAllMachines = createSelector(
  CATALOG_MACHINES,
  (state) => state.entity
);
