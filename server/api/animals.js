const router = require("express").Router();
const { Animal } = require("../db/models");
const axios = require("axios");
const { Sequelize } = require("sequelize");

router.get("/", async (req, res, next) => {
  try {
    let where = {};

    if (req.query.category) {
      where.category = req.query.category;
    }

    // TODO - Add ability to search by tags in query string
    // if (req.query.tags) {
    //   const tags = req.query.tags;
    //   const tagsArray = tags.split(",");
    //   console.log("tagsArray", tagsArray)
    // }

    const allAnimals = await Animal.findAll({
      where: where,
    });

    res.json(allAnimals);
  } catch (err) {
    next(err);
  }
});

router.get("/random", async (req, res, next) => {
  let where = {};
  if (req.query.category) {
    where.category = req.query.category;
  }

  try {
    const randomAnimal = await Animal.findAll({
      order: Sequelize.literal("random()"),
      limit: 1,
      where: where,
    });
    res.json(randomAnimal[0]);
  } catch (err) {
    next(err);
  }
});

// router.get("/:tag", async (req, res, next) => {
//   try {
//     const allAnimalsByCategory = await Animal.findAll({
//       where: { tags: { include: req.params.tag } },
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/category/:tag", async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err);
//   }
// });

//add a put route and a post

module.exports = router;
