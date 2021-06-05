import Title from '../../components/Title/Title.js';
import Navbar from '../../components/Navbar/Navbar.js';
import myAvatar from '../../assets/myAvatar.png'
import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe.js';
import Skills from '../../components/Skills/Skills.js'

const content = [
    "About Me",
    "Education",
    "Skills",
    "Accomplishments",
    "Work Experience",
]

const websites = [
    <a href="https://www.linkedin.com/in/alvin-ben-abraham/" target="_blank" rel="noreferrer">Linkedin</a>,
    <a href="https://github.com/alvynben/" target="_blank" rel="noreferrer">Github</a>,
    "Youtube",
]

function Landing() {
    const myName = "ALVIN BEN ABRAHAM"
    const description = "A computer engineer through and through"

    return(
        <div className="landing">
            <Title heading={myName} subheading={description} />
            <Navbar indexes={content} />
            <AboutMe imglink={myAvatar} />
            <Navbar indexes={websites} />
            <Skills />
        </div>
    )
}

export default Landing