import {Product} from "../helpers/types/Product";

type Prop1 = {children : string | JSX.Element | JSX.Element[]}
export const Child1 = ({children}: Prop1) => {
    //console.log(props);
    return (
        <>
            <h3>Enfant 1</h3>
            <div>{children}</div>
            <hr/>
        </>
    )
}

type Props2 = {title: string, author: string};
export const Child2 = ({title, author} : Props2) => {
    return (
        <>
            <h3>Enfant 2</h3>
            <div>
                <p>Mon Livre :</p>
                <ul>
                    <li>Titre : {title} </li>
                    <li>Auteur⋅trice : {author} </li>
                </ul>
            </div>
            <hr/>
        </>
    )
}

type Props3 = {product: Product}
export const Child3 = ({product }: Props3) => {

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}€</p>
        </div>
    )
}


type Props4 = {  title: string, author?: string, action: Function};
export const Child4 = ({title, author, action} : Props4) => {
    return (
        <>
            <h3>Enfant 4</h3>
            <div>
                <p>Mon Livre :</p>
                <ul>
                    <li>Titre : {title} </li>
                    <li>Auteur⋅trice : {author} </li>
                </ul>
                <button onClick={() => action()}>Coucou</button>
            </div>
            <hr/>
        </>
    )
}


