import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { NewRecord } from "src/app/shared/models/records.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/models/storeState.interface';
import { loadingNewRecord } from '../../store/new-record/new-record.selector';

@Component({
  selector: "app-new-records",
  templateUrl: "./new-records.component.html",
  styleUrls: ["./new-records.component.scss"],
})
export class NewRecordsComponent implements OnInit {
  imgURL: string;

  loading: boolean;

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.store.select(loadingNewRecord).subscribe(res => this.loading = res)
  }

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
