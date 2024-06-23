export async function seed(knex) {
  await knex('animals').del()

  await knex('animals').insert([
    { id: 1, name: 'Lion', species: 'Panthera leo', image: '/images/lion.png' },
    { id: 2, name: 'Elephant', species: 'Loxodonta', image: '/images/ele.png' },
    {
      id: 3,
      name: 'Tiger',
      species: 'Panthera tigris',
      image: '/images/tiger.png',
    },
    {
      id: 4,
      name: 'Giraffe',
      species: 'Giraffa camelopardalis',
      image: '/images/giraffe.png',
    },
    {
      id: 5,
      name: 'Zebra',
      species: 'Equus quagga',
      image: '/images/zebra.png',
    },
  ])
}
