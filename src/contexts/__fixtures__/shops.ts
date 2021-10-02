import { Shops } from 'generated/graphql'

const shops: { shops: { values: Shops[] } } = {
  shops: {
    values: [
      {
        name: 'Geräte Reperatur Deluxe',
        description: 'That is shop 1 description',
        pictures: ['https://placeimg.com/640/480/animals?0'],
        address: {
          city: 'Berlin',
          street: 'Alt Wittenau 123',
          postalCode: '12345',
        },
      },
      {
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
          postalCode: '12345',
        },
      },
      {
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
          postalCode: '13437',
        },
      },
    ],
  },
}

export default shops
