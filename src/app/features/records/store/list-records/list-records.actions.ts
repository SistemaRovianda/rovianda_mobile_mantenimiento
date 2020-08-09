import { createAction, props } from "@ngrx/store";
import { Record } from "src/app/shared/models/records.interface";

const FETCH_ALL_RECORDS = "['RECORDS'] Fetch All Records";

const FETCH_ALL_RECORDS_SUCCESS = "['RECORDS'] Fetch All Records Success";

const FETCH_ALL_RECORDS_ERROR = "['RECORDS'] Fetch All Records Error";

export const fetchAllRecords = createAction(FETCH_ALL_RECORDS);

export const fetchAllRecordsSuccess = createAction(
  FETCH_ALL_RECORDS_SUCCESS,
  props<{ records: Record[] }>()
);

export const fetchAllRecordsError = createAction(
  FETCH_ALL_RECORDS_ERROR,
  props<{ error: string }>()
);
