(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),l=n(7),o=n.n(l),c=(n(13),n(2)),r=n(3),m=n(5),d=n(4),h=(n(14),[{title:"HOME",link:"#top",key:"0"},{title:"INTRO",link:"#intro",key:"1"},{title:"PROJECTS",link:"#projects",key:"2"},{title:"ABOUT",link:"#about",key:"3"},{title:"CONTACT",link:"#contact",key:"4"}]),b=[{title:"C",level:"3/5",key:"0"},{title:"C++",level:"3/5",key:"1"},{title:"HTML",level:"4/5",key:"2"},{title:"CSS",level:"3/5",key:"3"},{title:"JavaScript",level:"3/5",key:"4"},{title:"PHP",level:"3/5",key:"5"},{title:"MySQL",level:"3/5",key:"6"},{title:"React",level:"2/5",key:"7"}],j=[{title:"P\xe1fr\xe1nysz\xe1l",desc:"P\xe1franysz\xe1l is a small business ran by my wife. She creates macrame wall hangings, jewelry and other hand made home decorations. My first project was to set up a Woocommerce based webshop so she can sell her things online. The site uses custom child theme as landing page, has Billingo online billing and Barion online payment system connected.",imgsrc:"img/pszal.jpg",link:"https://pafranyszal.eu",key:"0"},{title:"PHP & SQL Webshop",desc:"This is a webshop which I strated to make from zero using PHP, MySQL, some JavaScript, HTML, CSS. Once it will be finished, it will replace the previously shown webshop. The main goal of this hobby project is to gain experience in PHP and SQL by planning and building up the database from scratch and using it to store products, user data and other required things which are needed for this simple e-commerce website. It is very exciting to see how an admin function is forming and starts to work, how can I manage and visualize data from my own admin site without writing SQL transactions.",imgsrc:"img/webshop1.jpg",link:"https://github.com/zoltansera/webshop",key:"1"},{title:"This portfolio page",desc:"I would like to also mention here this portfolio. It was the first thing I've tried to do using React. There is nothing extra about it, but this was a great opportunity to learn React basics. In this project I used custom CSS and React only.",imgsrc:"img/portfolio.jpg",link:"https://github.com/zoltansera/portfolio",key:"2"}],u=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).thisRef=s.a.createRef(),i}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{name:this.props.name,id:this.props.id,className:this.props.className,ref:this.thisRef,children:this.props.child})}}]),n}(s.a.Component),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsx)(u,{id:"menu",className:"menubar",child:Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{id:"scrolledTranspMenuBarBg",className:"scrTrasnpMenuBg"}),h.map((function(e){return Object(i.jsx)(u,{className:"menuBtn",child:Object(i.jsx)("a",{href:e.link,className:"desktopLinkBtn",children:e.title})})}))," "]})})}}]),n}(s.a.Component),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"openMenu",value:function(){if("mobileMenu"===document.getElementById("mobilemenu").className){document.getElementById("mobilemenu").className="mobileMenu_open",document.getElementById("midLine").style.transform="translateX(-70px)",document.getElementById("midLine").style.opacity="0",document.getElementById("midLine").style.transition="transform 0.2s linear, opacity 0.1s linear",document.getElementById("topLine").style.transform="rotate(45deg) translateY(16px)",document.getElementById("topLine").style.transition="transform 0.3s linear",document.getElementById("bottomLine").style.transform="rotate(-45deg) translateY(-16px)",document.getElementById("bottomLine").style.transition="transform 0.3s linear",document.getElementsByName("mobiBtn").className="mobMenuBtn_visible";for(var e=0;e<h.length;e++)document.getElementsByName("mobiBtn")[e].className="mobMenuBtn_visible"}else{document.getElementById("mobilemenu").className="mobileMenu",document.getElementById("midLine").style.transform="translateX(0px)",document.getElementById("midLine").style.opacity="1",document.getElementById("midLine").style.transition="transform 0.2s linear, opacity 0.3s linear",document.getElementById("topLine").style.transform="rotate(0deg) translateY(0px)",document.getElementById("bottomLine").style.transform="rotate(0deg) translateY(0px)";for(var t=0;t<h.length;t++)document.getElementsByName("mobiBtn")[t].className="mobMenuBtn"}}},{key:"render",value:function(){return Object(i.jsxs)("div",{id:"mobilemenu",className:"mobileMenu",children:[Object(i.jsxs)("div",{className:"mobileMenuSwitch",onClick:this.openMenu,children:[Object(i.jsx)("div",{className:"mobileMenuSwitchLines",id:"topLine"}),Object(i.jsx)("div",{className:"mobileMenuSwitchLines",id:"midLine"}),Object(i.jsx)("div",{className:"mobileMenuSwitchLines",id:"bottomLine"})]}),h.map((function(e){return Object(i.jsx)(u,{name:"mobiBtn",className:"mobMenuBtn",child:Object(i.jsx)("a",{href:e.link,className:"linkBtn",children:e.title},e.key)})}))]})}}]),n}(s.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("mainImgDiv").style.height=x()+"px",document.getElementById("mainImgDiv").style.backgroundImage="url(main.jpg)",document.getElementById("mainImgDiv").style.backgroundAttachment="fixed",document.getElementById("mainImgDiv").style.backgroundPosition="center",document.getElementById("mainImgDiv").style.backgroundRepeat="no-repeat",document.getElementById("mainImgDiv").style.backgroundSize="cover",window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",x)}},{key:"handleScroll",value:function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?(document.getElementById("mainlogo").className="caption_fadeout",document.getElementById("menu").className="menubar_scrolled",document.getElementById("scrolledTranspMenuBarBg").className="scrTrasnpMenuBg_scrolled",document.getElementById("floatTop").style.visibility="visible"):(document.getElementById("mainlogo").className="caption",document.getElementById("menu").className="menubar",document.getElementById("scrolledTranspMenuBarBg").className="scrTrasnpMenuBg",document.getElementById("floatTop").style.visibility="hidden")}},{key:"scrollTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(g,{}),Object(i.jsx)(p,{}),Object(i.jsx)(u,{id:"mainImgDiv",className:"bgimg-1",child:Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{id:"mainlogo",className:"caption",child:Object(i.jsx)(u,{child:Object(i.jsx)("p",{children:"Hi! I'm Zoltan Sera"})})}),Object(i.jsx)(u,{className:"mainSocialIcons",child:y()})]})}),Object(i.jsx)(u,{id:"intro",className:"textDiv",child:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Introduction"}),Object(i.jsx)("p",{children:"As an employee at multinational companies, I've always thought about how can I fill the idle time with creativity and what kind of useful knowledge should I get to proceed in life. This led me to start learning of web development in 2017. With quick learning and willingness to improve now I feel ready to accept challenges and learn more through real life scenarios."}),Object(i.jsx)("p",{children:"I have experience in the following fields:"}),Object(i.jsx)("br",{}),Object(i.jsx)("center",{children:b.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{className:"skill tooltip",children:[e.title,Object(i.jsxs)("span",{className:"tooltiptext",children:["Skill level:",Object(i.jsx)("br",{}),e.level]})]},e.key)})}))})]})}),Object(i.jsx)(u,{className:"bgimg-2"}),Object(i.jsx)(u,{id:"projects",className:"textDiv",child:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Projects"}),Object(i.jsx)("p",{children:"Please take a look at my latest projects. These were all made during my learning period."}),Object(i.jsx)("br",{}),Object(i.jsx)("center",{children:j.map((function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{className:"projectTitle",children:e.title}),Object(i.jsxs)("div",{className:"projectRow",children:[Object(i.jsxs)("div",{className:"projectRowLeft",children:[e.desc,Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"More info: ",Object(i.jsx)("a",{className:"white",href:e.link,rel:"noreferrer",target:"_blank",children:e.link})]}),Object(i.jsx)("div",{className:"projectRowRight",children:Object(i.jsx)("img",{src:e.imgsrc,alt:"My projects"})})]}),Object(i.jsx)("br",{})]})}))})]})}),Object(i.jsx)(u,{className:"bgimg-3"}),Object(i.jsx)(u,{id:"about",className:"textDiv",child:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"More about me"}),Object(i.jsx)("p",{children:"Nowadays in my freetime I usually renovate our house which we have bought not so long ago with my wife. This summer we managed to move in, so now I'm glad that our home is located on top of eastern Bakony. From here I can hop on my bike and in a minute beautiful forests, hiking and mountain bike routes are reachable. These are my main hobbies besides archery. On wet and cold days I always find something new to learn and I'm constantly trying to expand my knowledge in software and web development topics."})]})}),Object(i.jsx)(u,{className:"bgimg-4"}),Object(i.jsx)(u,{id:"contact",className:"textDiv",child:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-map-marker fa-fw fa-2x"})," T\xe9s, Hungary"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-phone fa-fw fa-2x"})," Phone: +36 30 855 7051"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-envelope fa-fw fa-2x",children:" "})," Email: zoltan.sera@gmail.com"]})]})}),Object(i.jsx)(u,{id:"footer",className:"footer",child:y()}),Object(i.jsx)(u,{id:"floatTop",className:"floatingBackToTop",child:Object(i.jsx)("div",{children:Object(i.jsx)("i",{className:"fa fa-arrow-up fa-2x",onClick:this.scrollTop})})})]})}}]),n}(s.a.Component);function y(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"https://www.facebook.com/serazoltan89/",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"fa fa-facebook fa-fw fa-2x social-light"})}),"\xa0\xa0\xa0",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/zoltansera",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"fa fa-linkedin fa-fw fa-2x social-light"})}),"\xa0\xa0\xa0",Object(i.jsx)("a",{href:"https://github.com/zoltansera",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"fa fa-github fa-fw fa-2x social-light"})})]})}function x(){var e=Math.max(window.innerHeight);return document.getElementById("mainImgDiv").style.height=e+"px",e}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),s(e),l(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.92f77297.chunk.js.map