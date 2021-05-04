// tempNavigationLink.js
export default {
  name: "navigation.link",
  type: "object",
  title: "Additional subnav item",
  preview: {
    select: {
      title: "title",
      targetTitle: "target.title",
    },
    prepare: ({ title, targetTitle }) => ({
      title: title || targetTitle,
    }),
  },
  fields: [
    {
      type: "string",
      name: "title",
      title: "Subnav title",
    },
    {
      type: "reference",
      name: "target",
      title: "Select page reference",
      to: [{ type: "page" }],
      // description: 'No target article turns the item into a subheading.',
      // _weak: true // enable if you don't want reference integrity checks
    },
    //   {
    //     type: 'array',
    //     name: 'children',
    //     title: 'Children',
    //     of: [{ type: 'tempNavigation.link' }],
    //   },
  ],
};
