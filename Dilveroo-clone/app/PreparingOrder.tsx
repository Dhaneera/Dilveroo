import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from 'expo-router';

const PreparingOrder:React.FC = () => {
    const navigation = useNavigation()

   useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Delivery')
    },4000)
   },[])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
        <Animatable.Image
        source={require('../assets/images/deliveroo.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96 ml-1'/>

        <Animatable.Text 
        animation='slideInUp'
        iterationCount={1}
        className=' text-lg my-10 text-white font-bold text-center'>
            Waiting for Restaurant to accept your order!
        </Animatable.Text>
        <Progress.CircleSnail size={60} animating={true} progress={0.4} color='white' indeterminate={true}/>
    </SafeAreaView>
  )
}

export default PreparingOrder