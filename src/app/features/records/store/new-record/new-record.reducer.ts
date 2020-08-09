import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./new-record.actions";

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

export const newRecordReducer = createReducer<newState>(
  initialState,
  on(fromActions.newRegister, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.newRegisterSuccess, (state, { payload }) => ({
    ...state,
    register: payload,
    loading: false,
  })),

  on(fromActions.newRegisterError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
