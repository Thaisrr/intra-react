import axios from "axios";
import {Product} from "../types/Product";

const api_url = 'http://localhost:8080/products';
export const getAll = async (): Promise<Product[]> => {
    try {
        const {data}  = await axios.get<Product[]>(api_url);
        return data;
    } catch (e: any) {
        errorHandler(e);
        return [];
    }
}

export const deleteOne = async (id: number): Promise<boolean> => {
    try {
        await axios.delete(api_url + '/' + id );
        return true;
    } catch (e) {
        errorHandler(e);
        return false;
    }
}

export const getOne = async (id: number): Promise<Product | undefined> => {
    try {
        const {data} = await axios.get<Product>(api_url + '/' + id );
        return data;
    } catch (e) {
        errorHandler(e);
        return undefined;
    }
}

export const errorHandler = (e: any) => {
    if(e instanceof Error) {alert(e.message)}
    else {alert("Oups, quelque chose c'est mal passé !")}

}