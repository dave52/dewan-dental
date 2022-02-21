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
      name: 'title',
      type: 'string',
      maxLength: 50,
    },
    {
      title: 'Slug',
      description:
        'URL friendly version of the name, i.e. DeWan Dental Services -> dewan-dental-services',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Parent nav item',
      description:
        'The nav category this page will be placed under, if navigation category and page name are the same the nav link will go directly to page',
      name: 'navigation',
      type: 'reference',
      to: [
        {
          type: 'navigation',
        },
      ],
    },
    {
      title: 'Content',
      description: 'Add page content: images, links and text below',
      name: 'content',
      type: 'blockContent',
    },
    {
      title: 'Should page have a hero image?',
      description:
        'Image is optional, placed to the right of text block on desktop, and is below directly below page title on mobile',
      name: 'hasContentImage',
      type: 'boolean',
      default: false,
    },
    {
      title: 'Add a hero image',
      name: 'contentImage',
      type: 'image',
      hidden: ({ document }) => !document?.hasContentImage,
    },
    {
      title: 'Hero image descriptive text for SEO',
      name: 'contentImageAlt',
      type: 'string',
      hidden: ({ document }) => !document?.hasContentImage,
    },
    {
      title: 'Hero image max width supported in pixels',
      description: 'Optional, only use if needed',
      name: 'contentImageMaxWidth',
      type: 'number',
      hidden: ({ document }) => !document?.hasContentImage,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'navigation.title',
    },
  },
  orderings: [
    {
      title: 'Parent nav items ascending',
      name: 'navigationSort',
      by: [
        { field: 'navigation.title', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
    {
      title: 'Parent nav items descending',
      name: 'navigationSort',
      by: [
        { field: 'navigation.title', direction: 'desc' },
        { field: 'title', direction: 'desc' },
      ],
    },
  ],
};
