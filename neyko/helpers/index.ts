import { NavigationContainerRef } from "@react-navigation/native";
import { PageName, PageParam } from "../types/navigation";

export const handleDeepLink = (e: {url: string}, navigationRef: React.RefObject<NavigationContainerRef<PageParam>>) => {
    const url = e.url;

    if (url.startsWith('myapp://productDetails?')) {
        const productId = url.split('?')[1];

        if (productId) {
            navigationRef.current?.navigate(PageName.ProductDetailsScreen, { productId });
        } else {
            console.error('Missing productId in deep link');
        }
    }
};
