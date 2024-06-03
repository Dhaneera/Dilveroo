import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


export interface BusketState {
  item:string[]
}

// Define the initial state using that type
const initialState: BusketState = {
  item:[]
}

export const busketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state,action)=> {
      state.item =[...state.item,action.payload]
    },
    removeFromBasket: (state,action:PayloadAction<number>) => {

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      
    }
  }
})

export const { addToBasket,removeFromBasket, incrementByAmount } = busketSlice.actions
export const slectBasketItems = (state: { basket: { item: any } })=> state.basket.item
// Other code such as selectors can use the imported `RootState` type
export default busketSlice.reducer