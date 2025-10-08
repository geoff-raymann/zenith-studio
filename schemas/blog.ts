export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'date', type: 'datetime', title: 'Published Date' },
    { name: 'summary', type: 'text', title: 'Summary' },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }] },
    {
      name: 'image',
      type: 'image',
      title: 'Featured Image',
      options: { hotspot: true }
    },
    {
      name: 'likes',
      type: 'number',
      title: 'Likes',
      initialValue: 0,
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Comments',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'comment', type: 'text', title: 'Comment' },
            { name: 'createdAt', type: 'datetime', title: 'Created At', initialValue: (new Date()).toISOString() }
          ]
        }
      ]
    }
  ]
}
