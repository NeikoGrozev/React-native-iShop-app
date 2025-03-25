import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../interface/ProductProps";

interface initialStateProps {
    query: string,
    products: ProductProps[]
}

const initialState: initialStateProps = {
    query: 'shorts',
    products: []
}

const plpSlice = createSlice({
    name: 'plpSlice',
    initialState,
    reducers: {
        setQuery(state, actions) {
            state.query = actions.payload;
        },
        setProducts(state, action) {
            state.products = [...state.products, ...action.payload];
        },
        setEmptyProducts(state) {
            state.products = [];
        }
    }
});

export const plpAction = plpSlice.actions;
export default plpSlice.reducer;