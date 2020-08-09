import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import { REGEX_NAME } from "src/app/shared/const";

@Component({
  selector: "new-records-forms",
  templateUrl: "./new-records-forms.component.html",
  styleUrls: ["./new-records-forms.component.scss"],
})
export class NewRecordsFormsComponent implements OnInit {
  form: FormGroup;
  @Output("onSubmit") submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      typeFailure: ["", Validators.required],
      description: ["", Validators.required],
      fullName: ["", [Validators.required, Validators.pattern(REGEX_NAME)]],
      dateInit: ["", Validators.required],
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
