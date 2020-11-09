import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

//Global variables
const fbUrl="https://www.facebook.com/serazoltan89/";
const linkdinUrl="https://www.linkedin.com/in/zoltansera";
const gitUrl="https://github.com/zoltansera";

const menuItemList = [
	{title: 'HOME', link: '#top', key:'0'},
	{title: 'INTRO', link: '#intro', key:'1'},
	{title: 'PROJECTS', link: '#projects', key:'2'},
	{title: 'ABOUT', link: '#about', key:'3'},
	{title: 'CONTACT', link: '#contact', key:'4'}
]

const skillList = [
	{title: 'C', level: '3/5', key:'0'},
	{title: 'C++', level: '3/5', key:'1'},
	{title: 'HTML', level: '4/5', key:'2'},
	{title: 'CSS', level: '3/5', key:'3'},
	{title: 'JavaScript', level: '3/5', key:'4'},
	{title: 'PHP', level: '3/5', key:'5'},
	{title: 'MySQL', level: '3/5', key:'6'},
	{title: 'React', level: '2/5', key:'7'}
]

const projectList = [
	{ title: 'Páfrányszál',
	  desc: 'Páfranyszál is a small business ran by my wife. She creates macrame wall hangings, jewelry and other hand made home decorations. My first project was to set up a Woocommerce based webshop so she can sell her things online. The site uses custom child theme as landing page, has Billingo online billing and Barion online payment system connected.',
	  imgsrc: 'img/pszal.jpg', link: 'https://pafranyszal.eu', key:'0'},
	{ title: 'PHP & SQL Webshop',
	  desc: 'This is a webshop which I strated to make from zero using PHP, MySQL, some JavaScript, HTML, CSS. Once it will be finished, it will replace the previously shown webshop. The main goal of this hobby project is to gain experience in PHP and SQL by planning and building up the database from scratch and using it to store products, user data and other required things which are needed for this simple e-commerce website. It is very exciting to see how an admin function is forming and starts to work, how can I manage and visualize data from my own admin site without writing SQL transactions.',
	  imgsrc: 'img/webshop1.jpg',  link: 'https://github.com/zoltansera/webshop', key:'1'},
	{ title: 'This portfolio page',
	  desc: 'I would like to also mention here this portfolio. It was the first thing I\'ve tried to do using React. There is nothing extra about it, but this was a great opportunity to learn React basics. In this project I used custom CSS and React only.',
	  imgsrc: 'img/portfolio.jpg',  link: 'https://github.com/zoltansera/zoltansera.github.io', key:'2'}
]

//Classes
class Div extends React.Component{
	constructor(props){
		super(props);
		this.thisRef = React.createRef();
	}
	render(){
		return(
			<div name={this.props.name} id={this.props.id} className={this.props.className} ref={this.thisRef}>{this.props.child}</div>
		);
	}
}

class Menu extends React.Component{
	render(){
		return(
			<Div id="menu" className="menubar" child=<div><Div id="scrolledTranspMenuBarBg" className="scrTrasnpMenuBg" />{menuItemList.map(menuItem => <Div className="menuBtn" child=<a href={menuItem.link} className="desktopLinkBtn">{menuItem.title}</a> />) } </div> />
		);
	}
}



class MobileMenu extends React.Component{
	openMenu(){
		var state = document.getElementById("mobilemenu").className;
		
		if(state==="mobileMenu"){
			document.getElementById("mobilemenu").className="mobileMenu_open";
			
			document.getElementById("midLine").style.transform="translateX(-70px)";
			document.getElementById("midLine").style.opacity="0";
			document.getElementById("midLine").style.transition="transform 0.2s linear, opacity 0.1s linear";
			
			document.getElementById("topLine").style.transform="rotate(45deg) translateY(16px)";
			document.getElementById("topLine").style.transition="transform 0.3s linear";
			
			document.getElementById("bottomLine").style.transform="rotate(-45deg) translateY(-16px)";
			document.getElementById("bottomLine").style.transition="transform 0.3s linear";
			document.getElementsByName("mobiBtn").className="mobMenuBtn_visible";
			for(let i=0;i<menuItemList.length;i++){
				document.getElementsByName("mobiBtn")[i].className="mobMenuBtn_visible";
			}
		} else {
			document.getElementById("mobilemenu").className="mobileMenu";
			
			document.getElementById("midLine").style.transform="translateX(0px)";
			document.getElementById("midLine").style.opacity="1";
			document.getElementById("midLine").style.transition="transform 0.2s linear, opacity 0.3s linear";
			document.getElementById("topLine").style.transform="rotate(0deg) translateY(0px)";
			document.getElementById("bottomLine").style.transform="rotate(0deg) translateY(0px)";
			for(let i=0;i<menuItemList.length;i++){
				document.getElementsByName("mobiBtn")[i].className="mobMenuBtn";
			}
		}
	}
	
	render(){
		return(
			<div id="mobilemenu" className="mobileMenu">
				<div className="mobileMenuSwitch" onClick={this.openMenu}>
					<div className="mobileMenuSwitchLines" id="topLine"></div>
					<div className="mobileMenuSwitchLines" id="midLine"></div>
					<div className="mobileMenuSwitchLines" id="bottomLine"></div>
				</div>
				{menuItemList.map(mobilemenuItem =><Div name="mobiBtn" className="mobMenuBtn" child=<a href={mobilemenuItem.link} className="linkBtn" key={mobilemenuItem.key}>{mobilemenuItem.title}</a> />)}
			</div>
		);
	}
}

