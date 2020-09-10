import { createAction, props } from "@ngrx/store";
import { NewRecord, Machine } from "src/app/shared/models/records.interface";

const NEW_MACHINE = "['MACHINE'] New machine";

const NEW_MACHINE_SUCCESS = "['MACHINE'] New machine Success";

const NEW_MACHINE_ERROR = "['MACHINE'] New machine Error";

export const newMachine = createAction(
  NEW_MACHINE,
  props<{ payload: Machine }>()
);

export const newMachineSuccess = createAction(
  NEW_MACHINE_SUCCESS
);

export const newMachineError = createAction(
  NEW_MACHINE_ERROR,
  props<{ error: string }>()
);
