import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    webView: {
        width: width,
        height: height,
    }
});

export default styles;