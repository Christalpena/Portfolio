import { lazy } from "react";
import "./About.css"
const Technology = lazy(() => import('./Technologies'))

const About = () => {
   
    return (
        <section id="about">
            <h1 className="about__title">ABOUT</h1>
            <hr />
            <div className="about__container">
                <div>
                    <Technology />
                </div>
                <div className="about__content">
                    <p>My journey in web development is fueled by a genuine enthusiasm for technology and a commitment to continuous learning.</p>
                    <br />
                    <p>Passionate about web creation and the challenge of turning ideas into digital reality. With strong skills in HTML, CSS, and JavaScript, along with experience in React, Python, and Django.
                    </p>
                    <br />
                    <p>From design to implementation, my goal is to surprise and delight users with unique and memorable web experiences.
                    </p>
                    


                </div>
            </div>

            <div className="about__slogan">
                <p>A good developer is not someone who knows everything by heart, a good developer is someone who knows how to search.</p>
            </div>

        </section>
    )
};

export default About;