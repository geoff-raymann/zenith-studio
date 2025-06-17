export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
