import {defineType} from 'sanity'

export const blogPageTags = defineType({
  name: 'tag',
  title: 'Blog Page Tags',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Tag Name',
      type: 'string',
    },
  ],
})
