import { configureStore } from "@reduxjs/toolkit";

import app from './app/slice';
import plp from './plp/slice';
import pdp from './pdp/slice';
import account from './account/slice';
import cart from './cart/slice';

const store = configureStore({
    reducer: {
        app,
        plp,
        pdp,
        account,
        cart
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;