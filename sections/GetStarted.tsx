'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion'
import { TypingText, TitleText } from '../components/Texts'
import { StartSteps } from '../components/StartSteps'
import { startingFeatures } from '../constants'

export const GetStarted: React.FC = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <motion.div
                    variants={planetVariants('left')}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src='/get-started.png'
                        alt='get-started'
                        className='w-[90%] h-[90%] object-contain'
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='flex-[0.75] flex justify-center flex-col'
                >
                    <TypingText title='| How MetaVersus works'/>
                    <TitleText title={<>Get started with just a few clicks</>} textStyles=''/>
                    <div className='mt-[32px] flex flex-col max-w-[370px] gap-[24px]'>
                        {startingFeatures.map((feat, idx) => (
                            <StartSteps
                                key={feat}
                                number={idx + 1}
                                text={feat}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}