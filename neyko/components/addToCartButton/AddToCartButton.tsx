import { TouchableOpacity } from "react-native";
import { useAppDispatch } from "../../hooks";
import TextView from "../textView/TextView";
import AddToCartThunk from "../../store/cart/thunks/addToCartThunk";
import styles from "./addToCartButton.styles";

const AddToCartButton = () => {
    const dispatch = useAppDispatch();

    const onClickButtonHandler = () => {
        dispatch(AddToCartThunk());
    };

    return (
        <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => onClickButtonHandler()}
        >
            <TextView style={styles.addToCartButtonText}>Add to cart</TextView>
        </TouchableOpacity>
    );
};

export default AddToCartButton;