import axios from "axios";
import { ILogin, IRecipe, IUser, IUserLogin } from "../interfaces";

export async function postApi (data: IUser) {
    const response = await axios.post(`http://192.168.1.107:3001/register`, data)
    const res = await response.data
}

export async function postLogin (data: ILogin): Promise<IUserLogin>{
    const response = await axios.post('http://192.168.1.107:3001/login', data)
    return response.data
}

export async function getRecipes (page: string): Promise<IRecipe[]> {
    const response = await axios.get(`http://192.168.1.107:3001/recipes/${page}`)
    return response.data.recipes
}