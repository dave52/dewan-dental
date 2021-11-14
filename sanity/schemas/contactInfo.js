export default {
  title: 'Contact Info',
  name: 'contactInfo',
  type: 'document',
  fields: [
    {
      title: 'Business name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Street address',
      name: 'streetAddress',
      type: 'string',
      description: 'i.e. 10 Downing St.',
    },
    {
      title: 'City, state and zip code',
      name: 'cityStateZip',
      type: 'string',
      description: 'i.e. Portland, OR 97204',
    },
    {
      title: 'Phone number',
      name: 'phoneNumber',
      type: 'string',
      description: 'i.e. 414-420-6900',
    },
    {
      title: 'Email address',
      name: 'emailAddress',
      type: 'string',
      description: 'i.e. admin@parvisandlumberpond.com',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'array',
      of: [{ type: 'contactInfo.hours' }],
    },
  ],
};
