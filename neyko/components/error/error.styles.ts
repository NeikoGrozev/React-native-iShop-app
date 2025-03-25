import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 150,
        width: width - 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.beige,
        padding: 20,
        marginHorizontal: 25,
        borderRadius: 10
    },
    text: {
        color: colors.deepskyblue
    },
    button: {
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: colors.deepskyblue,
        borderRadius: 5
    }
});

export default styles;