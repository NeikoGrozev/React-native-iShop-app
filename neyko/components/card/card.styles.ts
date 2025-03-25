import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        backgroundColor: colors.gainsboro,
        margin: 10,
        alignItems: 'center',
        padding: 20,
        borderRadius: 10
    },
    image: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: colors.honeydew,
        borderRadius: 10,
        marginBottom: 20
    },
});