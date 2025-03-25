import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenView from "../../components/screenView/ScreenView";
import TextView from "../../components/textView/TextView";
import eventEmitter from "../../api/modules/eventEmitter";
import { SHOW_COOKIES, SHOW_TERMS } from "../../constants/events";
import { NavigationProps, PageName } from "../../types/navigation";
import styles from "./legal.styles";

const Legal = () => {
    const navigation = useNavigation<NavigationProps>();

    const onClickTermsButtonHandler = () => {
        navigation.navigate(PageName.Home);
        eventEmitter.emit(SHOW_TERMS);
    };

    const onClickCookieButtonHandler = () => {
        navigation.navigate(PageName.Home);
        eventEmitter.emit(SHOW_COOKIES);
    };

    return (
        <ScreenView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onClickTermsButtonHandler}>
                <TextView style={styles.buttonText}>Terms & Conditions</TextView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onClickCookieButtonHandler}>
                <TextView style={styles.buttonText}>Cookie Settings</TextView>
            </TouchableOpacity>
        </ScreenView>
    );
};

export default Legal;