import React from "react";
import { IRecipe } from "../interfaces/IRecipe";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

async function Home() {
  const response = await axios.get("http://192.168.1.107:3001/recipes");
  const { recipes } = response.data;
  return (
    <div className="min-h-screen px-4 flex bg-zinc-800 text-zinc-300">
      <div className="sticky h-screen flex  items-center top-0">
        <button className="rotate-180 flex items-center justify-center rounded-full h-12 p-4 bg-zinc-700 text-zinc-300">
          ➤
        </button>
      </div>
      <div className="w-[90%] m-auto my-8 justify-center flex flex-wrap gap-4">
        {recipes.map((recipe: IRecipe) => (
          <RecipeCard {...recipe} key={recipe.ID} />
        ))}
      </div>
      <div className="sticky h-screen flex  items-center top-0">
        <button className="flex items-center justify-center rounded-full h-12 p-4 bg-zinc-700 text-zinc-300">
          ➤
        </button>
      </div>
    </div>
  );
}

export default Home;
