export default {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'document',
  fields: [
    {
      title: "Reviewer's Name",
      name: 'name',
      type: 'string',
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'string',
    },
    {
      title: 'Full review',
      name: 'review',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote',
    },
  },
};
