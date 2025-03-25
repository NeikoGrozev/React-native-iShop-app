import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import TextView from "../textView/TextView";
import { pdpAction } from "../../store/pdp/slice";
import { getColorVariations, getDifferentColorImages, getSelectedColorId } from "../../store/pdp/selectors";
import { NavigationProps, PageName } from "../../types/navigation";
import styles from "./colorSelector.styles";

const ColorSelector = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProps>();
    const differentColorImages = useAppSelector(getDifferentColorImages);
    const colors = useAppSelector(getColorVariations);
    const selectedColor = useAppSelector(getSelectedColorId);

    const onColorClickHandler = (productId: string, colorName: string, colorId: string) => {
        dispatch(pdpAction.setSelectedColor({ colorName, colorId }));
        navigation.navigate(PageName.ProductDetailsScreen, { productId });
    };

    return (
        <>
            {differentColorImages && (
                <>
                    <TextView style={styles.colorVariationTitle}>Color</TextView>
                    <View style={styles.colorVariationContainer}>
                        <ScrollView
                            contentContainerStyle={styles.colorScrollView}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {differentColorImages?.map((item) => (
                                <TouchableOpacity
                                    style={styles.colorVariationItem}
                                    onPress={() => onColorClickHandler(item.productId, colors[item.color], item.color)}
                                >
                                    <Image
                                        source={{ uri: item.colorImage }}
                                        style={[styles.colorVariationImage, item.color === selectedColor && styles.colorActive]}
                                    />
                                    <TextView style={styles.colorVariationName}>{colors[item.color]}</TextView>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </>
            )}
        </>
    );
};

export default ColorSelector;