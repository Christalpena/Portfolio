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
                    <p>Bringing a creative mindset that thrives on innovation and problem-solving. My enthusiasm for technology extends beyond the backend, as I delve into the frontend with React to create seamless and engaging user experiences.
                    </p>
                    <br />
                    <p>I'm not just a developer; I'm a lifelong learner who embraces challenges as opportunities for growth. Let's connect and explore how we can create something extraordinary together, bridging the worlds of backend and frontend development.</p>
                </div>
            </div>

            <div className="about__slogan">
                <p>A good developer is not someone who knows everything by heart, a good developer is someone who knows how to search.</p>
            </div>

        </section>
    )
};

export default About;