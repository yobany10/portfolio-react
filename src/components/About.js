import React from 'react'
import './About.css'
import { useMediaQuery } from '@material-ui/core'

const About = props => {
    // variable for using a media query
  const isSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(max-width: 1000px)');
  const isLarge = useMediaQuery('(max-width: 1500px)');

  const divSize = isSmall ? 'about-div-sm' : isMedium ? 'about-div-md' : isLarge ? 'about-div-lg' : 'about-div-lg'
    return (
        <section className={divSize}>
            <img className='about-img' src='https://media-exp1.licdn.com/dms/image/C4E03AQEVbQNPWSNrgQ/profile-displayphoto-shrink_800_800/0/1612370275817?e=1617840000&v=beta&t=lX1h1gWj53xSBLUBuskuXe52F6Y6SCYBPWij6fnd1Rg' alt='me' />
            <h2 className='about-name'>Yobany Perez</h2>
            <p className='about-bio'>Front End Developer with Graphic Design experience. Enjoys building and maintaining responsive applications from the ground up. Proficient in HTML, CSS, and JavaScript; plus modern libraries like ReactJS.</p>
        </section>
    )
}

export default About