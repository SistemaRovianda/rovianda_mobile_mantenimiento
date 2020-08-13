import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/Services/toast.service";
import * as fromActions from "./new-machine.actions";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NewMachineEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService,
    private router: Router
  ) {}

  newMachine$ = createEffect(() =>
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

  newMachineSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.newMachineSuccess),
        exhaustMap((_) => {
          this.router.navigate(["record/finish"]);
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  newMachinerrorEffect$ = createEffect(
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
