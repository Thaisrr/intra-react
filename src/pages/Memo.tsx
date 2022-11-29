import {useCallback, useMemo, useState} from "react";

const Memo = () => {

    const times = [1, 2, 3, 4, 5, 6];
    const calc = () => {
        console.log('Calculating....');
        return times.reduce((sum, curr) => sum + curr, 0);
    }
    const total_time = calc();

    const [counter, setCounter] = useState(0);
    const [msg, setMsg] = useState('');

    // Pour utiliser la valeur, ou l'afficher
    const total_time_memo = useMemo(() => {
        console.log('Memo   - Calcul');
        return [1, 2, 3, 4, 5, 6].reduce((sum, curr) => sum + curr * counter, 0);
    }, [counter]);

    //
    const total_time_callback = useCallback(() => {
        console.log('Callback   - Calcul');
        return [1, 2, 3, 4, 5, 6].reduce((sum, curr) => sum + curr * counter, 0);
    }, [counter]);

    return (
        <>
            <h1>Memoization</h1>

            <h2>compteur : {counter}</h2>
            <p>Total ( fixe ) { total_time}</p>
            <p>Total ( memo ) { total_time_memo }</p>

            <p>
                <button onClick={() => setCounter(counter + 1)}>++</button>
            </p>

            <div>
                <p>{msg}</p>
                <input onChange={(e) => setMsg(e.target.value)}/>
            </div>
        </>
    )

}
export default Memo;