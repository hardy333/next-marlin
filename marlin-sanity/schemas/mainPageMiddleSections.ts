export default {
  name: 'mainPageMiddleSections',
  type: 'document',
  title: 'Main Page middle sections',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {
      name: 'data',
      title: 'Section',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'heading'},
        {name: 'image', type: 'image', title: 'image'},
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
      ],
    },
  ],
}
