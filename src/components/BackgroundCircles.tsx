"use client";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 10, 20, 10 ,1],
                opacity: [0.7, 0.5, 0.3, 0.5, 0.7],
                borderRadius: ["20%", "20%", "50%", "80%", "80%"],
            }}
            transition={{ duration: 1.5 }}
            className='relative flex justify-center items-center '
        >
            <div className='absolute border border-primary rounded-full w-[50vw] animate-ping delay-[2000]' />

           
        </motion.div>
    );
};

export default BackgroundCircles;
