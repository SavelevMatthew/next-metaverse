'use client'
import React from 'react'
import styles from '../styles'

type StartStepsProps = {
    text: string
    number: number
}

export const StartSteps: React.FC<StartStepsProps> = ({ text, number }) => {
    return (
        <div className={`${styles.flexCenter} flex-row`}>
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                <p
                    className='font-bold text-white text-[20px]'
                >
                    {String(number).padStart(2, '0')}
                </p>
            </div>
            <p
                className='flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]'
            >
                {text}
            </p>
        </div>
    )
}