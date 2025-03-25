import { TouchableOpacity, useWindowDimensions, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../hooks";
import TextView from "../textView/TextView";
import { basketProductProps, cartAction } from "../../store/cart/slice";
import { NavigationProps, PageName } from "../../types/navigation";
import styles from "./checkoutCard.styles";

const CheckoutCart = ({ ...item }: basketProductProps) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProps>();
    const { width, height } = useWindowDimensions();
    const isWideScreen = width > height;

    const onClickIncrementProductHandler = (product: any) => {
        dispatch(cartAction.addProduct(product));
    };

    const onClickDecrementProductHandler = (product: any) => {
        dispatch(cartAction.decrementProduct(product.productId));
    };

    const onClickRemoveProductHandler = (product: any) => {
        dispatch(cartAction.removeProduct(product.productId));
    };

    const onClickProductHandler = (productId: string) => {
        navigation.navigate(PageName.ProductDetailsScreen, { productId });
    };

    return (
        <View style={[styles.container, isWideScreen && styles.containerRow]}>
            <TouchableOpacity
                onPress={() => onClickProductHandler(item.productId)}
                accessible={true}
                accessibilityLabel={`Product image ${item.name}`}
                accessibilityHint="Click to go to product page"
            >
                <Image source={{ uri: item.smallImage }} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                    <TextView style={styles.title}>{item.name}</TextView>
                </View>
                <View style={styles.detailsContainer}>
                    <View
                        style={styles.detailsLeftContainer}
                        accessible={true}
                        accessibilityLabel={`Product Information: 
                            Color: ${item.colorName}, 
                            Size: ${item.sizeName}, 
                            Price: $${item.price.toFixed(2)}`}
                    >
                        <TextView>Color: <TextView style={styles.variationValue}>{item.colorName}</TextView></TextView>
                        <TextView>Size: <TextView style={styles.variationValue}>{item.sizeName}</TextView></TextView>
                        <TextView>Price: <TextView style={styles.price}>${item.price.toFixed(2)}</TextView></TextView>
                    </View>
                    <View style={styles.detailsRightContainer}>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => onClickDecrementProductHandler(item)}
                                accessible={true}
                                accessibilityLabel={`Decrement quantity of ${item.name}`}
                                accessibilityHint="Decreases the quantity of the selected product"
                            >
                                <TextView>-</TextView>
                            </TouchableOpacity>
                            <TextView style={styles.quantity}>{item.quantity}</TextView>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => onClickIncrementProductHandler(item)}
                                accessible={true}
                                accessibilityLabel={`Increment quantity of ${item.name}`}
                                accessibilityHint="Increases the quantity of the selected product"
                            >
                                <TextView>+</TextView>
                            </TouchableOpacity>
                        </View>
                        <TextView style={styles.totalPriceContainer}>Total price: <TextView style={styles.totalPrice}>${item.totalPrice.toFixed(2)}</TextView></TextView>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.removeProduct}
                    onPress={() => onClickRemoveProductHandler(item)}
                    accessible={true}
                    accessibilityLabel={`Remove ${item.name} from cart`}
                    accessibilityHint="Removes the product from the shopping cart"
                >
                    <TextView style={styles.removeProductText}>x</TextView>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CheckoutCart;