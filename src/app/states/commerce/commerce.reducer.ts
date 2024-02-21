import { createReducer, on } from "@ngrx/store"
import { ICommerce } from "../../types"
import * as CommerceActions from './commerce.action'

export interface CommerceState {
    commerces: ICommerce[],
    error: string | null
}

export const initialCommerceState: CommerceState = {
    commerces: [],
    error: null
}

export const CommerceReducer = createReducer(
    initialCommerceState,
    on(CommerceActions.fetchCommerceSuccess, (state, { commerces }) => ({
        ...state,
        commerces,
        error: null
    })),
    on(CommerceActions.fetchCommerceFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage
    }))
)