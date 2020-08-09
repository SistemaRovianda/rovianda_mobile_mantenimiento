import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { NewRecord } from "src/app/shared/models/records.interface";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromActions from "../../store/new-record/new-record.actions";

@Component({
  selector: "app-message-dialog",
  templateUrl: "./message-dialog.component.html",
  styleUrls: ["./message-dialog.component.scss"],
})
export class MessageDialogComponent implements OnInit {
  newRecord: NewRecord;

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
      fromActions.newRegister({
        payload: this.newRecord,
      })
    );

    this.modalController.dismiss();
  }
}
