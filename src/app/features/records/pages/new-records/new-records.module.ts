import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewRecordsComponent } from "./new-records.component";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { NewRecordsFormsModule } from "../../components/new-records-forms/new-records-forms.module";
import { MessageDialogModule } from "../../dialogs/message-dialog/message-dialog.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  NewRecordsFormsModule,
  MessageDialogModule,
];

const COMMON_DECLARATIONS = [NewRecordsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewRecordsModule {}
