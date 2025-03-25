import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumturquoise,
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    title: {
        marginVertical: 5,
        fontSize: 20,
        fontWeight: '700'
    },
    description: {
        width: '90%',
        fontSize: 14,
        backgroundColor: colors.seashell,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    scrollViewContainer: {
        width: '90%'
    },
    scrollViewContent: {
        alignItems: 'center'
    },
    sizeError: {
        color: colors.red
    },
    descriptionTitle: {
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
    longDescription: {
        backgroundColor: colors.seashell,
        padding: 10,
        borderRadius: 5
    }
});

export default styles;