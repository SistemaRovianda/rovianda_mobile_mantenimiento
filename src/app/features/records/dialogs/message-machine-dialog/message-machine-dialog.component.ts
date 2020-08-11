import { Component, OnInit } from "@angular/core";
import { Machine } from "src/app/shared/models/records.interface";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromActions from "../../store/new-machine/new-machine.actions";

@Component({
  selector: "app-message-machine-dialog",
  templateUrl: "./message-machine-dialog.component.html",
  styleUrls: ["./message-machine-dialog.component.scss"],
})
export class MessageMachineDialogComponent implements OnInit {
  machine: Machine;

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
      fromActions.newMachine({
        payload: this.machine,
      })
    );

    this.modalController.dismiss();
  }
}
