import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "list-records-card",
  templateUrl: "./list-records-card.component.html",
  styleUrls: ["./list-records-card.component.scss"],
})
export class ListRecordsCardComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {}
}
