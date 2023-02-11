import React from 'react';
import ReactDOM from 'react-dom';
import './contact.css'

const contact = () => {

  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">
            Let's talk about everything!
          </h3>
          <p className='contact-details'>
            Don't like forms? Send me an email.👏
          </p>
        </div>
        <form action="" className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input type="text" className="contact-form-input" placeholder='Insert your name' />
            </div>
            <div className="contact-form-div">
              <input type="email" className="contact-form-input" placeholder='Insert your email' />
            </div>
            <div className="contact-form-div">
              <input type="text" className="contact-form-input" placeholder='Insert your subject' />
            </div>
            <div className="contact-form-div contact-form-area">
              <textarea className="contact-form-input" placeholder='Write your message' cols='30' rows='10' />
            </div>
            <button className='btn'>Send Message</button>
          </div>
        </form>
      </div>


    </section>
  )

}

export default contact