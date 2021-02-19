import { GetShopQuery } from 'generated/graphql'

const shops: GetShopQuery = {
  shops: {
    values: [
      {
        id: '1234',
        name: 'Geräte Reperatur Deluxe',
        description: 'That is shop 1 description',
        pictures: ['https://placeimg.com/640/480/animals?0'],
        address: {
          city: 'Berlin',
          street: 'Alt Wittenau 123',
          zipcode: 12345,
        },
      },
      {
        id: '1235',
        name: 'Mach heile Shop',
        tags: ['Zuverlässlich', 'klein', 'hm...'],
        description: 'That is shop 2 description',
        pictures: [
          'https://placeimg.com/640/480/animals?1',
          'https://placeimg.com/640/480/animals?2',
          'https://placeimg.com/640/480/animals?3',
          'https://placeimg.com/640/480/animals?4',
        ],
        address: {
          city: 'Berlin',
          street: 'Irgendwo in Potsdam',
          zipcode: 12345,
        },
      },
      {
        id: '1236',
        name: 'Bastis kleine Bumsbude',
        description: 'That is shop 3 description',
        tags: ['Günstig', 'Besondere Dienstleistungen'],
        pictures: [
          'https://placeimg.com/640/480/animals?5',
          'https://placeimg.com/640/480/animals?6',
          'https://placeimg.com/640/480/animals?7',
          'https://placeimg.com/640/480/animals?8',
          'https://placeimg.com/640/480/animals?9',
          'https://placeimg.com/640/480/animals?10',
        ],

        address: {
          city: 'Berlin',
          street: 'Wilhem Gercke Shit Street 10a',
          zipcode: 13437,
        },
      },
    ],
  },
}

export default shops
