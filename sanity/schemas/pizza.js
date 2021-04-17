import { FaPizzaSlice as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'pizza',
  // visible title
  title: 'pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'pizza name',
      type: 'string',
      description: 'Name of pizza',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'Price',
      title: 'Price',
      type: 'number',
      description: 'Price of pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      // todo: add custom input component
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3s.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      // 1  filter  undifined toppings out
      const topps = Object.values(toppings).filter(Boolean); // 2 return the preview object for the pizza
      return {
        title,
        media,
        subtitle: topps.join(', '),
      };
    },
  },
};