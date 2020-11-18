import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListRecordsComponent } from "./pages/list-records/list-records.component";
import { ListRecordsModule } from "./pages/list-records/list-records.module";
import { NewRecordsComponent } from "./pages/new-records/new-records.component";
import { NewRecordsModule } from "./pages/new-records/new-records.module";
import { FinishRecordModule } from "./pages/finish-record/finish-record.module";
import { FinishRecordComponent } from "./pages/finish-record/finish-record.component";
import { NewMachineModule } from "./pages/new-machine/new-machine.module";
import { NewShopModule } from "./pages/new-shop/new-shop.module";
import { NewShopComponent } from "./pages/new-shop/new-shop.component";
import { NewMachineComponent } from "./pages/new-machine/new-machine.component";

const routes: Routes = [
  {
    path: "list",
    component: ListRecordsComponent,
  },
  {
    path: "new-record",
    component: NewRecordsComponent,
  },
  {
    path: "finish/:mantenanceId",
    component: FinishRecordComponent,
  },
  {
    path: "new-shop",
    component: NewShopComponent,
  },
  {
    path: "new-machine",
    component: NewMachineComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ListRecordsModule,
    NewRecordsModule,
    FinishRecordModule,
    NewMachineModule,
    NewShopModule,
  ],
  exports: [RouterModule],
})
export class RecordsRoutingModule {}
