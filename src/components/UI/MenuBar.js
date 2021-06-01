import MenuItem from './MenuItem';
import './MenuBar.css';

const MenuBar = (props) => {
    const menuItems = props.menuItems.map((item) => <MenuItem title={item.title} link={item.link} key={item.uniqueId} />);
    return (
        <div className={"menuBar" + (props.scrolled===true ? " darken": "")}>
            {menuItems}
        </div>
    );
}

export default MenuBar;