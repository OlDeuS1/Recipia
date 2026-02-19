const express = require("express");
const router = express.Router();
const { readData, writeData } = require("../utils/file");

// GET all
router.get("/", (req, res) => {
  const recipes = readData();
  res.json(recipes);
});

// GET by id
router.get("/:id", (req, res) => {
  const recipes = readData();
  const recipe = recipes.find((r) => r.id == req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
});

// CREATE
router.post("/", (req, res) => {
  const recipes = readData();
  const newRecipe = {
    id: Date.now(),
    ...req.body,
  };

  recipes.push(newRecipe);
  writeData(recipes);

  res.status(201).json(newRecipe);
});

// UPDATE
router.put("/:id", (req, res) => {
  const recipes = readData();
  const index = recipes.findIndex((r) => r.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  recipes[index] = { ...recipes[index], ...req.body };
  writeData(recipes);

  res.json(recipes[index]);
});

// DELETE
router.delete("/:id", (req, res) => {
  const recipes = readData();
  const filtered = recipes.filter((r) => r.id != req.params.id);

  writeData(filtered);

  res.json({ message: "Deleted successfully" });
});

module.exports = router;
