import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/services/toast.service";
import * as fromActions from "./new-shop.actions";
import { Router } from "@angular/router";
import {Location} from "@angular/common";
@Injectable({
  providedIn: "root",
})
export class NewShopEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService,
    private _location: Location
  ) {}

  newShop$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newShop),
      exhaustMap((action) =>
        this.recordService.newShop(action.payload).pipe(
          map((payload) => fromActions.newShopSuccess({ payload })),
          catchError((error) => of(fromActions.newShopError(error)))
        )
      )
    )
  );

  newShopSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newShopSuccess),
        exhaustMap((_) => {
          this._location.back();
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  newShopErrorEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newShopError),
        exhaustMap((_) => {
          this.toastService.presentToastError();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );
}
