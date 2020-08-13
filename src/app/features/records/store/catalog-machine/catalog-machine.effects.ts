import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { RecordsService } from "src/app/shared/services/records.service";
import * as fromActions from "./catalog-machine.actions";

@Injectable({
  providedIn: "root",
})
export class CatalogMachinesEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordsService
  ) {}

  catalogMachine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllMachine),
      exhaustMap((action) =>
        this.recordService.getMachines().pipe(
          map((payload) => fromActions.fetchAllMachineSuccess({ payload })),
          catchError((error) => of(fromActions.fetchAllMachineError(error)))
        )
      )
    )
  );
}
