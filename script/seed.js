"use strict";

const db = require("../server/db");
const arrOfAnimalPicsObjects = require("../server/animalImages/index");
console.log("did this work", arrOfAnimalPicsObjects);

const { Animals } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const animals = await Promise.all([
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/OCGGdJIo6jI/hqdefault.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://jodilmilnerauthor.files.wordpress.com/2015/02/l-baby-elephant.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://1.bp.blogspot.com/-Bbo2rG8ZsMs/TqBSqR-3PqI/AAAAAAAABWo/KOCyhqt0HKc/s1600/cute+baby+elephants+pictures+001.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/736x/87/ac/9d/87ac9dcf3919987eb20946c723a96483.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cute-baby-elephant-colorful-vivid-wall-art-prints-wall-art-prints.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/cute-baby-elephant-5.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/cute-baby-elephant-8.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/funny-baby-elephant-7.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/funny-baby-elephant-1.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/funny-baby-elephant-6.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/adorable-baby-elephant-10.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/adorable-baby-elephant-4.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/adorable-baby-elephant-12.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "http://twistedsifter.com/wp-content/uploads/2010/12/elephant-mother-and-calf-baby.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://twistedsifter.com/wp-content/uploads/2012/05/cute-baby-elephant-3.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath: "https://i.redd.it/vhtyfipx6g451.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/d5/56/2d/d5562db9757dec4c754a53072aec7575.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://www.top13.net/wp-content/uploads/2017/04/adorable-baby-elephants-20.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/56/2f/22/cute-little-baby-elephant.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "Blue",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/cute-baby-elephants-46-5901f9f5c7eff__700.jpg",
      year: "",
      category: "elephants",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/YA7W9ff6X8g/maxresdefault.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-foxes-cubs-17-574436be67482__880.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.canadiangeographic.ca/sites/cgcorp/files/images/web_articles/blog/1_darla_galley_22441459.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-foxes-2-574436930d433__880.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.redd.it/3ymbizyaossy.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://cdn.wallpapersafari.com/95/10/76J0gD.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://cdn.hswstatic.com/gif/arctic-fox-1.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://cdn.wallpapersafari.com/1/87/HqGIZS.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://24.media.tumblr.com/9afdb6ce7e24d9b245c8ff677f70ba19/tumblr_n486fwxIOI1tp0vo3o1_500.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://wallpapercave.com/wp/wp5461659.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1OwcsnHFrJpe8GTbnQewBoUB3qZGeBfboA&usqp=CAU",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.happiest.net/wp-content/uploads/2018/12/arctic-foxes-720x400.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/aa/6c/89/aa6c893f24d78f5ae063273fbdb2d62e.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/4a/15/1f/4a151fb32ea95420211afaa9500fef9c.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://nypost.com/wp-content/uploads/sites/2/2015/06/cute_baby_foxes-1.jpg?quality=80&strip=all&w=1024",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://favogram.com/wp-content/uploads/2015/09/Very-Cute-Baby-Fox-1-500x333.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://amityisland.files.wordpress.com/2014/11/qtfox.jpg",
      year: "",
      category: "foxes",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/QXtC0jOVZNs/hqdefault.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2019/12/cute-baby-sea-otters-36-5e05c4b345ef3__700.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://external-preview.redd.it/0dO9_l_O4UYhlRcb33vQGvKs1BS161cEvmMXTUd8qjo.jpg?auto=webp&s=e5e1fde15bed3ccb51b839c5dda298d229a29dad",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://media2.s-nbcnews.com/i/MSNBC/Components/Video/__NEW/tdy_news_otter_151221.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://image.shutterstock.com/image-photo/otter-lutra-her-cuteness-funny-260nw-616296812.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.imgur.com/rKiYSnZ.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.ngi.org.uk/wp-content/uploads/2016/08/The-four-otters-from-left-Ash-Tod-Pip-and-Sam-Copyright-Ian-Greneholt-830x506.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.tehcute.com/pics/201206/help-name-this-cute-baby-otter-big.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2019/12/5e04ab9720e95_nrh43dai3hfy__700.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://c8.alamy.com/comp/R8GHJR/baby-otter-R8GHJR.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-74582273.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/b4ELyQQp_yU/maxresdefault.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2019/12/cute-baby-sea-otters-26-5e04a9e4eafe0__700.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://pbs.twimg.com/profile_images/869096869/Otter-19_400x400.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://img.scoop.it/l_AqwYXk-p2r-zmeNzWg3Tl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.imgur.com/rbJbHFj.png",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "ttps://i.chzbgr.com/full/2879920384/h27FC07C3/pick-me-im-cuuuutttttte",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.imgur.com/KNntIb4.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2019/12/5e04acb6c3639_nxqr111ddqw11__700.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2019/12/B2KybtIpVHj-png__700.jpg",
      year: "",
      category: "otters",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: 'https://i.ytimg.com/vi/R__1rgcRvYM/hqdefault.jpg"',
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/69/3c/3f/693c3f6d2711e4009fa32115ab51d151.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/a4/2b/b4/a42bb4b30f1fbd8d3afb4409571f6f37.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://40.media.tumblr.com/eea2f882ec08255e40cecaf8ca1d4543/tumblr_nmxjbjIK141qi4ucgo1_500.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.wallpapergeeks.com/wp-content/uploads/2014/02/Cute-Beagle-Hound-Puppy-Wallpaper-800x600.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsI0markhCbJAm_L1O9zT0Brq7fXUTJAGB9A&usqp=CAU",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-_lAcga0WcjqFvFluzpC7_foKbWmJQakgA&usqp=CAU",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFup_GtoZvYy_BIDPaRr00qOLP4r_dnA7YQ&usqp=CAU"',
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.dogtime.com/assets/uploads/2016/09/beagle-puppy-5-e1568913038666-1280x720.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cf.ltkcdn.net/dogs/images/slide/185060-849x565-adorable-trio-beagle-puppies.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://25.media.tumblr.com/e215e74da07b34476e733333d81c14c1/tumblr_mixvg4gfWR1qjcdw9o1_500.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://media1.popsugar-assets.com/files/thumbor/CxAsO7XXZ9aeLxRXfJJaNlEuhnI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/05/070/n/44701584/f395e31a13bad60d_adorable-animal-animal-photography-1000602/i/Related.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://image.shutterstock.com/image-photo/small-cute-beagle-puppy-dog-260nw-529323184.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://dogtime.com/assets/uploads/gallery/beagle-puppies/beagle-puppy-1.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/94/90/12/949012e2a0e8bff7f7bb5b3b003d9f45.png",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.i-heart-pets.com/wp-content/uploads/2014/08/beagles-goaww.com_.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://dogtime.com/assets/uploads/gallery/beagle-puppies/beagle-puppy-4.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.i-heart-pets.com/wp-content/uploads/2014/08/beagles-katie-wojo.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/T14QnZMTPOQ/maxresdefault.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/87/93/34/879334cf030582d97a479985f64d6a7d.jpg",
      year: "",
      category: "beagles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.redd.it/dvt1agobyg531.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/II0XTUtHghg/maxresdefault.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/e0/26/82/e0268295c6e08a069cacfa989c3aa0e1.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cdn.images.express.co.uk/img/dynamic/128/590x/baby-deer-puppy-cute-animal-picture-588632.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.imgur.com/8uEwG.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.redd.it/k8ejmvkktyf21.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwxbawTYXOHdw-d_neMWtugL67iIpfJPjMQ&usqp=CAU",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://patch.com/img/cdn20/users/22844250/20170310/110915/styles/raw/public/article_images/1-licky_lulu-donna_herrmann-101411-1489162124-7618.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://lh3.googleusercontent.com/proxy/B8L4RpE5lx4MHrmB_H6alLlR6Q_PSxcxrWC31BqTwGTBOJrFUSaZ4llWxrvodrAyy3wzW2gYpSIXUP8YetE62P32F0kopxwLacEg7KGeP51mG-mLeRQSN7vo2qtyQ4bqfrzsK-FaSH-4VBUktdR6Kcv-Axw",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i1.wp.com/metro.co.uk/wp-content/uploads/2015/07/ad_174315907.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/736x/06/90/9b/06909b762595e564e52a7ea8d24982f9.jpg",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://thumbs.newschoolers.com/index.php?src=http%3A%2F%2Fi.imgur.com%2FyuEzh.jpg&size=400x1000",
      year: "",
      category: "deer",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/b6/fb/eb/b6fbebfcb41410e5f2de0bd9d88e741f.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/80/73/bb/8073bb8d2ec7940c230829227695c98c.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.earthtouchnews.com/media/734888/Baby_bear_2014-11-25.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/02/cute-baby-polar-bear-day-photography-14__880.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/05/f7/52/05f75215c8bd9be9f404b49ab3d72907.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/WknqFHdMXIA/maxresdefault.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        'https://i.chzbgr.com/full/8166155520/h16081D2E/is-there-berries-for-baby-bear"',
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.etsystatic.com/10229826/r/il/d9ab1d/1331861745/il_570xN.1331861745_r7wt.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://lh3.googleusercontent.com/proxy/Q2fmuynVQ0WnTKTmYD2hM304kZZ6Ci6Y0cXuyvzEQDmN8yXKxLVk28oe8FbzKkTxqWnYao0EGTGy3IRXvXCtYUX7csYCmDXxUX_kpVmTJn_CqRYhizxRV1W5UX87hVqy0-SKAvtVC0DLtbfo5X_oPWoO2bRl6m13kletJf7qKYue1gaaWu77I06gMOZOyrtA",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/80/73/bb/8073bb8d2ec7940c230829227695c98c.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://c4.wallpaperflare.com/wallpaper/607/885/163/adorable-animal-baby-bear-wallpaper-preview.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.superbearblog.com/uploads/cgblog/id143/article-2105420-11DF6025000005DC-543_964x580.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.canadiangeographic.ca/sites/cgcorp/files/images/web_articles/blog/bear_derek_kyostia2.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://dnl7t01l0fo05.cloudfront.net/fr/wp-content/uploads/sites/2/2016/09/maman-ours-12.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/7e/82/56/7e8256299e95eee33ed008a08767db08.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://c4.wallpaperflare.com/wallpaper/802/63/832/bear-baby-bear-cute-grass-wallpaper-preview.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://qph.fs.quoracdn.net/main-qimg-df90f8c75d5dfa9b6861857290fa3c19.webp",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://2.bp.blogspot.com/-xV0RZQMnjhE/T1rWHqnCQWI/AAAAAAAAtUA/akRSEggxokM/s1600/Mother+Bear+-+001.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.insider.com/5cdf07ba021b4c1d503ef0c3?width=600&format=jpeg&auto=webp",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cutewallpaper.org/21/baby-bear-wallpaper/Cute-Baby-Polar-Bear-Wallpaper-Metro-Wallpapers.jpg",
      year: "",
      category: "bears",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-baby-hippos-6-590841d1ae669__700.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-baby-hippos-4-59082b36dcfc2__700.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.redd.it/aoeaz8cmcyp31.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i2.wp.com/metro.co.uk/wp-content/uploads/2018/10/sei_33120055-4fe3.jpg?quality=90&strip=all&zoom=1&resize=540%2C359&ssl=1",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/9a/83/02/9a8302ed59a2f0a9a1ae9c0be8dac958.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cdn.images.express.co.uk/img/dynamic/galleries/517x/26132.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2017/05/11134044/baby_hippos_featured.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://losangle.com/wp-content/uploads/2019/06/Cute-baby-hippos-8.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.rmbl.ws/s8/1/G/O/v/t/GOvta.OvCc.1-small-Cute-Baby-Hippo-Takes-First.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/a5/33/e7/a533e7fd83a1456baf73ca8befde7acf.jpg",
      year: "",
      category: "hippos",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/1d/f7/06/1df706ae30095ad907b9046cdaae2db6.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/gUIJ-UkQsXI/maxresdefault.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.ytimg.com/vi/h1DzRHXpG7U/hqdefault.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfc-tAbB2iiBDXVmla1RDMW5_CEceo8OFkQ&usqp=CAU",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.fodors.com/wp-content/uploads/2020/04/KittenAroundtheworld__HERO_shutterstock_1044443416.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://www.mobilecause.com/wp-content/uploads/2016/03/shutterstock_84271234.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://designyoutrust.com/wp-content/uploads/2017/03/7-9.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://lh3.googleusercontent.com/proxy/JOjRezJ5pjd6v4bufxKTRus7mfVCUrfVKMoAfQFvqgs5qgQPdo8aZ0n_I2OBUHy_pvBIeVnlD-aWLpNqg6vfYjFDb7hgLNpfXkswgqAKzHQeqE-tO7uN2dOy17AIkyaq5LmI950DHF7SeAiUmsU-iANiSy9NU1m0G8g__Vy-oRqmtcT8KMQ5KylWVJh8ZZvMVV3pjkL0aCpa7qx_G1OhWMwnnsEref32fZpo",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTug4wPNxcFhqsl3W50S4xNC6M8MITrETtduw&usqp=CAU",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://image.shutterstock.com/image-photo/two-cute-kittens-cuddle-each-260nw-738354820.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K44TfCP3wr9nZfCbLLNDAadWeIncuZC1uA&usqp=CAU",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/95/63/15/956315eedf40a60820c4b453f6680166.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://lawrenceparkah.com/wp-content/uploads/2012/01/Cute-Kitten-kittens-16123796-1280-800.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.dailymail.co.uk/i/pix/2013/02/21/article-2281982-18258C94000005DC-583_964x590.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cdn.pixabay.com/photo/2017/05/05/22/28/kitten-2288404__340.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://purrtacular.com/wp-content/uploads/2017/04/cutest-kittens-17.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2017/03/2-12-990x649.jpg?iv=34",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://images6.fanpop.com/image/photos/40300000/cute-kittens-cute-kittens-40353229-4096-2466.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://avante.biz/wp-content/uploads/Cute-Kitten-Pictures-Wallpapers/Cute-Kitten-Pictures-Wallpapers-005.jpg",
      year: "",
      category: "cats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/5c/a0/f9/5ca0f91de8f240cf690535db7401e76f.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://drscdn.500px.org/photo/47773906/m%3D900/v2?sig=502c0a42a045f7cf961fcf803ef470526f2ace03c842c63a7ee27dc6e48828f0",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://petorb.com/wp-content/uploads/2014/06/yaaaaa.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://s1.dmcdn.net/v/OZSZU1RbKn61Uxs7y/x720",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://ww2.kqed.org/science/wp-content/uploads/sites/35/2016/01/Baby_turtle_swims.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cutewallpaper.org/21/turtle-wallpaper-hd/Newborn-Turtles-Wallpapers-Hd-Cute-Baby-Turtles,-Hd-.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/474x/bf/27/ac/bf27ac4f1e55e49e18cda88c95e188ad.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/51/a6/82/51a682ae88f34be8d8443f5d3b91c026.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://drscdn.500px.org/photo/4171562/m%3D900/v2?sig=3fb433c331c79fe98b8cb468391ed13aa3cbee85d7106c4320bb08296cddb0ca",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/564x/d6/f7/78/d6f7781d66d52c91324139d7ebbbc361.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://cache.desktopnexus.com/thumbseg/1981/1981581-bigthumbnail.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath:
        "https://i.pinimg.com/originals/de/48/32/de4832d464ecc2c7ae9aa4658eac942d.jpg",
      year: "",
      category: "turtles",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://static.boredpanda.com/blog/wp-content/uploads/2017/10/adorable-bats-fb18-png__700.jpg",
      year: "",
      category: "bats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2016%2F10%2Fbaby-bats-wp.jpg&q=85",
      year: "",
      category: "bats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://miro.medium.com/max/2800/0*QpmwIKbedN51V7nv",
      year: "",
      category: "bats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://i.pinimg.com/originals/bc/6f/7f/bc6f7f0b634cbf747857fb3c59cecc96.jpg",
      year: "",
      category: "bats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://d1muy2ct2wkbaz.cloudfront.net/profile/f/2/newsflare_dLUJvW6qcX50ka25FcmuShm25V_400.jpg",
      year: "",
      category: "bats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "https://sire-ngcbg-thumbs.fichub.com/NGP_NatGeo_GS/708/724/NW_DLY_ds1802001-201_baby-fruit-bat-rescue-attempt-animals-vin_op_p181417_UK~~~~~uk~mux~~1.jpg",
      year: "",
      category: "bats",
      tags: "",
    }),
    Animal.create({
      title: "",
      description: "",
      photographer: "",
      imagePath: "",
      year: "",
      category: "muscrats",
      tags: "",
    }),
  ]);

  console.log(`seeded ${animals.length} animals`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
