import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const getCartState = (state: RootState) => state.cart;

export const getProductInBasket = createSelector(
    [getCartState],
    (cart) => cart.basket
);

export const getTotalQuantity = createSelector(
    [getCartState],
    (cart) => cart.totalQuantity
);

export const getTotalPrice = createSelector(
    [getCartState],
    (cart) => cart.totalPrice
);