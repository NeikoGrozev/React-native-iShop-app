import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {

    return await AsyncStorage.getItem(key);
};

export const setData = async (key: string, value: string) => {
    
    await AsyncStorage.setItem(key, value);
};

export const removeData = async (key: string) => {
    await AsyncStorage.removeItem(key);
};