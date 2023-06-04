import { IUser } from "../interfaces/IUser";

export async function postUser (user: IUser): Promise<void> {
    const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data)
}