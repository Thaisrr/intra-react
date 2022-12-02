import {User, UserLogin} from "../types/User";
import axios, {AxiosError} from "axios";

const api = process.env.REACT_APP_API;


export const inscription = async (user: User) => {
    try {
        console.log('inscription', user)
        await axios.post(`${api}/register`, user);
        return true;
    } catch(e) {
        handleError(e);
    }
}

export const login = async (user: UserLogin, remember?: boolean) => {
    type Response = {accessToken : string, user: User};
    try {
        const {data} = await axios.post<Response>(`${api}/login`, user);
        console.log(data);
        store(data.accessToken, data.user, remember);
        // window.location.reload(); solution beurk
        return data.user.username;
    } catch (e) {
        handleError(e);
        return null;
    }
}

const store = (token: string, data: User, remember? : boolean) => {
    if(remember) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(data))
    } else {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(data));
    }
}

export const getToken = () => localStorage.getItem('token') || sessionStorage.getItem('token') || null;

export const getUser = () => {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    if(user) {
        return JSON.parse(user) as User;
    }
    return null;
}
/**
 * @description :  Return false le token est null ou undefined, et true si string
 * @return boolean
 */
export const isLogged = () => !!getToken();

export const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    // window.location.reload(); // Solution beurk
    // localStorage.removeItem('token')
}

const handleError = (error: any) => {
    if(error instanceof AxiosError) {
        console.warn(error?.response?.data || error.message) // Afficher à l'user
    } else {
        console.warn(`Oups, quelque chose s'est mal passé ! Revenez plus tard.`);
    }
}


