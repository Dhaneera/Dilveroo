import {defineField, defineType, validation} from 'sanity'

export default{
  name: 'Category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name:'name',
      type: 'string',
      validation:(Rule: { required: () => any })=>Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category'
    },
  ],
}

