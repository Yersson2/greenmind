export const Icon = ({ icon, alt, className }) => {
    return (
        <img
            src={`/src/assets/icons/${icon}.svg`}
            alt={alt}
            className={`w-6 h-6 ${className}`}
        />
    );
}