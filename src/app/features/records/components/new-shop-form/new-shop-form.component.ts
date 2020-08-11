import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { REGEX_NAME } from "src/app/shared/const";

@Component({
  selector: "new-shop-form",
  templateUrl: "./new-shop-form.component.html",
  styleUrls: ["./new-shop-form.component.scss"],
})
export class NewShopFormComponent implements OnInit {
  form: FormGroup;
  @Output("onSubmit") submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required, Validators.pattern(REGEX_NAME)]],
      location: ["", Validators.required],
      reference: [""],
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
