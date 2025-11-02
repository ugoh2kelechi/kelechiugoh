export default {
  name: 'cause',
  title: 'Cause',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'impactStats', type: 'array', title: 'Impact Stats', of: [{ type: 'object', fields: [ { name: 'label', type: 'string' }, { name: 'value', type: 'string' } ] }] },
    { name: 'gallery', type: 'array', title: 'Gallery', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'status', type: 'string', title: 'Status' },
    { name: 'donationGoal', type: 'number', title: 'Donation Goal' }
  ],
  preview: {
    select: { title: 'title', media: 'gallery.0' }
  }
};
