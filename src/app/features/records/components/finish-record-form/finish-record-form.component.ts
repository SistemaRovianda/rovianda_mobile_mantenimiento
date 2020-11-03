import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Camera } from "@ionic-native/camera/ngx";
import {
  CatalogMachines,
  Shop,
  Device,
} from "src/app/shared/models/records.interface";

@Component({
  selector: "finish-record-form",
  templateUrl: "./finish-record-form.component.html",
  styleUrls: ["./finish-record-form.component.scss"],
})
export class FinishRecordFormComponent implements OnInit {
  form: FormGroup;
  imgURL: string;
  @Output("onSubmit") submit = new EventEmitter();

  @Input() machines: CatalogMachines[];
  @Input() shops: Shop;
  image:string="";
  filterMachines: Device[] = [];

  constructor(private fb: FormBuilder, private camera: Camera) {
    this.form = fb.group({
      description: [""],
      storeId: ["", Validators.required],
      cost: ["", Validators.required],
      deviceId: ["", Validators.required],
    });
  }

  onSubmit() {
    const { ...value } = this.form.value;

    const payload = {
      ...value,
      image:this.image
    };

    this.submit.emit(payload);
  }

  ngOnInit() { }

  get photo() {
    return this.form.get("photo");
  }

  getCamera() {
    this.camera
      .getPicture({
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      })
      .then((res) => {
        this.imgURL = "data:image/jpeg;base64," + res;
        this.image=res;
      })
      .catch((err) => console.error("Error en la toma de fotografia"));
  }

  change() {
    console.log("change (): ")
    const storeId = this.form.get("storeId").value;
    const machines = this.machines.filter((data) => data.storeId == storeId);
    setTimeout(() => {
      try {
        console.log("Machines: ", machines);
        if (machines != undefined) {
          this.filterMachines = machines[0].devices;
        }
      } catch (error) {
        console.log("machines esta indefinido: ", error)
      }

    }, 600);


    console.log("f ", this.filterMachines);
  }
}
