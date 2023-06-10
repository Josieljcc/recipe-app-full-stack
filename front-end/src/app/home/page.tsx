import React from "react";
import { getApiRecipes } from "../utils/apiFunctions";
import { IRecipe } from "../interfaces/IRecipe";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

async function Home() {
  const response = await axios.get("http://192.168.1.107:3001/recipes");
  const { recipes } = response.data;
  return (
    <div className="min-h-screen flex bg-zinc-800 text-zinc-300">
      <div className="w-[90%] m-auto my-8 justify-center flex flex-wrap gap-4">
        {recipes.map((recipe: IRecipe) => (
          <RecipeCard {...recipe} key={recipe.ID} />
        ))}
      </div>
    </div>
  );
}

export default Home;
