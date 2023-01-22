import { createSlice } from "@reduxjs/toolkit";

interface IModalSliceState {
    isLogin: boolean;
    isRegister: boolean;
}

const initialState: IModalSliceState = {
    isLogin: false,
    isRegister: false,
};

export const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        setIsLogin(state) {
            state.isLogin = !state.isLogin;
            state.isRegister = false;
        },
        setIsRegister(state) {
            state.isRegister = !state.isRegister;
            state.isLogin = false;
        },
    },
});

export const { setIsLogin, setIsRegister } = modalsSlice.actions;
export default modalsSlice.reducer;
