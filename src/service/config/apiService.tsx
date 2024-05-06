import axios from "axios"

export const apiService = axios.create({
    baseURL: "https://economarketv2.vercel.app"
})
