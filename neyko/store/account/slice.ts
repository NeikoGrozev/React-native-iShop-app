import { createSlice } from "@reduxjs/toolkit";
import { removeData, setData } from "../../storage";
import * as Keychain from "react-native-keychain";
import { TRUE } from "../../constants";

interface initialStateProps {
    user?: {
        username: string,
        token: string
    },
    option: {
        showLoginForm: boolean,
        onBoardingComplete: boolean
    }
};

const initialState: initialStateProps = {
    option: {
        showLoginForm: true,
        onBoardingComplete: false
    }
};

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState,
    reducers: {
        loadUser(state, action) {
            state.user = action.payload;
        },
        loginOrRegistration(state, action) {
            state.user = action.payload;

            if (action.payload.token) {
                setData('authToken', action.payload.token);
                setData('username', action.payload.username);
            }
        },
        logout(state) {
            state.user = undefined;
            removeData('authToken');
            removeData('username');
            Keychain.resetGenericPassword();
        },
        toggleLoginOnRegistrationForms(state) {
            state.option.showLoginForm = !state.option.showLoginForm;
        },
        setOnboardingComplete(state) {
            state.option.onBoardingComplete = true
        }
    }
});

export const accountAction = accountSlice.actions;
export default accountSlice.reducer;