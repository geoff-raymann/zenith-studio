export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'date', type: 'datetime', title: 'Published Date' },
    { name: 'summary', type: 'text', title: 'Summary' },
    {
      name: 'image',
      type: 'image',
      title: 'Featured Image',
      options: { hotspot: true }
    }
  ]
}
