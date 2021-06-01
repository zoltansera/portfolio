import './MobileMenu.css';

const MobileMenuItem = (props) =>{
    return (
        <div className={props.clicked===true?'mobileMenuItem':'hidden'}>
            <p>{props.title}</p>
        </div>
    );
}

export default MobileMenuItem;