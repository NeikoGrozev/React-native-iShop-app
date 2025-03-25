import { createSlice } from "@reduxjs/toolkit";
import { VariantProp } from "../../interface/VariantProp";

interface differentColorImagesProp {
    color: string,
    colorImage: string,
    productId: string
}

interface initialStateProps {
    product: {
        id: number,
        name: string,
        imageUrls: string[],
        description: string,
        smallImage: string,
        longDescription: string,
        price: string,
        differentColorImages: differentColorImagesProp[],
        colors: Record<string, string>,
        sizes: Record<string, string>,
        isMasterOrVariationProduct: boolean,
        variants: VariantProp[]
    },
    productOptions: {
        selectedColorId: string,
        selectedSizeId: string,
        selectedColorName: string,
        selectedSizeName: string
    },
    options: {
        sizeError: boolean
    }
}

const initialState: initialStateProps = {
    product: {
        id: 0,
        name: '',
        imageUrls: [],
        description: '',
        smallImage: '',
        longDescription: '',
        price: '',
        differentColorImages: [],
        colors: {},
        sizes: {},
        isMasterOrVariationProduct: false,
        variants: []
    },
    productOptions: {
        selectedColorId: '',
        selectedSizeId: '',
        selectedColorName: '',
        selectedSizeName: ''
    },
    options: {
        sizeError: false
    }
};

const pdpSlice = createSlice({
    name: 'pdpSlice',
    initialState,
    reducers: {
        setProduct(state, action) {
            const product = action.payload;
            let updatedVariants: string[] = [];

            if (product.isMasterOrVariationProduct) {
                updatedVariants = product.variants.map((variant: VariantProp) => ({
                    ...variant,
                    productId: variant.productId
                }));
            }

            state.product = {
                ...product,
                variants: updatedVariants,
                longDescription: product.long_description
            };

            if (product.differentColorImages?.length === 1) {
                state.productOptions.selectedColorId = product.differentColorImages[0].color;
                state.productOptions.selectedColorName = product.colors[product.differentColorImages[0].color];
            }

            state.productOptions.selectedSizeId = '';
            state.productOptions.selectedSizeName = '';
        },
        setSelectedColor(state, action) {
            state.productOptions.selectedColorId = action.payload.colorId;
            state.productOptions.selectedColorName = action.payload.colorName;
        },
        setSelectedSize(state, action) {
            state.productOptions.selectedSizeId = action.payload.sizeId;
            state.productOptions.selectedSizeName = action.payload.sizeName;
        },
        setSizeError(state, action) {
            state.options.sizeError = action.payload;
        }
    }
});

export const pdpAction = pdpSlice.actions;
export default pdpSlice.reducer;