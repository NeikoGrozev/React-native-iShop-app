import { useEffect, useRef } from 'react';
import { FlatList, ScrollView, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useAppSelector } from '../../hooks';
import ScreenView from "../../components/screenView/ScreenView";
import CheckoutCart from '../../components/checkoutCard/CheckoutCard';
import TextView from "../../components/textView/TextView";
import PaymentMethods from '../../components/paymentMethods/PaymentMethods';
import Summary from '../../components/summary/Summary';
import { getProductInBasket } from '../../store/cart/selectors';
import styles from './cart.styles';

const Cart = () => {
    const basket = useAppSelector(getProductInBasket);
    const isBasketEmpty = Object.keys(basket).length === 0;
    const { width, height } = useWindowDimensions();
    const isWideScreen = width > height;
    const headerRef = useRef<View>(null);

    useEffect(() => {
        headerRef.current?.focus();
    }, [])

    return (
        <ScreenView style={styles.container}>
            <View
                ref={headerRef}
                accessible={true}
                accessibilityLabel={`Shopping Cart - ${basket.length} items`}
                accessibilityRole="header"
            >
                <TextView style={styles.title}>Shopping cart</TextView>
            </View>
            <ScrollView>
                {!isBasketEmpty && (
                    <View style={isWideScreen && styles.rowContainer}>
                        <FlatList
                            data={basket}
                            keyExtractor={(item) => item.productId}
                            contentContainerStyle={styles.listContainer}
                            renderItem={({ item }) => (
                                <CheckoutCart {...item} />
                            )}>
                        </FlatList>
                        <View style={[styles.lastContainer, isWideScreen && styles.rightColumn]}>
                            <Summary />
                            <TouchableOpacity
                                style={styles.checkoutButton}
                                accessible={true}
                                accessibilityLabel="Complete order"
                                accessibilityHint="Go to checkout page"
                            >
                                <TextView style={styles.checkoutButtonText}>Checkout</TextView>
                            </TouchableOpacity>
                            <PaymentMethods />
                        </View>
                    </View>
                )}
                {isBasketEmpty &&
                    <TextView
                        accessible={true}
                        accessibilityLabel="The shopping cart is empty"
                        accessibilityRole="text"
                        style={styles.noProducts}
                    >
                        No products in basket!
                    </TextView>
                }
            </ScrollView>
        </ScreenView>
    );
};

export default Cart;