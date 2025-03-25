import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import ScreenView from "../../components/screenView/ScreenView";
import TextView from "../../components/textView/TextView";
import { deleteToken, requestPermission } from "../../api/helpers/firebaseHelper";
import styles from "./onBoarding.styles";

const OnBoarding = () => {

    const onClickOptIntoButtonHandler = async () => {
        await requestPermission();
    };

    const onClickContinueButtonHandler = async () => {
        await deleteToken();
    };

    return (
        <ScreenView style={styles.screenContainer}>
            <ImageBackground
                source={require('../../assets/notifications-background.png')}
                resizeMode='cover'
                style={styles.backgroundImage}
            />
            <View style={styles.container}>
                <TextView style={styles.title}>Notifications</TextView>
                <TextView style={styles.subtitle}>Get the latest updates</TextView>

                <View style={styles.benefitsContainer}>
                    <TextView style={styles.benefitsText}>✓ First access to sales</TextView>
                    <TextView style={styles.benefitsText}>✓ Seasonal offers</TextView>
                </View>

                <TouchableOpacity style={styles.optIntoButton} onPress={onClickOptIntoButtonHandler}>
                    <TextView style={styles.optIntoButtonText}>Opt into notifications</TextView>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} onPress={onClickContinueButtonHandler}>
                    <TextView style={styles.continueButtonText}>Continue without notifications</TextView>
                </TouchableOpacity>
            </View>
        </ScreenView>
    );
};

export default OnBoarding;