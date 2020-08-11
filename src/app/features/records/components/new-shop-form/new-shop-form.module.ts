import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NewShopFormComponent } from "./new-shop-form.component";

const COMMON_IMPORTS = [CommonModule, ReactiveFormsModule, IonicModule];
const COMMON_DECLARATIONS = [NewShopFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewShopFormModule {}
