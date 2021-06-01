import {Link, animateScroll as scroll} from 'react-scroll';
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <Link className="menuItem" to={props.link} spy={true} smooth={true} duration={500} onClick={props.link === 'top' ? ()=>scroll.scrollToTop() : ()=>{}}>
            {props.title}
        </Link>
    );
}

export default MenuItem;