import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import Categories from '@/components/Categories';
import FeaturedRow from '@/components/FeaturedRow';
import client from '../sanity';


interface FeaturedCategory {
    _id: string;
    name: string;
    short_description: string;
  }

const Home:React.FC = () => {
    const navigation = useNavigation()


    const [featuredCategories, setFeaturedCategories] = useState<FeaturedCategory[]>([])
    const [reload, setReload] = useState<Boolean>(false)


    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(`
                *[_type == "fetured"]{

                    ...,
                    restaurant[]->{
                      ...,
                      dishes[]->
                    }
                  }`).then((result)=>{
                        setFeaturedCategories(result)
                  })


            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();

    }, [reload])

    const triggerReload = () => {
        setReload(!reload)
    };

    console.log(featuredCategories);


    return (
        <SafeAreaView className=' bg-white pt-5'>
            {/* viewstart */}
            <View className=' flex-row items-center mx-4 space-x-2' >
                {/* headerf */}
                <Image source={{
                    uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
                }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className=' font-bold text-gray-400 text-xs'>Deliver Now</Text>
                    <Text className=' font-bold text-xl'>Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>

                <UserIcon size={30} color='#00CCBB' />

            </View>
            {/* search */}
            <View className=' flex-row items-center space-x-2 pb-2 mx-4'>
                <View className=' flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color='#00CCBB' />
                    <TextInput placeholder=' Search Resturants and Cuisines'/>
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB' />
            </View>
            <ScrollView className=' bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100
                }}>
                {/* categorey */}
                <Categories />
                {/* features */}
                {featuredCategories.length > 0 ? (
                    featuredCategories.map(category => (
                        <FeaturedRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.short_description}
                        />
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home