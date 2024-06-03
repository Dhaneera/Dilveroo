import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategortyCard'
import client, { urlFor } from '@/sanity';


interface Category {
  _id: string;
  name: string;
  image: string;
}

const Categories: React.FC = () => {


  const [categorey, setCategorey] = useState<Category[]>([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await client.fetch(`
        *[_type == "Category"]{
          ...
        }
        `).then((data) => {
          setCategorey(data)
        })
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetch()
  }, [reload])


  const triggerReload = () => {
    setReload(!reload)
  };
  console.log(categorey);


  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 2,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {categorey.length > 0 ? (
        categorey.map(categorey => (
          <CategoryCard
            key={categorey._id}
            imgUrl={urlFor(categorey.image)}
            title={categorey.name}
          />
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default Categories;