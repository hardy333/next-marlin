// ./schemas/localeStringType.ts

import {defineType, defineField} from 'sanity'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'no', title: 'Norwegian'},
  {id: 'fr', title: 'French'},
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  // Dynamically define one field per language
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
})
