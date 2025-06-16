// studio/schemas/skill.ts
export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  fields: [
    { name: 'name', type: 'string', title: 'Skill Name' },
    { name: 'level', type: 'string', title: 'Proficiency Level' }
  ]
}