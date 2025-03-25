import { useEffect } from "react";
import { Linking, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch, useAppSelector } from "../../hooks";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenView from "../../components/screenView/ScreenView";
import Registration from "../../components/registration/Registration";
import Login from "../../components/login/Login";
import { reLoginUser } from "../../api/controllers/userController";
import TextView from "../../components/textView/TextView";
import { accountAction } from "../../store/account/slice";
import { getToken, getUsername, isLoggedIn, isShowLoginForm } from "../../store/account/selectors";
import { NavigationProps, PageName } from "../../types/navigation";
import { authenticateUser } from "../../api/helpers/userHelper";
import { openInAppBrowser } from "../../api/helpers/browserHelper";
import { REFRESH_SESSION_INTERVAL } from "../../constants";
import { CONTACT_US_URL } from "../../constants/urls";
import { ICON_NAMES } from "../../constants/icons";
import { colors } from "../../constants/colors";
import styles from "./account.styles";

const Account = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(isLoggedIn);
    const isShowLoginOrRegistrationForm = useAppSelector(isShowLoginForm);
    const navigation = useNavigation<NavigationProps>();
    const username = useAppSelector(getUsername);
    const token = useAppSelector(getToken);

    const onClickLogoutHandler = () => {
        dispatch(accountAction.logout());
        navigation.navigate(PageName.Home);
    };

    const onClickOrderHistoryHandler = async () => {
        await authenticateUser(token);
        navigation.navigate(PageName.OrderHistory);
    };

    const onClickContactUsHandler = async () => {
        openInAppBrowser(CONTACT_US_URL);
    };

    const onClickAppSettingHandler = () => {
        Linking.openSettings();
    };

    const onClickLegalHandler = () => {
        navigation.navigate(PageName.Legal);
    };

    const refreshSession = async () => {
        await reLoginUser();
    };

    useEffect(() => {
        refreshSession();
        const intervalId = setInterval(refreshSession, REFRESH_SESSION_INTERVAL);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <ScreenView style={styles.container}>
            <MaterialCommunityIcons name={ICON_NAMES.ACCOUNT_CIRCLE} size={200} style={styles.userImage} />
            {isAuthenticated
                ?
                <>
                    <TextView style={styles.username}>Hi, {username}</TextView>
                    <LinearGradient colors={colors.gradientButtonColors} style={styles.button}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={onClickOrderHistoryHandler}>
                            <TextView>Order History</TextView>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={colors.gradientButtonColors} style={styles.button}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={onClickAppSettingHandler}>
                            <TextView>App Setting</TextView>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={colors.gradientButtonColors} style={styles.button}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={onClickContactUsHandler}>
                            <TextView>Contact Us</TextView>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={colors.gradientButtonColors} style={styles.button}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={onClickLegalHandler}>
                            <TextView>Legal</TextView>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={colors.gradientButtonColors} style={styles.button}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={onClickLogoutHandler}>
                            <TextView>Logout</TextView>
                        </TouchableOpacity>
                    </LinearGradient>
                </>
                :
                <>
                    {
                        isShowLoginOrRegistrationForm ? < Login /> : < Registration />
                    }
                </>
            }
        </ScreenView>
    );
};

export default Account;