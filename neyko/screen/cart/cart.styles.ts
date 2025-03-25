import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumturquoise,
    },
    title: {
        fontSize: 24,
        marginHorizontal: 'auto',
        marginVertical: 10
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 70
    },
    listContainer: {
        width: '95%',
        marginHorizontal: 10
    },
    lastContainer: {
        marginBottom: 70,
    },
    rightColumn: {
        width: '45%',
    },
    checkoutButton: {
        backgroundColor: colors.beige,
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderWidth: 6,
        borderColor: colors.gold,
        borderRadius: 5
    },
    checkoutButtonText: {
        fontSize: 16,
        fontWeight: 600,
        color: colors.deepskyblue
    },
    noProducts: {
        width: 'auto',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 26
    }
});

export default styles;