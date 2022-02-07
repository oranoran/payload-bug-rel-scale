import * as mongoDB from 'mongodb'
import { Payload } from '../../../payload/dist/index'
import { Animal, Spaceship, Team } from './payload-types'

// await populate()

interface Named {
  name: string
}
export async function populate(payload: Payload) {
  const existing = await payload.find({
    collection: 'animals',
    where: { name: { equals: 'Dog' } },
  })
  if (existing?.docs?.[0]) {
    console.log(`Already populated`)
    return
  }
  await create(payload, 'animals', getAnimals())
  await create(payload, 'teams', getTeams())
  await create(payload, 'spaceships', getSpaceships())
  await createBigList(payload)
}

async function create(payload: Payload, collection: string, names: string[]) {
  await Promise.all(
    names.map(async (name) => {
      console.log(`Creating ${collection}: ${name}`)
      await payload.create({
        collection,
        data: { name },
        overrideAccess: true,
      })
    })
  )
}

async function createBigList(payload: Payload) {
  const allAnimals = (await payload.find({ collection: 'animals', limit: 500 }))
    .docs as Animal[]
  const allTeams = (await payload.find({ collection: 'teams', limit: 500 })).docs as Team[]
  const allSpaceships = (await payload.find({ collection: 'spaceships', limit: 500 }))
    .docs as Spaceship[]
  const data = {
    name: 'a list',
    values: [
      ...allAnimals
        .slice(0, 50)
        .map((a) => ({ value: a.id, relationTo: 'animals' })),
      ...allTeams
        .slice(0, 20)
        .map((a) => ({ value: a.id, relationTo: 'teams' })),
      ...allSpaceships
        .slice(0, 5)
        .map((a) => ({ value: a.id, relationTo: 'spaceships' })),
    ],
  }
  await payload.create({
    collection: 'lists',
    data,
    overrideAccess: true,
  })
}

function getAnimals() {
  return [
    'Dog',
    'Ainu Dog',
    'Airedale Terrier',
    'Akbash',
    'Akita',
    'Alaskan Malamute',
    'Albatross',
    'Aldabra Giant Tortoise',
    'Alligator',
    'Alpine Dachsbracke',
    'American Bulldog',
    'American Cocker Spaniel',
    'American Coonhound',
    'American Eskimo Dog',
    'Angelfish',
    'Ant',
    'Anteater',
    'Antelope',
    'Appenzeller Dog',
    'Arctic Fox',
    'Arctic Hare',
    'Arctic Wolf',
    'Armadillo',
    'Asian Elephant',
    'Asian Giant Hornet',
    'Asian Palm Civet',
    'Asiatic Black Bear',
    'Australian Cattle Dog',
    'Australian Kelpie Dog',
    'Australian Mist',
    'Avocet',
    'Axolotl',
    'Aye Aye',
    'Baboon',
    'Bactrian Camel',
    'Badger',
    'Balinese',
    'Banded Palm Civet',
    'Bandicoot',
    'Barb',
    'Barn Owl',
    'Barnacle',
    'Barracuda',
    'Basenji Dog',
    'Basking Shark',
    'Basset Hound',
    'Bat',
    'Bavarian Mountain Hound',
    'Beagle',
    'Bear',
    'Bearded Collie',
    'Bearded Dragon',
    'Beaver',
    'Bedlington Terrier',
    'Beetle',
    'Bengal Tiger',
    'Bernese Mountain Dog',
    'Bichon Frise',
    'Binturong',
    'Bird',
    'Birds Of Paradise',
    'Birman',
    'Bison',
    'Black Bear',
    'Black Rhinoceros',
    'Black Russian Terrier',
    'Black Widow Spider',
    'Bloodhound',
    'Blue Lacy Dog',
    'Blue Whale',
    'Bobcat',
    'Bolognese Dog',
    'Bombay',
    'Bongo',
    'Bonobo',
    'Booby',
    'Border Collie',
    'Border Terrier',
    'Bornean Orang-utan',
    'Borneo Elephant',
    'Boston Terrier',
    'Bottle Nosed Dolphin',
    'Boxer Dog',
    'Boykin Spaniel',
    'Brazilian Terrier',
    'Brown Bear',
    'Budgerigar',
    'Buffalo',
    'Bull Mastiff',
    'Bull Shark',
    'Bull Terrier',
    'Bulldog',
    'Bullfrog',
    'Bumble Bee',
    'Burmese',
    'Burrowing Frog',
    'Butterfly',
    'Butterfly Fish',
    'Caiman',
    'Caiman Lizard',
    'Cairn Terrier',
    'Camel',
    'Canaan Dog',
    'Capybara',
    'Caracal',
    'Carolina Dog',
    'Cassowary',
    'Cat',
    'Caterpillar',
    'Chicken',
    'Chihuahua',
    'Chimpanzee',
    'Chinchilla',
    'Chinese Crested Dog',
    'Chinook',
    'Chinstrap Penguin',
    'Chipmunk',
    'Chow Chow',
    'Cichlid',
    'Clouded Leopard',
    'Clown Fish',
    'Clumber Spaniel',
    'Coati',
    'Cockroach',
    'Collared Peccary',
    'Collie',
    'Common Buzzard',
    'Common Frog',
    'Common Loon',
    'Common Toad',
    'Coral',
    'Cow',
    'Coyote',
    'Crab',
    'Crab-Eating Macaque',
    'Crane',
    'Crested Penguin',
    'Crocodile',
    'Cross River Gorilla',
    'Curly Coated Retriever',
    'Cuscus',
    'Cuttlefish',
  ]
}

