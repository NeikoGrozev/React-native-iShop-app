import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        backgroundColor: colors.snow,
        borderRadius: 20,
        paddingLeft: 40,
        height: 40,
        width: '75%',
        fontSize: 14,
        borderWidth: 1,
        borderColor: colors.gold
    },
    inputIcon: {
        left: 30,
        zIndex: 5,
        fontSize: 18
    },
    button: {
        width: '50%',
        height: 30,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonTouch: {
        width: '100%',
        alignItems: 'center'
    },
    loginTextContainer: {
        marginTop: 30,
        flexDirection: 'row'
    },
    loginText: {
        fontSize: 16
    },
    loginFormButton: {
        marginLeft: 5,
        lineHeight: 16
    },
    loginFormButtonText: {
        fontSize: 16,
        color: colors.royalblue
    }
});

export default styles;