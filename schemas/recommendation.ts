// schemas/recommendation.ts
export default {
  name: 'recommendation',
  type: 'document',
  title: 'Recommendation',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'role', type: 'string', title: 'Role' },
    { name: 'company', type: 'string', title: 'Company' },
    { name: 'text', type: 'text', title: 'Recommendation Text' }
  ]
}
