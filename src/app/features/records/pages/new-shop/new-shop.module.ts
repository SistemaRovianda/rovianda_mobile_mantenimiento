import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { NewShopFormModule } from "../../components/new-shop-form/new-shop-form.module";
import { NewShopComponent } from "./new-shop.component";
import { MessageShopDialogModule } from "../../dialogs/message-shop-dialog/message-shop-dialog.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  NewShopFormModule,
  MessageShopDialogModule,
];

const COMMON_DECLARATIONS = [NewShopComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewShopModule {}
