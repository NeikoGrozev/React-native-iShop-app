import { Text, TextStyle, ViewProps } from "react-native";
import styles from "./textView.styles";

interface ScreenViewProps extends ViewProps {
    children: React.ReactNode;
    style?: TextStyle;
}

const TextView = ({ children, style }: ScreenViewProps) => {
    return (
        <Text style={[styles.text, style]}> {children}</Text>
    );
};

export default TextView;