import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter'
import { urlFor } from '@/sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithId } from '@/features/counter/busketSlice'
import { RootState } from '@/app/store'
interface DishRowProps {
    id: string
    title: string
    description: string
    price: number
    image: string
}


const DishRow: React.FC<DishRowProps> = ({ id, title, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()


    const items = useSelector((state:RootState)=>selectBasketItemWithId(state,id))

    const addItemToBasket =()=>{
        dispatch(addToBasket({id,title,description,price,image}))
    
    }
    const removeItemFromBasket=()=>{
        if(!items.length)return
        dispatch(removeFromBasket({id,title,description,price,image}))
    }

     
    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
                className={ `bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}>
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className=' text-lg mb-4'>{title}</Text>
                        <Text className=' text-gray-400 mb-6'>{description}</Text>
                        <Text>
                            <Currency quantity={price} currency="GBP" />
                        </Text>
                    </View>


                    <Image
                        source={{
                            uri: urlFor(image)
                        }}
                        className='h-20 w-20 mt-10  bg-gray-300 p-4 ' />
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className='px-4'>
                    <View className=' flex-row items-center space-x-2 pb-3'>
                        <TouchableOpacity onPress={removeItemFromBasket}>
                            <MinusCircleIcon
                            size={40} 
                            color={items.length>0?'#00CCBB':'gray'}
                            disabled={items.length?true:false} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </>
    )
}

export default DishRow