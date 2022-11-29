import {useCallback, useEffect, useMemo, useState} from "react";
import {getAll} from "../helpers/services/ProductService";
import {Product} from "../helpers/types/Product";
import ProductCard2 from "../components/ProductCard2";

const Dashboard2 = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const getProducts = useCallback(async () => {setProducts(await getAll()) }, []);
    useEffect(() => {getProducts()}, [getProducts]);

    return (
        <>
            <h1>Dashboard ( le retour !)</h1>

            <h2>Mes produits</h2>

            <div className='grid'>
                {products?.length ?
                    products.map(p => <ProductCard2 product={p} reload={getProducts}  key={p.id}/>) :
                    <p>Aucun produit à afficher</p>
                }
            </div>

        </>
    )
}
export default Dashboard2;