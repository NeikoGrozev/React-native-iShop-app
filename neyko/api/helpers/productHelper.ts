import demandwareClient from '../modules/demandwareClient';
import { OCAPI_INSTANCE_HOST, OCAPI_SITE, OCAPI_VERSION } from '../config';
import { ImageData, ImageGroup, ProductData, Variant, VariationAttribute, VariationAttributeValue } from '../../types/product';

const ocapiUrl = `${OCAPI_INSTANCE_HOST}${OCAPI_SITE}/dw/shop/${OCAPI_VERSION}`;

export const getProductsData = async (query: string, start: number, count: number) => {
    const productsData = await fetchSearchProductsData(query, start, count);

    if (!productsData) {
        return [];
    }

    const products = productsData.map((item: any) => ({
        ...item,
        id: item.product_id,
        name: item.product_name,
        image: item.image.link
    }));

    return products;
}

export const getProductData = async (productId: string) => {
    const productData = await fetchProductData(productId);
    const imageData = getImagesData(productData) || [];

    const product = {
        ...productData,
        name: productData.name,
        imagesData: imageData,
        imageUrls: getImageUrls(imageData),
        description: productData.page_description,
        price: Number(productData.price).toFixed(2),
        isMasterOrVariationProduct: false,
        smallImage: getSmallImage(productData)
    };

    if (productData.type.master || productData.type.variant) {
        product.differentColorVariationIds = getDifferentColorVariationIds(productData);
        product.differentColorImages = await getDifferentColorImages(product.differentColorVariationIds);
        product.colors = getColors(productData);
        product.sizes = getSizes(productData);
        product.variants = getVariants(productData);
        product.isMasterOrVariationProduct = true;
    }

    return product;
};

const fetchSearchProductsData = async (query: string, start: number, count: number) => {
    const url = `${ocapiUrl}/product_search?q=${query}&expand=images&start=${start}&count=${count}`;
    const response = await demandwareClient.get(url);
    const productData = await response.json();

    return productData.hits;
};

const fetchProductData = async (productId: string) => {
    const url = `${ocapiUrl}/products/${productId}?expand=images,variations,prices`;
    const response = await demandwareClient.get(url);

    return await response.json();
};

const getImagesData = (data: ProductData): ImageData[] | undefined => {
    let imageGroup = data.image_groups.find((group: ImageGroup) => group.view_type === "large");

    if (!imageGroup) {
        imageGroup = data.image_groups.find((group: ImageGroup) => group.view_type === "medium");
    }

    return imageGroup?.images;
}

const getImageUrls = (imageData: ImageData[]): string[] => {
    return imageData.map((image) => image.link);
};

const getDifferentColorVariationIds = (productData: ProductData) => {
    const productIds: string[] = [];
    const differentColors: string[] = [];

    productData.variants.map((variant: Variant) => {
        const productId = variant.product_id;
        const color = variant.variation_values.color;

        if (!differentColors.includes(color)) {
            differentColors.push(color);
            productIds.push(productId);
        }
    });

    return productIds;
};

const getDifferentColorImages = async (differentColorVariationIds: string[]) => {
    if (!differentColorVariationIds.length) {
        return [];
    }

    const productIds = `(${differentColorVariationIds})`
    const fetchData = await fetchProductData(productIds);

    return fetchData.data.map((variationProduct: any) => ({
        productId: variationProduct.id,
        colorImage: variationProduct.image_groups[3]?.images[0]?.link,
        color: variationProduct.c_color
    }));
};

const getColors = (productData: ProductData) => {
    let colors: Record<string, string> = {};

    productData.variation_attributes.map((colorVariation: VariationAttribute) => {
        if (colorVariation.id === 'color') {
            colorVariation.values.map((color: VariationAttributeValue) => {
                colors[color.value] = color.name;
            })
        }
    });

    return colors;
};

const getSizes = (productData: ProductData) => {
    let sizes: Record<string, string> = {};

    productData.variation_attributes.map((sizeVariation: VariationAttribute) => {
        if (sizeVariation.id === 'size') {
            sizeVariation.values.map((size: VariationAttributeValue) => {
                sizes[size.value] = size.name;
            })
        }
    });

    return sizes;
};

const getSmallImage = (productData: ProductData) => {
    let imageGroup = productData.image_groups.find((group: ImageGroup) => group.view_type === "small");

    return imageGroup?.images[0].link;
};

const getVariants = (productData: ProductData) => {

    return productData.variants.map((product: Variant) => ({
        productId: product.product_id,
        color: product.variation_values.color,
        size: product.variation_values.size,
        price: product.price
    }));
};