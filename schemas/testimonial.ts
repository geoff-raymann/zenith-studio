// schemas/testimonial.ts
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'role', type: 'string', title: 'Role/Title' },
    { name: 'company', type: 'string', title: 'Company' },
    { name: 'quote', type: 'text', title: 'Testimonial Quote' },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
