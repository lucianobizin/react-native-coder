import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice.js"
import cartReducer from '../features/cart/cartSlice.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer
    },
  })