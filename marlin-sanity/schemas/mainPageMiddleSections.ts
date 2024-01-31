export default {
    name: 'features',
    type: 'document',
    title: 'Main Page middle sections',
    preview: {
        title: 'title',
        subtitle: "leftFeature"
    },
    fields: [
      {
        name: 'section1',
        title: 'First Section (what is marlin)',
        type: 'object',
        fields: [
          {name: 'heading', type: 'string', title: 'heading'},
          {name: 'paragraph', type: 'string', title: 'paragraph'},
        ],
      },
      {
        name: 'section2',
        title: "Second Sections (who it's for)",
        type: 'object',
        fields: [
          {name: 'heading', type: 'string', title: 'heading'},
          {name: 'paragraph', type: 'string', title: 'paragraph'},
        ],
      },
      {
        name: 'section3',
        title: 'Third Section (How it works)',
        type: 'object',
        fields: [
          {name: 'heading', type: 'string', title: 'heading'},
          {name: 'paragraph', type: 'string', title: 'paragraph'},
        ],
      },
    ],
  }
  