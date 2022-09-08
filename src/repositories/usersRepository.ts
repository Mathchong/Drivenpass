import client from "../app/database";

import { userCreator } from "../types/user";

export async function registerAccount(userData: userCreator) {
    await client.users.create({data:{
        email: userData.email,
        password: userData.password
    }})
}

export async function findByEmail(email: string){
    const user = await client.users.findUnique({
        where: {email}
    })
    return user
}