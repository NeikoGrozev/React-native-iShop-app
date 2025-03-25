import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        width: '80%',
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: colors.gold,
        borderRadius: 5,
        backgroundColor: colors.beige
    },
    title:{
        fontSize: 16,
        color: colors.deepskyblue,
        fontWeight: 600,
        marginVertical: 5
    },
    paymentMethods: {
        flexDirection: 'row'
    },
    payment: {
        marginHorizontal: 3
    }
});

export default styles;