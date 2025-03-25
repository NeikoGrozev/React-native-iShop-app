import { getProductData, getProductsData } from '../helpers/productHelper';

export const getProducts = async (query: string, start: number, count: number) => {
    try {
        return await getProductsData(query, start, count);
    } catch (error) {
        console.error(error);
        return { error: "Something went wrong, I can't find the products you are looking for." };
    }
};

export const getProductById = async (productId: string) => {
    try {
        return await getProductData(productId);
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong, I can not show the desired product." };
    }
};