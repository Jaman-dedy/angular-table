import { createReducer, on } from "@ngrx/store"
import { ICommerce } from "../../types"
import * as CommerceActions from './commerce.action'

export interface CommerceState {
    commerces: ICommerce[],
    error: string | null,
    loading: boolean,
}

export const initialCommerceState: CommerceState = {
    commerces: [],
    error: null,
    loading: false
}

export const CommerceReducer = createReducer(
    initialCommerceState,
    on(CommerceActions.fetchCommerce, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(CommerceActions.fetchCommerceSuccess, (state, { commerces }) => ({
        ...state,
        commerces,
        loading: false,
        error: null
    })),
    on(CommerceActions.fetchCommerceFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
        loading: false,
    }))
)