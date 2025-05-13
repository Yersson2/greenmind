import { useEffect, useState } from "react";
import { BannerHero } from "../components/banner/Banner";
import { ProductCard } from "../components/cards/ProductCard";

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/src/data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data?.products))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <main>
            <BannerHero />
            <section className="pt-24 pb-28.25 max-w-7xl mx-auto flex justify-between">
                <div className="w-1/5">
                    <h2 className="font-bold text-3.5xl mb-3">
                        Best Selling Plants
                    </h2>
                    <p className="font-medium text-lg text-secondary-75 mb-6">
                        Easiest way to healthy life by buying your favorite
                        plants
                    </p>
                </div>
                <div className="flex w-4/5 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};
