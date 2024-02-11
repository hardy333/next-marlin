export default {
  name: 'leadForm',
  type: 'document',
  title: 'Lead form',
  preview: {
    title: 'title',
    subtitle: 'title',
  },
  fields: [
    {
      name: 'title',
      title: 'Form Title',
      type: 'localeString',
    },
    {
      name: 'image',
      title: 'Form Illustration',
      type: 'image',
    },
    {
      name: 'btnText',
      title: 'Submit Button text',
      type: 'localeString',
    },
  ],
}
