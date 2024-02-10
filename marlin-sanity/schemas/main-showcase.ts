import {defineField} from 'sanity'

export default {
  name: 'main-showcase',
  type: 'document',
  title: 'Main Showcase',
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.en',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Showcase title',
      type: 'localeString',
    }),
    {
      name: 'titleColoredWords',
      type: 'localeString',
      title: 'Showcase title (ბოლო რამდენიმე სიტყვა რომელსაც სხვა ფერი აქვს)',
    },
    {
      name: 'paragraph',
      type: 'localeText',
      title: 'Showcase paragraph',
    },

    {
      name: 'showcaseKeyWords',
      title: 'Showcase key words',
      type: 'array',
      of: [{type: 'localeString'}],
      validation: (Rule: any) => Rule.required().min(3).max(3),
    },
    {
      name: 'ctaText',
      type: 'localeString',
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
