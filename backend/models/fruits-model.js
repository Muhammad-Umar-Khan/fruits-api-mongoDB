const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  season: String,
  price: Number,
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
