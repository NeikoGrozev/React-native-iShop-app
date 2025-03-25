import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const getPlpState = (state: RootState) => state.plp;

export const getQuery = createSelector(
    [getPlpState],
    (plpState) => plpState.query
);

export const getProductsSelector = createSelector(
    [getPlpState],
    (plpState) => plpState.products
);