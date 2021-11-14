export default {
  title: 'Hours',
  name: 'contactInfo.hours',
  type: 'object',
  fields: [
    {
      title: 'Day(s)',
      name: 'day',
      type: 'string',
      description:
        'Can be a single day i.e. "Tue." or a range i.e. "Mon. - Wed."',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'string',
      description: 'i.e. "8AM - 4:30PM"',
    },
  ],
  preview: {
    select: {
      day: 'day',
      hours: 'hours'
    },
    prepare: ({ day, hours }) => ({
      title: `${day}: ${hours}`,
    }
  }),
};
