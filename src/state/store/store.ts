import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { companiesApi } from "../services/companiesApi";

export const store = configureStore({
    reducer: {
        [companiesApi.reducerPath]: companiesApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(companiesApi.middleware)
})

setupListeners(store.dispatch)