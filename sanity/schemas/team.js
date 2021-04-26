export default {
  title: 'Team DeWan',
  name: 'team',
  type: 'document',
  fields: [
    {
      title: 'First name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
    {
      title: 'Photo',
      name: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
        title: 'Bio or description',
        name: 'bio',
        type: 'string'
    },
  ],
};
