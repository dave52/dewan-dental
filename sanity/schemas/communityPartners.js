export default {
  name: 'community.partners',
  type: 'object',
  title: 'Partners info',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Name of partner',
    },
    {
      type: 'url',
      name: 'link',
      title: "Partner's website",
      description: 'Optional: add link to partner website if they have one',
    },
  ],
};
