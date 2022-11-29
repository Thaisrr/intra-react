import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {deflateRaw} from "zlib";

const Effet = () => {
    console.log('Lancement de la fonction');
    const [toggle, setToggle] = useState(true);
    const [data, setData] = useState();
    let count = 0;
    const [state_counter, setStateCounter] = useState(0);

    // Ne jamais faire de modifications dans le corps de la fonction !

    // Ne se lance qu'une fois au chargement du composant
   useEffect(() => {
       console.log('Use Effect');
       // -> pour faire des requêtes
   }, []);

   // []  -> tableau de dépendances, de valeurs surveillées
    // Lorsque les valeurs surveillées se mettent à jour, l'effet se rejout
    useEffect(() => {
        console.log('Toggle a été modifié')
    }, [toggle]);

    // Toutes les données, variables utilisées par le useEffect DANS les dépendances du useEffect
    const increment = () => {
        count++;
        console.log('Compteur = ' + count);
    }
    // Se lancer à chaque modification de toggle
    useEffect(() => {
        console.log("[Click sur Toggle], Compteur : " + count); // toujours 0
    }, [toggle, count]);

    useEffect(() => {
        console.log("Compteur State: " + state_counter); // toujours 0
    }, [state_counter]);

    // A chaque modification du DOM ou des States Ou de Memo
    useEffect(() => {
        console.warn('Modification du dom')
    });


    type User = {id: number, name: string};
    const [users, setUsers] = useState<User[]>();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch(e => alert('nope !'))
    }, []);


    const [users2, setUsers2] = useState<User[]>();
    useEffect(() => {
        const loadUsers =  async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers2(data);
        }
        loadUsers();
    }, []);

    const [users3, setUsers3] = useState<User[]>();
    const loadUsers = useCallback( async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers3(data);
    }, [])
    useEffect(() => {
        loadUsers();
    }, [loadUsers]);


    return (
        <>
            <h1>Hook d'Effet</h1>

            <p>{(toggle)? 'ON' : 'OFF'}</p>
            <p>State Compteur {state_counter}</p>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <button onClick={() => increment()}>Incrémenter</button>
            <button onClick={() => setStateCounter(state_counter + 1)}>Incrémenter State</button>

            <h2>Users</h2>

            { (users?.length)?
                users.map(u => <p key={u.id}>{u.name}</p>) :
                <p>Aucun User à afficher</p>
            }
        </>
    )
}

export default Effet;