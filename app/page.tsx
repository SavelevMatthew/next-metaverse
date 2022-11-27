import React from 'react'
import { NavBar } from '../components/NavBar'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'

const HomePage = () => {
    return (
        <div className='bg-primary-black overflow-hidden min-h-screen'>
            <NavBar/>
            <Hero/>
            <div className='relative'>
                <About/>
                <div className='gradient-03 z-0'/>
                {/*explore*/}
            </div>
            <div className='relative'>
                {/*started*/}
                <div className='gradient-04 z-0'/>
                {/*new*/}
            </div>
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