import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Skills = props => {
    return (
        <section className='skills-div'>
            <FontAwesomeIcon icon={faCoffee} />
        </section>
    )
}

export default Skills