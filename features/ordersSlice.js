import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: Object.freeze({}),
}


export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addToOrders: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It 
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new 
            // immutable state based off those changes
            // state.orders = [...state.orders, action.payload]
            if (state.orders.hasOwnProperty(action.payload.id)) {
                state.orders[action.payload.id] = [...state.orders[action.payload.id], action.payload.item]
            } else {
                state.orders[action.payload.id] = [action.payload.item]
            }
        },
        removeOrder: (state, action) => {
            const orderIdToRemove = action.payload.id;
            if (state.orders.hasOwnProperty(orderIdToRemove)) {
                // Create a new object without the order to remove
                const updatedOrders = { ...state.orders };
                delete updatedOrders[orderIdToRemove];
                state.orders = updatedOrders;
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { addToOrders, removeOrder } = ordersSlice.actions

export const selectOrderItems = (state) => state.orders.orders

export const selectOrderItemsById = (state, id) => state.orders.orders.filter((item) => item.id === id)

export const selectOrderTotal = (state) => state.orders.orders.reduce((total, item) => total += item.price, 0)

export default ordersSlice.reducer 