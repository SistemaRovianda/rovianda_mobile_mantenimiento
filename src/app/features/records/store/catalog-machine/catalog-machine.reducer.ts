import { createReducer, on } from "@ngrx/store";
import { CatalogMachines } from "src/app/shared/models/records.interface";
import * as fromActions from "./catalog-machine.actions";

export interface stateMachines {
  entity: CatalogMachines[];
  error: string;
  loading: boolean;
}

const initialState: stateMachines = {
  entity: [],
  error: null,
  loading: false,
};

export const catalogMachinesReducer = createReducer<stateMachines>(
  initialState,
  on(fromActions.fetchAllMachine, (state) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllMachineSuccess, (state, { payload }) => ({
    ...state,
    entity: payload,
    loading: false,
  })),

  on(fromActions.fetchAllMachineError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
