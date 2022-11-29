const Listes = () => {
    const fruits = ['Pommes', 'Bananes', 'Poires', 'Coings', 'Kaki'];

    const jsxss = [
        <li key={1}>Item 1</li>,
        <li key={2}>Item 2</li>,
    ];

    const pFruits = () => {
        const lisss: JSX.Element[] = [];
        //fruits.forEach(f => lisss.push(<p>{f}</p>))

        for(let f of fruits) {
            lisss.push(<p key={f}>{f}</p>);
        }
        return lisss;
    }


    return (
        <div id="Listes">
            <h1>Les Listes</h1>

            <p>Le JSX est capable d'afficher des listes de JSX.</p>

            <ul>
                {jsxss}
            </ul>

            <p>Pour afficher une liste d'éléments, on peut donc créer une liste de JSX à partir de cette liste.</p>
            
            <p>Via une fonction</p>
            { pFruits() }

            <ul>
                { fruits.map((f) => <li key={'l3' + f} >{f}</li>) }
            </ul>
           
        </div>
    )
}

export default Listes;