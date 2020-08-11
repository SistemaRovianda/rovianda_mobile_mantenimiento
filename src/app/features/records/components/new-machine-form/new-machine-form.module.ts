import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NewShopFormComponent } from "../new-shop-form/new-shop-form.component";
import { NewMachineFormComponent } from "./new-machine-form.component";

const COMMON_IMPORTS = [CommonModule, ReactiveFormsModule, IonicModule];
const COMMON_DECLARATIONS = [NewMachineFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewMachineFormModule {}
