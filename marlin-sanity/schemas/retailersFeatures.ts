export default {
  name: 'retailersFeatures',
  type: 'document',
  title: 'Retailers Page Features',
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
    {
      name: 'middleFeature',
      title: 'Middle feature',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'heading'},
        {name: 'paragraph', type: 'string', title: 'paragraph'},
      ],
    },
    {
      name: 'rightFeature',
      title: 'Right feature',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'heading'},
        {name: 'paragraph', type: 'string', title: 'paragraph'},
      ],
    },
  ],
}
