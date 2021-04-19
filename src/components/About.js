import React from 'react'
import './About.css'
import { useMediaQuery } from '@material-ui/core'
import portraitImg from '../images/portrait1.jpg'

const About = props => {
    // variable for using a media query
  const isSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(max-width: 1000px)');
  const isLarge = useMediaQuery('(max-width: 1500px)');

  const divSize = isSmall ? 'about-div-sm' : isMedium ? 'about-div-md' : isLarge ? 'about-div-lg' : 'about-div-lg'
    return (
        <section className={divSize}>
            <img className='about-img' src={portraitImg} alt='Yobany Perez' />
            <h2 className='about-name'>Yobany Perez</h2>
            <p className='about-bio'>Front End Developer with Graphic Design experience. Enjoys building and maintaining responsive web applications from the ground up. Proficient in HTML, CSS, and JavaScript; plus modern libraries like ReactJS.</p>
        </section>
    )
}

export default About