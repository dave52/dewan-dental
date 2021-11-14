export default {
  title: 'Carousel',
  name: 'imageCarousels.Carousel',
  type: 'object',
  fields: [
    {
      title: 'Carousel name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Carousel',
      name: 'carousel',
      type: 'array',
      of: [{ Image }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
