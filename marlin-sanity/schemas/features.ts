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
        {name: 'image', type: 'image', title: 'image'},
        {name: 'heading', type: 'localeString', title: 'heading'},
        {name: 'paragraph', type: 'localeString', title: 'paragraph'},
      ],
    },
    {
      name: 'middleFeature',
      title: 'Middle feature',
      type: 'object',
      fields: [
        {name: 'image', type: 'image', title: 'image'},
        {name: 'heading', type: 'localeString', title: 'heading'},
        {name: 'paragraph', type: 'localeString', title: 'paragraph'},
      ],
    },
    {
      name: 'rightFeature',
      title: 'Right feature',
      type: 'object',
      fields: [
        {name: 'image', type: 'image', title: 'image'},
        {name: 'heading', type: 'localeString', title: 'heading'},
        {name: 'paragraph', type: 'localeString', title: 'paragraph'},
      ],
    },
  ],
}
