import { title } from 'process'
import {defineField, defineType, validation} from 'sanity'

export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'short_description',
      type:'string',
      title: 'short description',
      validation: (Rule: { max: (arg0: number) => any; }) => Rule.max(200),
    },
    {
      name:"image",
      type:"image",
      title:"Image of Resturant",
    },
    {
      name:"long",
      type:"number",
      title:"Longitude of the resturant",
    },
    {
      name:"lat",
      type:"number",
      title:"Latitude of the resturant",

    },
    {
      name:"address",
      type:"string",
      title:"Address of the resturant",
      validation:(Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name:'rating',
      type:'number',
      title:'Rating of the resturant',
      validation:(Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any } }; new(): any } }; new(): any } } })=>
        Rule.required()
        .min(1)
        .max(5)
        .error("please enter valid rating between 1-5"),
      
    },
    {
      name:'type',
      title:'Cateogry',
      validation:(Rule: { required: () => any }) => Rule.required(),
      type:'reference',to:[{type:'Category'}],
    },
    {
      name:'dishes',
      type:'array',
      title:'Dishes',
      of:[{type:'reference',to:[{type:'dish'}]}],
    }
  ],
}
