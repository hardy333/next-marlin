export default {
  name: 'mainPageBlogSection',
  type: 'document',
  title: 'Main Page Blog Section',
  preview: {
    title: 'title',
    subtitle: 'leftFeature',
  },
  fields: [
    {name: 'heading', type: 'string', title: 'heading'},
    {name: 'blogPostCount', type: 'number', title: 'Number of blog post cards on this section'},
    {name: 'buttonText', type: 'string', title: 'Button Text'},
  ],
}
