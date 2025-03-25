import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        height: 300,
        position: 'relative',
        paddingHorizontal: 20,
        backgroundColor: colors.lightskyblue,
        borderRadius: 20,
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: colors.darkgrey,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    imageCounter: {
        backgroundColor: colors.gainsboro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        position: "absolute",
        right: 30,
        top: 32,
        zIndex: 5
    }
});

export default styles;