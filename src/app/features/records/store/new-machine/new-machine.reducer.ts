import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./new-machine.actions";

export interface newState {
  register: any;
  error: string;
  loading: boolean;
}

const initialState: newState = {
  register: null,
  error: null,
  loading: false,
};

export const newMachineReducer = createReducer<newState>(
  initialState,
  on(fromActions.newMachine, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.newMachineSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(fromActions.newMachineError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
