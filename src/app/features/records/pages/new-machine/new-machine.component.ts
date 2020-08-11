import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Machine } from "src/app/shared/models/records.interface";
import { MessageMachineDialogComponent } from "../../dialogs/message-machine-dialog/message-machine-dialog.component";

@Component({
  selector: "app-new-machine",
  templateUrl: "./new-machine.component.html",
  styleUrls: ["./new-machine.component.scss"],
})
export class NewMachineComponent implements OnInit {
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

  async openModal(payload: Machine) {
    const modal = await this.modalController.create({
      component: MessageMachineDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        newRecord: payload,
      },
    });
    return await modal.present();
  }
}
