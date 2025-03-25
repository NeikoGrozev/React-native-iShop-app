
import { Linking } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";

export const openInAppBrowser = async (url: string) => {
    try {
        if (await InAppBrowser.isAvailable()) {
            await InAppBrowser.open(url, {
                // iOS Properties
                dismissButtonStyle: 'cancel',
                preferredBarTintColor: '#453AA4',
                preferredControlTintColor: 'white',
                readerMode: false,
                animated: true,
                modalPresentationStyle: 'fullScreen',
                modalTransitionStyle: 'coverVertical',
                modalEnabled: true,
                enableBarCollapsing: false,
                // Android Properties
                showTitle: true,
                toolbarColor: '#6200EE',
                secondaryToolbarColor: 'black',
                navigationBarColor: 'black',
                navigationBarDividerColor: 'white',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                animations: {
                    startEnter: 'slide_in_right',
                    startExit: 'slide_out_left',
                    endEnter: 'slide_in_left',
                    endExit: 'slide_out_right'
                },
                headers: {
                    'my-custom-header': 'my custom header value'
                }
            });
        } else {
            Linking.openURL(url);
        }
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Can't open the browser!");
    }
};