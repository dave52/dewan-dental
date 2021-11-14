export default {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: "Reviewer's name",
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'string',
      description: 'Highlighted quote to feature',
    },
    {
      title: 'Review',
      name: 'review',
      description: 'Full review',
      type: 'string',
    },
  ],
};
