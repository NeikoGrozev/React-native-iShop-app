import { createSlice } from "@reduxjs/toolkit";
import { setData } from "../../storage";
import { CART_STATE, MAX_PRODUCT_QUANTITY } from "../../constants";

interface initialStateProp {
    basket: basketProductProps[],
    totalQuantity: number,
    totalPrice: number
};

export interface basketProductProps {
    productId: string,
    name: string,
    smallImage: string,
    colorId?: string,
    colorName?: string,
    sizeId?: string,
    sizeName?: string,
    price: number,
    quantity: number,
    totalPrice: number,
};

const initialState: initialStateProp = {
    basket: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addProduct(state, action) {
            if (action.payload) {
                const newProduct = action.payload;
                const existingProduct = state.basket.find((product: basketProductProps) => product.productId === newProduct.productId
                    && product.colorId === newProduct.colorId && product.sizeId === newProduct.sizeId);

                if (!existingProduct) {
                    state.basket.push({
                        productId: newProduct.productId,
                        name: newProduct.name,
                        smallImage: newProduct.smallImage,
                        price: Number(newProduct.price),
                        colorId: newProduct.colorId,
                        colorName: newProduct.colorName,
                        sizeId: newProduct.sizeId,
                        sizeName: newProduct.sizeName,
                        quantity: 1,
                        totalPrice: Number(newProduct.price),
                    });
                    state.totalQuantity++;
                    state.totalPrice += Number(newProduct.price);
                } else if (existingProduct.quantity < MAX_PRODUCT_QUANTITY){
                    existingProduct.quantity++;
                    existingProduct.totalPrice += Number(newProduct.price);
                    state.totalPrice += Number(newProduct.price);
                }
            }

            setData(CART_STATE, JSON.stringify(state));
        },
        decrementProduct(state, action) {
            const id = action.payload;
            const existingProduct = state.basket.find(product => product.productId === id);
            if (!existingProduct) {
                return;
            }

            if (existingProduct?.quantity === 1) {
                state.basket = state.basket.filter(product => product.productId !== id);
                state.totalPrice -= existingProduct.price;
                state.totalQuantity--;
            } else {
                existingProduct.quantity--;
                existingProduct.totalPrice -= existingProduct.price;
                state.totalPrice -= existingProduct.price;
            }

            setData(CART_STATE, JSON.stringify(state));
        },
        removeProduct(state, action) {
            const id = action.payload;            
            const existingProduct = state.basket.find(product => product.productId === id);
            if (!existingProduct) {
                return;
            }

            state.basket = state.basket.filter(product => product.productId !== id);
            state.totalPrice -= existingProduct.price;
            state.totalQuantity--;
        },
        removeBasket(state) {
            state.basket = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            setData(CART_STATE, JSON.stringify(state));
        },
        loadState(state, action) {
            const loadState = action.payload ? JSON.parse(action.payload) : initialState;

            state.basket = loadState.basket;
            state.totalQuantity = loadState.totalQuantity;
            state.totalPrice = loadState.totalPrice;
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;