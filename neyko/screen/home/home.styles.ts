import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumturquoise,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        color: colors.snow,
        fontWeight: '700'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor: colors.azure
    },
    webView: {
        width: width,
        height: height,
    }
});