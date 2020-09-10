import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";

const NEW_RECORD = (state: AppStateInterface) => state.newRecord;

export const loadingNewRecord = createSelector(
    NEW_RECORD,
    (state) => state.loading
);
