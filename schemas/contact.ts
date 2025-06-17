export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'phone', type: 'string', title: 'Phone' },
    { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
    { name: 'location', type: 'string', title: 'Location' } // ✅ Add this line
  ]
}
