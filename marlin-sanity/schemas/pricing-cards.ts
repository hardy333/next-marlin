export default {
  name: 'pricingPage',
  type: 'document',
  title: 'Pricing page',
  preview: {
    select: {
      title: 'showcase.showcaseTitle',
      subtitle: 'showcase.showcaseTitle',
    },
  },
  fields: [
    {
      name: 'showcase',
      title: 'showcase',
      type: 'object',
      fields: [
        {name: 'showcaseTitle', type: 'text', title: 'Showcase title'},
        {name: 'showcaseParagraph', type: 'text', title: 'Showcase paragraph'},
      ],
    },
    {
      name: 'monthlyPrices',
      title: 'Monthly prices',
      type: 'object',
      fields: [
        {name: 'leftCardPrice', type: 'number', title: 'left card price - for retailers'},
        {name: 'leftCardPriceForVendors', type: 'number', title: 'left card price - for vendors'},

        {name: 'middleCardPrice', type: 'number', title: 'Middle card price - for retailers'},
        {
          name: 'middleCardPriceForVendors',
          type: 'number',
          title: 'Middle card price - for vendors',
        },

        {name: 'rightCardPrice', type: 'number', title: 'Right card price - for retailers'},
        {name: 'rightCardPriceForVendors', type: 'number', title: 'Right card price - for vendors'},
      ],
    },
    {
      name: 'yearlyPrices',
      title: 'Yearly prices',
      type: 'object',
      fields: [
        {name: 'leftCardPrice', type: 'number', title: 'left card price - for retailers'},
        {name: 'leftCardPriceForVendors', type: 'number', title: 'left card price - for vendors'},

        {name: 'middleCardPrice', type: 'number', title: 'Middle card price - for retailers'},
        {
          name: 'middleCardPriceForVendors',
          type: 'number',
          title: 'Middle card price - for vendors',
        },

        {name: 'rightCardPrice', type: 'number', title: 'Right card price - for retailers'},
        {name: 'rightCardPriceForVendors', type: 'number', title: 'Right card price - for vendors'},
      ],
    },
    {
      name: 'cardLeft',
      title: 'Left Card',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'cardMiddle',
      title: 'Middle Card',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'cardRight',
      title: 'Right Card',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
