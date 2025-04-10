import { useState } from 'react';
import { RotateCcw } from 'lucide-react'; 

interface FlipCardProps {
    frontLabel: string; 
    backImageSrc: string; 
    alt: string; 
}

const FlipCard = ({ frontLabel, backImageSrc, alt }: FlipCardProps) => {
    const [flipped, setFlipped] = useState(false); 

    return (
        <div className="perspective-[1000px]" onClick={() => setFlipped(!flipped)}>
            <div
                className={`relative aspect-square rounded-xl shadow-md cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                    flipped ? "rotate-y-180" : ""
                }`}
            >
                {/*Front */}
                <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center rounded-xl backface-hidden z-10">
                    <RotateCcw className="w-6 h-6 mb-2 text-gray-600" />
                    <span className="text-sm font-medium text-center text-gray-600">{frontLabel}</span>
                </div>

                {/*Back */}
                <div className="absolute inset-0 rounded-xl overflow-hidden backface-hidden transform rotate-y-180">
                    <img 
                        src={backImageSrc}
                        alt={alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default FlipCard; 