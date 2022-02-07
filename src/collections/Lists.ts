import { CollectionConfig } from 'payload/types'

const Mix: CollectionConfig = {
  slug: 'lists',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'values',
      type: 'relationship',
      relationTo: ['animals', 'teams', 'spaceships'],
      hasMany: true,
    },
  ],
}

export default Mix
