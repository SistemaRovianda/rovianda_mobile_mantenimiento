import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./shared/store/reducer/index.reducers";
import { metaReducers } from "./shared/store/reducer/index.reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "./shared/store/effects/index.effects";
import { IonicStorageModule } from "@ionic/storage";
import { AppProvidersModule } from "./providers/app-providers.module";
import { HttpClientModule } from "@angular/common/http";
import { Camera } from "@ionic-native/camera/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppProvidersModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppProvidersModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
