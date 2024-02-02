export default {
  name: 'mainPageOrdersSection',
  type: 'document',
  title: 'Main Page Orders Section',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {name: 'heading', type: 'string', title: 'heading'},
    {
      name: 'paragraph',
      title: 'paragraph',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {name: 'image', type: 'image', title: 'image'},
    {name: 'buttonHeading', type: 'string', title: 'Button Heading'},
    {name: 'buttonText', type: 'string', title: 'Button Text'},
  ],
}