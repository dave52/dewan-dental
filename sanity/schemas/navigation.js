export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      title: 'Parent nav title',
      description: '40 characters or less',
      name: 'title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .warning('Navigation categories need to be less than 40 characters'),
    },
    {
      title: 'Parent nav item order',
      description:
        "Optional: can add '1', '2' etc. to make nav item first and second in order of appearance, and leave the rest blank to just fall into alphabetical order.",
      name: 'order',
      type: 'number',
    },
    {
      type: 'reference',
      name: 'page',
      title: 'Select page reference',
      description:
        "Only choose one: 'Parent nav items' can either... A) Link to a page with 'Select page reference' or B) act as a category for additional child nav items with 'Child nav items', i.e. parent nav item > child nav item > grandchild nav items.",
      to: [{ type: 'page' }],
    },
    {
      type: 'array',
      name: 'childNav',
      title: 'Child nav items',
      of: [{ type: 'navigation.childNav' }],
    },
  ],
};
