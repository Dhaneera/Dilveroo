import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import { useNavigation } from 'expo-router'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '@/features/counter/restaurantSlice'
import MapView, { Marker } from 'react-native-maps'
const Delivery: React.FC = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    if (restaurant) {
        console.log('Restaurant Coordinates:', restaurant.lat, restaurant.long);
    } else {
        console.log('Restaurant data is not available.');
    }
 

    const defaultLatitude = 37.7749;  
    const defaultLongitude = -122.4194;

    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className=' z-50'>
                <View className=' flex-row justify-between items-center px-3'>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color='white' size={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Order Help</Text>
                </View>
                <View className='bg-white mx-5 p-6 z-50 shadow-md my-2 py-8'>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='  text-gray-400'>Estimate Arrival</Text>
                            <Text>{restaurant.id}</Text>
                            <Text className=' text-4xl font-bold'>45-55 minutes</Text>
                        </View>

                        <Image
                            source={{
                                uri: 'https://links.papareact.com/fls'
                            }} className='h-20 w-20 ' />
                    </View>
                    <Progress.Bar color='#00CCBB' indeterminate={true} />
                    <Text className=' mt-3 text-gray-400'>Your order is being prepared</Text>
                </View>
            </SafeAreaView>

            <MapView initialRegion={{
                latitude: restaurant?.lat||defaultLatitude,
                longitude: restaurant?.long||defaultLongitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
                onMapReady={()=> console.log('map redy')}
                onRegionChangeComplete={(region)=>console.log('Region changed',region)}>
                
                {restaurant && (
                     <Marker coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                        title={restaurant.title}
                        description={restaurant.short_description}
                        identifier='origin'
                        pinColor='#00CCBB' 
                    />
                )}
               
            </MapView>
            <SafeAreaView className=' bg-white flex-row items-center space-x-5 h-28'>
                <Image
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
                />
                <View className='flex-1'>
                    <Text className=' text-lg '>
                        Sonny Sananderas
                    </Text>
                    <Text className=' text-gray-400 '>Your Ride</Text>
                </View>

                <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
            </SafeAreaView>
        </View>

    )
}

export default Delivery