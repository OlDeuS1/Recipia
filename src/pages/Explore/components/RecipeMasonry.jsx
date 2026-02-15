import Masonry from "react-masonry-css";
import ExploreRecipeCard from "./ExploreRecipeCard";

export default function RecipeMasonry({ recipes, breakpointCols }) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex gap-6"
      columnClassName="flex flex-col gap-6"
    >
      {recipes.map((item) => (
        <ExploreRecipeCard key={item.title} item={item} />
      ))}
    </Masonry>
  );
}
