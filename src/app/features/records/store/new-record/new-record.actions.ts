import { createAction, props } from "@ngrx/store";
import { NewRecord } from "src/app/shared/models/records.interface";

const NEW_REGISTER = "['REGISTER'] New register";


const NEW_REGISTER_SUCCESS = "['REGISTER'] New register Success";

const NEW_REGISTER_ERROR = "['REGISTER'] New register Error";

export const newRegister = createAction(
  NEW_REGISTER,
  props<{ payload: NewRecord }>()
);

export const newRegisterSuccess = createAction(
  NEW_REGISTER_SUCCESS
);

export const newRegisterError = createAction(
  NEW_REGISTER_ERROR,
  props<{ error: string }>()
);
