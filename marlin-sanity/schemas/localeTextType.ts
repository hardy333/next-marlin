// ./schemas/localeStringType.ts

import {defineType} from 'sanity'
import {supportedLanguages} from './localeStringType'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.

export const localeText = defineType({
  title: 'Localized Text',
  name: 'localeText',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: true},
    },
  ],
  // Dynamically define one field per language
  // fields: supportedLanguages.map(lang => ({
  //   title: lang.title,
  //   name: lang.id,
  //   type: 'string',
  //   fieldset: lang.isDefault ? null : 'translations'
  // }))
  fields: [
    {
      title: supportedLanguages[0].title,
      name: supportedLanguages[0].id,
      type: 'text',
      fieldset: supportedLanguages[0].isDefault ? undefined : 'translations',
    },
    {
      title: supportedLanguages[1].title,
      name: supportedLanguages[1].id,
      type: 'text',
      fieldset: supportedLanguages[1].isDefault ? undefined : 'translations',
    },
  ],
})
