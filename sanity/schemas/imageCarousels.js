export default {
  title: 'Image carousels',
  name: 'imageCarousels',
  type: 'document',
  fields: [
    {
      title: 'Carousels',
      name: 'carousels',
      type: 'array',
      of: [{ type: 'imageCarousels.Carousel' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
