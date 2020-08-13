import { createAction, props } from "@ngrx/store";
import { CatalogMachines } from "src/app/shared/models/records.interface";

const FETCH_ALL_MACHINE = "['MACHINE'] Fetch All Machine";

const FETCH_ALL_MACHINE_SUCCESS = "['MACHINE'] Fetch All Machine Success";

const FETCH_ALL_MACHINE_ERROR = "['MACHINE'] Fetch All Machine Error";

export const fetchAllMachine = createAction(FETCH_ALL_MACHINE);

export const fetchAllMachineSuccess = createAction(
  FETCH_ALL_MACHINE_SUCCESS,
  props<{ payload: CatalogMachines[] }>()
);

export const fetchAllMachineError = createAction(
  FETCH_ALL_MACHINE_ERROR,
  props<{ error: string }>()
);
