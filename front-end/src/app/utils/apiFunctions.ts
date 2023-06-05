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
    console.log(res)
}