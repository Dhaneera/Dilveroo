import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


export interface BusketState {
  items:BasketItem[]
}

interface BasketItem{
  id: string
  title: string
  description: string
  price: number
  image: string
}
// Define the initial state using that type
const initialState: BusketState = {
  items:[]
}

export const busketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state,action:PayloadAction<BasketItem>)=> {
      // state.items =[...state.items,action.payload]
      state.items.push(action.payload)
    },
    removeFromBasket: (state,action:PayloadAction<BasketItem>) => {

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action:PayloadAction<BasketItem>) => {
      
    }
  }
})

export const { addToBasket,removeFromBasket, incrementByAmount } = busketSlice.actions
export const slectBasketItems = (state:RootState)=> state.basket.items
// Other code such as selectors can use the imported `RootState` type
export default busketSlice.reducer