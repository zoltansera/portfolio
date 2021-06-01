import { useState } from 'react';
import MobileMenuBtn from './MobileMenuBtn';
import MobileMenuItem from './MobileMenuItem';
import './MobileMenu.css';

const MobileMenu = (props) => {

    const [clickedState, setClickedState] = useState('false');

    const handleClick = () => {
        clickedState===true ? setClickedState(false) : setClickedState(true);
    }

    const menuItems = props.menuItems.map((item) => <MobileMenuItem title={item.title} clicked={clickedState} key={item.uniqueId}/>);

    return (
        <div className="mobileMenu" onClick={handleClick}>
            <div className="lineContainer">
                <MobileMenuBtn clicked={clickedState} />
            </div>
            {menuItems}
        </div>
    );
}

export default MobileMenu;