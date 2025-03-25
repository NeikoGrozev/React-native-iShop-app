import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import RenderHTML from "react-native-render-html";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ScreenView from "../../components/screenView/ScreenView";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import ColorSelector from "../../components/colorSelector/ColorSelector";
import SizeSelector from "../../components/sizeSelector/SizeSelector";
import TextView from "../../components/textView/TextView";
import AddToCartButton from "../../components/addToCartButton/AddToCartButton";
import { getProductById } from "../../api/controllers/productController";
import { appAction } from "../../store/app/slice";
import { pdpAction } from "../../store/pdp/slice";
import { getProduct, getSelectedSizeId, isSizeError } from "../../store/pdp/selectors";
import styles from "./productDetailsPage.styles";

const ProductDetailsPage = ({ route }: any) => {
    const dispatch = useAppDispatch();
    const sizeError = useAppSelector(isSizeError);
    const { productId } = route.params;
    const product = useAppSelector(getProduct);
    const selectedSize = useAppSelector(getSelectedSizeId);

    const loadProduct = async () => {
        dispatch(appAction.setSpinnerIsVisible(true));
        const response = await getProductById(productId);

        if (response.error) {
            dispatch(appAction.setErrorMessage(response.error));
        } else {
            dispatch(pdpAction.setProduct(response));
        }

        dispatch(appAction.setSpinnerIsVisible(false));
    };

    useEffect(() => {
        loadProduct();
    }, [dispatch, productId]);

    useEffect(() => {
        dispatch(pdpAction.setSizeError(false));
    }, [dispatch, selectedSize])

    return (
        <>
            <ScreenView style={styles.container}>
                {product.name &&
                    <>
                        <TextView style={styles.title}>{product.name}</TextView>
                        <TextView>${product.price}</TextView>
                        <ScrollView
                            style={styles.scrollViewContainer}
                            contentContainerStyle={styles.scrollViewContent}
                            showsVerticalScrollIndicator={false}
                        >
                            <ImageCarousel imageUrls={product.imageUrls} />
                            <ColorSelector />
                            <SizeSelector />
                            {
                                sizeError &&
                                <TextView style={styles.sizeError}>Please select a size!</TextView>
                            }
                            {
                                product.description &&
                                <>
                                    <TextView style={styles.descriptionTitle}>Description</TextView>
                                    <TextView style={styles.description}>{product.description}</TextView>
                                </>
                            }
                            {
                                product.description &&
                                <>
                                    <TextView style={styles.descriptionTitle}>Details</TextView>
                                    <View style={styles.longDescription}>
                                        <RenderHTML
                                            source={{ html: product.longDescription }}
                                        />
                                    </View>
                                </>
                            }
                        </ScrollView>
                        <AddToCartButton />
                    </>
                }
            </ScreenView>
        </>
    );
};

export default ProductDetailsPage;