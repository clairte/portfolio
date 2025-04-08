interface PhotoCardProps {
    src: string; 
    alt: string; 
    size?: 'sm' | 'md' | 'lg'; 
    isCircle?: boolean; 
}
const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
};

const PhotoCard = ({ src, alt, size = 'md', isCircle = false }: PhotoCardProps) => {
    const shapeClass = isCircle ? 'rounded-full' : 'rounded-2xl';
    return (
        <div className={`ml-0 md:ml-12`}>
            <div className={`overflow-hidden rounded-2xl shadow-md ${sizeClasses[size]} ${shapeClass}`}>
                <img src={src} alt={alt} className="object-cover w-full h-full" />
            </div>
        </div>
    )
};

export default PhotoCard;