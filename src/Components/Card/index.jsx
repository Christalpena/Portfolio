import "./Card.css"
import {AiFillGithub} from 'react-icons/ai'
import Button from '@mui/material/Button';
import { FiAirplay } from "react-icons/fi";


const Card = (props) => {
    const github = () => {
        window.open(props.github, "_blank")
    }
    const webSite = () => {
        window.open(props.webSite, "_blank")
    }
    return(
        <div className="card" key={props.key}>
            <img className="card__img" src={props.img} alt={props.name} />
            <div className="card-lenguages__content">
                    <span className="card-lenguages__item">{props.lenguage1}</span>
                    <span className="card-lenguages__item">{props.lenguage2}</span>
                    <span className="card-lenguages__item">{props.lenguage3}</span>
            </div>
            <hr />
            <div className="card-information__content">
                <h4 className="card-information__title">{props.name}</h4>
                <p className="card-information__description">{props.description}</p>
            </div>
            <div className="card-links">
                <Button onClick={github} className="card-links__btn" variant="outlined" startIcon={<AiFillGithub color="white"/>}>Github
                </Button>
                {
                    props.webSite ?  
                    <Button onClick={webSite} color="primary" className="card-links__btn"  variant="outlined" startIcon=       {<FiAirplay color="white"/>}>Live
                    </Button>

                    :<></>
                }

            </div>

        </div>
    )
};


export default Card;