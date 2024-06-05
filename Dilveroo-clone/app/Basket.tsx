import { View, Text, SafeAreaView, TouchableOpacity,Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '@/features/counter/restaurantSlice'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketTotal } from '@/features/counter/busketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '@/sanity'
import Currency from 'react-currency-formatter'



interface BasketItem {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  
const Basket: React.FC = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupItemsInBasket] = useState<({id:string ,item:BasketItem})[]>([])
    const basketTotal=useSelector(selectBasketTotal)
    const dispatch = useDispatch()

    useMemo(() => {
        const groupedItems = items.reduce((results:Record<string,BasketItem[]|undefined>,item:BasketItem) => {
            (results[item.id]= results[item.id] ||[]).push(item)
            return results
        }, {})
        setGroupItemsInBasket(groupedItems)
    }, [items])

    console.log(groupedItemsInBasket);
    
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className=' flex-1 bg-gray-100'>
                <View className=' p-5 border-b border-[#00CCBB] bg-white shadow-xs '>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={navigation.goBack} className=' rounded-full bg-gray-100 absolute top-4 right-5'>
                    <XCircleIcon color='#00ccbb' size={50}/>          
                </TouchableOpacity>
                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5 '>
                    <Image
                    source={{uri:'http://links.papareact.com/wru'}}
                     className=' h-7 w-9 bg-gray-300 p-4 rounded-full'
                     />
                     <Text className='flex-1'>Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className=' divide-y divide-gray-200'>
                    {Object.entries(groupedItemsInBasket).map(([key,items])=>(
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                            <Text className=' text-[#00CCBB]'>{items.length}x</Text>
                            <Image source={{uri:urlFor(items[0]?.image)}}
                            className='w-12 h-12 rounded-full'/>
                            <Text className='flex-1'>{items[0]?.title}</Text>
                            <Text className=' text-gray-600'>
                                <Currency quantity={items[0]?.price} currency='GBP'></Currency>
                            </Text>
                            <TouchableOpacity>
                                <Text className='text-[#00CCBB]' onPress={()=>dispatch(removeFromBasket({id:key}))}> Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className=' flex-row justify-between'>
                        <Text className=' text-gray-400'>Subtotal</Text>
                        <Text className=' text-gray-400'>
                            <Currency quantity={basketTotal}></Currency>
                        </Text>
                    </View>
                

                    <View className=' flex-row justify-between'>
                        <Text className=' text-gray-400'>Dilivery Fee</Text>
                        <Text className=' text-gray-400'>
                            <Currency quantity={5.99}></Currency>
                        </Text>
                    </View>
                

                    <View className=' flex-row justify-between'>
                        <Text>Order Total</Text>
                        <Text className=' font-extrabold'>
                            <Currency quantity={basketTotal + 5.99} currency='GBP'></Currency>
                        </Text>
                    </View>
                    <TouchableOpacity className=' rounded-lg bg-[#00CCBB] P-4 py-4'>
                        <Text className=' text-center text-white  text-lg font-bold '>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Basket

