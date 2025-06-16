export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'link', type: 'url', title: 'Project Link' },
    { name: 'image', type: 'image', title: 'Image' }
  ]
}