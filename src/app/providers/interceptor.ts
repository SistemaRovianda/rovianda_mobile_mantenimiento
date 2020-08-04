import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateInterface } from "../shared/models/storeState.interface";

@Injectable({
  providedIn: "root",
})
export class AuthorizationTokenInterceptor implements HttpInterceptor {
  token: string;

  constructor(private _store: Store<AppStateInterface>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", localStorage.getItem("token") || "");

    if (
      localStorage.getItem("token") != "" ||
      localStorage.getItem("token") != null
    ) {
      request = req.clone({
        headers: headers,
      });
    }
    return next.handle(request);
  }
}
