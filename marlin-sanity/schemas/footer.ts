export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  preview: {
    title: 'title',
    subtitle: 'leftFeature.heading',
  },
  fields: [
    {
      name: 'paragraph',
      title: 'Footer text',
      type: 'text',
    },
    {
      name: 'subParagraph',
      title: 'Sub paragraph',
      type: 'string',
    },
    {
      name: 'icons',
      title: 'Social icons',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          type: 'object',
          title: 'facebook',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Url',
            },
            {
              name: 'enable',
              type: 'boolean',
              title: 'enabled',
              initialValue: true,
            },
          ],
        },
        {
          name: 'twitter',
          type: 'object',
          title: 'twitter',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'url',
            },
            {
              name: 'enable',
              type: 'boolean',
              title: 'enabled',
              initialValue: true,
            },
          ],
        },
      ],
    },
  ],
}
