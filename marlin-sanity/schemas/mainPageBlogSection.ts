export default {
  name: 'mainPageBlogSection',
  type: 'document',
  title: 'Main Page Blog Section',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {name: 'heading', type: 'localeString', title: 'heading'},
    {name: 'blogPostCount', type: 'number', title: 'Number of blog post cards on this section'},
    {name: 'buttonText', type: 'localeString', title: 'Button Text'},
  ],
}
