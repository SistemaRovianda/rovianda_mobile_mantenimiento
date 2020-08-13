import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { catalogMachinesReducer } from "src/app/features/records/store/catalog-machine/catalog-machine.reducer";
import { listRecordsReducer } from "src/app/features/records/store/list-records/list-records.reducer";
import { newRecordReducer } from "src/app/features/records/store/new-record/new-record.reducer";
import { AppStateInterface } from "../../models/storeState.interface";
import { stepperInitialReducer } from "../stepper/stepper.reducer";
import { catalogShopReducer } from "src/app/features/records/store/catalog-shop/catalog-shop.reducer";
import { newMachineReducer } from "src/app/features/records/store/new-machine/new-machine.reducer";
import { finishRecordReducer } from "src/app/features/records/store/finish-record/finish-record.reducer";
import { newShopReducer } from "src/app/features/records/store/new-shop/new-shop.reducer";

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  auth: authenticationReducer,
  stepper: stepperInitialReducer,
  listRecords: listRecordsReducer,
  newRecord: newRecordReducer,
  catalogMachine: catalogMachinesReducer,
  catalogShops: catalogShopReducer,
  newMachine: newMachineReducer,
  finishRecord: finishRecordReducer,
  newShop: newShopReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
