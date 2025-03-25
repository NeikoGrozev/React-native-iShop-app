import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    sizeVariationTitle: {
        textAlign: 'center',
        fontSize: 18,
        width: '70%',
        marginVertical: 10,
        fontWeight: 700,
        color: colors.dimgray,
        borderBottomWidth: 1,
        borderBottomColor: colors.beige,
        borderTopWidth: 1,
        borderTopColor: colors.gold
    },
    sizeVariationContainer: {
        height: 60,
    },
    sizeVariationItem: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.darkgrey,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor:colors.gainsboro
    },
    sizeVariationName: {
        fontSize: 18
    },
    activeSize: {
        borderWidth: 5,
        borderColor: colors.gold
    }
});

export default styles;