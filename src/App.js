//import React from 'react';
//import ReactDOM from 'react-dom';
import React from 'react';
import MainSection from './components/MainSection';
//import './App.css';

import ProfileImg from './img/arc.jpg';


const socialIconArray = { fbUrl: "https://www.facebook.com/serazoltan89/", linkdinUrl: "https://www.linkedin.com/in/zoltansera", gitUrl: "https://github.com/zoltansera" };

const menuItemList = [
	{ title: 'home', link: 'top', uniqueId: '0' },
	{ title: 'about', link: 'about', uniqueId: '1' },
	{ title: 'projects', link: 'projects', uniqueId: '2' },
	{ title: 'contact', link: 'contact', uniqueId: '3' }
]

/*const skillList = [
	{ title: 'C', level: '3/5', key: '0' },
	{ title: 'C++', level: '3/5', key: '1' },
	{ title: 'HTML', level: '4/5', key: '2' },
	{ title: 'CSS', level: '3/5', key: '3' },
	{ title: 'JavaScript', level: '3/5', key: '4' },
	{ title: 'PHP', level: '3/5', key: '5' },
	{ title: 'MySQL', level: '3/5', key: '6' },
	{ title: 'React', level: '2/5', key: '7' }
]*/

/*const projectList = [
	{
		title: 'Páfrányszál',
		desc: 'Páfranyszál is a small business ran by my wife. She creates macrame wall hangings, jewelry and other hand made home decorations. My first project was to set up a Woocommerce based webshop so she can sell her things online. The site uses custom child theme as landing page, has Billingo online billing and Barion online payment system connected.',
		imgsrc: 'img/pszal.jpg', link: 'https://pafranyszal.eu', key: '0'
	},
	{
		title: 'PHP & SQL Webshop',
		desc: 'This is a webshop which I strated to make from zero using PHP, MySQL, some JavaScript, HTML, CSS. Once it will be finished, it will replace the previously shown webshop. The main goal of this hobby project is to gain experience in PHP and SQL by planning and building up the database from scratch and using it to store products, user data and other required things which are needed for this simple e-commerce website. It is very exciting to see how an admin function is forming and starts to work, how can I manage and visualize data from my own admin site without writing SQL transactions.',
		imgsrc: 'img/webshop1.jpg', link: 'https://github.com/zoltansera/webshop', key: '1'
	},
	{
		title: 'This portfolio page',
		desc: 'I would like to also mention here this portfolio. It was the first thing I\'ve tried to do using React. There is nothing extra about it, but this was a great opportunity to learn React basics. In this project I used custom CSS and React only.',
		imgsrc: 'img/portfolio.jpg', link: 'https://github.com/zoltansera/zoltansera.github.io', key: '2'
	}
]
*/

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollPos: 0
		}
	}

	handleScroll = () => {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			this.setState({ scrollPos: document.documentElement.scrollTop });
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<div>
				<MainSection
					menuItemList={menuItemList}
					profileImg={ProfileImg}
					profileName="Zoltán Séra"
					socialLinks={socialIconArray}
					scrollPos={this.state.scrollPos}
				/>
			</div>
		);
	}
}

/*

class AppOld extends React.Component{
	
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

function getBodySizeForMainImg(){
	const height = Math.max( window.innerHeight );
	document.getElementById("mainImgDiv").style.height= height + "px";
	return height;
}
*/
export default App;