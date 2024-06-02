import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '@/sanity';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeftCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/solid';

const Restaurant = () => {

  const navigation = useNavigation()


  const route = useRoute();

  const { id,title,imgUrl,rating,genre,address,short_description,dishes,long,lat,} = route.params as {

    id: number;
    title: string;
    imgUrl: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    long: number;
    lat: number;
};

useLayoutEffect(() => {
  navigation.setOptions({
      headerShown: false,
  })
}, [])

  return (
    <ScrollView>
      <View className='relative'>
        <Image
            source={{
              uri:urlFor(imgUrl)
            }}
            className=' w-full h-56 bg-gray-300 p-4'
        />
        <Pressable onPress={navigation.goBack} className=' absolute top-14 left-5  bg-gray-100 rounded-full'>
          <ArrowLeftIcon size={23} color='#00CCBB'/>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Restaurant