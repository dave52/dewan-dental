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
        title: 'Navigation category',
        description: "The nav category this page will be placed under, if navigation category and page name are the same the nav link will go directly to page",
        name: 'navigation',
        type: "reference",
        to: [
            {
                type: 'navigation'
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
        subtitle: 'navigation',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`,
    //   })
    // },
  },
};
