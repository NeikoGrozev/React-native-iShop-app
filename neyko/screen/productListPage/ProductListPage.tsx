import { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextView from "../../components/textView/TextView";
import Card from "../../components/card/Card";
import { getProducts } from "../../api/controllers/productController";
import { plpAction } from "../../store/plp/slice";
import { appAction } from "../../store/app/slice";
import { getProductsSelector, getQuery } from "../../store/plp/selectors";
import { NavigationProps, PageName, PLPRouteProps } from "../../types/navigation";
import { COUNT_PLP, START_INDEX } from "../../constants";
import { ICON_NAMES } from "../../constants/icons";
import styles from "./productListPage.styles";

const ProductListPage = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector(getQuery);
    const products = useAppSelector(getProductsSelector);
    const [start, setStart] = useState(START_INDEX);
    const [isProductsEnd, setIsProductsEnd] = useState(false);
    const navigation = useNavigation<NavigationProps>();
    const flatListRef = useRef<FlatList>(null);
    const route = useRoute<PLPRouteProps>();
    const { category = query } = route?.params || {};

    const onChangeQueryHandler = (queryString: string) => {
        dispatch(plpAction.setQuery(queryString));
    };

    const onClickSearchButtonHandler = () => {
        dispatch(plpAction.setEmptyProducts());
        setStart(START_INDEX);
        setIsProductsEnd(false);
        getNewProducts();
    };

    const getNewProducts = async () => {
        dispatch(appAction.setSpinnerIsVisible(true));
        const response = await getProducts(query, start, COUNT_PLP);

        if (response.error) {
            dispatch(appAction.setErrorMessage(response.error));
        } else if (response.length) {
            dispatch(plpAction.setProducts(response));
            setStart((state) => state + COUNT_PLP);
        } else if (showScrollToTopButton()) {
            setIsProductsEnd(true);
        }

        dispatch(appAction.setSpinnerIsVisible(false));
    };

    const showScrollToTopButton = () => Boolean(products.length && start);

    const scrollToTop = () => {
        flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
        setIsProductsEnd(false);
    };

    const onClickProductHandler = (productId: string) => {
        navigation.navigate(PageName.ProductDetailsScreen, { productId });
    };

    useEffect(() => {
        dispatch(plpAction.setQuery(category));
    }, [category]);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        onChangeText={onChangeQueryHandler}
                        value={query}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClickSearchButtonHandler} style={styles.button}>
                            <TextView>Search</TextView>
                        </TouchableOpacity>
                    </View>
                </View>
                {products.length ? (
                    <FlatList
                        ref={flatListRef}
                        data={products}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => onClickProductHandler(item.id)}>
                                <Card id={item.id} name={item.name} image={item.image} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContainer}
                        onEndReachedThreshold={0.5}
                        onEndReached={getNewProducts}
                    />
                ) : (
                    <TextView style={styles.notFoundText}>Product not found!</TextView>
                )}
                {isProductsEnd && (
                    <MaterialCommunityIcons
                        name={ICON_NAMES.ARROW_UP_BOLD_BOX}
                        size={48}
                        onPress={() => {
                            scrollToTop();
                        }}
                        style={styles.scrollToTopButton}
                    />
                )}
            </SafeAreaView>
        </>
    )
};

export default ProductListPage;