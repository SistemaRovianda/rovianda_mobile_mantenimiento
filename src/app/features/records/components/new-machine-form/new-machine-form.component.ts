import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { REGEX_NAME } from "src/app/shared/const";
import { Shop } from "src/app/shared/models/records.interface";
import * as moment from "moment";

@Component({
  selector: "new-machine-form",
  templateUrl: "./new-machine-form.component.html",
  styleUrls: ["./new-machine-form.component.scss"],
})
export class NewMachineFormComponent implements OnInit {
  form: FormGroup;
  @Output("onSubmit") submit = new EventEmitter();
  @Input() shops: Shop;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required, Validators.pattern(REGEX_NAME)]],
      model: ["", Validators.required],
      storeId: ["", Validators.required],
      costDevice: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
    });
  }

  onSubmit() {
    const { date, ...value } = this.form.value;

    const payload = {
      date: moment(date).format("YYYY-MM-DD"),
      ...value,
    };

    this.submit.emit(payload);
  }

  ngOnInit() {}
}
