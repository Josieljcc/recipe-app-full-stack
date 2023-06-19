"use client";
import React, { useEffect, useState } from "react";
import { getFavorites } from "../utils/apiFunctions";
import { IRecipe } from "../interfaces";
import Header, { searchFormData } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard";

function Favorite() {
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  useEffect(() => {
    async function fetchFavorites() {
      const user = localStorage.getItem("user");
      if (!user) return;
      const { token } = JSON.parse(user);
      const favorites = await getFavorites(token);
      setFavorites(favorites);
    }
    fetchFavorites();
  }, []);

  async function search(data: searchFormData) {
    const { search } = data;
    setFavorites(
      favorites.filter((recipe) =>
        recipe.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }

  return (
    <div className="bg-zinc-800 relative flex flex-col items-center pb-16 pt-40 min-h-screen">
      <Header search={search} />
      <h1 className="absolute top-1 z-30 text-2xl font-bold text-zinc-300 mb-8">
        Favorites
      </h1>
      {favorites.map((recipe: IRecipe) => (
        <RecipeCard recipe={recipe} key={recipe.ID} />
      ))}
      <Footer />
    </div>
  );
}

export default Favorite;
