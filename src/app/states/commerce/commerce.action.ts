import { createAction, props } from "@ngrx/store";
import { ICommerce } from "../../types";

export const fetchCommerce = createAction('[Fetch commerce] fetchCommerce',
    props<{ size: number }>()
);

export const fetchCommerceSuccess = createAction(
    '[Fetch commerce] fetchCommerceSuccess',
    props<{ commerces: ICommerce[] }>()
)

export const fetchCommerceFailure = createAction(
    '[Fetch commerce] fetchCommerceFailure',
    props<{ errorMessage: string }>()
)