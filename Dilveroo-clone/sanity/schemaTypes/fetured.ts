import {defineField, defineType, validation} from 'sanity'
import restaurant from './restaurant'

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
      name: 'restaurant',
      title: 'Restaurant',
      type: 'array',
      of:[{type:'reference',to:[{type:'restaurant'}]}]
    },
  ],
}
