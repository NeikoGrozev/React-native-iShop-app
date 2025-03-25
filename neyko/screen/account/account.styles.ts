import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.paleturquoise,
        flex: 1,
        alignItems: 'center'
    },
    userImage: {
        fontSize: 200,
        color: colors.snow,
        marginTop: 40
    },
    username: {
        marginVertical: 20,
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
    }
});

export default styles;