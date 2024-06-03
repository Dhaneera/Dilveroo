import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '@/sanity'
import { useNavigation } from 'expo-router'
import { RootStackParamList } from '@/app/_layout'
import {NativeStackNavigationProp}  from '@react-navigation/native-stack';
interface ResturanCardsProps {
    id: string
    title: string;
    imgUrl: string
    rating: number
    genre: string
    address: string
    short_description: string
    dishes: string[]
    long: number
    lat: number
}

const ResturantCard: React.FC<ResturanCardsProps> = ({
    id,
    title,
    imgUrl,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    const navigation =useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handlePress =()=>{
        navigation.navigate('Restaurant',{
            id:id,
            title:title,
            imgUrl:imgUrl,
            rating:rating,
            genre:genre,
            address:address,
            short_description:short_description,
            dishes:dishes,
            long:long,
            lat:lat
        })
    }

    return (
        <TouchableOpacity className='bg-white mr-3 shadow' onPress={handlePress}>
            <Image
                source={{
                    uri: urlFor( imgUrl),
                }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className=' font-bold text-lg pt-2'>{title}</Text>
                <View className=' flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={0.5} size={22} />
                    <Text className=' text-xs text-gray-500'>
                        <Text className=' text-green-500'>{rating} .</Text>
                        {genre}
                    </Text>
                </View>
                <View className=' flex-row items-center space-x-1'>
                    <MapPinIcon color='gray' opacity={0.4} size={22}/>
                    <Text className=' text-xs text-gray-500'>Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ResturantCard