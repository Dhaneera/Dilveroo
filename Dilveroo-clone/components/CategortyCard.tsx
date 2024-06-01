import { View,StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import { Image } from 'react-native';
import React from 'react'


interface CategoryCardProps {
    imgUrl: string;
    title: string;
    width?: number;
    height?: number;
  }


  const CategoryCard: React.FC<CategoryCardProps> = ({ imgUrl, title, width = 70, height = 70}) => {
    return (
      <Pressable>
        <Image
        source={{ uri: imgUrl }} 
        style={{ width, height,position:'relative',marginLeft:10 }} 
      />
        <Text className=' absolute '
        style={{fontWeight:500,color:'white',position:'absolute',bottom:1,left:1,marginLeft:15}}>{title}</Text>
      </Pressable>
    );
  };
  export default CategoryCard;

