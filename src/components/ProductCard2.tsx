import {Product} from "../helpers/types/Product";
import {deleteOne} from "../helpers/services/ProductService";
import {NavLink} from "react-router-dom";

type ProductProps = {product: Product, reload: Function}
const ProductCard2 = ({product, reload} : ProductProps) => {

    const remove = async () => {
        const is_deleted = await deleteOne(product.id);
        if(is_deleted) reload();
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>
                <NavLink to={'/details/' + product.id}>Détails du produit</NavLink>
                <button onClick={() => remove() }>Supprimer</button>
            </p>
        </div>
    )
}
export default ProductCard2;