import{$ as j,A as O,B as M,C as ge,D as R,E as J,F as ve,G as we,H as ye,I as Ee,J as be,K as Le,L as Ce,M as Se,N as Te,O as Ae,P as xe,Q as ke,R as He,S as _e,T as Ie,U as qe,V as Oe,W as Me,X as p,Y as E,Z as N,a as f,aa as Re,ba as Ne,c as B,ca as Pe,da as Be,e as A,ea as De,f as de,ga as K,h as _,i as ue,j as m,k as X,l as I,m as q,n as me,o as he,p as Z,q as D,r as fe,s as C,t as v,u as U,v as S,w as V,x as u,y as pe,z as y}from"./chunk-J3ER2JPS.js";import"./chunk-3QGRG5LW.js";import"./chunk-ZNUZAV4M.js";ue();var x=(e,t)=>{u.hasClass("on")?(u.removeClass("on"),S.removeClass("close"),t?u.style="":p(u,"slideRightOut")):t?u.style="":p(u,"slideRightIn",()=>{u.addClass("on"),S.addClass("close")})},Ue=()=>{let e=u.querySelector(".inner");u.querySelector(".tab")&&e.removeChild(u.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=u.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&_(R,"none");return}s==="contents"&&_(R,"");let i=document.createElement("li"),c=document.createElement("span"),r=document.createTextNode(n.getAttribute("data-title"));c.appendChild(r),i.appendChild(c),i.addClass(s+" item"),o?(n.addClass(o),i.addClass(o)):n.removeClass("active"),i.addEventListener("click",a=>{let l=a.currentTarget;l.hasClass("active")||(u.find(".tab .item").forEach(d=>{d.removeClass("active")}),u.find(".panel").forEach(d=>{d.removeClass("active")}),u.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),u.querySelector(".panels").style.paddingTop=""):u.querySelector(".panels").style.paddingTop=".625rem"},je=()=>{let e=r=>{let a=t[r];if(!a||a.hasClass("current"))return;f.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),a.addClass("active current"),o[r]&&o[r].addClass("active");let l=a.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(u).display!=="none"&&n.hasClass("active")&&E(n,a.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((r,a)=>{let l=r.querySelector("a.toc-link"),d=document.getElementById(decodeURI(l.getAttribute("href").replace("#","")));if(!d)return null;let P=d.querySelector("a.anchor"),H=L=>{L.preventDefault();let dt=document.getElementById(decodeURI(L.currentTarget.getAttribute("href").replace("#","")));s=a,E(dt,null,()=>{e(a),s=null})};return l.addEventListener("click",H),P&&P.addEventListener("click",L=>{H(L),Ne(m.hostname+"/"+LOCAL.path+L.currentTarget.getAttribute("href"))}),d});let n=u.querySelector(".contents.panel"),i=r=>{let a=0,l=r[a];if(l.boundingClientRect.top>0)return a=o.indexOf(l.target),a===0?0:a-1;for(;a<r.length;a++)if(r[a].boundingClientRect.top<=0)l=r[a];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let r=new IntersectionObserver(a=>{let l=i(a)+(q<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&r.observe(a)})})()},Q=()=>{E(0)},ze=()=>{E(parseInt(String(A(fe))))},Ge=()=>{E(document.getElementById("comments"))},Fe=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!m.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};var g={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),C.setAttribute("style","display:block"),g.lock=!1},hide(e){m.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){g.lock||(m.loader.start&&p(C,0),document.body.addClass("loaded"),g.lock=!0)}};function ee(){f.each(".overview .menu > .item",t=>{v.querySelector(".menu").appendChild(t.cloneNode(!0))}),C.addEventListener("click",g.vanish),S.addEventListener("click",x),document.querySelector(".dimmer").addEventListener("click",x),V.querySelector(".down").addEventListener("click",ze),V.querySelector(".up").addEventListener("click",Q),y||Me(B(U,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),_e(y.querySelector(".player")),Ie(y.querySelector(".back-to-top")),qe(y.querySelector(".chat")),Oe(y.querySelector(".contents")),M.addEventListener("click",Q),ge.addEventListener("click",Ge),R.addEventListener("click",x),Be(O),document.querySelector("main").addEventListener("click",()=>{O.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}var Ye=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};var w=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(D.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(D.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},$e=()=>{m.auto_dark.enable&&(new Date().getHours()>=m.auto_dark.start||new Date().getHours()<=m.auto_dark.end?w("dark"):w())},te=e=>{D.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},We=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?w("dark"):w()});let e=N.get("theme");e?w(e):m.darkmode&&w("dark")};var ut=document.getElementById("waves"),z=()=>{ye(A(v)),Ee(A(U)),be(J+A(ut)),we!==window.innerWidth&&x(null,1),Le(window.innerHeight),Ce(window.innerWidth)},Xe=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>J,n=window.scrollY>0;s?te("#FFF"):te("#222"),v.toggleClass("show",s),y.toggleClass("affix",n),pe.toggleClass("affix",n),u.toggleClass("affix",window.scrollY>ve&&document.body.offsetWidth>=991),typeof I.y>"u"&&(I.y=window.scrollY),Se(I.y-window.scrollY),q<0?(v.removeClass("up"),v.toggleClass("down",s)):q>0&&(v.removeClass("down"),v.toggleClass("up",s)),I.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";M.querySelector("span").innerText!==i&&(M.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&de(document.querySelector(".percent"),i)},Ze=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",X+m.favicon.hidden),document.title=LOCAL.favicon.hide,m.loader.switch&&g.show(),clearTimeout(he);break;case"visible":e.setAttribute("href",X+m.favicon.normal),document.title=LOCAL.favicon.show,m.loader.switch&&g.hide(1e3),Te(setTimeout(()=>{document.title=me},2e3));break}},{passive:!0})};var Ve=32,Je="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Ke=typeof window>"u",oe=!Ke&&"loading"in HTMLImageElement.prototype,se=!Ke&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function Qe(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function et(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var mt=Math.PI,ro=mt*2;function ie(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Ve,updateSizesOnResize:n=!1,onImageLoad:i}={}){let c=new Set;for(let r of Qe(e)){let a=re(r,{updateOnResize:n});if(n&&a&&c.add(a),!r.dataset.src&&!r.dataset.srcset)continue;if(se||!oe){tt(r),Y(r),F(r);continue}if(r.src||(r.src=Je),r.complete&&r.naturalWidth>0){ne(r,i);continue}let l=()=>ne(r,i);r.addEventListener("load",l,{once:!0}),c.add(()=>r.removeEventListener("load",l))}return()=>{for(let r of c)r();c.clear()}}function ne(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){tt(e),Y(e),F(e),t?.(e);return}let s=new Image,{srcset:n,src:i,sizes:c}=e.dataset;if(c==="auto"){let r=ot(e);r&&(s.sizes=`${r}px`)}else e.sizes&&(s.sizes=e.sizes);n&&(s.srcset=n),i&&(s.src=i),s.addEventListener("load",()=>{Y(e),F(e),t?.(e)},{once:!0})}var G=new WeakMap;function re(e,t){if(e.dataset.sizes!=="auto")return;let o=ot(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>re(s,{skipChildren:!0})),t?.updateOnResize){if(!G.has(e)){let s=et(()=>re(e),500),n=new ResizeObserver(s);G.set(e,n),n.observe(e)}return()=>{let s=G.get(e);s&&(s.disconnect(),G.delete(e))}}}function F(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function Y(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function tt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(Y),[...t.querySelectorAll("source[data-src]")].forEach(F))}function ot(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var st=()=>{j(),u.hasClass("on")&&p(u,0,()=>{u.removeClass("on"),S.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(C.lastChild.cloneNode(!0)),E(0)},ae=async e=>{Ae(0),xe(window.location.href),K("katex"),await import("./copy-tex-4EBPF6VG.js"),K("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(i=>{if(i.isIntersecting){let c=i.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),n.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&f.each("script[data-pjax]",De),He(document.title),z(),Fe(),Ue(),je(),import("./post-74RFZHXK.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(o)}ie(),Pe(),O.player.load(LOCAL.audio||m.audio||{}),g.hide(100),setTimeout(()=>{Re()},500),Ye()};function ce(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}ce();function T(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var at=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function le(e,t,o,s){at(t,n=>{T(e,i=>{i.addEventListener(n,o,s)})})}function k(e,t,o={}){at(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});T(e,i=>{i.dispatchEvent(n)})})}function nt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function ht(e){e.tagName.toLowerCase()==="script"&&nt(e),T(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),nt(o))})}function ft(e,t,o,s=document){e.forEach(n=>{T(s.querySelectorAll(n),t,o)})}var $=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function ct(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function pt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function rt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function gt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:i=0,scrollRestoration:c=!0,cacheBust:r=!0,timeout:a=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:i,scrollRestoration:c,cacheBust:r,timeout:a,currentUrlFullReload:l};return d.switches.head||(d.switches.head=rt),d.switches.body||(d.switches.body=rt),d}var W="data-pjax-state";function it(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=vt(e,t);if(s){e.setAttribute(W,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(W,"reload"),this.reload();return}e.setAttribute(W,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function vt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function wt(e){e.setAttribute(W,""),le(e,"click",t=>it.call(this,e,t)),le(e,"keyup",t=>{let o=t;o.keyCode===13&&it.call(this,e,o)})}function yt(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){k(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||$(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=i;let r=c.hash;c.href=o,r&&!c.hash&&(c.hash=r,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return k(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function Et(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function bt(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function Lt(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),i=s.requestParams||null,c=null,r=new XMLHttpRequest,a=t.timeout;if(r.onreadystatechange=()=>{r.readyState===4&&(r.status===200?o(r.responseText,r,e,t):r.status!==0&&o(null,r,e,t))},r.onerror=l=>{console.error(l),o(null,r,e,t)},r.ontimeout=()=>{o(null,r,e,t)},i&&i.length){let l=i.map(d=>d.name+"="+d.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":c=l;break}}return t.cacheBust&&(e=bt(e,"t",Date.now())),r.open(n,e,!0),r.timeout=a,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-PJAX","true"),r.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),r.send(c),r}function Ct(e,t,o,s,n,i){let c=[];o.forEach(r=>{let a=s.querySelectorAll(r),l=n.querySelectorAll(r);if(a.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${r}' - new ${a.length}, old ${l.length}`);T(a,(d,P)=>{let H=l[P],L=e[r]?e[r].bind(this,H,d,i,t[r]):ct.bind(this,H,d,i);c.push(L)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(r=>{r()})}function St(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let i=0;i<n.length;i++)if(n[i].contains(o))return!0}return!1}var b=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=gt(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=$(),this.parseDOM(document),le(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){T(this.getElements(t),Et,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return ft.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return Ct.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){k(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){k(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(n);if(c&&c.length&&(c=c[0].match(i),c.length&&(c.shift(),c.forEach(r=>{let a=r.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&St(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),k(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(i=>{T(document.querySelectorAll(i),c=>{ht(c)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=$(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=$(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),k(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let c=i.hash.slice(1);c=decodeURIComponent(c);let r=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do r+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,r)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};b.prototype.attachLink=wt;b.prototype.doRequest=Lt;b.prototype.handleResponse=yt;b.switches={innerHTML:pt,outerHTML:ct};function lt(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=B(Z,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{p(s,{delay:2500,opacity:0},()=>{Z.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),w("dark"),N.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),w(),N.set("theme","light"),n()}),p(s,1,()=>{setTimeout(t,210)},()=>{_(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var Tt=async()=>{lt(),ee(),ke(new b({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),m.quicklink.ignores=LOCAL.ignores,import("./quicklink-LIKYXU7P.js").then(({listen:e})=>{e(m.quicklink)}),$e(),Ze(),We(),import("./index.esm-QFH32GP3.js").then(e=>{e.default(m.fireworks)}),window.addEventListener("scroll",Xe,{passive:!0}),window.addEventListener("resize",z,{passive:!0}),window.addEventListener("pjax:send",st,{passive:!0}),window.addEventListener("pjax:success",ae,{passive:!0}),window.addEventListener("beforeunload",()=>{j()}),await ae(1)};ce();window.addEventListener("DOMContentLoaded",Tt,{passive:!0});console.log("%c Theme.ShokaX v"+m.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
