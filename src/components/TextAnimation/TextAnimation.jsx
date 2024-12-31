import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LetterAnimation from '../LetterAnimation/LetterAnimation';



const TextAnimation = ({ words }) => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.4], [-20, 150]);
    const x2 = useTransform(scrollYProgress, [0, 0.15], [120, 0]); // Transformation inverse pour la deuxième ligne

    const lineBreaksAfterWords = [1, 1, 1, 2]; // Index des mots après lesquels il y a un saut de ligne

    const createLines = (words) => {
        const lines = [];
        let currentLine = [];
        words.forEach((word, wordIndex) => {
            currentLine.push(word);
            if (lineBreaksAfterWords.includes(wordIndex)) {
                lines.push(currentLine);
                currentLine = [];
            }
        });
        currentLine.length && lines.push(currentLine);
        return lines;
    };

    const lines = createLines(words);

    let globalWordIndex = 0;
    let letterIndex = 0;

    return (
        <div className='scroll_container'>
            {lines.map((line, lineIndex) => (
                <motion.div

                    style={{ x: lineIndex === 1 ? x2 : x }}

                >
                    {line.map((word, wordIndex) => (
                        <React.Fragment key={`${lineIndex}-${wordIndex}`}>
                            {word.split('').map((letter, index) => {
                                const animation = (
                                    <LetterAnimation
                                        key={index}
                                        letter={letter}
                                        index={letterIndex++}
                                        wordIndex={wordIndex}
                                        globalWordIndex={globalWordIndex}
                                    />
                                );

                                return animation;
                            })}
                            {wordIndex < line.length - 1 && <span>&nbsp;</span>}

                        </React.Fragment>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export default TextAnimation;
