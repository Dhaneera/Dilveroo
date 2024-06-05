import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import restaurant from '@/sanity/schemaTypes/restaurant';


export interface RestaurantsState {
    restaurant:any
}
interface Restaurants{
    id: string
    title?: string;
    imgUrl?: string
    rating?: number
    genre: string
    address: string
    short_description: string
    dishes: string[]

}
// Define the initial state using that type
const initialState: RestaurantsState = {
    restaurant
}

export const restaurantSlice = createSlice({
  name: 'Restaurant',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRestaurant: (state,action:PayloadAction<Restaurants>)=> {
      state.restaurant =action.payload
    },
   
  }
})

export const { setRestaurant } = restaurantSlice.actions
export const selectRestaurant = (state:any)=>state.restaurant.restaurant
export default restaurantSlice.reducer