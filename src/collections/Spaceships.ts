import { CollectionConfig } from 'payload/types'

const Spaceships: CollectionConfig = {
  slug: 'spaceships',
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

export default Spaceships
