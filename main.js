(()=>{"use strict";const t=function(){const t=document.getElementById("body"),e=document.createElement("nav");t.appendChild(e),e.setAttribute("class","navbar d-flex justify-content-end"),e.style.backgroundColor="transparent",e.style.margin="0 0",e.style.paddingTop="0 0",e.style.top="0";const n=document.createElement("form");e.appendChild(n),n.setAttribute("class","d-flex justify-content-center"),n.style.gap="30px",n.style.marginTop="10px",n.style.marginRight="10px";const o=document.createElement("button");n.appendChild(o),o.setAttribute("id","nav-img"),o.setAttribute("class","btn btn-outline-light homeBtn nav-img"),o.setAttribute("type","button"),o.textContent="Home",o.style.fontSize="20px",o.style.padding="5px 10px",o.color="black",o.style.borderColor="black";const l=document.createElement("img");o.appendChild(l),l.setAttribute("src","https://img.icons8.com/wired/64/null/home-page.png"),l.style.height="30px",l.style.width="30px";const i=document.createElement("button");n.appendChild(i),i.setAttribute("id","nav-img"),i.setAttribute("class","btn btn-outline-light aboutBtn nav-img"),i.setAttribute("type","button"),i.textContent="About",i.style.fontSize="20px",i.style.padding="5px 10px",i.color="black",i.style.borderColor="black";const s=document.createElement("img");i.appendChild(s),s.setAttribute("src","https://img.icons8.com/dotty/80/null/about-us-female.png"),s.style.height="30px",s.style.width="30px";const c=document.createElement("button");n.appendChild(c),c.setAttribute("id","nav-img"),c.setAttribute("class","btn btn-outline-light nav-img resumeBtn"),c.setAttribute("type","button"),c.textContent="Resume",c.style.fontSize="20px",c.style.padding="5px 10px",c.color="black",c.style.borderColor="black";const d=document.createElement("img");c.appendChild(d),d.setAttribute("src","https://img.icons8.com/dotty/80/null/parse-from-clipboard.png"),d.style.height="30px",d.style.width="30px";const a=document.createElement("button");n.appendChild(a),a.setAttribute("id","nav-img"),a.setAttribute("class","btn btn-outline-light nav-img projectsBtn"),a.setAttribute("type","button"),a.textContent="Projects",a.style.fontSize="20px",a.style.padding="5px 10px",a.color="black",a.style.borderColor="black";const r=document.createElement("img");a.appendChild(r),r.setAttribute("src","https://img.icons8.com/dotty/80/null/concept.png"),r.style.height="30px",r.style.width="30px";const m=document.createElement("button");n.appendChild(m),m.setAttribute("id","nav-img"),m.setAttribute("class","btn btn-outline-light nav-img contactsBtn"),m.setAttribute("type","button"),m.textContent="Contacts",m.style.fontSize="20px",m.style.padding="5px 10px",m.color="black",m.style.borderColor="black";const u=document.createElement("img");m.appendChild(u),u.setAttribute("src","https://img.icons8.com/ios/50/null/phone-contact.png"),u.style.height="30px",u.style.width="30px"},e=function(){const t=document.getElementById("body");t.style.backgroundColor="hsl(255, 36%, 83%)",t.style.color="black",t.style.fontFamily="'Stick No Bills', sans-serif",t.style.margin="0 0",t.style.height="100%"},n=function(){const t=document.getElementById("body"),e=document.createElement("footer");t.appendChild(e),e.setAttribute("id","footer"),e.setAttribute("class","btn btn-outline-light d-flex justify-content-between"),e.style.bottom="0",e.style.position="fixed",e.style.width="100%";const n=document.getElementById("footer");n.style.border="none",n.style.fontSize="15px",n.style.color="black",n.style.backgroundColor="transparent";const o=document.createElement("div");e.appendChild(o),o.textContent="Developed by Victoria Kapelush";const l=document.createElement("div");e.appendChild(l),l.setAttribute("id","copyright"),l.textContent="Copyright © 2022";const i=document.createElement("div");e.appendChild(i);const s=document.createElement("a"),c=document.createElement("img");i.appendChild(s),s.appendChild(c),s.setAttribute("href","https://github.com/victoriakapelush"),s.setAttribute("target","_blank"),c.setAttribute("class","footer-img"),c.setAttribute("src","https://img.icons8.com/ios-filled/50/null/github.png");const d=document.createElement("a"),a=document.createElement("img");i.appendChild(d),d.appendChild(a),d.setAttribute("href","https://www.linkedin.com/in/vickyvickyk/"),d.setAttribute("target","_blank"),a.setAttribute("class","footer-img"),a.setAttribute("src","https://img.icons8.com/ios/50/null/linkedin-circled--v1.png");const r=document.querySelectorAll(".footer-img");for(let t=0;t<r.length;t++)r[t].style.height="22px",r[t].style.width="22px";for(let t=0;t<r.length;t++)r[t].onmouseover=function(){r[t].style.height="24px",r[t].style.width="24px"};for(let t=0;t<r.length;t++)r[t].onmouseout=function(){r[t].style.height="22px",r[t].style.width="22px"};document.getElementById("copyright").style.paddingRight="65px"},o=document.getElementById("body"),l=function l(){!function(){for(;o.firstChild;)o.firstChild.remove()}(),t(),e(),n();const i=document.createElement("main");o.appendChild(i),i.setAttribute("id","main"),document.getElementsByClassName("aboutBtn")[0].addEventListener("click",(function(){d()})),document.getElementsByClassName("homeBtn")[0].addEventListener("click",(function(){r()})),document.getElementsByClassName("contactsBtn")[0].addEventListener("click",(function(){s()})),document.getElementsByClassName("projectsBtn")[0].addEventListener("click",(function(){l()})),i.style.display="flex",i.style.justifyContent="center",i.style.flexWrap="wrap",i.style.gap="20px";const c=document.createElement("img"),a=document.createElement("a");i.appendChild(a),c.setAttribute("src","/Users/victoria/Desktop/Portfolio/dist/img/calculator.png"),c.style.height="350px",c.style.width="400px",a.appendChild(c),a.setAttribute("href","https://rawcdn.githack.com/victoriakapelush/Calculator/918bf4ca49a828aecd9c8f093f03a3de04089af9/index.html"),a.setAttribute("target","_blank"),c.onmouseover=function(){c.style.border="2px black dotted"},c.onmouseout=function(){c.style.border="none"};const m=document.createElement("img"),u=document.createElement("a");i.appendChild(u),m.setAttribute("src","/Users/victoria/Desktop/Portfolio/dist/img/etchasketch.png"),m.style.height="350px",m.style.width="400px",u.appendChild(m),u.setAttribute("href","https://rawcdn.githack.com/victoriakapelush/Etch-A-Sketch/689d9d09a5df88a2e27f78fe265fc1f071d225d1/index.html"),u.setAttribute("target","_blank"),m.onmouseover=function(){m.style.border="2px black dotted"},m.onmouseout=function(){m.style.border="none"};const p=document.createElement("img"),b=document.createElement("a");i.appendChild(b),p.setAttribute("src","/Users/victoria/Desktop/Portfolio/dist/img/tic-tac-toe.png"),p.style.height="350px",p.style.width="400px",b.appendChild(p),b.setAttribute("href","https://rawcdn.githack.com/victoriakapelush/Tic-Tac-Toe/74143d2e3abdaee39bee80f421c281fa11f22ddc/index.html"),b.setAttribute("target","_blank"),p.onmouseover=function(){p.style.border="2px black dotted"},p.onmouseout=function(){p.style.border="none"};const g=document.createElement("img"),h=document.createElement("a");i.appendChild(h),g.setAttribute("src","/Users/victoria/Desktop/Portfolio/dist/img/virtual-library.png"),g.style.height="350px",g.style.width="400px",h.appendChild(g),h.setAttribute("href","https://htmlpreview.github.io/?https://github.com/victoriakapelush/Virtual-Library/blob/main/index.html"),h.setAttribute("target","_blank"),g.onmouseover=function(){g.style.border="2px black dotted"},g.onmouseout=function(){g.style.border="none"}},i=(document.getElementById("main"),document.getElementById("body")),s=function o(){!function(){for(;i.firstChild;)i.firstChild.remove()}(),t(),e(),n();const s=document.createElement("main");i.appendChild(s),s.setAttribute("id","main"),s.style.backgroundImage="url('https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-with-css-and-html-language-6015041-5054776.png')",s.style.backgroundSize="35% 85%",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="left",s.style.marginLeft="10%",document.getElementsByClassName("aboutBtn")[0].addEventListener("click",(function(){d()})),document.getElementsByClassName("homeBtn")[0].addEventListener("click",(function(){r()})),document.getElementsByClassName("contactsBtn")[0].addEventListener("click",(function(){o()})),document.getElementsByClassName("projectsBtn")[0].addEventListener("click",(function(){l()}));const c=document.getElementsByClassName("nav-img");for(let t=0;t<c.length;t++)c[t].addEventListener("mouseover",(function(){c[t].style.backgroundColor="#ffc107"})),c[t].addEventListener("mouseout",(function(){c[t].style.backgroundColor="transparent"}));const a=document.createElement("form");a.style.height="50%",a.style.width="30%",a.style.marginLeft="60%",a.style.marginTop="8%",s.appendChild(a);const m=document.createElement("h4");a.appendChild(m),m.textContent="Contact me",m.style.marginBottom="4%",m.style.textAlign="center";const u=document.createElement("div");a.appendChild(u),u.setAttribute("class","form-outline mb-4");const p=document.createElement("input");u.appendChild(p),p.setAttribute("type","text"),p.setAttribute("id","form4Example1"),p.setAttribute("class","form-control");const b=document.createElement("label");u.appendChild(b),b.setAttribute("class","form-label"),b.setAttribute("for","form4Example1"),b.textContent="Name",p.style.background="transparent",p.style.border="1px solid orange",p.style.color="black";const g=document.createElement("div");a.appendChild(g),g.setAttribute("class","form-outline mb-4");const h=document.createElement("input");g.appendChild(h),h.setAttribute("type","email"),h.setAttribute("id","form4Example2"),h.setAttribute("class","form-control");const y=document.createElement("label");g.appendChild(y),y.setAttribute("class","form-label"),y.setAttribute("for","form4Example2"),y.textContent="Email",h.style.background="transparent",h.style.border="1px solid orange";const f=document.createElement("div");a.appendChild(f),f.setAttribute("class","form-outline mb-4");const C=document.createElement("textarea");f.appendChild(C),C.setAttribute("id","form4Example3"),C.setAttribute("class","form-control"),C.setAttribute("rows","4");const E=document.createElement("label");f.appendChild(E),E.setAttribute("class","form-label"),E.setAttribute("for","form4Example3"),E.textContent="Message",C.style.background="transparent",C.style.border="1px solid orange";const x=document.createElement("button");a.appendChild(x),x.setAttribute("type","submit"),x.setAttribute("class","btn btn-primary btn-block mb-4"),x.textContent="Send",x.style.color="black",x.style.background="transparent",x.style.border="1px #28a745 solid"},c=document.getElementById("body"),d=function o(){!function(){for(;c.firstChild;)c.firstChild.remove()}(),t(),e(),n();const i=document.createElement("main");c.appendChild(i),i.setAttribute("id","main"),document.getElementsByClassName("aboutBtn")[0].addEventListener("click",(function(){o()})),document.getElementsByClassName("homeBtn")[0].addEventListener("click",(function(){r()})),document.getElementsByClassName("contactsBtn")[0].addEventListener("click",(function(){s()})),document.getElementsByClassName("projectsBtn")[0].addEventListener("click",(function(){l()})),i.style.backgroundImage="url('https://www.lynnefinnigan.com/main-asset.svg')",i.style.backgroundRepeat="no-repeat",i.style.backgroundPosition="left";const d=document.createElement("div"),a=document.createElement("div"),m=document.createElement("div");i.appendChild(d),d.appendChild(a),d.appendChild(m),d.style.display="flex",d.style.flexDirection="column",a.style.height="20%",a.style.width="20%",a.style.marginLeft="70%",a.style.marginTop="10%",a.style.border="1px black dotted",a.style.paddingTop="1.5%";const u=document.createElement("ul");a.appendChild(u),u.style.textAlign="right",u.style.paddingRight="15px",u.style.fontSize="25px";const p=["HTML","CSS","JavaScript"];for(let t=0;t<p.length;t++){let e=document.createElement("li");u.appendChild(e),e.textContent=p[t]}m.style.height="20%",m.style.width="20%",m.style.marginLeft="70%",m.style.marginTop="10%",m.style.border="1px black dotted",m.style.marginTop="0",m.style.paddingTop="1.5%";const b=document.createElement("ul");m.appendChild(b),b.style.textAlign="right",b.style.paddingRight="15px",b.style.fontSize="25px";const g=["Webpack","Git","GitHub","Express","Node","React","Bootstrap"];for(let t=0;t<g.length;t++){let e=document.createElement("li");b.appendChild(e),e.textContent=g[t]}};document.getElementById("body");const a=document.getElementById("body"),r=function o(){!function(){for(;a.firstChild;)a.firstChild.remove()}(),t(),e(),n();const i=document.createElement("main");a.appendChild(i),i.setAttribute("id","main"),i.style.backgroundImage="url('https://macocu.eu/static/media/cool_girl_coding.edab52e6d6684d1b5957ccd1fcd76b67.svg')",i.style.backgroundRepeat="no-repeat",i.style.backgroundPosition="left",i.style.height="700px",i.style.width="900px",document.getElementsByClassName("aboutBtn")[0].addEventListener("click",(function(){d()})),document.getElementsByClassName("homeBtn")[0].addEventListener("click",(function(){o()})),document.getElementsByClassName("contactsBtn")[0].addEventListener("click",(function(){s()})),document.getElementsByClassName("projectsBtn")[0].addEventListener("click",(function(){l()}))};r()})();