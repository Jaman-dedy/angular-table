import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommerceState } from "./commerce.reducer";

export const selectCommerceFeature = createFeatureSelector<CommerceState>('commerce')

export const selectCommerces = createSelector(
    selectCommerceFeature,
    (state: CommerceState) => state.commerces
)

export const selectCommerceError = createSelector(
    selectCommerceFeature,
    (state: CommerceState) => state.error
)

export const selectCommerceLoading = createSelector(
    selectCommerceFeature,
    (state: CommerceState) => state.loading
)