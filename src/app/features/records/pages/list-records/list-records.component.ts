import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromRecordsActions from "../../store/list-records/list-records.actions";
import { fetchAllRecords } from "../../store/list-records/list-records.selector";

@Component({
  selector: "app-list-records",
  templateUrl: "./list-records.component.html",
  styleUrls: ["./list-records.component.scss"],
})
export class ListRecordsComponent implements OnInit {
  products$: Observable<any[]> = this.store.select(fetchAllRecords);
  constructor(
    private router: Router,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromRecordsActions.fetchAllRecords());
  }

  back() {
    this.router.navigate(["menu"]);
  }
}
