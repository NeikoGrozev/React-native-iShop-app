import { Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../../hooks";
import { appAction } from "../../store/app/slice";
import { ErrorProps } from "../../interface/ErrorProps";
import styles from "./error.styles";

const Error = ({ errorMessage }: ErrorProps) => {
    const dispatch = useAppDispatch();

    const closeMessageHandler = () => {
        dispatch(appAction.setErrorMessage(''));
        dispatch(appAction.setSpinnerIsVisible(false));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{errorMessage}</Text>
            <TouchableOpacity onPress={closeMessageHandler} style={styles.button}>
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Error;