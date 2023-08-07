import { configureStore } from "@reduxjs/toolkit";
import autReducer from '../features/autSlice'

//! import kısmındaki autReducer bizim verdiğimiz bir isimlendirmedir.

export const store = configureStore({
    reducer:{
        auth:autReducer,
        //api:newReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})








