'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { TypingText, TitleText } from '../components/Texts'
import { ExploreCard } from '../components/Cards'
import { exploreWorlds } from '../constants'

export const Explore: React.FC = () => {
    const [active, setActive] = useState('world-2')

    return (
        <section className={`${styles.paddings}`} id='explore'>
            <motion.div
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title='| The World' textStyles='text-center'/>
                <TitleText
                    title={<>Choose the world you want<br className='md:block hidden'/>to explore</>}
                    textStyles='text-center'
                />
                <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
                    {exploreWorlds.map((world, idx) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            index={idx}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}