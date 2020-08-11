import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { NewMachineFormModule } from "../../components/new-machine-form/new-machine-form.module";
import { NewMachineComponent } from "./new-machine.component";
import { MessageMachineDialogModule } from "../../dialogs/message-machine-dialog/message-machine-dialog.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  NewMachineFormModule,
  MessageMachineDialogModule,
];

const COMMON_DECLARATIONS = [NewMachineComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewMachineModule {}
