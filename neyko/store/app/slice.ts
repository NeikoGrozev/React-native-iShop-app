import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
    isSpinnerVisible: boolean,
    errorMessage: string
}

const initialState: initialStateProps = {
    isSpinnerVisible: false,
    errorMessage: ''
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setSpinnerIsVisible(state, action) {
            state.isSpinnerVisible = action.payload;
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload
        }
    }
});

export const appAction = appSlice.actions;
export default appSlice.reducer;