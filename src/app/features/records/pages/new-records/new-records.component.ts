import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { NewRecord } from "src/app/shared/models/records.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";

@Component({
  selector: "app-new-records",
  templateUrl: "./new-records.component.html",
  styleUrls: ["./new-records.component.scss"],
})
export class NewRecordsComponent implements OnInit {
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

  async openModal(payload: NewRecord) {
    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        newRecord: payload,
      },
    });
    return await modal.present();
  }
}
