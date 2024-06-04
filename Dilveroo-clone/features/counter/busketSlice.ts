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
      state.items =[...state.items,action.payload]
    },
    removeFromBasket: (state,action:PayloadAction<BasketItem>) => {
      const index = state.items.findIndex((item)=> item.id === action.payload.id)
      let newBasket=[...state.items]
      if (index>=0) {
        newBasket.splice(index,1)
      }else{
        console.warn(`Cant remove product (id: ${action.payload.id}as its not in a basket`)
      }
      state.items = newBasket
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action:PayloadAction<BasketItem>) => {

    }
  }
})

export const { addToBasket,removeFromBasket, incrementByAmount } = busketSlice.actions
export const selectBasketItems = (state:any)=> state.basket.items
export const selectBasketItemWithId = (state:RootState, id: string) =>state.basket.items.filter((item: { id: string }) => item.id === id)
export const selectBasketTotal =(state:RootState):number=>state.basket.items.reduce((total,item) => total+item.price,0)
export default busketSlice.reducer