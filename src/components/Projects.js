import React from 'react'
import './Projects.css'
import Project from './Project'
import projectData from '../data/projectData'

const Projects = () => {
    return (
        <section className='projects-div'>
            {projectData.map(item => <Project
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description} />)}
        </section>
    )
}

export default Projects