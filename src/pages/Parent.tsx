import {Child1, Child2, Child3, Child4} from "../components/Enfants";
import {Product} from "../helpers/types/Product";

const Parent = () => {
    const titre = 'Fankenstein';
    const autrice = 'Mary Shelley';
    const book = {
        title: 'Tchoupi à la plage',
        author: 'Je sais pas'
    }

    const books = [
        {id: 1, key: 1, title: "L'Assassin Royal", author: "Robin Hobb"},
        {id: 2, key: 2, title: "Les Aventuriers de la mer", author: "Robin Hobb"},
    ];

    const pc: Product = {
        id: 12,
        name: 'Un Super PC trop puissant',
        description: 'Il faut l\'acheter !!!',
        price: 12345.99
    }

    const modify = () => {
        console.log('Coucou')
    }

    return (
        <>
            <h1>Les Props</h1>
            <section>
                <h2>La Props Children</h2>

                <Child1>Hello World</Child1>
                <Child1>Bonjour le monde</Child1>
                <Child1>
                    <h4>Un titre</h4>
                    <p>Un paragraphe</p>
                </Child1>
            </section>
            <h2>Attributs personnalisés / Autres props</h2>

            <Child2 title="A la Croisée des Mondes" author="Phillip Pullman"/>
            <Child2 title={titre} author={autrice}/>
            <Child2 {...book} />
            {books.map(b => <Child2 {...b}/>)}

            <Child3 product={pc}/>

            <Child4 title='Petit Ours Brun' action={modify}/>
        </>
    )
}
export default Parent;