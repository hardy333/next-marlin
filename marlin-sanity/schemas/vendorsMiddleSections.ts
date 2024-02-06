export default {
  name: 'vendorsMiddleSections',
  type: 'document',
  title: 'Vendors Page middle sections',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {
      name: 'section1',
      title: 'First Section (what is marlin)',
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
    {
      name: 'section2',
      title: "Second Sections (who it's for)",
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
    {
      name: 'section3',
      title: "Second Sections (who it's for)",
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
