export const Icon = ({ name, width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height}>
            <use href={`/src/assets/icons/sprite.svg#${name}`} />
        </svg>
    );
};
