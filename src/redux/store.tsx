import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./slices/modalsSlice";

export const store = configureStore({
    reducer: {
        modals: modalsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
