import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { listRecordsReducer } from "src/app/features/records/store/list-records/list-records.reducer";
import { newRecordReducer } from "src/app/features/records/store/new-record/new-record.reducer";
import { AppStateInterface } from "../../models/storeState.interface";
import { stepperInitialReducer } from "../stepper/stepper.reducer";

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  auth: authenticationReducer,
  stepper: stepperInitialReducer,
  listRecords: listRecordsReducer,
  newRecord: newRecordReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
