import {defineField, defineType, validation} from 'sanity'

export default{
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule: { required: () => any })=>Rule.required(),
    },
    {
      name:'short_description',
      type:'string',
      title:'short description',
      validation:(Rule: { required: () => any })=>Rule.required(),
    },
    {
      name:'price',
      type:'number',
      title:'price of the dish in GBP'
    },
    {
      name:'image',
      type:'image',
      title:'Image of Dish'
    },
  ],

}
