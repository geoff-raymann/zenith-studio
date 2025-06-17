export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Project Title' },
    { name: 'description', type: 'text', title: 'Project Description' },
    { name: 'image', type: 'image', title: 'Project Image' },
    { name: 'link', type: 'url', title: 'Project Link' },
    { name: 'tech', type: 'array', title: 'Technologies Used', of: [{ type: 'string' }] }
  ]
}
