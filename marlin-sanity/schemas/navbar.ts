export default {
  name: 'navbar',
  type: 'document',
  title: 'Navbar',
  preview: {
    title: 'title',
    subtitle: 'leftFeature.heading',
  },
  fields: [
    {
      name: 'btnText',
      title: 'Navbar Button text',
      type: 'localeString',
    },
    // {
    //   name: 'links',
    //   title: 'Navbar Links',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'home',
    //       type: 'object',
    //       title: 'home',
    //       fields: [
    //         {
    //           name: 'text',
    //           title: 'value',
    //           type: 'localeString',
    //         },
    //         {
    //           name: 'url',
    //           type: 'string',
    //           title: 'Url',
    //           initialValue: '/',
    //           readonly: true,
    //         },
    //         {
    //           name: 'enable',
    //           type: 'boolean',
    //           title: 'enabled',
    //           initialValue: true,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
}
