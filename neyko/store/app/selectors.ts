import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const getAppState = (state: RootState) => state.app;

export const isSpinnerVisible = createSelector(
    [getAppState],
    (appState) => appState.isSpinnerVisible
);

export const getErrorMessage = createSelector(
    [getAppState],
    (appState) => appState.errorMessage
)