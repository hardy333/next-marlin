import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {languageFilter} from '@sanity/language-filter'

export default defineConfig({
  name: 'default',
  title: 'marlin-sanity',

  projectId: 'v3wtj8ka',
  dataset: 'production',

  plugins: [
    languageFilter({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'no', title: 'Norwegian'},
        {id: 'fr', title: 'French'},
        //...
      ],
      // Select Norwegian (Bokmål) by default
      defaultLanguages: ['en'],
      // Only show language filter for document type `page` (schemaType.name)
      // documentTypes: ['page'],
      // filterField: (enclosingType, member, selectedLanguageIds) =>
      //   !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(member.name),
    }),
    structureTool(),
    visionTool(),
  ],
  schema: {
    //@ts-ignore
    types: schemaTypes,
  },
})
