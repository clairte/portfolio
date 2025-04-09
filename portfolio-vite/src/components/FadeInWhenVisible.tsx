// fade in and fade out animation for children elements 

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView} from 'framer-motion'; 

interface Props {
    children: React.ReactNode; 
    className?: string; 
    delay?: number; 
}

const FadeInWhenVisible = ({ children, className = '', delay = 0 }: Props) => {
    const ref = useRef(null); 
    const isInView = useInView(ref, { 
        once: false, // allows re-triggering on scroll
        margin: '-10% 0px -10% 0px', // fine-tune visibility threshold 
    }); 
    const controls = useAnimation(); 

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); 
        } else {
            controls.start('hidden'); 
        }
    }, [controls, isInView]); 

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay,
                        duration: 0.8,
                        ease: 'easeOut',
                    }
                }, 
                hidden: { 
                    opacity: 0, 
                    y: 30, 
                    transition: {
                        duration: 0.5, 
                        ease: 'easeIn', 
                    }, 
                }, 
            }}
        >
            {children}
        </motion.div>
    ); 
};

export default FadeInWhenVisible;