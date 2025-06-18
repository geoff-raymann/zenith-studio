// schemas/recommendation.ts
export default {
  name: 'recommendation',
  title: 'Recommendation',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'relationship', type: 'string', title: 'Relationship/Context' },
    { name: 'recommendation', type: 'text', title: 'Recommendation Message' },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar (Optional)',
      options: {
        hotspot: true,
      },
    },
  ],
}
