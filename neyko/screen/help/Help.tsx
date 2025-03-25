import { useRef } from 'react';
import WebView from 'react-native-webview';
import ScreenView from "../../components/screenView/ScreenView";
import Spinner from '../../components/spinner/Spinner';
import { colors } from '../../constants/colors';
import { HELP_URL } from '../../constants/urls';

const Help = () => {
    const webViewRef = useRef<WebView>(null);

    return (
        <ScreenView>
            <WebView
                source={{ uri: HELP_URL }}
                ref={webViewRef}
                startInLoadingState
                renderLoading={() => <Spinner size={'large'} color={colors.deepskyblue} fullscreen={false} />}
            />
        </ScreenView>
    );
};

export default Help;