class App extends React.Component{
	
	componentDidMount(){
		document.getElementById("mainImgDiv").style.height= getBodySizeForMainImg() + "px";
		document.getElementById("mainImgDiv").style.backgroundImage="url(main.jpg)";
		document.getElementById("mainImgDiv").style.backgroundAttachment="fixed";
		document.getElementById("mainImgDiv").style.backgroundPosition="center";
		document.getElementById("mainImgDiv").style.backgroundRepeat="no-repeat";
		document.getElementById("mainImgDiv").style.backgroundSize="cover";
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("resize", getBodySizeForMainImg);
	}	
	
	handleScroll(){
		if( document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ){
			document.getElementById("mainlogo").className="caption_fadeout";
			document.getElementById("menu").className="menubar_scrolled";
			document.getElementById("scrolledTranspMenuBarBg").className="scrTrasnpMenuBg_scrolled";
			document.getElementById("floatTop").style.visibility="visible";
		} else {
			document.getElementById("mainlogo").className="caption";
			document.getElementById("menu").className="menubar";
			document.getElementById("scrolledTranspMenuBarBg").className="scrTrasnpMenuBg";
			document.getElementById("floatTop").style.visibility="hidden";
		}
	}
	
	scrollTop() {
		window.scrollTo(0, 0);
	}
	
	render(){
		return (
			<div className="App">
				<Menu />
				<MobileMenu />
				<Div
						id="mainImgDiv"
						className="bgimg-1"
						child=<div>
									<Div	id="mainlogo" className="caption" child=<Div child=<p>Hi! I'm Zoltan Sera</p> />	/>
									 <Div className="mainSocialIcons" child={SocialIcons()} />
								 </div>
						/>
				<Div id="intro" className="textDiv" child=<div>
					<h2>Introduction</h2>
					<p>As an employee at multinational companies, I've always thought about how can I fill the idle time with creativity
						  and what kind of useful knowledge should I get to proceed in life. This led me to start learning of web development in 2017.
						  With quick learning and willingness to improve now I feel ready to accept challenges and learn more through real life scenarios.
					</p>
					<p>I have experience in the following fields:</p><br />
					<center>
					{skillList.map(skill => <><p className="skill tooltip" key={skill.key}>{skill.title}<span className="tooltiptext">Skill level:<br />{skill.level}</span></p></>) }
					</center>
				</div> />
				
				<Div className="bgimg-2" />
				
				<Div id="projects" className="textDiv" child=<div>
					<h2>Projects</h2>
					<p>Please take a look at my latest projects. These were all made during my learning period.</p><br />
					<center>
					{projectList.map(project => <>
						<h3 className="projectTitle">{project.title}</h3>
						<div className="projectRow">
							<div className="projectRowLeft">{project.desc}<br /><br />More info: <a className="white" href={project.link} rel="noreferrer" target="_blank">{project.link}</a></div>
							<div className="projectRowRight"><img src={project.imgsrc} alt="My projects" /></div>
						</div><br />
					</>) }
					</center>
				</div> />
  			
				<Div className="bgimg-3" />
				
				<Div id="about" className="textDiv" child=<div>
					<h2>More about me</h2>
					<p>Nowadays in my freetime I usually renovate our house which we have bought
						  not so long ago with my wife. This summer we managed to move in, so now I'm
						  glad that our home is located on top of eastern Bakony. From here I can hop on my bike
						  and in a minute beautiful forests, hiking and mountain bike routes are reachable.
						  These are my main hobbies besides archery. On wet and cold days I always find something new to learn and I'm constantly trying to expand my knowledge in software and web development topics.
					</p>
				</div> />
				
				<Div className="bgimg-4" />
			
				<Div id="contact" className="textDiv" child=<div>
					<h2>Contacts</h2>
					<p><i className="fa fa-map-marker fa-fw fa-2x"></i> Tés, Hungary</p>
					<p><i className="fa fa-phone fa-fw fa-2x"></i> Phone: +36 30 855 7051</p>
					<p><i className="fa fa-envelope fa-fw fa-2x"> </i> Email: zoltan.sera@gmail.com</p>
				</div> />
				
				<Div id="footer" className="footer" child={SocialIcons()} />
				
				<Div id="floatTop" className="floatingBackToTop" child=<div><i className="fa fa-arrow-up fa-2x" onClick={this.scrollTop}></i></div> />
			</div>
		);
	}
}

export default App;


function SocialIcons(){
	return(
		<div>
			<a href={fbUrl} rel="noreferrer" target="_blank"><i className="fa fa-facebook fa-fw fa-2x social-light"></i></a>&nbsp;&nbsp;&nbsp;
			<a href={linkdinUrl} rel="noreferrer" target="_blank"><i className="fa fa-linkedin fa-fw fa-2x social-light"></i></a>&nbsp;&nbsp;&nbsp;
			<a href={gitUrl} rel="noreferrer" target="_blank"><i className="fa fa-github fa-fw fa-2x social-light"></i></a>
		</div>
		);
}

function getBodySizeForMainImg(){
	const height = Math.max( window.innerHeight );
	document.getElementById("mainImgDiv").style.height= height + "px";
	return height;
}