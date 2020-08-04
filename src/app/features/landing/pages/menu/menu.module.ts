import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
  },
];

const COMMON_IMPORTS = [
  CommonModule,
  RouterModule.forChild(routes),
  IonicModule,
  TitleHeaderModule,
];

const COMMON_DECLARATIONS = [MenuComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class MenuModule {}
