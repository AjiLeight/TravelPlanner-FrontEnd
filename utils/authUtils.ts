'use server'

import axios from "@/utils/axios";
import {userData} from "@/types";
import {getServerSession} from "next-auth";
import authOptions from "@/config/nextAuthConfig";

export async function registerUser(userData: userData) {
    try {
        const res = await axios.post("/api/v1/auth/register", userData)
        return res.data
    } catch (error: any) {
        return {
            error: error.response.data
        }
    }
}

export async function getAuthSessionUser() {
    const session = await getServerSession(authOptions)
    return session?.user
}