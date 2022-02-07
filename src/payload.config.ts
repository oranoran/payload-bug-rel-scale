import { buildConfig } from 'payload/config'
import Animals from './collections/Animals'
import Lists from './collections/Lists'
import Spaceships from './collections/Spaceships'
import Teams from './collections/Teams'
import Users from './collections/Users'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Animals, Teams, Spaceships, Lists, Users],
})
