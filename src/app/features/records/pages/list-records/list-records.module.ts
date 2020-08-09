import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { ListRecordsComponent } from "./list-records.component";
import { ListRecordsCardModule } from "../../components/list-records-card/list-records-card.module";
import { RouterModule } from "@angular/router";
import { DetailRegisterDialogModule } from "../../dialogs/detail-register-dialog/detail-register-dialog.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  ListRecordsCardModule,
  RouterModule,
  DetailRegisterDialogModule,
];

const COMMON_DECLARATIONS = [ListRecordsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListRecordsModule {}
