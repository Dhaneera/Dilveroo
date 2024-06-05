import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import restaurant from '@/sanity/schemaTypes/restaurant';


export interface RestaurantsState {
    id: string;
    title: string;
    short_description: string;
    lat: number;
    long: number;
}
// Define the initial state using that type
const initialState: RestaurantsState = {
    id: '',
    title: '',
    short_description: '',
    lat: 0,
    long: 0,
}

export const restaurantSlice = createSlice({
  name: 'resturant',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRestaurant: (state,action:PayloadAction<RestaurantsState>)=> {
      return action.payload
    },
    selectRestaurant:(state,action:PayloadAction<RestaurantsState>)=>{
        return action.payload
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions
export const selectRestaurant = (state:RootState)=>state.restaurant
export default restaurantSlice.reducer