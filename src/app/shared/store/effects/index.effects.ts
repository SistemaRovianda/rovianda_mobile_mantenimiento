import { LogginEffects } from "src/app/features/landing/store/login/login.effects";
import { ListRecordsEffects } from "src/app/features/records/store/list-records/list-records.effects";
import { NewRecordEffects } from "src/app/features/records/store/new-record/new-record.effects";
import { CatalogMachinesEffects } from "src/app/features/records/store/catalog-machine/catalog-machine.effects";
import { CatalogShopEffects } from "src/app/features/records/store/catalog-shop/catalog-shop.effects";
import { NewMachineEffects } from "src/app/features/records/store/new-machine/new-machine.effects";
import { FinishRecordEffects } from "src/app/features/records/store/finish-record/finish-record.effects";
import { NewShopEffects } from "src/app/features/records/store/new-shop/new-shop.effects";

export const effects = [
  LogginEffects,
  ListRecordsEffects,
  NewRecordEffects,
  CatalogMachinesEffects,
  CatalogShopEffects,
  NewMachineEffects,
  FinishRecordEffects,
  NewShopEffects,
];
