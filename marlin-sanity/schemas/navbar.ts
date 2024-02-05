export default {
  name: 'features',
  type: 'document',
  title: 'Main Page Features',
  preview: {
    title: 'title',
    subtitle: 'leftFeature.heading',
  },
  fields: [
    {
      name: 'leftFeature',
      title: 'Left feature',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'heading'},
        {name: 'paragraph', type: 'string', title: 'paragraph'},
      ],
    },
  ],
}
