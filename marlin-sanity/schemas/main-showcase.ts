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
        title: 'Showcase title'
      },
      {
        name: 'titleColoredWords',
        type: 'text',
        title: 'Showcase title (ბოლო რამდენიმე სიტყვა რომელსაც სვა ფერი აქვს)'
      },
      {
        name: 'paragraph',
        type: 'text',
        title: 'Showcase paragraph'
      },
      {
        name: 'ctaText',
        type: 'string',
        title: 'Cta text(ღილაკის ტექსტი)'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Showcase main image',
      },
    ]
  }