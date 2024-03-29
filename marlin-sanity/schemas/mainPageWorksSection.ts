export default {
  name: 'mainPageWorksSection',
  type: 'document',
  title: 'Main Page How it works sections',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {name: 'heading', type: 'localeString', title: 'heading'},
    {name: 'image', type: 'image', title: 'image'},
    {
      name: 'list',
      type: 'array',
      title: 'List',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'heading', type: 'localeString', title: 'heading'},
            {name: 'paragraph', type: 'localeString', title: 'paragraph'},
          ],
        },
      ],
    },
  ],
}
