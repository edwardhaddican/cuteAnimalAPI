const Sequelize = require("sequelize");
const db = require("../db");

const Animals = db.define(
  "animals",
  {
    title: {
      type: Sequelize.STRING,
      defaultValue: "A Cute Animal"
    },
    description: {
      type: Sequelize.TEXT,
    },
    photographer: {
      type: Sequelize.TEXT,
      defaultValue: "Currently Unknown"
    },
    imagePath: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.ENUM(["elephants", "foxes", "otters", "beagles", "aussies", "hippos", "bears", "cats", "turtles", "bats", "muscrats", "beavers"]),
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
);

module.exports = Animals;
