import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter'
import { urlFor } from '@/sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
interface DishRowProps {
    id: string
    title: string
    description: string
    price: number
    image: string
}


const DishRow: React.FC<DishRowProps> = ({ id, title, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false)
    // const [reload, setReload] = useState(false)



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
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                        <Text>1</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </>

    )
}

export default DishRow