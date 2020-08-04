import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-records",
  templateUrl: "./new-records.component.html",
  styleUrls: ["./new-records.component.scss"],
})
export class NewRecordsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigate(["menu"]);
  }
}
