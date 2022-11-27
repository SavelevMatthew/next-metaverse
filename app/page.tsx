import React from 'react'
import { NavBar } from '../components/NavBar'
import { Hero } from '../sections/Hero'

const HomePage = () => {
    return (
        <div className='bg-primary-black overflow-hidden min-h-screen'>
            <NavBar/>
            <Hero/>
        </div>
    )
}

export default HomePage