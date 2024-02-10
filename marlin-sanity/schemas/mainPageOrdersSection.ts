export default {
  name: 'mainPageOrdersSection',
  type: 'document',
  title: 'Main Page Orders Section',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {name: 'heading', type: 'localeString', title: 'heading'},
    {
      name: 'paragraph',
      title: 'paragraph',
      type: 'localeBlockArray',
    },
    {name: 'image', type: 'image', title: 'image'},
    {name: 'buttonHeading', type: 'localeString', title: 'Button Heading'},
    {name: 'buttonText', type: 'localeString', title: 'Button Text'},
  ],
}
