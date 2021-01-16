const router = require("express").Router();
const { Animals } = require("../db/models");
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const allAnimals = await Animals.findAll();
    res.json(allAnimals);
  } catch (err) {
    next(err);
  }
});

router.get("/:category", async (req, res, next) => {
  try {
    const allAnimalsByCategory = await Animals.findAll({
      where: { category: req.params.category },
    });
    res.json(allAnimalsByCategory);
  } catch (err) {
    next(err);
  }
});

router.get("/random/:id", async (req, res, next) => {
  try {
    const singleRandomAnimal = await Animals.findOne({
      where: { id: req.params.id },
    });
    res.json(singleRandomAnimal);
  } catch (err) {
    next(err);
  }
});


//add a put route and a post

module.exports = router;
