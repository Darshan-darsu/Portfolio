import React, { useState } from 'react'
import Header from '../components/header'
import HomeSection from '../components/homesection/homesection'

import Skills from '../components/skills/skill';
import Projects from '../components/projects';
import Contact from '../components/contact/contact';

const Home = () => {

    return (<>
        <div className='home-container'>
            <Header />
            <HomeSection />
            <Skills/>
            <Projects/>
            <Contact/>

        </div>
    </>

    )
}

export default Home