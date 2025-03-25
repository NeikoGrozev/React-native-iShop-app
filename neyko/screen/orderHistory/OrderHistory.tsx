import WebView from "react-native-webview";
import { useAppSelector } from "../../hooks";
import ScreenView from "../../components/screenView/ScreenView";
import { getToken } from "../../store/account/selectors";
import { ORDER_HISTORY_URL } from "../../constants/urls";

const OrderHistory = () => {
    const authToken = useAppSelector(getToken);

    return (
        <ScreenView>
            <WebView
                source={{
                    uri: ORDER_HISTORY_URL,
                    headers: {
                        Authorization: authToken
                    }
                }}
                startInLoadingState
                sharedCookiesEnabled={true}
                javascriptEnabled={true}
                thirdPartyCookiesEnabled={true}
            />
        </ScreenView>
    );
};

export default OrderHistory;