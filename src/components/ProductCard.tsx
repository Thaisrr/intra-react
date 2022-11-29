import {Product} from "../helpers/types/Product";

type CardProp = {product: Product, updateFunc: Function};
const ProductCard = ({product, updateFunc} : CardProp) => {

    const deleteProduct = () => {
        console.log('deleting');
        updateFunc( (_products : Product[]) => {
            const index = _products.findIndex((p) => p.id === product.id);
            const result = [..._products];
            result.splice(index, 1);
            return result;
        })
    }



    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>
                <button onClick={() => deleteProduct()}>Supprimer</button>
            </p>
        </div>
    )
}
export default ProductCard;