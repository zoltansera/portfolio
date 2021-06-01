import './SocialIcons.css';

const SocialIcons = (props) => {
    return (
        <div className="socialIconsContainer">
            <a href={props.socialLinks.fbUrl} rel="noreferrer" target="_blank"><i className="fa fa-facebook fa-fw fa-2x socialIconsContainer__icon"></i></a>
            <a href={props.socialLinks.linkdinUrl} rel="noreferrer" target="_blank"><i className="fa fa-linkedin fa-fw fa-2x socialIconsContainer__icon"></i></a>
            <a href={props.socialLinks.gitUrl} rel="noreferrer" target="_blank"><i className="fa fa-github fa-fw fa-2x socialIconsContainer__icon"></i></a>
        </div>
    );
}

export default SocialIcons;