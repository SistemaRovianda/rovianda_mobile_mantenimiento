import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/Services/toast.service";
import * as fromActions from "./new-machine.actions";

@Injectable({
  providedIn: "root",
})
export class NewRecordEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService
  ) {}

  openLote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newMachine),
      exhaustMap((action) =>
        this.recordService.newMachine(action.payload).pipe(
          map((payload) => fromActions.newMachineSuccess({ payload })),
          catchError((error) => of(fromActions.newMachineError(error)))
        )
      )
    )
  );

  openLotSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newMachineSuccess),
        exhaustMap((_) => {
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  openLotErrorEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newMachineError),
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
