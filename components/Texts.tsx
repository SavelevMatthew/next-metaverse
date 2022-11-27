'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils/motion'

type TypingProps = {
    title: string
    textStyles: string
}

export const TypingText: React.FC<TypingProps> = ({ title, textStyles }) => {
    return (
        <motion.p
            variants={textContainer}
            className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
        >
            {Array.from(title).map((el, idx) => (
                <motion.span key={idx} variants={textVariant2}>
                    {el === ' ' ? '\u00A0' : el}
                </motion.span>
            ))}
        </motion.p>
    )
}

export const TitleText: React.FC<TypingProps> = () => {
    return (
        <h2>
            Title
        </h2>
    )
}