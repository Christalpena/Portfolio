import "./Welcome.css"
const Welcome = () => {
    return(
        <section>
            <div className="welcome">
                   
                    <div className="welcome-div__content__tags">
                        <h2>Hi there, i am</h2>
                        <h6>what you are looking for</h6>
                        <h1>Christal Peña Pérez</h1>
                        <h2>FullStack Developer</h2>
                    </div>
                    <div className="welcome-img__content">
                        <a href="mailto:christalpeerz0@gmail.com">                        
                            <img className="welcome__img welcome__img_gmail_transform" src="img/gmail.webp" alt="gmail" />
                        </a>

                        <a href="https://github.com/Christalpena">
                            <img className="welcome__img welcome__img_github_transform" src="img/github.webp" alt="github" />
                        </a>

                        <a href="https://www.linkedin.com/in/christal-pe%C3%B1a-p%C3%A9rez/">
                            <img className="welcome__img welcome__img_linkedin_transform" src="img/linkedin.webp" alt="linkedin" />
                        </a>
                    </div>


            </div>
        </section>

    )
};


export default Welcome;