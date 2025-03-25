import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useAppDispatch } from "../../hooks";
import TextView from "../textView/TextView";
import { appAction } from "../../store/app/slice";
import { accountAction } from "../../store/account/slice";
import { NavigationProps, PageName } from "../../types/navigation";
import { LoginProps } from "../../interface/LoginProps";
import { login } from "../../api/controllers/userController";
import { ICON_NAMES } from "../../constants/icons";
import { colors } from "../../constants/colors";
import styles from "./login.styles";

const initialState: LoginProps = {
    username: '',
    password: ''
};

const FormKeys = {
    Username: 'username',
    Password: 'password',
};

const Login = () => {
    const dispatch = useAppDispatch();
    const [inputs, setInputs] = useState<LoginProps>(initialState);
    const navigation = useNavigation<NavigationProps>();

    const onChangeInputsHandler = (name: string, value: string) => {
        setInputs({ ...inputs, [name]: value });
    };

    const onChangeFormHandler = () => {
        dispatch(accountAction.toggleLoginOnRegistrationForms());
    };

    const handleSubmitForm = async () => {
        dispatch(appAction.setSpinnerIsVisible(true));
        const response = await login(inputs);

        if ("error" in response) {
            dispatch(appAction.setErrorMessage(response.error));
        } else {
            dispatch(accountAction.loginOrRegistration(response));
            navigation.navigate(PageName.Home);
        }

        dispatch(appAction.setSpinnerIsVisible(false));
    };

    return (
        <>
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.inputIcon} name={ICON_NAMES.USER} />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={value => onChangeInputsHandler(FormKeys.Username, value)}
                    value={inputs.username}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.inputIcon} name={ICON_NAMES.KEY} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={value => onChangeInputsHandler(FormKeys.Password, value)}
                    value={inputs.password}
                    secureTextEntry
                />
            </View>
            <LinearGradient colors={colors.gradientButtonColors} style={styles.button}>
                <TouchableOpacity style={styles.buttonTouch} onPress={handleSubmitForm}>
                    <TextView>Log in</TextView>
                </TouchableOpacity>
            </LinearGradient>
            <View style={styles.registrationTextContainer}>
                <TextView style={styles.registrationText}>Don't have an account?</TextView>
                <TouchableOpacity onPress={onChangeFormHandler} style={styles.registrationFormButton}>
                    <TextView style={styles.registrationFormButtonText}>Registration</TextView>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Login;