import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Shop } from "src/app/shared/models/records.interface";
import { MessageShopDialogComponent } from "../../dialogs/message-shop-dialog/message-shop-dialog.component";

@Component({
  selector: "app-new-shop",
  templateUrl: "./new-shop.component.html",
  styleUrls: ["./new-shop.component.scss"],
})
export class NewShopComponent implements OnInit {
  constructor(
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  back() {
    this.router.navigate(["record/finish"]);
  }

  onSubmit(payload) {
    this.openModal(payload);
  }

  async openModal(payload: Shop) {
    const modal = await this.modalController.create({
      component: MessageShopDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        shop: payload,
      },
    });
    return await modal.present();
  }
}
