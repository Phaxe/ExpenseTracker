import { configureStore } from "@reduxjs/toolkit";
import { expensesApi } from "./dataApiSlice";

export const store = configureStore({
    reducer:{
        [expensesApi.reducerPath]:expensesApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(expensesApi.middleware);
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
