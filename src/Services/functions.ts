import {baseURLFirebase, baseURLPostgres} from "./api";
import axios from "axios";

const GetProducts = async (userId: number) => {
    try {
        const response = await axios.get(`${baseURLFirebase}/anuncios/getAnuncios?iUsuarioId=${userId}`);
        return response?.data;
    } catch (error) {
        return null;
    }
}

const GetUserById = async (userId: number) => {
    try{
        const response = await axios.get(`${baseURLPostgres}/users/${userId}`)
        return response?.data
    } catch (error){
        return null;
    }
}

const FavoriteProduct = async (userId: number, productId: string) => {
    try{
        const response = await axios.post(`${baseURLFirebase}/favoritos/salvar`, {iUsuarioId: userId, cAnuncioId: productId})
        return response?.data
    } catch (error){
        return null;
    }
}

const GetFavoriteProducts = async (userId: number) => {
    try {
        const response = await axios.get(`${baseURLFirebase}/favoritos/getByUsuario/${userId}`);
        return response;
    } catch (error) {
        return null;
    }
}

const DeleteFavoriteProduct = async (userId: number, productId: string) => {
    try{
        const response = await axios.delete(`${baseURLFirebase}/favoritos/deletar?iUsuarioId=${userId}&cAnuncioId=${productId}`)
        return response
    } catch (error){
        return null;
    }
}

export {GetProducts, GetUserById, FavoriteProduct, GetFavoriteProducts, DeleteFavoriteProduct}