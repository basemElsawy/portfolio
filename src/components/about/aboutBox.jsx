import React from 'react'

const aboutBox = () => {
    return (
        <div className='about-boxes grid'>
            <div className='about-box'>
                <i className='about-icon icon-docs'></i>
                <div>
                    <h3 className="about-title">2</h3>
                    <span className='about-subtitle'>Project completed</span>
                </div>

            </div>
            <div className='about-box'>
                <i className='about-icon icon-fire'></i>
                <div>
                    <h3 className="about-title">5000kcal</h3>
                    <span className='about-subtitle'>Burned while thinking</span>
                </div>

            </div>
            <div className='about-box'>
                <i className='about-icon icon-people'></i>
                <div>
                    <h3 className="about-title">2</h3>
                    <span className='about-subtitle'>satisfied clients</span>
                </div>

            </div>
        </div>
    )
}

export default aboutBox
