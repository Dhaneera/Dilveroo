import {defineField, defineType, validation} from 'sanity'

export default{
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
     name: 'name',
     title: 'Resturant name',
     type: 'string',
      validation: (Rule: { required: () => any })=> Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule: { max: (arg0: number) => any })=> Rule.max(200)
    },
    {
      name: 'image',
      title: 'Image of the Resturant',
      type: 'image'
    },
    {
      name: 'lat',
      title: 'Latitude of Resturant',
      type: 'number'
    },
    {
      name: 'long',
      title: 'Longitude of Resturant',
      type: 'number'
    },
    {
      name:'address',
      type:'string',
      title:'Resturant address',
      validation: (Rule: { required: () => any })=>Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation:(Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any } }; new(): any } }; new(): any } } }) =>
        Rule.required()
        .min(1)
        .max(5)
        .error('Rating must be between 1 and 5')
    },
    {
      name: 'type',
      title: 'category',
      validation:(Rule: { required: () => any; })=>Rule.required(),
      type: 'reference',
      to:[{type:'Category'}]
    },
    {
      name: 'dishes',
      type:'array',
      title:'Dishes',
      of:[{type:'reference',to:[{type:'dish'}]}]
    }
  ]
}
