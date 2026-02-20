import Breadcrumb from "../../components/common/Breadcrumb";
import ExploreFilter from "./components/ExploreFilter";
import RecipeMasonry from "./components/RecipeMasonry";
import { useEffect, useState } from "react";
import { getMeals, getCategories } from "../../services/mealService";

function Explore() {
  const breakpointColumnsObj = {
    default: 4,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const [mealData] = await Promise.all([getMeals()]);

      setRecipes(mealData);
      setLoading(false);
    }

    load();
  }, []);

  return (
    <>
      <main className="flex flex-col gap-10">
        <Breadcrumb />
        <ExploreFilter />
        <RecipeMasonry
          recipes={recipes}
          breakpointCols={breakpointColumnsObj}
        />
      </main>
    </>
  );
}

export default Explore;
