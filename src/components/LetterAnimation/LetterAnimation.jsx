import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/letterAnimating/letterAnimating.css'


const LetterAnimation = ({ letter, index, wordIndex }) => {


    const letterVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: (custom) => ({
            opacity: 1,
            x: 0,

            transition: {
                delay: custom * 0.08,
            },
        }),
    };
    const customStyle = {
        color: wordIndex === 1 ? '#bcaf87' : 'black',



    };
    return (

        <motion.span

            custom={index} // Ajoutez un délai supplémentaire pour chaque mot
            variants={letterVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            style={customStyle}

            className='letterAnimating'

        >
            {letter}
        </motion.span>
    );
};

export default LetterAnimation;
