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
    const isInView = useInView(ref, { once: true}); 
    const controls = useAnimation(); 

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); 
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
                        duration: 1,
                    }
                }, 
                hidden: { opacity: 0, y: 30 }
            }}
        >
            {children}
        </motion.div>
    ); 
};

export default FadeInWhenVisible;