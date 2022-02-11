import React from 'react'
import Me from './img/Me2.png'

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Ishaq Logunleko</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Web Developer Proficient in:
                            </div>
                            <div className="i-title-item">
                                Sass
                            </div>
                            <div className="i-title-item">
                                ReactJs
                            </div>
                            <div className="i-title-item">
                                Node and Express
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I develop services for customers of all sizes, specializing in creating stylish, modern websites based on the specifications of the customers
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro