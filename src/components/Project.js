import React from 'react'
import './Project.css'
import ProjectWindow from './ProjectWindow'

const Project = props => {
    return (
        <section className='project-div'>
            <ProjectWindow className='project-window' 
                name={props.name} 
                image={props.image} />
            <section className='project-info'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </section>
        </section>
    )
}

export default Project