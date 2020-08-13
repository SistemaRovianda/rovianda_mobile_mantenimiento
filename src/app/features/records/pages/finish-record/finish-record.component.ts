import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  FinishRecord,
  Machine,
  Shop,
} from "src/app/shared/models/records.interface";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { MessageFinishDialogComponent } from "../../dialogs/message-finish-dialog/message-finish-dialog.component";
import * as fromActionsMachine from "../../store/catalog-machine/catalog-machine.actions";
import * as fromSelectorMachine from "../../store/catalog-machine/catalog-machine.selector";
import * as fromActionsShop from "../../store/catalog-shop/catalog-shop.actions";
import * as fromSelectorShop from "../../store/catalog-shop/catalog-shop.selector";

@Component({
  selector: "app-finish-record",
  templateUrl: "./finish-record.component.html",
  styleUrls: ["./finish-record.component.scss"],
})
export class FinishRecordComponent implements OnInit {
  machines$: Observable<Machine[]> = this.store.select(
    fromSelectorMachine.fetchAllMachines
  );

  shops$: Observable<Shop[]> = this.store.select(
    fromSelectorShop.fetchAllShops
  );

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.store.dispatch(fromActionsMachine.fetchAllMachine());
    this.store.dispatch(fromActionsShop.fetchAllShop());
  }

  back() {
    this.router.navigate(["record/list"]);
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
