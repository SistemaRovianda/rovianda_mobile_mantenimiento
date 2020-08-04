import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListRecordsCardComponent } from "./list-records-card.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ListRecordsCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ListRecordsCardComponent],
})
export class ListRecordsCardModule {}
