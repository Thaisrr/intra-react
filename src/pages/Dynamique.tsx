import React, {useState} from "react";

const Dynamique = () => {
    console.log('Création du composant Dynamique')
    let old_count = 0;


    /** Hooks
     *
     * Fonction React
     *  commencent par le mot use
     *  -> Pour les effets de bord
     */

   // const state = useState(0); // [ ]
   // const counter = state[0]; // Valeur : number
   // const setCounter = state[1]; // Fonction de modification du state

    const [counter, setCounter] = useState<number>(0); // Typage optionnel car dynamique

    const [message, setMessage] = useState<string | undefined>();

    const [fruits, setFruits] = useState<string[]>([]);

    function incrementer(e: React.MouseEvent) {
        console.log(e);
        old_count++;
        console.info('-----', old_count);
    }

    function incrementByAmount(amount: number) {
        old_count += amount;
        console.info('------- old_count : ', old_count);
    }

    const addFruit = (_fruit: string) => {
        // setFruits() -> attend un tableau de string
        // fruits.push(fruit) -> On ne peut pas modifier directement le state fruits
        //const copy = Array.from(fruits);
        //const copy = [...fruits, _fruit];
         // copy.push(fruit);
        // setFruits(copy);
        setFruits([...fruits, _fruit]);
    }

    type Book = {title: string, id: number, author: string};
    const [book, setBook] = useState<Book>({id: 1, title: 'Frankenstein', author: 'Mary Shelley'});

    return (
        <>
            <h1>Affichage Dynamique </h1>

            <h2>Les événements</h2>

            <p>En React, on retrouve les mêmes événements qu'en HTML 5 / JS.</p>
            <p>Les événements appellent des fonctions, qui prennent en paramètre un objet event, de type
                React.MouseEvent ( pour le click );
            </p>

            <p>Compteur : {old_count}</p>
            <p>
                <button onClick={incrementer}>Incrémenter</button>
                <button onClick={() => incrementByAmount(10)}>+ 10</button>
            </p>


            <p>Nouveau Compteur ( Réactif ) : <b>{counter}</b></p>
            <p>
                <button onClick={() => setCounter(10)}>Change to 10</button>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter((current) => current - 1)}>Decrement</button>
            </p>

            <p>Le State ( ici counter ) : contient la valeur en cours, mise à jour automatiquement.</p>
            <p><i>Il ne doit jamais être modifié directement !</i></p>

            <p>La fonction : nommée set + nom du state, en camelCase : </p>
            <ul>
                <li>A utiliser pour modifier le state</li>
                <li>Elle prend en paramétre la nouvelle qu'on souhaite passer,</li>
                <li>Elle peut prendre une callback, qui aura en paramètre la valeur courante, et qui retourne la nouvelle valeur.</li>
            </ul>

            <p>
                <input onChange={(e) => setMessage(e.target.value)}/>
            </p>
            <h3>{message}</h3>


            <h2>Fruits : </h2>
            <p>
                <button onClick={() => addFruit('pomme')}>Pomme</button>
                <button onClick={() => setFruits([...fruits, 'poire'])}>Poire</button>
                <button onClick={() => setFruits([...fruits, 'orange'])}>Orange</button>
            </p>

            {( fruits?.length)?
                ( <ul>{fruits.map(f => <li key={'l1' + f}> {f} </li> ) }</ul> ) :
                ( <p>Aucun fruit à afficher</p> )
            }


            <h2>Livre : </h2>

            <ul>
                <li>Id: {book.id}</li>
                <li>Titre : {book.title}</li>
                <li>Auteur⋅trice : {book.author}</li>
            </ul>

            <p>
                <label htmlFor='titre'>Titre</label>
                <input id='titre' onChange={(e) => setBook({...book, title : e.target.value})}/>
            </p>
            <p>
                <label htmlFor='author'>Auteur⋅trice</label>
                <input id='author' onChange={(e) => setBook({...book, author : e.target.value})}/>
            </p>
        </>
    )
}

export default Dynamique;