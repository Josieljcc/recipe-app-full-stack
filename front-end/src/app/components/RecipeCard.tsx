import React from "react";
import { IRecipe } from "../interfaces/IRecipe";
import Link from "next/link";

function RecipeCard(recipe: IRecipe) {
  const BASE_IMAGE_URL = "http://localhost:3001/images/";
  return (
    <Link
      href={`/recipe/${recipe.ID}`}
      className="gap-1 ease-in-out duration-150 scale-90 hover:scale-100
        cursor-pointer bg-zinc-600 relative flex flex-col items-center justify-center
        rounded-md overflow-hidden w-[80%] md:w-[40%] lg:w-[30%] aspect-video"
      key={recipe.ID}
    >
      <div className="absolute bg-gradient-to-t rounded-md from-zinc-900 to-transparent z-10 w-full h-full" />
      <img
        className="absolute top-auto rounded-md left-auto w-[99%] h-[98%]"
        src={`${BASE_IMAGE_URL}${recipe.image}.jpg`}
        alt=""
      />
      <h1 className="cut-off m-auto w-[80%] z-20 absolute bottom-2 font-bold text-center">
        {recipe.title}
      </h1>
    </Link>
  );
}

export default RecipeCard;
