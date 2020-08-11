import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { DetailRegisterDialogComponent } from "./detail-register-dialog.component";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [CommonModule, IonicModule, RouterModule];

const COMMON_DECLARATIONS = [DetailRegisterDialogComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  declarations: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class DetailRegisterDialogModule {}
