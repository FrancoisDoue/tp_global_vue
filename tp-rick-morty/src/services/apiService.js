import { BASE_URL, CHAR_URL } from "@/constants/url";
import axios from "axios";

const api = axios.create({baseURL : BASE_URL});

const responseHandler = async (request) => {
    try {
        const response = await request
        return response.data
    } catch (e){
        return {error: true, code: e.response.status, message: e.response.data.error}
    }
}

export const getCharacterList = (page = 1) => responseHandler(api.get(`${CHAR_URL}/?page=${page}`))
