import React, { useState } from "react"
const technologies = [
    {   name:'Python',
        img: 'img/Technologies/python.webp'
    },
    {   name:'JavaScript',
        img: 'img/Technologies/JS.webp'
    },
    {   name:'HTML',
        img: 'img/Technologies/html5.webp'
    },
    {   name:'CSS',
        img: 'img/Technologies/CSS.jpg'
    },
    {   name:'Django',
        img: 'img/Technologies/django.webp'
    },
    {   name:'Github',
        img: 'img/github.webp'
    },
    {   name:'Sqlite',
        img: 'img/Technologies/sqlite.webp'
    },
    {   name:'ReactJS',
        img: 'img/Technologies/react.webp'
    },
    {   name:'Flask',
    img: 'img/Technologies/flask.webp'
    },
    {
        name:"Bootstrap",
        img: 'img/Technologies/bootstrap.webp'
    },
    {
        name:"Jira",
        img: 'img/Technologies/Jira.webp'
    },
      
]



const Technology = () => {
    const [isActive, setIsActive] = useState(true);

    const handleToggleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`technology ${isActive ? 'active' : ''}`}>
            <div className="toggle" onClick={handleToggleClick}>
                <img src="img/yo.webp" alt="yo" />
            </div>
            {
                technologies.map((tech, index) => (
                    <li style={{ '--i': index } as React.CSSProperties} key={index}>
                        <img className="technology__img" src={tech.img} alt={tech.name}/>
                    </li>
                ))
            }
        </div>
    );
};

export default Technology;