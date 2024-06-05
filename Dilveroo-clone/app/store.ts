import { configureStore, UnknownAction } from '@reduxjs/toolkit'
import baskerReducer from '../features/counter/busketSlice'
import restaurant from '../features/counter/restaurantSlice'
export const store=configureStore({
    reducer:{
       basket:baskerReducer,
       restaurant:restaurant
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



