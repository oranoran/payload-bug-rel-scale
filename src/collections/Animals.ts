import { CollectionConfig } from 'payload/types'

const Animal: CollectionConfig = {
  slug: 'animals',
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

export default Animal
