import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import productReducer from './features/product/productSlice'
import filterReducer from './features/Filter/filterSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        filter: filterReducer,
        
    },
})