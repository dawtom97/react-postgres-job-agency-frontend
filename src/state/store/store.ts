import { configureStore } from "@reduxjs/toolkit";
import { companiesApi } from "../services/companiesApi";

export const store = configureStore({
    reducer: {
        [companiesApi.reducerPath]: companiesApi.reducer
    }
})