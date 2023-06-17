"use client";
import React, { useEffect } from "react";
import RecipeCard from "../../components/RecipeCard";
import { getRecipes } from "@/app/utils/apiFunctions";
import { IRecipe } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

type params = {
  params: {
    page: string;
  };
};

function Home({ params: { page } }: params) {
  const [recipes, setRecipes] = React.useState<IRecipe[]>([]);
  useEffect(() => {
    async function fetchRecipes() {
      const recipes = await getRecipes(page);
      setRecipes(recipes);
    }
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
  return (
    <div className="relative min-h-screen px-4 flex  bg-zinc-800 text-zinc-300 pb-16 pt-36">
      <Header />
      <div className="fixed h-screen flex  items-center top-0">
        <button
          className="rotate-180 flex items-center justify-center rounded-full h-12 p-4 bg-zinc-700 text-zinc-300"
          onClick={handlePrev}
        >
          ➤
        </button>
      </div>
      <div className="w-[90%] m-auto my-8 justify-center flex flex-wrap gap-4">
        {recipes.map((recipe: IRecipe) => (
          <RecipeCard {...recipe} key={recipe.ID} />
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
