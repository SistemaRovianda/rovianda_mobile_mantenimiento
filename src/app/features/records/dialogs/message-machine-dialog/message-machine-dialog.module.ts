import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MessageMachineDialogComponent } from "./message-machine-dialog.component";

const COMMON_IMPORTS = [CommonModule, IonicModule];

const COMMON_DECLARATIONS = [MessageMachineDialogComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  declarations: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class MessageMachineDialogModule {}
