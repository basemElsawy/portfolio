import React from 'react';
import ReactDOM from 'react-dom';
import './pricing.css'
import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-3.svg';

const pricing = () => {

  return (
    <section className="section pricing container">
      <h2 className="section-title">Pricing Plans</h2>
      <div className="pricing-container grid">
        <div className="pricing-item">
          <img src={Image1} alt="" className="pricing-img" />
          <h3 className="pricing-plan">Basic</h3>
          <p className="pricing-title">A Simple option but powerful to manage your business</p>
          <p className="pricing-support">Email support</p>
          <h3 className='price'>
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="" className='btn'>Get STarted</a>
        </div>
        <div className="pricing-item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing-img" />
          <h3 className="pricing-plan">Premium</h3>
          <p className="pricing-title">Unlimited product including app integration and more features</p>
          <p className="pricing-support">Mon-Fri support</p>
          <h3 className='price'>
            <em>$</em> 15 <span>Month</span>
          </h3>
          <a href="" className='btn'>Get STarted</a>
        </div>
        <div className="pricing-item">
          <img src={Image3} alt="" className="pricing-img" />
          <h3 className="pricing-plan">Ultimate</h3>
          <p className="pricing-title">A wise option for large companies and individuals</p>
          <p className="pricing-support">24/7 support</p>
          <h3 className='price'>
            <em>$</em> 19 <span>Month</span>
          </h3>
          <a href="" className='btn'>Get STarted</a>
        </div>


      </div>
    </section>
  )

}

export default pricing