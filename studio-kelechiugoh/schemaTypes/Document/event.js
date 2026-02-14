export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'eventDate', type: 'datetime', title: 'Event Date' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'eventType', type: 'string', title: 'Event Type' },
    { name: 'featuredImage', type: 'image', title: 'Featured Image', options: { hotspot: true } },
    { name: 'registrationLink', type: 'url', title: 'Registration Link' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'location', media: 'featuredImage' }
  }
};
