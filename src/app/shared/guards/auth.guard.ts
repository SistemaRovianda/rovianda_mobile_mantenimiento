import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { AuthService } from "../Services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  isAuth: boolean;

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this._authService.isAuth().pipe(
      mergeMap(
        (val) => this._authService.verifyRole(),
        (val1, val2) => {
          return val1 && val2 ? true : false;
        }
      )
    );
  }
}
