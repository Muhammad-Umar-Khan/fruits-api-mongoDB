const Fruit = require("../models/fruits-model");

exports.Home = (req, res) => {
  res.send("Home page for fruits app");
};

exports.allFruits = async (req, res) => {
  let allFruits = await Fruit.find({});
  res.send(allFruits);
};

exports.oneFruit = async (req, res) => {
  const { id } = req.params;
  const foundFruit = await Fruit.findOne({ id });
  res.send(foundFruit);
};

exports.createFruit = async (req, res) => {
  const { name, season, price } = req.body;
  const newFruit = await new Fruit({ name, season, price });
  await newFruit.save();
  res.redirect(`/fruits/${newFruit._id}`);
};

exports.updateFruit = async (req, res) => {
  const { id } = req.params;
  await Fruit.findByIdAndUpdate(
    id,
    req.body.name,
    req.body.season,
    req.body.price
  );
  res.redirect(`/fruits`);
};

exports.deleteFruit = async (req, res) => {
  const { id } = req.params;
  await Fruit.findByIdAndDelete(id);
  res.redirect("/fruits");
};
