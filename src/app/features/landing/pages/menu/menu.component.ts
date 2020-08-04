import { Component, OnInit } from "@angular/core";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import { signOut } from "../../store/login/login.action";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {}

  signOut(evt) {
    this.store.dispatch(signOut());
  }
}
