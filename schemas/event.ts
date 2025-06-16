export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    { name: 'title', type: 'string', title: 'Event Title' },
    { name: 'date', type: 'datetime', title: 'Event Date' },
    { name: 'description', type: 'text', title: 'Event Description' }
  ]
}