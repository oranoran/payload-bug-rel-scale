import { CollectionConfig } from 'payload/types'

const Team: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}

export default Team
