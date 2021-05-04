export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      title: "Parent nav title",
      description: "40 characters or less",
      name: "parentNav",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .warning("Navigation categories need to be less than 40 characters"),
    },
    {
      title: "Parent nav slug",
      description:
        "URL friendly version of the name, i.e. DeWan Dental Services -> dewan-dental-services",
      name: "slug",
      type: "slug",
      options: {
        source: "parentNav",
      },
    },
    {
      title: "Parent nav item order",
      description:
        "Optional: can add '1', '2' etc. to make nav item first and second from left to right, and leave the rest blank to just fall into alphabetical order",
      name: "order",
      type: "number",
    },
    {
      type: "array",
      name: "subnav",
      title: "Subnav items",
      of: [{ type: "navigation.subnav" }],
    },
  ],
};
