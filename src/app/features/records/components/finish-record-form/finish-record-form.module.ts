import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FinishRecordFormComponent } from "./finish-record-form.component";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
  IonicModule,
  RouterModule,
];
const COMMON_DECLARATIONS = [FinishRecordFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class FinishRecordFormModule {}
