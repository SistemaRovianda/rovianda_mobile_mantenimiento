import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Camera } from "@ionic-native/camera/ngx";
import { REGEX_NAME } from "src/app/shared/const";

@Component({
  selector: "new-records-forms",
  templateUrl: "./new-records-forms.component.html",
  styleUrls: ["./new-records-forms.component.scss"],
})
export class NewRecordsFormsComponent implements OnInit {
  form: FormGroup;
  imgURL: string;
  @Output("onSubmit") submit = new EventEmitter();

  constructor(private fb: FormBuilder, private camera: Camera) {
    this.form = fb.group({
      photo: [""],
      typeFailure: [""],
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

  ngOnInit() {
    console.log(this.imgURL);
  }

  get photo() {
    return this.form.get("photo");
  }

  getCamera() {
    this.camera
      .getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      })
      .then((res) => {
        this.imgURL = "data:image/jpeg;base64," + res;
        this.form.get("photo").setValue(res);
      })
      .catch((err) => console.error("Error en la toma de fotografia"));
  }
}