function getTeams() {
  return [
    'Arsenal',
    'Aston Villa',
    'Brentford',
    'Brighton and Hove Albion',
    'Burnley',
    'Chelsea',
    'Crystal Palace FC',
    'Everton FC',
    'Leeds United',
    'Leicester City',
    'Liverpool',
    'Manchester City',
    'Manchester United',
    'Newcastle United',
    'Norwich City',
    'Southampton',
    'Tottenham Hotspur',
    'Watford',
    'West Ham United',
    'Wolverhampton Wanderers',
    'AFC Bournemouth',
    'Barnsley',
    'Birmingham City',
    'Blackburn Rovers',
    'Blackpool F.C.',
    'Bristol City',
    'Cardiff City',
    'Coventry City',
    'Derby County',
    'Fulham',
    'Huddersfield Town',
    'Hull City',
    'Luton Town',
    'Middlesbrough',
    'Millwall',
    'Nottingham Forest',
    'Peterborough United',
    'Preston North End',
    'Queens Park Rangers',
    'Reading',
    'Sheffield United F.C.',
    'Stoke City',
    'Swansea City',
    'West Bromwich Albion',
  ]
}

function getSpaceships() {
  return [
    'Albatross',
    '03',
    'Arwing',
    'Bottle Suit',
    'Bumblebee',
    'Lima Foxtrot Alpha 43',
    'Kilo Tango Victor 17',
    'Delta Pod',
    'F-302',
    'Gay Deceiver',
    'Javelin',
    'The puddle jumpers and Time Jumper from ',
    'Jupiter II Pod',
    'Longsword',
    '7-89',
    'Knife 26',
    'Seraph',
    'Lunar Recon Ship RM-1',
    'The Pod',
    'Grumman DC-5 ',
    'Bravo 1',
    'Bravo 22',
    'Charlie 217',
    'Echo 51',
    'Echo 136',
    'Echo 206',
    'Echo 419',
    'Kilo 23',
    'Oscar 6',
    'Oscar 8',
    'Victor 933',
    'TREV I',
    'Hinagiku',
    'MarsShip Lander',
    'Lockheed Martin ',
    'Narcissus',
    'Sirius Streak',
    'Starbug',
    'Starfury',
    'ThunderFighter',
    'Trimaxion Drone Ship',
    'Viper Mark II',
    'Viper Mark VII',
    'Wolfen',
    'TARDIS',
    'Phantom',
    'Glorious Advance',
    'Spirit',
    'Brilliant Gift',
  ]
}
