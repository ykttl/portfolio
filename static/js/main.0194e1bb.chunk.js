(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(90)},48:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(37),l=n.n(o),r=n(4),c=n(5),s=n(7),m=n(6),u=n(8),d=(n(48),n(38)),h=n.n(d);function p(e){var t;e.setup=function(){navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0?e.createCanvas(e.windowWidth,e.windowHeight):e.createCanvas(e.windowWidth,.8*e.windowHeight),e.colorMode(e.HSL,360),t=0},e.windowResized=function(){navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0?e.resizeCanvas(e.windowWidth,e.windowHeight):e.resizeCanvas(e.windowWidth,.8*e.windowHeight)},e.draw=function(){},e.mouseMoved=function(){t>360?t=0:t+=10,e.noStroke(),e.fill(t,200,200,15),e.ellipse(e.mouseX,e.mouseY,80,80)},e.touchMoved=function(){t>360?t=0:t+=10,e.noStroke(),e.fill(t,200,200,15),e.ellipse(e.mouseX,e.mouseY,80,80)},e.mouseWheel=function(){t>360?t=0:t+=10,e.noStroke(),e.fill(t,200,200,15),e.ellipse(e.mouseX,e.mouseY,80,80)}}var g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"landing-page"},i.a.createElement("div",{className:"flexbox"},i.a.createElement("div",{className:"introduction-box"},i.a.createElement("h1",null,"Hi! I'm Yuko, a front-end developer."),i.a.createElement("h3",null,"I use: HTML, CSS, JS (React, Redux), Node.js, MongoDB"),i.a.createElement("br",null),i.a.createElement("h4",{className:"blue"},"try move mouse on this area! \ud83d\ude06 \ud83c\udf08"))))}}]),t}(a.Component),k=function(e){return i.a.createElement("div",{className:"content"},i.a.createElement("p",{className:"project-name"},e.project.name),i.a.createElement("div",{className:"screenshot-container"},i.a.createElement("img",{src:e.project.img,className:"screenshot"})),i.a.createElement("p",{className:"project-skills"},e.project.skills),i.a.createElement("button",{className:"project-link-btn"},i.a.createElement("a",{href:e.project.demo_link},"View Site ",i.a.createElement("i",{class:"fas fa-desktop"}))),i.a.createElement("button",{className:"project-link-btn"},i.a.createElement("a",{href:e.project.github},"GitHub ",i.a.createElement("i",{class:"fab fa-github"}))))},f=n(91),b=n(92),E=n(93),w=[{name:"Portfolio Site",img:"screenshot/weather.png",skills:"React, p5.js",description:"Portfolio website desu",demo_link:"",github:""},{name:"Dominion Deck Builder",img:"screenshot/dominion.png",skills:"React, Redux, Express, Passport, Mongoose, MongoDB",description:"You can build and save your dominion deck on server!",demo_link:"https://dominion-deck-builder.herokuapp.com/",github:"https://github.com/ykttl/dominion-deck-builder"},{name:"Real time Chat and Drawing",img:"screenshot/realtime.png",skills:"React, Express, Socket.io",description:"Open this with two windows and try!",demo_link:"https://chat-and-canvas.herokuapp.com/",github:"https://github.com/ykttl/realtime-chat-drawing"},{name:"Music and Lyrics",img:"screenshot/music-lyrics.png",skills:"React, Redux",description:"",demo_link:"https://ykttl.github.io/music-and-lyrics/",github:"https://github.com/ykttl/music-and-lyrics"},{name:"Travel The World!",img:"screenshot/travel.png",skills:"React",description:"",demo_link:"https://ykttl.github.io/travel-the-world/",github:"https://github.com/ykttl/travel-the-world"},{name:"Random TGIF!",img:"screenshot/tgif.png",skills:"JavaScript",description:"",demo_link:"https://ykttl.github.io/random-TGIF/",github:"https://github.com/ykttl/random-TGIF"},{name:"Recipe Note",img:"screenshot/recipe.png",skills:"JavaScript",description:"",demo_link:"https://ykttl.github.io/recipe-app/",github:"https://github.com/ykttl/recipe-app"},{name:"Coffee Maker",img:"screenshot/coffee.png",skills:"JavaScript",description:"",demo_link:"https://ykttl.github.io/coffeeMaker/",github:"https://github.com/ykttl/coffeeMaker"},{name:"Local Weather Checker",img:"screenshot/weather.png",skills:"jQuery",description:"",demo_link:"https://ykttl.github.io/local-weather-checker/",github:"https://github.com/ykttl/local-weather-checker"},{name:"Wikipedia Viewer",img:"screenshot/wiki.png",skills:"jQuery",description:"Following FreecodeAcademy.",demo_link:"https://ykttl.github.io/wikipedia/",github:"https://github.com/ykttl/wikipedia"}],v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"portfolio-container",id:"portfolio"},i.a.createElement("p",{className:"portfolio-heading"},"Portfolio"),i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"portfolio-row"},w.map(function(e){return i.a.createElement(E.a,{xs:12,sm:6,className:"portfolio-column"},i.a.createElement(k,{project:e}))}))))}}]),t}(a.Component),y=[{name:"fab fa-github",link:"https://github.com/ykttl"},{name:"fab fa-linkedin",link:""},{name:"fas fa-envelope",link:"mailto:example@example.com"},{name:"fas fa-palette",link:"http://otturtle.com/"}],j=function(){return i.a.createElement("div",{className:"contact-container",id:"contact"},i.a.createElement("p",{className:"contact-font"},"Contact"),i.a.createElement("ul",null,y.map(function(e){return i.a.createElement("li",{style:{display:"inline-block"}},i.a.createElement("a",{href:e.link},i.a.createElement("span",null,i.a.createElement("i",{className:e.name,"aria-hidden":"true"}))))})),i.a.createElement("p",null,"\xa9 2019 Yuko Kanaki"))},O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#portfolio",className:"menu-item"},"PORTFOLIO")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact",className:"menu-item"},"CONTACT"))))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={sketch:p},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,{sketch:this.state.sketch,className:"drawing"}),i.a.createElement(O,null),i.a.createElement(g,null),i.a.createElement(v,null),i.a.createElement(j,null))}}]),t}(a.Component);l.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.0194e1bb.chunk.js.map