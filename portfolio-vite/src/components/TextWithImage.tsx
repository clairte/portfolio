// side by side layouts like Photo | Text, or Text | Photo

interface TextWithImageProps {
    photoPosition?: 'left' | 'right'; 
    photo: React.ReactNode; 
    text: React.ReactNode; 
}

const TextWithImage = ({ photoPosition = 'left', photo, text }: TextWithImageProps) => {
    const isLeft = photoPosition === 'left'; 
    return (
        <div className="flex flex-col md:flex-row gap-32 items-center justify-center px-4">
            {isLeft && photo}
            {text}
            {!isLeft && photo}
        </div>
    );
}; 

export default TextWithImage;