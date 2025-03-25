import { View } from "react-native";
import { useAppSelector } from "../../hooks";
import TextView from "../textView/TextView";
import { getTotalPrice, getTotalQuantity } from "../../store/cart/selectors";
import styles from "./summary.styles";

const Summary = () => {
    const totalQuantity = useAppSelector(getTotalQuantity);
    const totalPrice = useAppSelector(getTotalPrice);

    return (
        <View style={styles.container}>
            <TextView style={styles.title}>Order summary</TextView>
            <View style={styles.rowContainer}>
                <TextView style={styles.subtitle}>Item{totalQuantity > 1 && 's'}:</TextView>
                <TextView style={styles.rowValue}>{totalQuantity}</TextView>
            </View>
            <View style={styles.rowContainer}>
                <TextView style={styles.subtitle}>Subtotal:</TextView>
                <TextView style={styles.rowValue}>${totalPrice.toFixed(2)}</TextView>
            </View>
            <View style={styles.rowContainer}>
                <TextView style={styles.subtitle}>Delivery:</TextView>
                <TextView style={styles.rowValue}>Free</TextView>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.rowContainer}>
                <TextView style={styles.subtitle}>Total Price:</TextView>
                <TextView style={styles.rowValue}>${totalPrice.toFixed(2)}</TextView>
            </View>
        </View>
    );
};

export default Summary;