import { ScrollView, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import TextView from "../textView/TextView";
import { pdpAction } from "../../store/pdp/slice";
import { getSelectedSizeId, getSizeVariations } from "../../store/pdp/selectors";
import styles from "./sizeSelector.styles";

const SizeSelector = () => {
    const dispatch = useAppDispatch();
    const sizes = useAppSelector(getSizeVariations);
    const selectedSize = useAppSelector(getSelectedSizeId);

    const onSizeClickHandler = (sizeName: string, sizeId: string) => {
        dispatch(pdpAction.setSelectedSize({ sizeName, sizeId }));
    };

    return (
        <>
            {sizes && Object.keys(sizes).length !== 0 && (
                <>
                    <TextView style={styles.sizeVariationTitle}>Size</TextView>
                    <View style={styles.sizeVariationContainer}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {Object.keys(sizes).map((key: string) => (
                                <TouchableOpacity
                                    style={[styles.sizeVariationItem, key === selectedSize && styles.activeSize]}
                                    onPress={() => onSizeClickHandler(sizes[key], key)}
                                >
                                    <TextView style={styles.sizeVariationName}>{sizes[key]}</TextView>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </>
            )}
        </>
    );
};

export default SizeSelector;