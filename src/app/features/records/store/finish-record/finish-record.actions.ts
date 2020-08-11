import { createAction, props } from "@ngrx/store";
import { FinishRecord } from "src/app/shared/models/records.interface";

const FINISH_RECORD = "['FINISH_RECORD'] Finish record";

const FINISH_RECORD_SUCCESS = "['FINISH_RECORD'] Finish record Success";

const FINISH_RECORD_ERROR = "['FINISH_RECORD'] Finish record Error";

export const fininshRecord = createAction(
  FINISH_RECORD,
  props<{ payload: FinishRecord }>()
);

export const fininshRecordSuccess = createAction(
  FINISH_RECORD_SUCCESS,
  props<{ payload: FinishRecord }>()
);

export const fininshRecordError = createAction(
  FINISH_RECORD_ERROR,
  props<{ error: string }>()
);
