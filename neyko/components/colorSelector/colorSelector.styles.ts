import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    colorVariationTitle: {
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
    colorVariationContainer: {
        height: 100,
    },
    colorScrollView: {
        justifyContent: 'center'
    },
    colorVariationItem: {
        width: 50,
        height: 70,
        alignItems: 'center',
        marginHorizontal: 10
    },
    colorVariationImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    colorVariationName: {
        color: colors.dimgray
    },
    colorActive: {
        borderWidth: 5,
        borderColor: colors.gold
    }
});

export default styles;