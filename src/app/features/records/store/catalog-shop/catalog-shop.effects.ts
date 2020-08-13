import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import * as fromActions from "./catalog-shop.actions";

@Injectable({
  providedIn: "root",
})
export class CatalogShopEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService
  ) {}

  catalogShop$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllShop),
      exhaustMap((action) =>
        this.recordService.getShops().pipe(
          map((payload) => fromActions.fetchAllShopSuccess({ payload })),
          catchError((error) => of(fromActions.fetchAllShopError(error)))
        )
      )
    )
  );
}
