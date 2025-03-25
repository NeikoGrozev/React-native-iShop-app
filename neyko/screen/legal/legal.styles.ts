import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.paleturquoise,
        alignItems: 'center',
        paddingTop: 200
    },
    button: {
        width: '50%',
        height: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.beige,
        borderWidth: 1,
        borderColor: colors.gold,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16
    }
});

export default styles;