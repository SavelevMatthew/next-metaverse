import React from 'react'
import { NavBar } from '../components/NavBar'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Explore } from '../sections/Explore'
import { GetStarted } from '../sections/GetStarted'
import { WhatsNew } from '../sections/WhatsNew'
import { World } from '../sections/World'

const HomePage = () => {
    return (
        <div className='bg-primary-black overflow-hidden min-h-screen'>
            <NavBar/>
            <Hero/>
            <div className='relative'>
                <About/>
                <div className='gradient-03 z-0'/>
                <Explore/>
            </div>
            <div className='relative'>
                <GetStarted/>
                <div className='gradient-04 z-0'/>
                <WhatsNew/>
            </div>
            <World/>
            <div className='relative'>
                {/*insights*/}
                <div className='gradient-05 z-0'/>
                {/*feedback*/}
            </div>
            {/*footer*/}
        </div>
    )
}

export default HomePage