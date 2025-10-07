export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Project Title' },
    { name: 'description', type: 'text', title: 'Project Description' },
    { name: 'image', type: 'image', title: 'Project Image' },
    { name: 'link', type: 'url', title: 'Project Link' },
    { name: 'github', type: 'url', title: 'GitHub Repo' },
    { name: 'tech', type: 'array', title: 'Technologies Used', of: [{ type: 'string' }] },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'FinTech', value: 'FinTech' },
          { title: 'Telemed', value: 'Telemed' },
          { title: 'eCommerce', value: 'eCommerce' },
          { title: 'CyberSec', value: 'CyberSec' },
          { title: 'Archives', value: 'Archives' },
        ]
      }
    }
  ]
}
