import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';
import Image from '../../assets/avatar-2.svg';
import AboutBox from './aboutBox';
const about = () => {

  return (
    <section id='about' className="about container section">
      <h2 className="section-title">
        About Me
      </h2>
      <div className="about-container grid">
        <img src={Image} className="about-img" alt="" />
        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description">
              Hello my name is Basem Abuzaid,i'm a web developer from egypt im fresh graduate with a bachelor degree and i'm working as a freelance at the moment im a Front-End developer im using React js, and i have quite the experience with UI/UX
            </p>
            <a href="" className='btn'>Download CV</a>

          </div>
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Development</h3>
                <span className="skills-number">65%</span>
              </div>
              <div className="skills-bar"><span className="skills-precentage  development"></span></div>
            </div>
            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">UI/UX Design</h3>
                <span className="skills-number">68%</span>
              </div>
              <div className="skills-bar"><span className="skills-precentage ui-design"></span></div>
            </div>
            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Digital Design</h3>
                <span className="skills-number">28%</span>
              </div>
              <div className="skills-bar"><span className="skills-precentage digital-design"></span></div>
            </div>
            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Javascript</h3>
                <span className="skills-number">75%</span>
              </div>
              <div className="skills-bar"><span className="skills-precentage javascript"></span></div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )

}


export default about