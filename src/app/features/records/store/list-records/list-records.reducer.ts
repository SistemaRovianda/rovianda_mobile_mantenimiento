import { Action, createReducer, on } from "@ngrx/store";
import * as fromActions from "./list-records.actions";
import { Record } from "src/app/shared/models/records.interface";

export interface newState {
  products: Record[];
  error: string;
  loading: boolean;
}

const initialState: newState = {
  products: [],
  error: null,
  loading: false,
};

const _listRecordsReducer = createReducer<newState>(
  initialState,
  on(fromActions.fetchAllRecords, (state) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllRecordsSuccess, (state, { records }) => ({
    ...state,
    products: records,
    loading: false,
  })),

  on(fromActions.fetchAllRecordsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function listRecordsReducer(state: newState, action: Action) {
  return _listRecordsReducer(state, action);
}
