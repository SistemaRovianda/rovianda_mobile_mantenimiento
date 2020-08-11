import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { FinishRecordFormModule } from "../../components/finish-record-form/finish-record-form.module";
import { FinishRecordComponent } from "./finish-record.component";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  FinishRecordFormModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [FinishRecordComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class FinishRecordModule {}
