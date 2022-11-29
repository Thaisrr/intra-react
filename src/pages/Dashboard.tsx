import {useState} from "react";
import {Product} from "../helpers/types/Product";
import ProductCard from "../components/ProductCard";

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([
        {id: 1, name: 'Patate Bindj', description: 'Les Meilleures Patates', price: 5},
        {id: 2, name: 'Carottes', description: 'Carottes des sables de Tilques', price: 4},
        {id: 3, name: 'Fraises', description: 'Fraises de Samer', price: 7},
    ]);

    return (
        <>
            <h1>Espace Admin</h1>

            <h2>Mes Produits</h2>

            <section className='grid'>
                {products?.length && products.map(p => <ProductCard key={p.id} product={p} updateFunc={setProducts} /> )}
            </section>

        </>
    )
}

export default Dashboard;