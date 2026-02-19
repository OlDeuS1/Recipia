const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
