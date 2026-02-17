import Masonry from "react-masonry-css";
import RecipeCard from "../../../components/common/RecipeCard";

export default function RecipeMasonry({ recipes, breakpointCols }) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex gap-6"
      columnClassName="flex flex-col gap-6"
    >
      {recipes.map((item) => (
        <RecipeCard key={item.title} item={item} />
      ))}
    </Masonry>
  );
}
