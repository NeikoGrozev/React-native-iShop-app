import WebView from 'react-native-webview';
import styles from './googleWebView.styles';

const GoogleWebView = () => {
    const injectedJavaScript = `document.querySelector('.gb_Qe').style.display = "none"`;

    return (
        <WebView
            style={styles.webView}
            source={{ uri: 'https://www.google.com' }}
            injectedJavaScript={injectedJavaScript}
        />
    );
};

export default GoogleWebView;