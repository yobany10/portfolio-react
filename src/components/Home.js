import React from 'react'
import './Home.css'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'

const Home = () => {
    return (
        <div className='home-div'>
            <header className='home-header'>
                    <h1 className='home-header-title'>YOBANY PEREZ</h1>
                    <p className='home-header-subtitle'>DEVELOPER / CHARLOTTE, NC</p>
            </header>
            <h1 className='home-section-title'>RECENT PROJECTS</h1>
            <Projects />
            <h1 className='home-section-title'>LANGUAGES & TOOLS</h1>
            <Skills />
            <About />
        </div>
    )
}

export default Home