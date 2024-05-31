import { View, Text } from 'react-native'
import React from 'react'

interface FeturedROwProps {
    title: string;
    description:string
    featuredCategory:string
  }

const FeaturedRow:React.FC<FeturedROwProps>= ({title,description,featuredCategory})=>{
  return (
    <View>
      <Text>FeaturedRow</Text>
    </View>
  )
}

export default FeaturedRow