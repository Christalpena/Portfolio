import "./Header.css"


const Header = () => {
    return(
        <header className="header">
            <h1 className="header__titule">CPP</h1>
            <div className="header-links">
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>

        </header>
    )
};


export default Header;