import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { REGEX_NAME } from "src/app/shared/const";

@Component({
  selector: "new-machine-form",
  templateUrl: "./new-machine-form.component.html",
  styleUrls: ["./new-machine-form.component.scss"],
})
export class NewMachineFormComponent implements OnInit {
  form: FormGroup;
  @Output("onSubmit") submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required, Validators.pattern(REGEX_NAME)]],
      model: ["", Validators.required],
      storeId: ["", Validators.required],
      costDevice: ["", Validators.required],
      description: [""],
      date: [""],
    });
  }

  onSubmit() {
    const { ...value } = this.form.value;

    const payload = {
      ...value,
    };

    this.submit.emit(payload);
  }

  ngOnInit() {}
}
