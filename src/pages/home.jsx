import { BannerHero } from "../components/banner/Banner";

export const Home = () => {
    return (
        <main>
            <BannerHero />
            <section className="pt-24 pb-28.25 max-w-7xl mx-auto">
                <div className="w-1/5">
                    <h2 className="font-bold text-3.5xl mb-3">Best Selling Plants</h2>
                    <p className="font-medium text-lg text-secondary-75 mb-6">
                        Easiest way to healthy life by buying your favorite
                        plants
                    </p>
                </div>
            </section>
        </main>
    );
};
