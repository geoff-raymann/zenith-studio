export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'date', type: 'datetime', title: 'Date' },
    { name: 'description', type: 'text', title: 'Description' },
    {
      name: 'video',
      type: 'file',
      title: 'Event Video',
      options: { accept: 'video/*' }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Event Image'
    }
  ]
}
