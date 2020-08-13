import { SteppersInterface } from "./stepper.interface";
import { stateMachines } from "src/app/features/records/store/catalog-machine/catalog-machine.reducer";
import { stateShop } from "src/app/features/records/store/catalog-shop/catalog-shop.reducer";

export interface LoginState {
  loading: boolean;
  error: string;
}

export interface AuthenticationUser {
  uid?: string;
  name?: string;
  email?: string;
  rol?: string;
  token?: string;
  currentToken?: string;
  job?: string;
}

export interface AppStateInterface {
  login: LoginState;
  auth: AuthenticationUser;
  stepper: SteppersInterface;
  listRecords: any;
  newRecord: any;
  newShop: any;
  newMachine: any;
  catalogMachine: stateMachines;
  catalogShops: stateShop;
  finishRecord: any;
}
