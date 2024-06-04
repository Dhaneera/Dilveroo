import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '@/features/counter/busketSlice'
import { RootState } from '@/app/store'
import { useNavigation } from 'expo-router'
import Currency from 'react-currency-formatter'


interface BasketItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface BasketState {
  items: BasketItem[];
}

const BasketIcon:React.FC = () => {
  const navigation = useNavigation()
    
  const items:BasketItem[]= useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  return (
    <View className=' absolute bottom-10 w-full z-50'>
      <TouchableOpacity className=' mx-5 bg-[#00CCBB] p-4 flex-row items-center space-x-1'>
        <Text className='bg-[#01A296] text-white py-1 px-2'>{items.length}</Text>
        <Text className=' flex-1 text-lg text-white font-extrabold text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>
        <Currency quantity={basketTotal} currency="GBP"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon