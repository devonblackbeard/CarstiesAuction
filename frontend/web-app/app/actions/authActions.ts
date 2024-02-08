import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export const getSession = async () => {
    return await getServerSession(authOptions)
}

export const getCurrentUser = async () => {
    try {
        const session = await getSession()
        console.log('session is: ', session);
        
        if(!session) return null

        return session.user
    } catch (error) {
        console.log('error getting session')
        return null              
    }
}