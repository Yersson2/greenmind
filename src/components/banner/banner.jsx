import { Icon } from "../icon/icon";

export const BannerHero = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <main className="bg-primary h-128 w-full p-12 rounded-3xl flex relative">
                <div className="flex flex-wrap w-2/5 h-fit relative">
                    <h1 className="text-6xl font-extrabold mb-6">
                        Buy your dream plants
                    </h1>
                    <div className="flex flex-col pr-12 border-r-1 border-secondary">
                        <span className="text-secondary font-medium text-3.5xl">
                            50+
                        </span>
                        <span className="text-lg text-secondary font-medium">
                            Plant Species
                        </span>
                    </div>
                    <div className="flex flex-col px-12">
                        <span className="text-secondary font-medium text-3.5xl">
                            100+
                        </span>
                        <span className="text-lg text-secondary font-medium">
                            Customers
                        </span>
                    </div>
                    <input
                        className="mt-12 w-full rounded-xl bg-white py-2 pr-2 pl-4.5 h-16 focus-within:outline-none"
                        type="search"
                        placeholder="What are you looking for?"
                    ></input>
                    <button className="bg-primary rounded-xl p-3.5 absolute right-2 bottom-2 cursor-pointer">
                        <Icon name="search" width={20} height={20} />
                    </button>
                </div>

                <div className="w-112.5 h-100 bg-secondary rounded-10xl rounded-br-none absolute bottom-0 right-18">
                    <img
                        className="w-112.5 h-128.5 object-contain absolute bottom-0 left-[55px]"
                        src="/src/assets/img/plant-hand.webp"
                        alt="planta"
                    />
                </div>

                <img className="absolute rotate-[-18.3deg] w-28 h-38.5 top-3.25 right-1" src="/src/assets/icons/spring-arrow.svg" alt="spring arrow"/>
                <img className="absolute  w-42.5 h-28 bottom-12.5 right-130.5" src="/src/assets/icons/spring-arrow-2.svg" alt="spring arrow"/>
            </main>
        </section>
    );
};
