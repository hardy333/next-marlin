export default {
    name: 'main-showcase',
    type: 'document',
    title: 'Main Showcase',
    preview: {
      select: {
        title: 'title',
        subtitle:"title"
      }
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        title: 'Title of the showcase'
      },
      {
        name: 'paragraph',
        type: 'text',
        title: 'Showcase paragraph'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Showcase main image',
      },
    ]
  }