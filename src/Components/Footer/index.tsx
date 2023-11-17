import React from "react";
import "./Footer.css"


const Footer = () => {
    return(
        <footer className="footer" id="contacts">
            <div className="footer__content">
                <div className="footer__phrase">
                    <p>Let's collaborate and bring innovation to life, weaving together the threads of design and functionality for an unparalleled digital experience.</p>

                </div>
                <div className="footer__contacts">
                    <h1>Let's Get In Touch</h1>
                    <div className="footer__item">
                        <a href="mailto:christalpeerz0@gmail.com">
                            <img src="img/gmail.webp" alt="Gmail" />
                        </a>
                        <h3>Gmail</h3>
                    </div>
                    <div className="footer__item">
                        <a href="https://github.com/Christalpena"><img className="github" src="img/github.webp" alt="Github" /></a> 
                        <h3>Github</h3>
                    </div >
                    <div className="footer__item">
                        <a href="https://www.linkedin.com/in/christal-pe%C3%B1a-p%C3%A9rez/"><img src="img/linkedin.webp" alt="LinkedIn" /></a>
                        <h3>LinkedIn</h3>
                    </div>

                </div>
            </div>

            <p className="footer__credits">Created by: <span>Christal Peña Pérez</span></p>
            <p className="footer__credits">Some ideas from: <span>Hardik Gohil.</span></p>
        </footer>
    )
};

export default Footer;