import { LogginEffects } from "src/app/features/landing/store/login/login.effects";
import { ListRecordsEffects } from "src/app/features/records/store/list-records/list-records.effects";
import { NewRecordEffects } from "src/app/features/records/store/new-record/new-record.effects";

export const effects = [LogginEffects, ListRecordsEffects, NewRecordEffects];
