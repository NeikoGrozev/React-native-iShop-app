import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useAppDispatch } from "../../hooks";
import TextView from "../textView/TextView";
import { accountAction } from "../../store/account/slice";
import { appAction } from "../../store/app/slice";
import { NavigationProps, PageName } from "../../types/navigation";
import { RegistrationProps } from "../../interface/RegistrationProps";
import { registration } from "../../api/controllers/userController";
import { ICON_NAMES } from "../../constants/icons";
import { colors } from "../../constants/colors";
import styles from './registration.styles';

const initialState: RegistrationProps = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

const FormKeys = {
    FirstName: 'firstName',
    LastName: 'lastName',
    Email: 'email',
    Password: 'password'
};

const Registration = () => {
    const dispatch = useAppDispatch();
    const [inputs, setInputs] = useState<RegistrationProps>(initialState);
    const navigation = useNavigation<NavigationProps>();

    const onChangeInputsHandler = (name: string, value: string) => {
        setInputs({ ...inputs, [name]: value });
    };

    const onChangeFormHandler = () => {
        dispatch(accountAction.toggleLoginOnRegistrationForms());
    };

    const handleSubmitForm = async () => {
        dispatch(appAction.setSpinnerIsVisible(true));
        const response = await registration(inputs);

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
                    placeholder="First name"
                    onChangeText={value => onChangeInputsHandler(FormKeys.FirstName, value)}
                    value={inputs.firstName}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.inputIcon} name={ICON_NAMES.USER} />
                <TextInput
                    style={styles.input}
                    placeholder="Last name"
                    onChangeText={value => onChangeInputsHandler(FormKeys.LastName, value)}
                    value={inputs.lastName}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.inputIcon} name={ICON_NAMES.ENVELOPE} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={value => onChangeInputsHandler(FormKeys.Email, value)}
                    value={inputs.email}
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
                    <TextView>Registration</TextView>
                </TouchableOpacity>
            </LinearGradient>
            <View style={styles.loginTextContainer}>
                <TextView style={styles.loginText}>Already have an account?</TextView>
                <TouchableOpacity onPress={onChangeFormHandler} style={styles.loginFormButton}>
                    <TextView style={styles.loginFormButtonText}>Login</TextView>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Registration;