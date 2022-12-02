import {useForm} from "react-hook-form";
import {UserLogin} from "../helpers/types/User";
import {login} from "../helpers/services/AuthService";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

type LoginProps = {setIsLogged: Function};
const Login = ({setIsLogged}: LoginProps) => {
    const {register, handleSubmit} = useForm<UserLogin>();
    const check_input = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const submit = (user: UserLogin) => {
        login(user, check_input?.current?.checked).then((res) => {
            if (res) {
                setIsLogged(true);
                navigate('/users');
            }
        });
    }
    return (
        <>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' {...register('email')}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' {...register('password')}/>
                </div>
                <div>
                    <label htmlFor='remember'>Remember me</label>
                    <input ref={check_input} id='remember' type='checkbox'/>
                </div>
                <button>Se Connecter</button>
            </form>
        </>
    )
}
export default Login;