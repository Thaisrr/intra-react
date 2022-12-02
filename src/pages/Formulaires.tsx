import React, {useState} from "react";
import {FieldValue, useForm} from "react-hook-form";
import {User} from "../helpers/types/User";
import {inscription} from "../helpers/services/AuthService";

const Formulaires = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const {register, handleSubmit, watch, formState : {errors}} = useForm<User>();
    const watchPassword = watch('password'); // name du champs à surveiller
    // Sans paramétres : surveille tous les champs

    const myHandleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evite l'envoie du formulaire et le rechargement de la page
        console.log('Submit');
        const form = e.target as HTMLFormElement;
        const username = form?.username?.value as string;
        const email: string = form?.email?.value;
        console.log(username, email);
        if(username && email) {
            const user = {username, email}; // A envoyer à l'API
            console.log('Formulaire envoyé', user);
        } else {
            alert('Erreur, formulaire invalide !');
        }
    }

    const saveUser = (value: User) => {
        inscription(value);
    }

    return (
        <>
            <h1>Les Formulaires</h1>

            <section>
                <h2>Natifs</h2>

                <form onSubmit={myHandleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input id='username' name='username' onChange={(e) => setUsername(e.target.value.trim())}/>
                    </div>
                    <div>
                        <label htmlFor='mail'>Email</label>
                        <input id='mail' name='email' onChange={(e) => setEmail(e.target.value.trim())}/>
                        { (email && email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) && <p style={{color: 'green'}}>Email valide</p>}
                        {(!email) && <p style={{color: 'red'}}>Email invalide</p> }
                    </div>
                    <p>
                        <button type='submit'>Enregistrer</button>
                    </p>
                </form>
            </section>
            <section>
                <h2>React-Hook-Form</h2>
                <p>
                    <a href='https://react-hook-form.com/ts'>Documentation</a>
                </p>

                <form onSubmit={handleSubmit(saveUser)}>
                    <div>
                        <label htmlFor='username2'>Username</label>
                        <input id='username2' {...register('username', {required: true, minLength: 3})}/>
                        {errors?.username?.type === 'required' && <p style={{color: 'red'}}>Username requis</p>}
                        {errors?.username?.type === 'minLength' && <p style={{color: 'red'}}>Username trop court</p>}
                    </div>
                    <div>
                        <label htmlFor='mail2'>Email</label>
                        <input id='mail2' {...register('email', {
                            pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email invalide'},
                            required: "Email requis"
                        })}/>
                        <p>{errors?.email?.message as string}</p>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input id='password' {...register('password', {
                            validate: (value) => (value === 'password') || 'Le mot de passe doit être "password"'
                        })}/>
                        <p>{errors?.password?.message as string}</p>
                        {watchPassword === 'password' && <p style={{color: 'green'}}>Mot de passe valide !</p>}
                    </div>
                    <div>
                        <label htmlFor='titre'>Titre</label>
                        <select id='titre' {...register('title')}>
                            <option value='empress'>Impératrice</option>
                            <option value='jedi'>Jedi</option>
                        </select>
                    </div>
                    <fieldset>
                        <legend>Choix</legend>
                        <div>
                            <label htmlFor='choiceA'>Choix A</label>
                            <input id='choiceA' type='checkbox' value="a" {...register('choice')}/>
                        </div>
                        <div>
                            <label htmlFor='choiceB'>Choix B</label>
                            <input id='choiceB' type='checkbox' value="b" {...register('choice')}/>
                        </div>
                    </fieldset>
                    <div>
                        <label htmlFor='confirm'>Confirmer ?</label>
                        <input type='checkbox' {...register('confirm')}/>
                    </div>
                    <p>
                        <button type='submit'>Enregistrer</button>
                    </p>
                </form>


            </section>
        </>
    )
}
export default Formulaires;