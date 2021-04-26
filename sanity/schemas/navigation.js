export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      title: "Navigation category",
      description: "40 characters or less",
      name: "navCategory",
      type: "string",
      validation: Rule => Rule.required().max(40).warning('Navigation categories need to be less than 40 characters'),
    },
    {
      title: "Slug",
      description: "URL friendly version of the name, i.e. DeWan Dental Services -> dewan-dental-services",
      name: "slug",
      type: "slug",
      options: {
        source: "navCategory",
      },
    },
    {
      title: "Navigation order",
      description: "Optional: can add '1', '2' etc. to create first and second from left to right, and leave the rest blank to just fall into alphabetical order",
      name: "order",
      type: "number",
    },
  ],
};
