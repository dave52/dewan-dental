export default {
  name: 'blockContentImage',
  title: 'Content Image',
  type: 'image',
  options: { hotspot: true },
  fields: [
    {
      name: 'imageCaption',
      type: 'string',
      title: 'Caption',
      description:
        'Provide a brief description of the image for SEO and accessibility',
    },
    {
      name: 'imageUrl',
      type: 'string',
      title: 'Link',
      description: 'Images can optionally function as a clickable link',
    },
    {
      name: 'imageMaxWidth',
      type: 'number',
      title: 'Image max width supported in pixels',
    },
  ],
};
