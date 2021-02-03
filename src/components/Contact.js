import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = props => {
    return (
        <section className='contact-div'>
            <a className='contact-linkedin' href='https://www.linkedin.com/in/yobany117/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className='contact-github' href='https://github.com/yobany10' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a className='contact-email' href='mailto:yobanydesign@gmail.com'>yobanydesign@gmail.com</a>
        </section>
    )
}

export default Contact