const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'geo', title: 'Georgian'},
]

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
      title: 'Showcase title',
      type: 'object',
      fields: supportedLanguages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        fieldset: lang.isDefault ? null : 'translations',
      })),
      fieldsets: [
        {
          title: 'Translations',
          name: 'translations',
          options: {collapsible: true},
        },
      ],
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
    // {
    //   name: 'exampleText',
    //   title: 'example text',
    //   type: 'object',

    //   fields: supportedLanguages.map((lang) => ({
    //     title: lang.title,
    //     name: lang.id,
    //     type: 'string',
    //     fieldset: lang.isDefault ? null : 'translations',
    //   })),
    //   fieldsets: [
    //     {
    //       title: 'Translations',
    //       name: 'translations',
    //       options: {collapsible: true},
    //     },
    //   ],
    // },
  ],
}
