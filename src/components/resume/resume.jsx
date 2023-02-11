import React from 'react';
import ReactDOM from 'react-dom';
import './resume.css';
import Data from './data';
import Card from './Card';

const resume = () => {

  return (
    <section className="resume container section" id="resume">
      <h2 className="section-title">
        Experience
      </h2>
      <div className="resume-container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>
      </div>
    </section>
  )

}


export default resume