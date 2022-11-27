'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion'
import { TypingText, TitleText } from '../components/Texts'
import { NewFeature } from '../components/NewFeatures'
import { newFeatures } from '../constants'

export const WhatsNew: React.FC = () => {
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
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='flex-[0.75] flex justify-center flex-col'
                >
                    <TypingText title="| What's New?"/>
                    <TitleText title={<>What&apos;s new about MetaVersus?</>} textStyles=''/>
                    <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
                        {newFeatures.map((feat) => (
                            <NewFeature key={feat.title} {...feat}/>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={planetVariants('right')}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src='/whats-new.png'
                        alt='whats-new'
                        className='w-[90%] h-[90%] object-contain'
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}