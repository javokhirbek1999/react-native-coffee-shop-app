import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './features/basketSlice'
import ordersReducer from './features/ordersSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        orders: ordersReducer
    },
})

