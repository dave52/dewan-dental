export default {
  name: 'navigation.childNav',
  type: 'object',
  title: 'Child nav items',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Child nav title',
    },
    {
      type: 'reference',
      name: 'page',
      title: 'Select page reference',
      description:
        "Only choose one: 'Child nav items' can either... A) Link to a page with 'Select page reference' or B) act as a category for additional nav items with 'Grandchild nav items', i.e. parent nav item > child nav item > grandchild nav items.",
      to: [{ type: 'page' }],
    },
    {
      type: 'array',
      name: 'grandchildNav',
      title: 'Grandchild nav items',
      description:
        "Only choose one: 'Child nav items' can either... A) Link to a page with 'Select page reference' or B) act as a category for additional nav items with 'Grandchild nav items', i.e. parent nav item > child nav item > grandchild nav items.",
      of: [{ type: 'navigation.grandchildNav' }],
    },
  ],
};
