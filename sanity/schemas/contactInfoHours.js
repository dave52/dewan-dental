export default {
  title: 'Hours',
  name: 'contactInfo.hours',
  type: 'object',
  fields: [
    {
      title: 'Day(s)',
      name: 'days',
      type: 'array',
      description: 'Add as many days as the hours apply to',
      of: [
        {
          type: 'string',
          title: 'Day of the week',
          name: 'day',
          description: 'Day written in long form, i.e. Wednesday',
        },
      ],
    },
    {
      title: 'Opening time',
      name: 'timeOpen',
      type: 'string',
      description: 'i.e. 8AM or Closed',
    },
    {
      title: 'Closing time',
      name: 'timeClosed',
      type: 'string',
      description: 'i.e. 5:30PM or Closed',
    },
  ],
  preview: {
    select: {
      days: 'days',
      timeOpen: 'timeOpen',
      timeClosed: 'timeClosed',
    },
    prepare: ({ days, timeOpen, timeClosed }) => ({
      title: `${days}: ${timeOpen} - ${timeClosed}`,
    }),
  },
};
