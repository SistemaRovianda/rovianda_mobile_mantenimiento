import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/Services/toast.service";
import * as fromActions from "./new-record.actions";

@Injectable({
  providedIn: "root",
})
export class NewRecordEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService
  ) {}

  newRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newRegister),
      exhaustMap((action) =>
        this.recordService.newRecord(action.payload).pipe(
          map((payload) => fromActions.newRegisterSuccess({ payload })),
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
