import navigation from "./navigation";

export default {
  name: "page",
  title: "Pages",
  type: "document",
  fieldsets: [
    {
      title: "SEO & Metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      title: "Page title",
      name: "pageTitle",
      type: "string",
      maxLength: 50,
    },
    {
      title: "Slug",
      description:
        "URL friendly version of the name, i.e. DeWan Dental Services -> dewan-dental-services",
      name: "slug",
      type: "slug",
      options: {
        source: "pageTitle",
      },
    },
    {
      title: "Page order in navigation",
      description:
        "Optional: can add '1', '2' etc. to determine page list order under their 'Parent nav item', defaults pages to be sorted by alphabetical order",
      name: "order",
      type: "number",
    },
    {
      title: "Parent nav item",
      description:
        "The nav category this page will be placed under, if navigation category and page name are the same the nav link will go directly to page",
      name: "navigation",
      type: "reference",
      to: [
        {
          type: "navigation",
        },
      ],
    },
    {
      title: "Content",
      description: "Add page content: images, links and text below",
      name: "content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "navigation.parentNav",
    },
  },
  orderings: [
    {
      title: "Parent nav items ascending",
      name: "navigationSort",
      by: [
        { field: "navigation.parentNav", direction: "asc" },
        { field: "pageTitle", direction: "asc" },
      ],
    },
    {
      title: "Parent nav items descending",
      name: "navigationSort",
      by: [
        { field: "navigation.parentNav", direction: "desc" },
        { field: "pageTitle", direction: "desc" },
      ],
    },
  ],
};
