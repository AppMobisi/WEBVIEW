import {baseURL} from "./api";
import axios from "axios";

const GetProducts = async (userId: number) => {
    try {
        const response = await axios.get(`${baseURL}/anuncios/getAnuncios?iUsuarioId=${userId}`);
        return response?.data;
    } catch (error) {
        console.log("ERRO:", error);
        return null;
    }
}

export {GetProducts}