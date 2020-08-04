import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewRecordsComponent } from "./new-records.component";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";

const COMMON_IMPORTS = [CommonModule, IonicModule, TitleHeaderModule];

const COMMON_DECLARATIONS = [NewRecordsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewRecordsModule {}
