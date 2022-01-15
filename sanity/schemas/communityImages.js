export default {
  name: 'community.images',
  type: 'image',
  title: 'Image gallery',
  description:
    'Images should be a X b pixels in dimension to display correctly',
  fields: [
    {
      name: 'imageCaption',
      type: 'string',
      title: 'Caption',
      description:
        'Provide a brief description of the image for SEO and accessibility',
      required: true,
    },
    {
      name: 'imagePosition',
      type: 'string',
      title: 'Image horizontal and vertical position ',
      description:
        'Since images can be rectangular, square, landscape etc. choose a focal point for what area of the image will be seen if some of it must be cropped off',
      required: true,
      options: {
        list: [
          'left top',
          'left center',
          'left bottom',
          'center top',
          'center center',
          'center bottom',
          'right top',
          'right center',
          'right bottom',
        ],
      },
    },
  ],
  initialValue: {
    imagePosition: 'center center',
  },
};
