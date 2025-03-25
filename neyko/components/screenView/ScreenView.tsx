import { View, ViewProps, ViewStyle } from "react-native";
import styles from "./screenView.styles";

interface ScreenViewProps extends ViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
};

const ScreenView = ({ children, style, ...rest }: ScreenViewProps) => {
    return (
        <View style={[styles.container, style]} {...rest}>
            {children}
        </View>
    );
};

export default ScreenView;