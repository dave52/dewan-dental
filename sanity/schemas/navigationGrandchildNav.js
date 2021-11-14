// tempNavigationLink.js
export default {
  name: 'navigation.grandchildNav',
  type: 'object',
  title: 'Grandchild nav item',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Grandchild nav title',
    },
    {
      type: 'reference',
      name: 'page',
      title: 'Select page reference',
      description: "Choose a page for the 'grandchild nav item' to link to.",
      to: [{ type: 'page' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      targetTitle: 'target.title',
    },
    prepare: ({ title, targetTitle }) => ({
      title: title || targetTitle,
    }),
  },
};
