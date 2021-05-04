// navigation.js
export default {
  name: "tempNavigation",
  type: "document",
  title: "Temp Nested Navigation",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name nav",
    },
    //   {
    //     type: 'string',
    //     name: 'title',
    //     title: 'Title nav',
    //   },
    {
      type: "array",
      name: "sections",
      title: "Sections",
      of: [{ type: "tempNavigation.section" }],
    },
  ],
};
