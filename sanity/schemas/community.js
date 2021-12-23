export default {
  name: 'community',
  title: 'Community Partnerships',
  type: 'document',
  fields: [
    {
      title: 'Group name',
      name: 'group',
      type: 'string',
    },
    {
      title: 'Group description',
      name: 'description',
      type: 'text',
    },
    {
      type: 'array',
      name: 'partners',
      title: 'Partnerships',
      of: [{ type: 'community.partners' }],
    },
    {
      type: 'array',
      name: 'images',
      title: 'Image gallery',
      of: [{ type: 'community.images' }],
    },
  ],
};
