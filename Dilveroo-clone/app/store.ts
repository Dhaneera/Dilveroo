import { configureStore, UnknownAction } from '@reduxjs/toolkit'
import baskerReducer from '../features/counter/busketSlice'


export const store=configureStore({
    reducer:{
       basket:baskerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



