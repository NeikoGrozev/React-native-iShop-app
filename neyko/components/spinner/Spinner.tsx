import { ActivityIndicator, View } from "react-native";
import { SpinnerProps } from "../../interface/SpinnerProps";
import styles from "./spinner.styles";

const Spinner = ({ size, color, fullscreen }: SpinnerProps) => {
    return (
        <View style={fullscreen ? styles.fullscreen : styles.normal}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

export default Spinner;