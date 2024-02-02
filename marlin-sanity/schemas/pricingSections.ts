export default {
  name: 'pricingSections',
  type: 'document',
  title: 'Pricing Sections',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {
      name: 'section1',
      title: 'First Section ',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'heading'},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'paragraph', type: 'text', title: 'Paragraph (optional)'},
      ],
    },
    {
      name: 'section2',
      title: 'Second Sections',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'heading'},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'paragraph', type: 'text', title: 'Paragraph (optional)'},
      ],
    },
  ],
}
