import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    addToCartButton: {
        marginTop: 10,
        marginBottom: 70,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.deepskyblue
    },
    addToCartButtonText: {
        textTransform: 'uppercase'
    }
});

export default styles;