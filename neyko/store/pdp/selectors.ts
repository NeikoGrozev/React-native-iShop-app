import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const getPdpState = (state: RootState) => state.pdp;
const getProductOptions = (state: RootState) => state.pdp.productOptions;
const getOptions = (state: RootState) => state.pdp.options;

export const getProduct = createSelector(
    [getPdpState],
    (pdpState) => pdpState.product
);

export const getDifferentColorImages = createSelector(
    [getPdpState],
    (pdpState) => pdpState.product.differentColorImages
);

export const getColorVariations = createSelector(
    [getPdpState],
    (pdpState) => pdpState.product.colors
);

export const getSizeVariations = createSelector(
    [getPdpState],
    (pdpState) => pdpState.product.sizes
);

export const getSelectedColorId = createSelector(
    [getProductOptions],
    (productOption) => productOption.selectedColorId
);

export const getSelectedColorName = createSelector(
    [getProductOptions],
    (productOption) => productOption.selectedColorName
);

export const getSelectedSizeId = createSelector(
    [getProductOptions],
    (productOption) => productOption.selectedSizeId
);

export const getSelectedSizeName = createSelector(
    [getProductOptions],
    (productOption) => productOption.selectedSizeName
);

export const getVariants = createSelector(
    [getProduct],
    (product) => product.variants
);

export const getIsMasterOrVariationProduct = createSelector(
    [getProduct],
    (product) => product.isMasterOrVariationProduct
);

export const isSizeError = createSelector(
    [getOptions],
    (options) => options.sizeError
);