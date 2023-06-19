import axios from "axios";
import { ILogin, IRecipe, IUser, IUserLogin } from "../interfaces";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001"

export async function postApi (data: IUser) {
    const response = await axios.post(`${BACKEND_URL}/register`, data)
    await response.data
}

export async function postLogin (data: ILogin): Promise<IUserLogin>{
    const response = await axios.post(`${BACKEND_URL}/login`, data)
    return response.data
}

export async function getRecipes (page: string): Promise<IRecipe[]> {
    const response = await axios.get(`${BACKEND_URL}/recipes/page/${page}`)
    return response.data.recipes
}

export async function getRecipeById (id: string): Promise<IRecipe> {
    const response = await axios.get(`${BACKEND_URL}/recipes/${id}`)
    return response.data.recipe
}

export async function getRecipeBySearch (search: string): Promise<IRecipe[]> {
    const response = await axios.get(`${BACKEND_URL}/recipes/search/?q=${search}`)
    return response.data.recipes
}

export async function getFavorites (token: string): Promise<IRecipe[]> {
    const response = await axios.get(`${BACKEND_URL}/favorites`,
    { headers: { Authorization: token } })
    return response.data.favorites
}

export async function postFavorite (token: string, id: number): Promise<void> {
    await axios.post(`${BACKEND_URL}/favorites/${id}`,
        {},
        { headers: { Authorization: token } },
    )
}

export async function deleteFavorite (token: string, id: number): Promise<void> {
    await axios.delete(`${BACKEND_URL}/favorites/${id}`,
        { headers: { Authorization: token } },
    )
}
