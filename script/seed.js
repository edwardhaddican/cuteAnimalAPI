'use strict'

const db = require('../server/db')
const arrOfAnimalPicsObjects = require('../server/animalImages/index')
console.log('did this work', arrOfAnimalPicsObjects)


const {
  Animals
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const animals = await Promise.all([
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://i.ytimg.com/vi/OCGGdJIo6jI/hqdefault.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://jodilmilnerauthor.files.wordpress.com/2015/02/l-baby-elephant.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://1.bp.blogspot.com/-Bbo2rG8ZsMs/TqBSqR-3PqI/AAAAAAAABWo/KOCyhqt0HKc/s1600/cute+baby+elephants+pictures+001.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://i.pinimg.com/736x/87/ac/9d/87ac9dcf3919987eb20946c723a96483.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cute-baby-elephant-colorful-vivid-wall-art-prints-wall-art-prints.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/cute-baby-elephant-5.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/cute-baby-elephant-8.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/funny-baby-elephant-7.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/funny-baby-elephant-1.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/funny-baby-elephant-6.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/adorable-baby-elephant-10.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/adorable-baby-elephant-4.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/adorable-baby-elephant-12.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'http://twistedsifter.com/wp-content/uploads/2010/12/elephant-mother-and-calf-baby.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://twistedsifter.com/wp-content/uploads/2012/05/cute-baby-elephant-3.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://i.redd.it/vhtyfipx6g451.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://i.pinimg.com/originals/d5/56/2d/d5562db9757dec4c754a53072aec7575.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://www.top13.net/wp-content/uploads/2017/04/adorable-baby-elephants-20.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://media-cdn.tripadvisor.com/media/photo-s/17/56/2f/22/cute-little-baby-elephant.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/cute-baby-elephants-46-5901f9f5c7eff__700.jpg',
      year: '',
      category: "elephants",
      tags: ''
    }),
    Animal.create({
      title: 'Blue',
      description: '',
      photographer: '',
      imagePath: '',
      year: '',
      category: "elephants",
      tags: ''
    }),

  ])

  console.log(`seeded ${animals.length} animals`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
