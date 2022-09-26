const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fruitController = require("./controllers/fruitController");

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

app.get("/", fruitController.Home);

app.get("/fruits", fruitController.allFruits);

app.get("/fruits/:id", fruitController.oneFruit);

app.post("/fruits", fruitController.createFruit);

app.put("/fruits/:id", fruitController.updateFruit);

app.delete("/fruits/:id", fruitController.deleteFruit);

app.listen("3001", () => {
  console.log("Serving on port 3001");
});
