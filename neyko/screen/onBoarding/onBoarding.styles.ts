import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    screenContainer: {
        position: 'relative'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        flex: 1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 100,
        paddingTop: 140,
        position: 'absolute'
    },
    title: {
        color: colors.red,
        fontSize: 32,
        fontWeight: 700
    },
    subtitle: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 500
    },
    benefitsContainer: {
        marginTop: 20
    },
    benefitsText: {
        fontSize: 16
    },
    optIntoButton: {
        marginTop: 50,
        backgroundColor: colors.red,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    optIntoButtonText: {
        fontSize: 16,
        color: colors.white
    },
    continueButton: {
        marginTop: 10
    },
    continueButtonText: {
        textDecorationLine: 'underline'
    }
});

export default styles;