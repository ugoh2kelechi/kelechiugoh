export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name', maxLength: 96 } },
    { name: 'bio', type: 'array', of: [{ type: 'block' }], title: 'Biography' },
    { name: 'avatar', type: 'image', title: 'Avatar' }
  ]
};
