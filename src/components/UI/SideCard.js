import {useState} from 'react';
import SocialIcons from '../SocialIcons';
import './SideCard.css';

const Card = (props) => {
    const [isOpen, setOpenState] = useState(false);

    const mouseOverHandler = (mouseOverState) => {
        (mouseOverState !== isOpen) && setOpenState(mouseOverState);
    }

    return (
        <div className="card" onMouseMove={()=>mouseOverHandler(true)} onMouseOut={()=>mouseOverHandler(false)} >
            <div className="contents">
                <img src={props.img} className="cardImg" alt="Profile" />
                <h3 className="profileName">{props.profileName}</h3>
                <p>Web developer</p>
                <SocialIcons socialLinks={props.socialLinks} />
            </div>
            <div className={isOpen ? "sideBar hidden":"sideBar"}><i className="fa fa-angle-double-right"></i></div>
        </div>

    );
}

export default Card;