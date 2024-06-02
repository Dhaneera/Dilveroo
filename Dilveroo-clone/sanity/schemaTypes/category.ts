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



// interface ImageField {
//   type: 'image';
//   title: string;
// }

// interface CategoryFields {
//   name: string;
//   image: ImageField;
// }

// interface CategoryDocument {
//   name: 'Category';
//   title: 'Menu Category';
//   type: 'document';
//   fields: CategoryFields;
// }

// interface CategoryArrayDocument {
//   name: 'CategoryArray'; 
//   title: 'Array of Categories'; 
//   type: 'document';
//   fields: {
//     categories: {
//       type: 'array';
//       of: [{ type: 'reference'; to: [{ type: 'Category' }] }]; 
//     };
//   };
// }


// const CategoryArraySchema: CategoryArrayDocument = {
//   name: 'CategoryArray',
//   title: 'Array of Categories',
//   type: 'document',
//   fields: {
//     categories: {
//       type: 'array',
//       of: [{ type: 'reference', to: [{ type: 'Category' }] }],
//     },
//   },
// };

// export type { CategoryDocument, CategoryArrayDocument };
// export default CategoryArraySchema;

