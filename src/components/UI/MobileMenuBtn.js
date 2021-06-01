import './MobileMenu.css';

const MobileMenuBtn = (props) => {
    const classDef = "mobileMenuSwitchLines";
    return (
            <div className="mobileMenuBtn">
                <div className={classDef + (props.clicked===true?' top':'')}></div>
                <div className={classDef + (props.clicked===true?' middle':'')}></div>
                <div className={classDef + (props.clicked===true?' bottom':'')}></div>
            </div>
    );
}

export default MobileMenuBtn;