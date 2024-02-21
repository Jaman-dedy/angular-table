import { createAction, props } from "@ngrx/store";
import { ICommerce } from "../../types";

export const fetchCommerce = createAction('[Fetch commerce] fetchCommerce');

export const fetchCommerceSuccess = createAction(
    '[Fetch commerce] fetchCommerceSuccess',
    props<{ commerce: ICommerce[] }>()
)

export const fetchCommerceFailure = createAction(
    '[Fetch commerce] fetchCommerceFailure',
    props<{ errorMessage: string }>()
)