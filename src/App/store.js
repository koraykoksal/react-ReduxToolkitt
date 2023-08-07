import { configureStore } from "@reduxjs/toolkit";
import autReducer from '../features/autSlice'
import newsReducer from '../features/newsSlice'


//! import kısmındaki autReducer bizim verdiğimiz bir isimlendirmedir.

export const store = configureStore({
    reducer:{
        auth:autReducer,
        api:newsReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})








