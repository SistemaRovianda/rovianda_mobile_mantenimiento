import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

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

  onSubmit(payload) {}
}
