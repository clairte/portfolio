import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string; 
    delay?: number; 
    className?: string; 
}

const AnimatedText = ({ text, delay = 0, className }: AnimatedTextProps) => {
    const letters = Array.from(text); 

    // staggerChildren: each letter animates 0.03 after previous
    // delayChidlren: waits before starting animation
    const container = {
        hidden: { opacity: 0 },
        visible: () => ({
            opacity: 1,
            transition: {staggerChildren: 0.04, delayChildren: delay},
        })
    }

    // each letter is a child, uses this variant to animate each letter
    const child = {
        visible:{
            opacity: 1,
            y: 0, 
            transition: {
                type: 'spring', 
                damping: 12, 
                stiffness: 100, 
            }, 
        }, 
        hidden: {
            opacity: 0, 
            y: 20, 
        }, 
    }; 

    // render a motion.span using child animation for each char 
    return (
        <motion.div 
            className={`${className ?? ''} whitespace-pre-line leading-snug text-center max-w-[90vw] mx-auto break-words`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((char, index) => (
                <motion.span key={index} variants={child}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))
            }
            <motion.span
                className="blinking-cursor text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1+ letters.length * 0.03}}
            >
                |
            </motion.span>
        </motion.div>
    )
};

export default AnimatedText;