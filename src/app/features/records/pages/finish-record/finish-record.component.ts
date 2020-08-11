import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

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

  onSubmit(payload) {}
}
