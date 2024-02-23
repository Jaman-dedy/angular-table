import { Injectable, inject } from "@angular/core";
import { CommerceService } from "../../services/commerce.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CommerceActions from './commerce.action'
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CommerceEffect {
    private service = inject(CommerceService);
    actions$ = inject(Actions);

    loadCommerces$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CommerceActions.fetchCommerce),
            switchMap(({ size }) =>
                this.service.getCommerce(size).pipe(
                    map((res) => CommerceActions.fetchCommerceSuccess({ commerces: res })),
                    catchError((error: { message: string }) =>
                        of(
                            CommerceActions.fetchCommerceFailure({
                                errorMessage: 'Fail to load commerces'
                            })
                        )
                    )
                ))
        )
    )
}