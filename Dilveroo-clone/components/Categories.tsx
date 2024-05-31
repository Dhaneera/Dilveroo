import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategortyCard'



const Categories: React.FC = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal:2,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* CategoryCard */}
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
        <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="hey"/>
      </ScrollView>
    );
  };
  
  export default Categories;