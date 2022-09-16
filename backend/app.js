const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Fruit = require("./models/fruits-model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/fruits", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });

app.get("/", (req, res) => {
  res.send("Home page for fruits app");
});

app.get("/fruits", async (req, res) => {
  let allFruits = await Fruit.find({});
  res.send(allFruits);
});

app.get("/fruits/:id", async (req, res) => {
  const { id } = req.params;
  const foundFruit = await Fruit.findOne({ id });
  res.send(foundFruit);
});

app.post("/fruits", async (req, res) => {
  const { name, season, price } = req.body;
  const newFruit = await new Fruit({ name, season, price });
  await newFruit.save();
  res.send(`${req.body.name} added`);
});

app.listen("3001", () => {
  console.log("Serving on port 3001");
});
