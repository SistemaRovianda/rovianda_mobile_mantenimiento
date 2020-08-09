import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromRecordsActions from "../../store/list-records/list-records.actions";
import { fetchAllRecords } from "../../store/list-records/list-records.selector";
import { ModalController } from "@ionic/angular";
import { Record } from "src/app/shared/models/records.interface";
import { DetailRegisterDialogComponent } from "../../dialogs/detail-register-dialog/detail-register-dialog.component";

@Component({
  selector: "app-list-records",
  templateUrl: "./list-records.component.html",
  styleUrls: ["./list-records.component.scss"],
})
export class ListRecordsComponent implements OnInit {
  products$: Observable<any[]> = this.store.select(fetchAllRecords);
  constructor(
    private router: Router,
    private store: Store<AppStateInterface>,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.store.dispatch(fromRecordsActions.fetchAllRecords());
  }

  back() {
    this.router.navigate(["menu"]);
  }

  openDetail(detail) {
    this.openModal(detail);
  }

  async openModal(payload: Record) {
    const modal = await this.modalController.create({
      component: DetailRegisterDialogComponent,
      cssClass: "modal-size-detail",
      componentProps: {
        detail: payload,
      },
    });
    return await modal.present();
  }
}
