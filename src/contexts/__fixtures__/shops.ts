import { GetShopQuery } from 'generated/graphql'

const shops: GetShopQuery = {
  shops: {
    values: [
      {
        id: '1234',
        name: 'Geräte Reperatur Deluxe',
        description: 'That is shop 1 description',
        pictures: ['https://placeimg.com/640/480/animals?0'],
      },
      {
        id: '1235',
        name: 'Mach heile Shop',
        description: 'That is shop 2 description',
        pictures: [
          'https://placeimg.com/640/480/animals?0',
          'https://placeimg.com/640/480/animals?1',
          'https://placeimg.com/640/480/animals?2',
          'https://placeimg.com/640/480/animals?3',
        ],
      },
      {
        id: '1236',
        name: 'Bastis kleine Bumsbude',
        description: 'That is shop 3 description',
        pictures: [
          'https://placeimg.com/640/480/animals?0',
          'https://placeimg.com/640/480/animals?1',
          'https://placeimg.com/640/480/animals?2',
          'https://placeimg.com/640/480/animals?3',
          'https://placeimg.com/640/480/animals?4',
          'https://placeimg.com/640/480/animals?5',
        ],
      },
    ],
  },
}

export default shops
