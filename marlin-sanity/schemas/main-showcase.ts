export default {
  name: 'main-showcase',
  type: 'document',
  title: 'Main Showcase',
  preview: {
    select: {
      title: 'title',
      subtitle: 'title',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Showcase title',
    },
    {
      name: 'titleColoredWords',
      type: 'string',
      title: 'Showcase title (ბოლო რამდენიმე სიტყვა რომელსაც სხვა ფერი აქვს)',
    },
    {
      name: 'paragraph',
      type: 'text',
      title: 'Showcase paragraph',
    },

    {
      name: 'showcaseKeyWords',
      title: 'Showcase key words',
      type: 'array',
      of: [{type: 'string'}],
    },
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
