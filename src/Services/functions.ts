import {baseURL} from "./api";
import axios from "axios";

const GetProducts = async (pagesNumber: number) => {
    const token = "live_tCSL7SzBRhqgOVbLRpteLd10boF7UHJO3bBCBfp0DtiVTnDm1tSvb1a7LJLD2nfS"
    const headers = {
        Authorization: `Bearer ${token}`
    };

    try {
        const response = await axios.get(`${baseURL}?limit=${pagesNumber}`, {headers});
        return response?.data;
    } catch (error) {
        console.log("ERRO:", error);
        return null;
    }
}

// EXEMPLO DE CHAMADA:

// const GetImage = async () => {
//     const image = await GetProducts(2)
//     setData(image)
// }

export { GetProducts };
