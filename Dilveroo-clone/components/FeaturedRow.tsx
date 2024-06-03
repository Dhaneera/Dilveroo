import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import ResturantCard from './ResturantCard';
import client from '@/sanity';
interface FeturedROwProps {
    title: string;
    description: string
    id: string
}
interface Image {
    asset: {
      _ref: string;
    };
    
  }

  interface Type {
    name: string;

  }

  interface Dish {
    _id: string;
    name: string;
    price: number;
    image: Image;
    type: Type;

  }
  
interface Restaurant {
    id: string;
    name: string;
    image: Image;
    type?: Type;
    address: string;
    short_description: string;
    dishes: string[]
    long: number;
    lat: number;
  }
  


const FeaturedRow: React.FC<FeturedROwProps> = ({ id, title, description }) => {

    const[restaurant,setRestaurant]=useState<Restaurant[]>([])
    const [reload, setReload] = useState(false)


    useEffect(()=>{
        const fetch = async ()=>{
            try {
                const result = await client.fetch(`
              *[_type == "fetured" && _id == $id]{
                    ...,
                  restaurant[]->{
                    ...,
                    dishes[]->,
                     name
                  },
                }[0]
                `,{id}).then((result)=>{
                    setRestaurant(result?result.restaurant:null)
                })    
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetch();
    },[reload])

    const triggerReload = () => {
        setReload(!reload)
    };


  
    
    
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
                {restaurant.length > 0 ? (
                    restaurant.map(restaurant => (
                        <ResturantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        title={restaurant.name}
                        imgUrl={restaurant.image.asset._ref}
                        rating={4.5}
                        genre={restaurant.type?.name||''}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                        />
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </ScrollView>
        </View>

    )
}

export default FeaturedRow