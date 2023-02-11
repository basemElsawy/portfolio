import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './headerSocials';
import Shapes from './shapes';

import ScrollDown from './scrollDown';

const home = () => {

  return (
    <section id="home" className="home container">
      <div className='intro'>
        <img src={Me} alt="" className='home-img' />
        <h1 className='home-name'>Basem Abuzaid</h1>
        <span className='home-education'>I'm a Front-end developer</span>
        <HeaderSocials />
        <a href="#contact" className='btn'>Hire Me</a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )

}


export default home;