import { Component, OnInit } from "@angular/core";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import { ModalController } from "@ionic/angular";
import { Record } from "src/app/shared/models/records.interface";
import { Router } from '@angular/router';

@Component({
  selector: "app-detail-register-dialog",
  templateUrl: "./detail-register-dialog.component.html",
  styleUrls: ["./detail-register-dialog.component.scss"],
})
export class DetailRegisterDialogComponent implements OnInit {
  detail: Record;

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>,
    private router:Router
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  finish() {
    this.router.navigateByUrl(`/record/finish/${this.detail.maintenanceId}`);
    this.modalController.dismiss();
  }
}
