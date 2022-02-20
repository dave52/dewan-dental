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
      title: 'Row order',
      description: 'Row order',
      name: 'rowOrder',
      type: 'number',
    },
    {
      title: 'Order',
      description: 'Order within row',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Bio',
      name: 'bio',
      description: 'Team member description and bio.',
      type: 'teamBio',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
    },
  },
};
