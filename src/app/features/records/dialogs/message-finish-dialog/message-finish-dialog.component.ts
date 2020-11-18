import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import { FinishRecord } from "../../../../shared/models/records.interface";
import * as fromActions from "../../store/finish-record/finish-record.actions";

@Component({
  selector: "app-message-finish-dialog",
  templateUrl: "./message-finish-dialog.component.html",
  styleUrls: ["./message-finish-dialog.component.scss"],
})
export class MessageFinishDialogComponent implements OnInit {
  
  @Input() newRecord: FinishRecord;
  @Input() mantenanceId:number;
  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.store.dispatch(
      fromActions.fininshRecord({
        payload: this.newRecord,
        mantenanceId:this.mantenanceId
      })
    );

    this.modalController.dismiss();
  }
}
