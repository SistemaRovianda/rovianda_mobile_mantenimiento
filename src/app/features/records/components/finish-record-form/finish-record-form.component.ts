import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Camera } from "@ionic-native/camera/ngx";

@Component({
  selector: "finish-record-form",
  templateUrl: "./finish-record-form.component.html",
  styleUrls: ["./finish-record-form.component.scss"],
})
export class FinishRecordFormComponent implements OnInit {
  form: FormGroup;
  imgURL: string;
  @Output("onSubmit") submit = new EventEmitter();

  constructor(private fb: FormBuilder, private camera: Camera) {
    this.form = fb.group({
      description: [""],
      image: ["", Validators.required],
      storeId: ["", Validators.required],
      cost: ["", Validators.required],
      deviceId: ["", Validators.required],
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
