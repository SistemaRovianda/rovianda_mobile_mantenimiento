import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import * as fromActions from "./list-records.actions";
import { RecordsService } from "src/app/shared/services/records.service";

@Injectable({
  providedIn: "root",
})
export class ListRecordsEffects {
  constructor(
    private actions$: Actions,
    private recordsService: RecordsService
  ) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllRecords),
      exhaustMap(() =>
        this.recordsService.getRecords().pipe(
          tap((r) => console.log(r)),
          map((records) => fromActions.fetchAllRecordsSuccess({ records })),
          catchError((error) => of(fromActions.fetchAllRecordsError(error)))
        )
      )
    )
  );
}
