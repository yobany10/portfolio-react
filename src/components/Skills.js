import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const Skills = props => {
    return (
        <section className='skills-div'>
                <FontAwesomeIcon icon={faHtml5} className='skills-icon' />
                <FontAwesomeIcon icon={faCss3Alt} className='skills-icon' />
                <FontAwesomeIcon icon={faJs} className='skills-icon' />
                <FontAwesomeIcon icon={faReact} className='skills-icon' />
                <FontAwesomeIcon icon={faGit} className='skills-icon' />
                <FontAwesomeIcon icon={faGithub} className='skills-icon' />
                <FontAwesomeIcon icon={faNodeJs} className='skills-icon' />
                <FontAwesomeIcon icon={faNpm} className='skills-icon' />
                <FontAwesomeIcon icon={faSlack} className='skills-icon' />
                <FontAwesomeIcon icon={faBootstrap} className='skills-icon' />
                <FontAwesomeIcon icon={faApple} className='skills-icon' />
                <FontAwesomeIcon icon={faWindows} className='skills-icon' />
                {/* <h3 className='skills-item'>HTML5</h3>
                <h3 className='skills-item'>CSS3</h3>
                <h3 className='skills-item'>Javascript</h3>
                <h3 className='skills-item'>ReactJS</h3>
                <h3 className='skills-item'>APIs</h3>
                <h3 className='skills-item'>Axios</h3>
                <h3 className='skills-item'>NodeJS</h3>
                <h3 className='skills-item'>MongoDB</h3>
                <h3 className='skills-item'>Express</h3>
                <h3 className='skills-item'>MaterialUI</h3>
                <h3 className='skills-item'>Photoshop</h3>
                <h3 className='skills-item'>Illustrator</h3> */}
        </section>
    )
}

export default Skills