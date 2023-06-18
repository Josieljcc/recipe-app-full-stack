"use client";
import { IUser } from "@/app/interfaces";
import { IRecipe } from "@/app/interfaces/IRecipe";
import {
  getFavorites,
  getRecipeById,
  postFavorite,
} from "@/app/utils/apiFunctions";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

type params = {
  params: {
    id: string;
  };
};

function Detail({ params: { id } }: params) {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    async function fetchRecipe() {
      const user = localStorage.getItem("user");
      if (!user) return;
      const { token } = JSON.parse(user);
      setToken(token);
      const recipe = await getRecipeById(id);
      const favorites = await getFavorites(token);
      setFavorites(favorites);
      setRecipe(recipe);
    }
    fetchRecipe();
  }, [id]);

  function isFavorite() {
    return favorites.some((favorite) => favorite.ID === recipe?.ID);
  }

  async function handleFavorite() {
    if (!isFavorite() && recipe) {
      await postFavorite(token, recipe.ID);
      const favorites = await getFavorites(token);
      setFavorites(favorites);
    }
  }

  const router = useRouter();
  const BASE_IMAGE_URL = "http://localhost:3001/images/";

  if (!recipe) return null;

  return (
    <div className="bg-zinc-800 text-zinc-300 min-h-screen">
      <div className="relative">
        <div
          className="absolute bg-gradient-to-b rounded-2xl to-black/80 
        from-transparent z-10 w-full h-full"
        />
        <button
          className="absolute p-2 top-4 left-4
        text-2xl z-20 bg-zinc-700/80 rounded-full"
          onClick={() => router.back()}
        >
          <BiArrowBack />
        </button>
        <button
          className="absolute p-2 top-4 right-4
         z-20 bg-zinc-700/80 rounded-full"
          onClick={handleFavorite}
        >
          {isFavorite() ? (
            <MdFavorite className="text-2xl text-red-600" />
          ) : (
            <MdFavoriteBorder className="text-2xl" />
          )}
        </button>
        <img
          className="w-full h-full rounded-b-2xl"
          src={`${BASE_IMAGE_URL}${recipe.image}.jpg`}
          alt={recipe.title}
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
