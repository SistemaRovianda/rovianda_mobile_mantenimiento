import { SteppersInterface } from "./stepper.interface";

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
}
