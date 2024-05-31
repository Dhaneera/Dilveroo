import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import {UserIcon,ChevronDownIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon}from'react-native-heroicons/solid'
import {  } from "react-native-heroicons/mini";
import Categories from '@/components/Categories';
import FeaturedRow from '@/components/FeaturedRow';


const Home = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className=' bg-white pt-5'>
            {/* viewstart */}
            <View className=' flex-row pb-3 items-center mx-4 space-x-2' >
                 {/* headerf */}
                <Image source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className=' font-bold text-gray-400 text-xs'>Deliver Now</Text>
                    <Text className=' font-bold text-xl'>Current Location
                    <ChevronDownIcon size={20} color='#00CCBB'/>
                    </Text>
                </View>

                <UserIcon size={30} color='#00CCBB'/>
                
            </View>
             {/* search */}
            <View className=' flex-row items-center space-x-2 pb-2 mx-4'>
                    <View className=' flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color='#00CCBB'/>
                    <TextInput placeholder='Resturants and Cuisines' keyboardType='default'/>
                    </View>
                    <AdjustmentsVerticalIcon color='#00CCBB'/>
                </View>
            <ScrollView className=' bg-gray-100'
                contentContainerStyle={{
                    paddingBottom:100
                }}>
                 {/* categorey */}
                 <Categories/>
                  {/* features */}
                  <FeaturedRow
                    id='1'
                    title='Featured'
                    description="paid placment"
                    />
                  <FeaturedRow
                    id='2'
                    title='Featured'
                    description="paid placment"
                    />
                  <FeaturedRow
                  id='3'
                    title='Featured'
                    description="paid placment"
                    />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home