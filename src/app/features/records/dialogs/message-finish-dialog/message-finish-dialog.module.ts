import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MessageFinishDialogComponent } from "./message-finish-dialog.component";

const COMMON_IMPORTS = [CommonModule, IonicModule];

const COMMON_DECLARATIONS = [MessageFinishDialogComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  declarations: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MessageFinishDialogModule {}
