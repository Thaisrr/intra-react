import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {getOne} from "../helpers/services/ProductService";
import {Product} from "../helpers/types/Product";

type Params = {id: string};
const ProductDetails = () => {
    const {id} = useParams<Params>();
    //const id : number | null = (params.id)?  Number(params.id) : null;
    const [product, setProduct] = useState<Product>();
    const load = useCallback(async () => {
        if(id) {
            setProduct(await getOne(+id));
        }
    }, [id]);

    useEffect(() => {
        load()
    }, [load]);

    return (
        <>
            {product?
                   <>
                       <h1>{product.name}</h1>
                       <p>{product.description}</p>
                       <p>Prix : {product.price} €</p>
                   </>
                : <p>Aucun produit à afficher </p>
            }
        </>
    )
}
export default ProductDetails;