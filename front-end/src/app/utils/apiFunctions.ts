import axios from "axios";
import { ILogin, IRecipe, IUser, IUserLogin } from "../interfaces";

export async function postApi (data: IUser) {
    const response = await axios.post(`http://localhost:3001/register`, data)
    const res = await response.data
}

export async function postLogin (data: ILogin): Promise<IUserLogin>{
    const response = await axios.post('http://localhost:3001/login', data)
    return response.data
}