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
      name: 'links',
      title: 'Navbar Links',
      type: 'object',
      fields: [{name: 'link1', type: 'string', title: 'Link 1'}],
    },
  ],
}
