import { useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import eventEmitter from '../../api/modules/eventEmitter';
import { useAppDispatch } from '../../hooks';
import ScreenView from '../../components/screenView/ScreenView';
import Spinner from '../../components/spinner/Spinner';
import { cartAction } from '../../store/cart/slice';
import { accountAction } from '../../store/account/slice';
import { NavigationProps, PageName } from '../../types/navigation';
import { CART_STATE } from '../../constants';
import { colors } from '../../constants/colors';
import { DEMANDWARE_SITE_URL } from '../../constants/urls';
import { SHOW_COOKIES, SHOW_TERMS } from '../../constants/events';
import { getData } from '../../storage';
import { styles } from './home.styles';

const Home = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProps>();
    const webViewRef = useRef<WebView>(null);

    const loadUser = async () => {
        const username = await getData('username');
        const token = await getData('authToken');

        if (username) {
            dispatch(accountAction.loadUser({ username, token }));
        }
    };

    const loadCart = async () => {
        const cartState = await getData(CART_STATE);
        dispatch(cartAction.loadState(cartState));
    };

    const onHandlerTermsEvent = () => {
        Alert.alert('Terms & Conditions', 'Accepted');
    };

    const onHandlerCookiesEvent = () => {
        Alert.alert('Cookie Settings', 'Updated');
    };

    const emitterEventListener = () => {
        eventEmitter.on(SHOW_TERMS, onHandlerTermsEvent);
        eventEmitter.on(SHOW_COOKIES, onHandlerCookiesEvent);

        return () => {
            eventEmitter.off(SHOW_TERMS, onHandlerTermsEvent);
            eventEmitter.off(SHOW_COOKIES, onHandlerCookiesEvent);
        };
    };

    useEffect(() => {
        loadUser();
        loadCart();
        const removeListeners = emitterEventListener();

        return () => {
            removeListeners();
        };
    }, [dispatch]);

    const onMessage = (event: WebViewMessageEvent) => {
        try {
            const message = JSON.parse(event.nativeEvent.data);
            const [type, pageName] = message.route.split(':');
            if (type === 'navigation' && Object.values(PageName).includes(pageName as PageName)) {
                navigation.navigate(pageName);
            }
        } catch (error) {
            console.error('Message handling error:', error);
        }
    };

    const createWebViewBridge = () => `
    (function() {
        window.AppBridge = {
            navigate: function(route, data = {}) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'NAVIGATION',
                    route: route,
                    data: data
                }));
            },

            _interceptedElements: new WeakSet(),

            interceptClick: function(element, route) {
                if (this._interceptedElements.has(element)) return;

                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const data = {
                        href: element.href || '',
                        text: element.textContent || '',
                    };

                    this.navigate(route, data);
                    return false;
                });

                this._interceptedElements.add(element);
            },

            setupObserver: function() {
                const config = { childList: true, subtree: true };
                const callback = (mutationsList, observer) => {
                    this.setupInterceptors();
                };

                const observer = new MutationObserver(callback);
                observer.observe(document.body, config);

                window.addEventListener('unload', () => observer.disconnect());
            },

            setupInterceptors: function() {
                const routes = {
                    cart: {
                        selectors: [
                            '.cart-icon',
                            '[data-testid="cart-icon"]',
                            'a[href*="cart"]',
                            'button[aria-label*="cart"]',
                            '.minicart-link'
                        ],
                        route: 'navigation:Cart'
                    },
                    account: {
                        selectors: [
                            '.account-link',
                            '[data-testid="account-link"]',
                            'a[href*="login"]',
                            'a[href*="account"]',
                            '.user-info',
                            '.login-link'
                        ],
                        route: 'navigation:Account'
                    }
                };

                Object.values(routes).forEach(({ selectors, route }) => {
                    selectors.forEach(selector => {
                        document.querySelectorAll(selector).forEach(element => {
                            this.interceptClick(element, route);
                        });
                    });
                });
            },

            init: function() {
                this.setupInterceptors();
                this.setupObserver();

                window.addEventListener('error', (event) => {
                    console.error('AppBridge error:', event.error);
                });
            }
        };

        window.AppBridge.init();
    })();
`;

    //The button is only injected to test a link with schema myapp://....
    const injectedJavaScript = `
    (function() {
        const anchor = document.createElement('a');
        anchor.textContent = 'Shop now';
        anchor.href = 'myapp://productDetails?7403574882M';

        anchor.style.display = 'inline-block';
        anchor.style.margin = '20px 145px';
        anchor.style.padding = '10px 20px';
        anchor.style.backgroundColor = '#007BFF';
        anchor.style.color = 'white';
        anchor.style.textDecoration = 'none';
        anchor.style.borderRadius = '5px';
        anchor.style.fontSize = '14px';

        document.body.insertBefore(anchor, document.body.firstChild);
    })();
`;

    return (
        <ScreenView style={styles.container}>
            <WebView
                source={{ uri: DEMANDWARE_SITE_URL }}
                style={styles.webView}
                ref={webViewRef}
                startInLoadingState
                renderLoading={() => <Spinner size={'large'} color={colors.deepskyblue} fullscreen={false} />}
                onMessage={onMessage}
                injectedJavaScript={injectedJavaScript}
                onLoadEnd={() => {
                    webViewRef.current?.injectJavaScript(createWebViewBridge() + '; true;');
                }}
            />
        </ScreenView>
    );
};

export default Home;