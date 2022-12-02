export interface User {
    username: string;
    email: string;
    password: string;
    confirm: boolean;
    choice: string[];
    title: string;
}

export interface UserLogin {email: string, password: string}