import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Shop } from "src/app/shared/models/records.interface";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromActions from "../../store/new-shop/new-shop.actions";

@Component({
  selector: "app-message-shop-dialog",
  templateUrl: "./message-shop-dialog.component.html",
  styleUrls: ["./message-shop-dialog.component.scss"],
})
export class MessageShopDialogComponent implements OnInit {
  shop: Shop;

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
      fromActions.newShop({
        payload: this.shop,
      })
    );

    this.modalController.dismiss();
  }
}
