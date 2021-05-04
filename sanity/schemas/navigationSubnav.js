export default {
  name: "navigation.subnav",
  type: "object",
  title: "Subnav items",
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
      description: "Subnav titles can point to a page or function as a header for an additional subnav",
      to: [{ type: "page" }],
      // _weak: true // enable if you don't want reference integrity checks
    },
    {
      type: "array",
      name: "links",
      title: "Additional subnav",
      description: "Subnav titles can point to a page or function as a header for an additional subnav",
      of: [{ type: "navigation.link" }],
    },
  ],
};
