import React from "react";
import { getApiRecipes } from "../utils/apiFunctions";
import { IRecipe } from "../interfaces/IRecipe";
import axios from "axios";

async function Home() {
  const recipes = await axios.get("http://192.168.1.107:3001/recipes");
  const recipesData = recipes.data;
  console.log(recipesData);
  return (
    <div>
      <img
        src={"http://127.0.0.1:3001/images/3-ingredient-cheese-sauce.jpg"}
        alt=""
      />
    </div>
  );
}

export default Home;
