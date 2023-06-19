"use client";
import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard";
import {
  getRecipes,
  getRecipeBySearch,
  getFavorites,
} from "@/app/utils/apiFunctions";
import { IRecipe } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer/Footer";
import Header, { searchFormData } from "@/app/components/Header/Header";

type params = {
  params: {
    page: string;
  };
};

function Home({ params: { page } }: params) {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [favorites, setFavorites] = useState<IRecipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const recipes = await getRecipes(page);
      setRecipes(recipes);
    }
    async function fetchFavorites() {
      const user = localStorage.getItem("user");
      if (!user) return;
      const { token } = JSON.parse(user);
      const favorites = await getFavorites(token);
      setFavorites(favorites);
    }
    fetchFavorites();
    fetchRecipes();
  }, [page]);

  const router = useRouter();

  const handlePrev = () => {
    if (parseInt(page) === 0) return;
    router.push(`/home/${parseInt(page) - 1}`);
  };

  const handleNext = () => {
    router.push(`/home/${parseInt(page) + 1}`);
  };

  async function search(data: searchFormData) {
    const { search } = data;
    const recipes = await getRecipeBySearch(search);
    setRecipes(recipes);
  }

  return (
    <div className="relative min-h-screen px-4 flex  bg-zinc-800 text-zinc-300 pb-16 pt-36">
      <Header search={search} />
      <div className="fixed h-screen flex  items-center top-0">
        <button
          className="rotate-180 flex items-center justify-center rounded-full h-12 p-4 bg-zinc-700 text-zinc-300"
          onClick={handlePrev}
        >
          ➤
        </button>
      </div>
      <div className="w-[90%] m-auto my-8 justify-center flex flex-wrap gap-4">
        {!recipes.length && (
          <div className="top-28 text-2xl text-zinc-300 font-bold">
            Recipe not Found
          </div>
        )}
        {recipes.map((recipe: IRecipe) => (
          <RecipeCard
            recipe={recipe}
            key={recipe.ID}
            isFavorite={favorites.some((favorite) => favorite.ID === recipe.ID)}
          />
        ))}
      </div>
      <div className="fixed h-screen flex right-4 items-center top-0">
        <button
          className="flex items-center justify-center rounded-full h-12 p-4 bg-zinc-700 text-zinc-300"
          onClick={handleNext}
        >
          ➤
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
