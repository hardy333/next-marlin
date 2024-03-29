import {PlayIcon} from '@sanity/icons'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  icon: PlayIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'categoryTag',
      title: 'Category Tag',
      // type: 'string',
      // of: [{type: 'reference', to: [{type: 'tag'}]}],
      type: 'reference',
      to: [{type: 'tag'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
