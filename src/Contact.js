import React from 'react'
import Phone from './img/phone.png.png'
import Mail from './img/mail.png.png'
import Github from './img/github.png.png'
import { useState, useRef, useContext } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from "./context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkmode = theme.state.darkmode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_l0cy72p',
                'template_ctk367p',
                formRef.current,
                'user_JOvRx1haVbuhEhqU3cqSz'
            )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            +2349092994393
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Mail}
                                alt=""
                                className="c-icon"
                            />
                            ishaqcole@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Github}
                                alt=""
                                className="c-icon"
                            />
                            Samphomen
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always ready to freelance if the right project comes along
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkmode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkmode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkmode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkmode && "#333" }} rows="6" placeholder='Message' name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact