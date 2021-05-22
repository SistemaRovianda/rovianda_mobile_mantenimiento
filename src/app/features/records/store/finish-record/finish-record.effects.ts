import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/services/toast.service";
import * as fromActions from "./finish-record.actions";

@Injectable({
  providedIn: "root",
})
export class FinishRecordEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService,
    private router:Router
  ) {}

  finishRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fininshRecord),
      exhaustMap((action) =>
        this.recordService.finishRecord(action.payload,action.mantenanceId).pipe(
          map((payload) => fromActions.fininshRecordSuccess({ payload })),
          catchError((error) => of(fromActions.fininshRecordError(error)))
        )
      )
    )
  );

  finishRecordSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.fininshRecordSuccess),
        exhaustMap((_) => {
          this.toastService.presentToastSuccess();
          this.router.navigate(["menu"]);
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  finishRecordErrorEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.fininshRecordError),
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
