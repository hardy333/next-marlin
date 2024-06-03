export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Footer (ბოლო სექცია)',
      }
    },
  },
  fields: [
    {
      name: 'paragraph',
      title: 'Footer text',
      type: 'localeString',
    },
    // Links List 1
    {
      name: 'list1',
      type: 'object',
      title: '(1) ფუთერის ლინკების პირველი სია',
      fields: [
        {
          name: 'heading',
          type: 'localeString',
          title: 'Heading (მაგ: დამხმარე ბმულები)',
        },
        {
          name: 'links',
          title: 'links',
          type: 'array',
          of: [
            {
              preview: {
                select: {
                  title: 'name.en',
                },
              },
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'name',
                  type: 'localeString',
                },
                {
                  name: 'url',
                  title: 'url',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    // Links 2 
    {
      name: 'list2',
      type: 'object',
      title: '(2) ფუთერის ლინკების მე-2 სია',
      fields: [
        {
          name: 'heading',
          type: 'localeString',
          title: 'Heading (მაგ: დამხმარე ბმულები)',
        },
        {
          name: 'links',
          title: 'links',
          type: 'array',
          of: [
            {
              preview: {
                select: {
                  title: 'name.en',
                },
              },
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'name',
                  type: 'localeString',
                },
                {
                  name: 'url',
                  title: 'url',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    // Links 2 
    {
      name: 'list3',
      type: 'object',
      title: '(3) ფუთერის ლინკების მე-3 სია',
      fields: [
        {
          name: 'heading',
          type: 'localeString',
          title: 'Heading (მაგ: დამხმარე ბმულები)',
        },
        {
          name: 'links',
          title: 'links',
          type: 'array',
          of: [
            {
              preview: {
                select: {
                  title: 'name.en',
                },
              },
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'name',
                  type: 'localeString',
                },
                {
                  name: 'url',
                  title: 'url',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'subParagraph',
      title: 'Sub paragraph',
      type: 'localeString',
    },
    {
      name: 'icons',
      title: 'Social icons',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          type: 'object',
          title: 'facebook',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Url',
            },
            {
              name: 'enable',
              type: 'boolean',
              title: 'enabled',
              initialValue: true,
            },
          ],
        },
        {
          name: 'twitter',
          type: 'object',
          title: 'twitter',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'url',
            },
            {
              name: 'enable',
              type: 'boolean',
              title: 'enabled',
              initialValue: true,
            },
          ],
        },
        {
          name: 'linkedin',
          type: 'object',
          title: 'linkedin',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'url',
            },
            {
              name: 'enable',
              type: 'boolean',
              title: 'enabled',
              initialValue: true,
            },
          ],
        },
        {
          name: 'instagram',
          type: 'object',
          title: 'instagram',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'url',
            },
            {
              name: 'enable',
              type: 'boolean',
              title: 'enabled',
              initialValue: true,
            },
          ],
        },
      ],
    },
  ],
}
