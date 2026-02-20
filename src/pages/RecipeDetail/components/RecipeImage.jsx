export default function RecipeImage({ image, title }) {
  return (
    <div className="relative flex justify-center mb-10">
      <img
        src={image}
        alt={title}
        className="w-full max-w-4xl rounded-3xl shadow-xl object-cover"
      />
    </div>
  );
}
