import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListRecordsComponent } from "./pages/list-records/list-records.component";
import { ListRecordsModule } from "./pages/list-records/list-records.module";
import { NewRecordsComponent } from "./pages/new-records/new-records.component";
import { NewRecordsModule } from "./pages/new-records/new-records.module";

const routes: Routes = [
  {
    path: "list",
    component: ListRecordsComponent,
  },
  {
    path: "new-record",
    component: NewRecordsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListRecordsModule, NewRecordsModule],
  exports: [RouterModule],
})
export class RecordsRoutingModule {}
