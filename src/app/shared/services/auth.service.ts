import { Injectable, Inject } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import Auth = firebase.auth.Auth;
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  auth: Auth;

  constructor(@Inject(API_ENDPOINT_PROVIDER) private endpoint) {
    firebase.initializeApp({
      apiKey: "AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o",
      authDomain: "rovianda-88249.firebaseapp.com",
    });

    this.auth = firebase.auth();
  }
}
