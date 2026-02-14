export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', type: 'text', title: 'Excerpt' },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'featuredImage', type: 'image', title: 'Featured Image', options: { hotspot: true } },
    { name: 'categories', type: 'array', title: 'Categories', of: [{ type: 'string' }] },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'readTime', type: 'number', title: 'Read Time (minutes)' }
  ],
  preview: {
    select: { title: 'title', media: 'featuredImage' }
  }
};
