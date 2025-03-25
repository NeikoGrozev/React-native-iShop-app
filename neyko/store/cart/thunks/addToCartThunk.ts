import { createAsyncThunk } from "@reduxjs/toolkit";
import { pdpAction } from "../../pdp/slice";
import { cartAction } from "../slice";
import {
    getIsMasterOrVariationProduct,
    getProduct,
    getSelectedColorId,
    getSelectedColorName,
    getSelectedSizeId,
    getSelectedSizeName,
    getSizeVariations,
    getVariants
} from "../../pdp/selectors";
import { getSelectedProductId } from "../../../helpers/productHelper";
import { RootState } from "../..";

const AddToCartThunk = createAsyncThunk(
    'cart/addToCart',
    async (_, { dispatch, getState }) => {
        const state = getState() as RootState;
        let product = getProduct(state);
        const isMasterOrVariationProduct: boolean = getIsMasterOrVariationProduct(state);
        const selectedColorId = getSelectedColorId(state);
        const selectedColorName = getSelectedColorName(state);
        const selectedSizeId = getSelectedSizeId(state);
        const selectedSizeName = getSelectedSizeName(state);
        const sizes = getSizeVariations(state);
        const variants = getVariants(state);

        if (Object.keys(sizes).length !== 0 && !selectedSizeId) {
            dispatch(pdpAction.setSizeError(true));
        } else {
            if (isMasterOrVariationProduct) {
                const productVariant = getSelectedProductId(selectedColorId, selectedSizeId, variants);
                let productVariantData = {
                    productId: productVariant?.productId,
                    name: product.name,
                    colorId: productVariant?.color,
                    colorName: selectedColorName,
                    sizeId: productVariant?.size,
                    sizeName: selectedSizeName,
                    price: productVariant?.price,
                    smallImage: product.smallImage
                };

                dispatch(cartAction.addProduct(productVariantData));
            } else {
                dispatch(cartAction.addProduct(product));
            }
        }
    }
)

export default AddToCartThunk;