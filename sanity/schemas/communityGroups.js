export default {
  name: 'community.groups',
  type: 'object',
  title: 'Group info',
  fields: [
    {
      title: 'Group name',
      name: 'name',
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
  ],
};
