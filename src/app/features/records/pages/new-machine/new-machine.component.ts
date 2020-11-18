import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Machine, Shop } from "src/app/shared/models/records.interface";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { MessageMachineDialogComponent } from "../../dialogs/message-machine-dialog/message-machine-dialog.component";
import * as fromSelectorShop from "../../store/catalog-shop/catalog-shop.selector";
import * as fromActionsShop from "../../store/catalog-shop/catalog-shop.actions";
import { Location } from '@angular/common';

@Component({
  selector: "app-new-machine",
  templateUrl: "./new-machine.component.html",
  styleUrls: ["./new-machine.component.scss"],
})
export class NewMachineComponent implements OnInit {
  shops$: Observable<Shop[]> = this.store.select(
    fromSelectorShop.fetchAllShops
  );

  constructor(
    private store: Store<AppStateInterface>,
    
    public modalController: ModalController,
    private router: Location,
  ) {}

  ngOnInit() {
    this.store.dispatch(fromActionsShop.fetchAllShop());
  }

  back() {
    this.router.back();
  }

  onSubmit(payload) {
    console.log(payload);

    this.openModal(payload);
  }

  async openModal(payload: Machine) {
    const modal = await this.modalController.create({
      component: MessageMachineDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        machine: payload,
      },
    });
    return await modal.present();
  }
}
