import React from 'react'
import './ProjectWindow.css'

const ProjectWindow = props => {
    return (
        <div className='project-window-div'>
            <img className='project-window-img'
                src={`${props.image}`}
                alt={`${props.name}`} />
        </div>
    )
}

export default ProjectWindow