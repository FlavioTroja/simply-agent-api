import prisma from '../lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: 'rauchg@vercel.com' },
      update: {},
      create: {
        name: 'Guillermo',
        surname: 'Rauch',
        phoneNumber: "+393439043904",
        email: 'rauchg@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
      },
    }),
    prisma.users.upsert({
      where: { email: 'lee@vercel.com' },
      update: {},
      create: {
        name: 'Lee',
        surname: 'Robinson',
        email: 'lee@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
      },
    }),
    await prisma.users.upsert({
      where: { email: 'stey@vercel.com' },
      update: {},
      create: {
        name: 'Steven',
        surname: 'Tey',
        email: 'stey@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Liste',
        pack: 1,
        price: 10,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Liste',
        pack: 11,
        price: 100,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'Liste',
        pack: 23,
        price: 200,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 4 },
      update: {},
      create: {
        name: 'AML completo Max 5 interrogazioni',
        pack: 1,
        price: 25,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 5 },
      update: {},
      create: {
        name: 'AML completo Max 5 interrogazioni',
        pack: 10,
        price: 200,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 6 },
      update: {},
      create: {
        name: 'AML completo Max 5 interrogazioni',
        pack: 40,
        price: 400,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 7 },
      update: {},
      create: {
        name: 'AML completo Max 5 interrogazioni',
        pack: 50,
        price: 500,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
    prisma.products.upsert({
      where: { id: 8 },
      update: {},
      create: {
        name: 'AML completo Max 15 interrogazioni',
        pack: 1,
        price: 35,
        image:
          'https://icon-library.com/images/icon-product/icon-product-4.jpg',
      },
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
