import React from 'react'

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src='https://image.freepik.com/free-photo/content-black-man-with-laptop_23-2147664372.jpg'
                        alt=''
                        className='a-img'
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    It is a long established faact that a reader will be distracted by the readable content
                </p>
                <p className='a-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem ab facilis iure nobis molestiae voluptas aperiam, corporis, explicabo quasi voluptatem aliquid, eum dolore corrupti saepe exercitationem incidunt dolorum tempore.
                </p>
            </div>
        </div>
    )
}

export default About