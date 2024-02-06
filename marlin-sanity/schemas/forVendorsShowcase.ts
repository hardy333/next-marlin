export default {
  name: 'vendorsShowcase',
  type: 'document',
  title: 'Vendors Showcase',
  preview: {
    select: {
      title: 'title',
      subtitle: 'title',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Showcase title',
      type: 'string',
    },
    {
      name: 'paragraph',
      type: 'text',
      title: 'Showcase paragraph',
    },
    // {
    //   name: 'showcaseKeyWords',
    //   title: 'Showcase key words',
    //   type: 'array',
    //   of: [{type: 'localeString'}],
    //   validation: (Rule: any) => Rule.required().min(3).max(3),
    // },
    {
      name: 'ctaText',
      type: 'string',
      title: 'Cta text(ღილაკის ტექსტი)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Showcase main image',
    },
  ],
}
