'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { TypingText, TitleText } from '../components/Texts'
import { InsightCard } from '../components/Cards'
import { insights } from '../constants'

export const Insights: React.FC = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title='| Insights' textStyles='text-center'/>
                <TitleText title='Insights about metaverse' textStyles='text-center'/>
                <div
                    className='mt-[50px] flex flex-col gap-[30px]'
                >
                    {insights.map((insight, idx) => (
                        <InsightCard
                            key={idx}
                            {...insight}
                            index={idx + 1}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}