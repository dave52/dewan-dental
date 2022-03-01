export default {
  name: 'community',
  title: 'Community Partnerships',
  type: 'document',
  fields: [
    {
      title: 'Community Partnerships',
      name: 'communityTitle',
      type: 'string',
      readOnly: true,
    },
    {
      type: 'array',
      name: 'groups',
      title: 'Groups',
      of: [{ type: 'community.groups' }],
    },
    {
      type: 'array',
      name: 'images',
      title: 'Image gallery',
      of: [{ type: 'community.images' }],
    },
  ],
  initialValue: {
    communityTitle: 'Community Partnerships',
  },
};
