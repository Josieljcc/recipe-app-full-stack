import { IRecipe } from "../interfaces/IRecipe";
import { IUser } from "../interfaces/IUser";

export async function postApi <T>(endPoint: string, data: T): Promise<void> {
    const response = await fetch(`http://localhost:3001${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const res = await response.json()
    return res
}

export async function getApiRecipes(endPoint: string): Promise<IRecipe> {
    console.log(`http://localhost:3001${endPoint}`)
    const response = await fetch(`http://localhost:3001${endPoint}`)
    const res = await response.json()
    return res
}