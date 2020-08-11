import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

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
    this.router.navigate(["menu"]);
  }

  onSubmit(payload) {}
}
