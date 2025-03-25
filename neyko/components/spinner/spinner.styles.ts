import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    fullscreen: {
        backgroundColor: 'grey',
        opacity: 0.6,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    normal: {
        position: 'absolute',
        top: 150,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;