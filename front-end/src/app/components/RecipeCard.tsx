import React from "react";
import { IRecipe } from "../interfaces/IRecipe";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";

type RecipeCardProps = {
  recipe: IRecipe;
  isFavorite: boolean;
};

function RecipeCard(props: RecipeCardProps) {
  const { recipe, isFavorite } = props;
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
      {/* <div className="absolute font-3xl">oi</div> */}
      {isFavorite && (
        <div className="absolute flex items-center justify-center rounded-full z-20 bg-zinc-700/70 w-7 h-7 font-3xl top-2 right-2">
          <MdFavorite className="text-red-600" />
        </div>
      )}
    </Link>
  );
}

export default RecipeCard;
