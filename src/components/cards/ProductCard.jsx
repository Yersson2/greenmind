export const ProductCard = ({ image, name, price }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src={image} alt={name} className="w-40 h-40" />
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-lg font-medium text-secondary-75">{price}</p>
            <div className="flex items-center gap-2">
                <img src="/src/assets/icons/star.svg" alt="star" />
            </div>
        </div>
    );
}