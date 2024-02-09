import {defineType} from 'sanity'

export const blogPostTagColors = defineType({
  name: 'blogPostTagColors',
  title: 'Blog Post Tags Colors',
  type: 'document',
  preview: {
    select: {
      title: 'tagColors.colorName',
      subtitle: 'tagColors.colorName',
    },
  },
  fields: [
    {
      name: 'tagColors',
      title: 'Tag colors',
      type: 'object',
      fields: [
        {
          name: 'bgColor',
          title: 'Background Color',
          type: 'string',
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
        },
        {
          name: 'colorName',
          title: 'Color Name',
          type: 'string',
        },
      ],
    },
  ],
})
