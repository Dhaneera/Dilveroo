import {defineField, defineType, validation} from 'sanity'
import resturant from './resturant'

export default{
  name: 'fetured',
  title: 'Fetured Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Fetured Category name',
      type: 'string',
      validation:(Rule: { required: () => any })=>Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule: { max: (arg0: number) => any })=> Rule.max(200)
    },
    {
      name: 'resturants',
      title: 'Resturants',
      type: 'array',
      of:[{type:'reference',to:[{type:'resturant'}]}]
    },
  ],
}
