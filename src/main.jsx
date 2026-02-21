import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail.jsx";
import Bookmark from "./pages/Bookmark/Bookmark.jsx";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipe" element={<Explore />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="create" element={<CreateRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
