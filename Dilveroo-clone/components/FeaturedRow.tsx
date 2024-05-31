import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import ResturantCard from './ResturantCard';
interface FeturedROwProps {
    title: string;
    description: string
    id: string
}

const FeaturedRow: React.FC<FeturedROwProps> = ({ id, title, description }) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className=' font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className=' text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
            horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
            <ResturantCard
             id={123}
             title='Yo Shushi'
             imgUrl='https://links.papareact.com/gn7'
             rating={4.5}
             genre='japanese'
             address='mount-Lavinia'
             short_description='this is a short description'
             dishes={[]}
             long={20}
             lat={0}
            
            />
            <ResturantCard
             id={123}
             title='Yo Shushi'
             imgUrl='https://links.papareact.com/gn7'
             rating={4.5}
             genre='japanese'
             address='mount-Lavinia'
             short_description='this is a short description'
             dishes={[]}
             long={20}
             lat={0}
            
            />
            <ResturantCard
             id={123}
             title='Yo Shushi'
             imgUrl='https://links.papareact.com/gn7'
             rating={4.5}
             genre='japanese'
             address='mount-Lavinia'
             short_description='this is a short description'
             dishes={[]}
             long={20}
             lat={0}
            
            />
            <ResturantCard
             id={123}
             title='Yo Shushi'
             imgUrl='https://links.papareact.com/gn7'
             rating={4.5}
             genre='japanese'
             address='mount-Lavinia'
             short_description='this is a short description'
             dishes={[]}
             long={20}
             lat={0}
            
            />
            <ResturantCard
             id={123}
             title='Yo Shushi'
             imgUrl='https://links.papareact.com/gn7'
             rating={4.5}
             genre='japanese'
             address='mount-Lavinia'
             short_description='this is a short description'
             dishes={[]}
             long={20}
             lat={0}
            
            />
            </ScrollView>
        </View>

    )
}

export default FeaturedRow