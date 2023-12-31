import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Platform } from "@ionic/angular";
import { mergeMap } from "rxjs/operators";
import { AuthService } from "./shared/services/auth.service";
import * as splash from "@capacitor/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.ready().then(() => {
        this._authService
          .isAuth()
          .pipe(
            mergeMap(
              (val) => this._authService.verifyRole(),
              (val1, val2) => {
                return val1 && val2 ? true : false;
              }
            )
          )
          .subscribe((res) => {
            if (res) {
              this._router.navigate(["menu"]);
            } else {
              this._router.navigate(["login"]);
            }
            splash.SplashScreen.hide();
          });
      });
    });
  }
}
