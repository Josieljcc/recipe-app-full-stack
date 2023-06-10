import { IRecipe } from "@/app/interfaces/IRecipe";
import axios from "axios";

type params = {
  params: {
    id: string;
  };
};

async function Detail({ params: { id } }: params) {
  const response = await axios(`http://192.168.1.107:3001/recipe/${id}`);
  const recipe: IRecipe = response.data.recipe;
  const BASE_IMAGE_URL = "http://localhost:3001/images/";
  return (
    <div className="bg-zinc-800 text-zinc-300 min-h-screen">
      <div className="relative">
        <div className="absolute bg-gradient-to-b rounded-2xl to-black/70 from-transparent z-10 w-full h-full" />
        <img
          className="w-full rounded-b-2xl"
          src={`${BASE_IMAGE_URL}${recipe.image}.jpg`}
          alt={recipe.image}
        />
        <h1
          className="absolute bottom-4 w-full left-0 right-0 m-auto 
        text-3xl text-center z-20 text-zinc-300 font-bold"
        >
          {recipe.title}
        </h1>
      </div>
      <div className="w-[90%] m-auto mt-4">
        <h2 className="text-2xl font-bold my-4">Ingredients</h2>
        {recipe.ingredients.map((ingredient, index) => (
          <ul key={ingredient.ID}>
            <li>{`• ${ingredient.name.replace("'", "")}`}</li>
          </ul>
        ))}
        <h2 className="text-2xl font-bold my-4">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default Detail;
