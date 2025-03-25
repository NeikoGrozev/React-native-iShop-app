import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { ONBOARDING_COMPLETE, TRUE } from '../../constants';

export const initializeFirebase = async () => {
    if (!firebase.apps.length) {
        firebase.app();
    }

    const isOnBoarding = await getOnBoardingCompleteFromStorage();

    if (!isOnBoarding) {
        const permission = await messaging().hasPermission();
        const onBoarding = permission === messaging.AuthorizationStatus.AUTHORIZED ||
            permission === messaging.AuthorizationStatus.PROVISIONAL;

        if (onBoarding) {
            setOnboardingCompleteInStorage();
        }
    }
};

export const getOnBoardingCompleteFromStorage = async () => {
    return await AsyncStorage.getItem(ONBOARDING_COMPLETE);
};

export const setOnboardingCompleteInStorage = async () => {
    await AsyncStorage.setItem(ONBOARDING_COMPLETE, TRUE);
};

export const requestPermission = async () => {
    const permission = await messaging().requestPermission();
    setOnboardingCompleteInStorage();
};

export const deleteToken = async () => {
    await messaging().deleteToken();
    setOnboardingCompleteInStorage();
};