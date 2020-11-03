import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/services/toast.service";
import * as fromActions from "./new-record.actions";
import { fetchAllShop } from '../catalog-shop/catalog-shop.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class NewRecordEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService,
    private router: Router
  ) { }

  newRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newRegister),
      exhaustMap((action) =>
        this.recordService.newRecord(action.payload).pipe(
          map((payload) => fromActions.newRegisterSuccess()),
          catchError((error) => of(fromActions.newRegisterError(error)))
        )
      )
    )
  );

  newRecordSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newRegisterSuccess),
        exhaustMap((_) => {
          this.router.navigate(['/menu'])
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  newRecordrrorEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newRegisterError),
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
