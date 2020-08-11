import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { FinishRecord } from "src/app/shared/models/records.interface";
import { MessageFinishDialogComponent } from "../../dialogs/message-finish-dialog/message-finish-dialog.component";

@Component({
  selector: "app-finish-record",
  templateUrl: "./finish-record.component.html",
  styleUrls: ["./finish-record.component.scss"],
})
export class FinishRecordComponent implements OnInit {
  constructor(
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  back() {
    this.router.navigate(["menu"]);
  }

  onSubmit(payload) {
    this.openModal(payload);
  }

  async openModal(payload: FinishRecord) {
    const modal = await this.modalController.create({
      component: MessageFinishDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        newRecord: payload,
      },
    });
    return await modal.present();
  }
}
