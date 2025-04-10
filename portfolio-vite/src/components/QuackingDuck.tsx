import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

import duckDoodle from '../assets/doodles/miroodles-duck.png'; 

const QuackingDuck = () => {
    const [quacks, setQuacks] = useState<
        { id: string; top: number; left: number}[]
    >([]);

    const handleQuack = () => {
        const id = uuidv4();
        const top = Math.random() * 80; // % from top 
        const left = Math.random() * 80; // % from left 

        setQuacks((prev) => [...prev, { id, top, left }]);

        // remove after 1.5s 
        setTimeout(() => {
            setQuacks((prev) => prev.filter((q) => q.id !== id));
        }, 1500);
    };

    return (
        <div className="relative h-[36rem] w-full flex items-center justify-center overflow-hidden">
            {/* Quacks */}
            {quacks.map((q) => (
                <span
                    key={q.id}
                    className="absolute text-lg text-gray-500 animate-fade-out pointer-events-none select-none"
                    style={{top: `${q.top}%`, left: `${q.left}%`}}
                >
                    quack!
                </span>
            ))}

            {/* Duck */}
            <img 
                src={duckDoodle}
                alt="duck-doodle"
                onMouseEnter={handleQuack}
                className="w-32 opacity-70 animate-wiggle transition-transform hover:scale-110 cursor-pointer"
            />
            <p className="top-12 text-lg text-gray-600 font-medium italic hover:scale-110">
                just a duck! 
            </p>
        </div>  
    );
}; 

export default QuackingDuck;