import navigation from "./navigation";

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fieldsets: [
    {
      title: 'SEO & Metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      title: 'Page title',
      name: 'pageTitle',
      type: 'string',
      maxLength: 50,
    },
    {
      title: "Slug",
      description: "URL friendly version of the name, i.e. DeWan Dental Services -> dewan-dental-services",
      name: "slugTitle",
      type: "slug",
      options: {
          source: "pageTitle",
      },
    },
    {
      title: "Page order",
      description: "Optional: can add '1', '2' etc. to determine page list order under their 'Navigation category', defaults pages to sort by alphabetical order if this is left blank",
      name: "order",
      type: "number",
    },
    {
      title: 'Navigation category',
      description: "The nav category this page will be placed under, if navigation category and page name are the same the nav link will go directly to page",
      name: 'navigation',
      type: "reference",
      to: [
          {
              type: 'navigation',
          },
      ]
    },
    {
      title: 'Content',
      description: 'Add page content: images, links and text below',  
      name: 'content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
      navigation: 'navigation.navCategory',
      slugTitle: 'slugTitle'
    },
    prepare(selection) {
      const { title, navigation } = selection;

      return {
        title: slugTitle,
        subtitle: slugTitle,
      }
    },
  },
};
