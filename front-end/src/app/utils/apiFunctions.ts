import axios from "axios";
import { ILogin, IRecipe, IUser, IUserLogin } from "../interfaces";

export async function postApi (data: IUser) {
    const response = await axios.post(`http://localhost:3001/register`, data)
    await response.data
}

export async function postLogin (data: ILogin): Promise<IUserLogin>{
    const response = await axios.post('http://localhost:3001/login', data)
    return response.data
}

export async function getRecipes (page: string): Promise<IRecipe[]> {
    const response = await axios.get(`http://localhost:3001/recipes/${page}`)
    return response.data.recipes
}

export async function getRecipeById (id: string): Promise<IRecipe> {
    const response = await axios.get(`http://localhost:3001/recipe/${id}`)
    return response.data.recipe
}

export async function getRecipeBySearch (search: string): Promise<IRecipe[]> {
    const response = await axios.get(`http://localhost:3001/recipes/search/?q=${search}`)
    return response.data.recipes
}

export async function getFavorites (token: string): Promise<IRecipe[]> {
    const response = await axios.get(`http://backend:3001/favorite`,
    { headers: { Authorization: token } })
    return response.data.favorites
}

export async function postFavorite (token: string, id: number): Promise<void> {
    await axios.post(`http://localhost:3001/favorite/${id}`,
        {},
        { headers: { Authorization: token } },
    )
}

export async function deleteFavorite (token: string, id: number): Promise<void> {
    await axios.delete(`http://localhost:3001/favorite/${id}`,
        { headers: { Authorization: token } },
    )
}
