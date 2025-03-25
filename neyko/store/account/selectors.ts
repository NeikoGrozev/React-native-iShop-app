import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const getAccountState = (state: RootState) => state.account;

export const getUser = createSelector(
    [getAccountState],
    (account) => account.user
);

export const getUsername = createSelector(
    [getAccountState],
    (account) => account.user?.username
);

export const getToken = createSelector(
    [getAccountState],
    (account) => account.user?.token || ''
);

export const isLoggedIn = createSelector(
    [getAccountState],
    (account) => Boolean(account.user?.username)
);

export const isShowLoginForm = createSelector(
    [getAccountState],
    (account) => account.option.showLoginForm
);

export const isOnBoarding = createSelector(
    [getAccountState],
    (account) => account.option.onBoardingComplete
);