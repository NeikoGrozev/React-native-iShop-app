/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";
import { Linking } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import DrawerNav from './components/navigation/drawer/DrawerNav';
import { PageParam } from './types/navigation';
import { handleDeepLink } from './helpers';
import { initializeFirebase } from './api/helpers/firebaseHelper';
import store from './store';

function App(): React.JSX.Element {
    const navigationRef = React.createRef<NavigationContainerRef<PageParam>>();

    const init = async () => {
        await initializeFirebase();
    };

    useEffect(() => {
        RNBootSplash.hide({ fade: true });
        const onReceiveURL = (e: { url: string }) => handleDeepLink(e, navigationRef);
        Linking.addEventListener('url', onReceiveURL);
        init();
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <DrawerNav />
            </NavigationContainer>
        </Provider>
    );
};

export default App;