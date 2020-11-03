import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, switchMap } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import { ToastService } from "src/app/shared/services/toast.service";
import * as fromActions from "./new-machine.actions";
import { Router } from "@angular/router";
import { fetchAllShop } from '../catalog-shop/catalog-shop.actions';
import { fetchAllMachine } from '../catalog-machine/catalog-machine.actions';

@Injectable({
  providedIn: "root",
})
export class NewMachineEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService,
    private toastService: ToastService,
    private router: Router
  ) { }

  newMachine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newMachine),
      exhaustMap((action) =>
        this.recordService.newMachine(action.payload).pipe(
          switchMap((payload) => [fromActions.newMachineSuccess()]),
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
          return [fetchAllShop(), fetchAllMachine()];
        })
      )
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
