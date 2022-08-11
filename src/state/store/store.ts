import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { companiesApi } from "../services/companiesApi";
import { reviewsApi } from "../services/reviewsApi";

export const store = configureStore({
    reducer: {
        [companiesApi.reducerPath]: companiesApi.reducer,
        [reviewsApi.reducerPath]: reviewsApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(companiesApi.middleware)
})

setupListeners(store.dispatch)