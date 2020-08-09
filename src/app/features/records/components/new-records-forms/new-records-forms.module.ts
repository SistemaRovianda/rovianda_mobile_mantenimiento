import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewRecordsFormsComponent } from "./new-records-forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

const COMMON_IMPORTS = [CommonModule, ReactiveFormsModule, IonicModule];
const COMMON_DECLARATIONS = [NewRecordsFormsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewRecordsFormsModule {}
