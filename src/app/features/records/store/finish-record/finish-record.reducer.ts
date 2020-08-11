import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./finish-record.actions";

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

export const finishRecordReducer = createReducer<newState>(
  initialState,
  on(fromActions.fininshRecord, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fininshRecordSuccess, (state, { payload }) => ({
    ...state,
    register: payload,
    loading: false,
  })),

  on(fromActions.fininshRecordError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
