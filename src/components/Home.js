import React from 'react'
import './Home.css'
import Projects from './Projects'

const Home = () => {
    return (
        <div className='home-div'>
            <header className='home-header'>
                    <h1 className='home-header-title'>YOBANY PEREZ</h1>
                    <p className='home-header-subtitle'>DEVELOPER / CHARLOTTE, NC</p>
            </header>
            <Projects />
        </div>
    )
}

export default Home