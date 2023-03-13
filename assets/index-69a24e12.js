(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function T(){}function ve(e,t){for(const o in t)e[o]=t[o];return e}function ct(e){return e()}function Me(){return Object.create(null)}function J(e){e.forEach(ct)}function ye(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function yt(e){return Object.keys(e).length===0}function at(e,...t){if(e==null)return T;const o=e.subscribe(...t);return o.unsubscribe?()=>o.unsubscribe():o}function ee(e,t,o){e.$$.on_destroy.push(at(t,o))}function ft(e,t,o,n){if(e){const s=pt(e,t,o,n);return e[0](s)}}function pt(e,t,o,n){return e[1]&&n?ve(o.ctx.slice(),e[1](n(t))):o.ctx}function dt(e,t,o,n){if(e[2]&&n){const s=e[2](n(o));if(t.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(t.dirty.length,s.length);for(let c=0;c<l;c+=1)r[c]=t.dirty[c]|s[c];return r}return t.dirty|s}return t.dirty}function ht(e,t,o,n,s,r){if(s){const l=pt(t,o,n,r);e.p(l,s)}}function mt(e){if(e.ctx.length>32){const t=[],o=e.ctx.length/32;for(let n=0;n<o;n++)t[n]=-1;return t}return-1}function qe(e){const t={};for(const o in e)o[0]!=="$"&&(t[o]=e[o]);return t}function De(e,t,o){return e.set(o),t}function kt(e){return e&&ye(e.destroy)?e.destroy:T}function d(e,t){e.appendChild(t)}function M(e,t,o){e.insertBefore(t,o||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function ue(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function $(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function L(){return D(" ")}function fe(){return D("")}function Q(e,t,o,n){return e.addEventListener(t,o,n),()=>e.removeEventListener(t,o,n)}function wt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function g(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function It(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ve(e,t){e.value=t??""}function Ue(e,t){return new e(t)}let ce;function ie(e){ce=e}function ke(){if(!ce)throw new Error("Function called outside component initialization");return ce}function $t(e){ke().$$.on_mount.push(e)}function Et(e){ke().$$.on_destroy.push(e)}function Be(e,t){return ke().$$.context.set(e,t),t}function be(e){return ke().$$.context.get(e)}const X=[],He=[];let te=[];const Ke=[],St=Promise.resolve();let Oe=!1;function xt(){Oe||(Oe=!0,St.then(_t))}function Ne(e){te.push(e)}const $e=new Set;let G=0;function _t(){if(G!==0)return;const e=ce;do{try{for(;G<X.length;){const t=X[G];G++,ie(t),Ot(t.$$)}}catch(t){throw X.length=0,G=0,t}for(ie(null),X.length=0,G=0;He.length;)He.pop()();for(let t=0;t<te.length;t+=1){const o=te[t];$e.has(o)||($e.add(o),o())}te.length=0}while(X.length);for(;Ke.length;)Ke.pop()();Oe=!1,$e.clear(),ie(e)}function Ot(e){if(e.fragment!==null){e.update(),J(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ne)}}function Nt(e){const t=[],o=[];te.forEach(n=>e.indexOf(n)===-1?t.push(n):o.push(n)),o.forEach(n=>n()),te=t}const ge=new Set;let z;function Ae(){z={r:0,c:[],p:z}}function Ce(){z.r||J(z.c),z=z.p}function V(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function B(e,t,o,n){if(e&&e.o){if(ge.has(e))return;ge.add(e),z.c.push(()=>{ge.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}else n&&n()}function Tt(e,t){const o={},n={},s={$$scope:1};let r=e.length;for(;r--;){const l=e[r],c=t[r];if(c){for(const i in l)i in c||(n[i]=1);for(const i in c)s[i]||(o[i]=c[i],s[i]=1);e[r]=c}else for(const i in l)s[i]=1}for(const l in n)l in o||(o[l]=void 0);return o}function ze(e){return typeof e=="object"&&e!==null?e:{}}function ae(e){e&&e.c()}function oe(e,t,o,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,o),n||Ne(()=>{const l=e.$$.on_mount.map(ct).filter(ye);e.$$.on_destroy?e.$$.on_destroy.push(...l):J(l),e.$$.on_mount=[]}),r.forEach(Ne)}function se(e,t){const o=e.$$;o.fragment!==null&&(Nt(o.after_update),J(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function Pt(e,t){e.$$.dirty[0]===-1&&(X.push(e),xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,o,n,s,r,l,c=[-1]){const i=ce;ie(e);const u=e.$$={fragment:null,ctx:[],props:r,update:T,not_equal:s,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:Me(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};l&&l(u.root);let a=!1;if(u.ctx=o?o(e,t.props||{},(f,p,...h)=>{const _=h.length?h[0]:p;return u.ctx&&s(u.ctx[f],u.ctx[f]=_)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](_),a&&Pt(e,f)),p}):[],u.update(),a=!0,J(u.before_update),u.fragment=n?n(u.ctx):!1,t.target){if(t.hydrate){const f=It(t.target);u.fragment&&u.fragment.l(f),f.forEach(P)}else u.fragment&&u.fragment.c();t.intro&&V(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),_t()}ie(i)}class de{$destroy(){se(this,1),this.$destroy=T}$on(t,o){if(!ye(o))return T;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(o),()=>{const s=n.indexOf(o);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!yt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function Rt(e,t){return{subscribe:Z(e,t).subscribe}}function Z(e,t=T){let o;const n=new Set;function s(c){if(re(e,c)&&(e=c,o)){const i=!W.length;for(const u of n)u[1](),W.push(u,e);if(i){for(let u=0;u<W.length;u+=2)W[u][0](W[u+1]);W.length=0}}}function r(c){s(c(e))}function l(c,i=T){const u=[c,i];return n.add(u),n.size===1&&(o=t(s)||T),c(e),()=>{n.delete(u),n.size===0&&o&&(o(),o=null)}}return{set:s,update:r,subscribe:l}}function jt(e,t,o){const n=!Array.isArray(e),s=n?[e]:e,r=t.length<2;return Rt(o,l=>{let c=!1;const i=[];let u=0,a=T;const f=()=>{if(u)return;a();const h=t(n?i[0]:i,l);r?l(h):a=ye(h)?h:T},p=s.map((h,_)=>at(h,E=>{i[_]=E,u&=~(1<<_),c&&f()},()=>{u|=1<<_}));return c=!0,f(),function(){J(p),a()}})}const Te={},Pe={};function Ee(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function At(e,t){const o=[];let n=Ee(e);return{get location(){return n},listen(s){o.push(s);const r=()=>{n=Ee(e),s({location:n,action:"POP"})};return e.addEventListener("popstate",r),()=>{e.removeEventListener("popstate",r);const l=o.indexOf(s);o.splice(l,1)}},navigate(s,{state:r,replace:l=!1}={}){r={...r,key:Date.now()+""};try{l?e.history.replaceState(r,null,s):e.history.pushState(r,null,s)}catch{e.location[l?"replace":"assign"](s)}n=Ee(e),o.forEach(c=>c({location:n,action:"PUSH"}))}}}function Ct(e="/"){let t=0;const o=[{pathname:e,search:""}],n=[];return{get location(){return o[t]},addEventListener(s,r){},removeEventListener(s,r){},history:{get entries(){return o},get index(){return t},get state(){return n[t]},pushState(s,r,l){const[c,i=""]=l.split("?");t++,o.push({pathname:c,search:i}),n.push(s)},replaceState(s,r,l){const[c,i=""]=l.split("?");o[t]={pathname:c,search:i},n[t]=s}}}}const Lt=Boolean(typeof window<"u"&&window.document&&window.document.createElement),Re=At(Lt?window:Ct()),{navigate:Mt}=Re,gt=/^:(.+)/,Je=4,qt=3,Dt=2,Vt=1,Ut=1;function Bt(e){return e===""}function Ht(e){return gt.test(e)}function vt(e){return e[0]==="*"}function je(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Se(e){return e.replace(/(^\/+|\/+$)/g,"")}function Kt(e,t){const o=e.default?0:je(e.path).reduce((n,s)=>(n+=Je,Bt(s)?n+=Ut:Ht(s)?n+=Dt:vt(s)?n-=Je+Vt:n+=qt,n),0);return{route:e,score:o,index:t}}function zt(e){return e.map(Kt).sort((t,o)=>t.score<o.score?1:t.score>o.score?-1:t.index-o.index)}function bt(e,t){let o,n;const[s]=t.split("?"),r=je(s),l=r[0]==="",c=zt(e);for(let i=0,u=c.length;i<u;i++){const a=c[i].route;let f=!1;if(a.default){n={route:a,params:{},uri:t};continue}const p=je(a.path),h={},_=Math.max(r.length,p.length);let E=0;for(;E<_;E++){const w=p[E],S=r[E];if(w!==void 0&&vt(w)){const K=w==="*"?"*":w.slice(1);h[K]=r.slice(E).map(decodeURIComponent).join("/");break}if(S===void 0){f=!0;break}let U=gt.exec(w);if(U&&!l){const K=decodeURIComponent(S);h[U[1]]=K}else if(w!==S){f=!0;break}}if(!f){o={route:a,params:h,uri:"/"+r.slice(0,E).join("/")};break}}return o||n||null}function Jt(e,t){return bt([e],t)}function Fe(e,t){return`${Se(t==="/"?e:`${Se(e)}/${Se(t)}`)}/`}function Ft(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e){const t=location.host;return e.host==t||e.href.indexOf(`https://${t}`)===0||e.href.indexOf(`http://${t}`)===0}function Gt(e){let t;const o=e[9].default,n=ft(o,e,e[8],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),t=!0},p(s,[r]){n&&n.p&&(!t||r&256)&&ht(n,o,s,s[8],t?dt(o,s[8],r,null):mt(s[8]),null)},i(s){t||(V(n,s),t=!0)},o(s){B(n,s),t=!1},d(s){n&&n.d(s)}}}function Wt(e,t,o){let n,s,r,{$$slots:l={},$$scope:c}=t,{basepath:i="/"}=t,{url:u=null}=t;const a=be(Te),f=be(Pe),p=Z([]);ee(e,p,v=>o(6,s=v));const h=Z(null);let _=!1;const E=a||Z(u?{pathname:u}:Re.location);ee(e,E,v=>o(5,n=v));const w=f?f.routerBase:Z({path:i,uri:i});ee(e,w,v=>o(7,r=v));const S=jt([w,h],([v,O])=>{if(O===null)return v;const{path:N}=v,{route:q,uri:he}=O;return{path:q.default?N:q.path.replace(/\*.*$/,""),uri:he}});function U(v){const{path:O}=r;let{path:N}=v;if(v._path=N,v.path=Fe(O,N),typeof window>"u"){if(_)return;const q=Jt(v,n.pathname);q&&(h.set(q),_=!0)}else p.update(q=>(q.push(v),q))}function K(v){p.update(O=>{const N=O.indexOf(v);return O.splice(N,1),O})}return a||($t(()=>Re.listen(O=>{E.set(O.location)})),Be(Te,E)),Be(Pe,{activeRoute:h,base:w,routerBase:S,registerRoute:U,unregisterRoute:K}),e.$$set=v=>{"basepath"in v&&o(3,i=v.basepath),"url"in v&&o(4,u=v.url),"$$scope"in v&&o(8,c=v.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:v}=r;p.update(O=>(O.forEach(N=>N.path=Fe(v,N._path)),O))}if(e.$$.dirty&96){const v=bt(s,n.pathname);h.set(v)}},[p,E,w,i,u,n,s,r,c,l]}class Qt extends de{constructor(t){super(),pe(this,t,Wt,Gt,re,{basepath:3,url:4})}}const Xt=e=>({params:e&4,location:e&16}),Ye=e=>({params:e[2],location:e[4]});function Ge(e){let t,o,n,s;const r=[en,Zt],l=[];function c(i,u){return i[0]!==null?0:1}return t=c(e),o=l[t]=r[t](e),{c(){o.c(),n=fe()},m(i,u){l[t].m(i,u),M(i,n,u),s=!0},p(i,u){let a=t;t=c(i),t===a?l[t].p(i,u):(Ae(),B(l[a],1,1,()=>{l[a]=null}),Ce(),o=l[t],o?o.p(i,u):(o=l[t]=r[t](i),o.c()),V(o,1),o.m(n.parentNode,n))},i(i){s||(V(o),s=!0)},o(i){B(o),s=!1},d(i){l[t].d(i),i&&P(n)}}}function Zt(e){let t;const o=e[10].default,n=ft(o,e,e[9],Ye);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),t=!0},p(s,r){n&&n.p&&(!t||r&532)&&ht(n,o,s,s[9],t?dt(o,s[9],r,Xt):mt(s[9]),Ye)},i(s){t||(V(n,s),t=!0)},o(s){B(n,s),t=!1},d(s){n&&n.d(s)}}}function en(e){let t,o,n;const s=[{location:e[4]},e[2],e[3]];var r=e[0];function l(c){let i={};for(let u=0;u<s.length;u+=1)i=ve(i,s[u]);return{props:i}}return r&&(t=Ue(r,l())),{c(){t&&ae(t.$$.fragment),o=fe()},m(c,i){t&&oe(t,c,i),M(c,o,i),n=!0},p(c,i){const u=i&28?Tt(s,[i&16&&{location:c[4]},i&4&&ze(c[2]),i&8&&ze(c[3])]):{};if(i&1&&r!==(r=c[0])){if(t){Ae();const a=t;B(a.$$.fragment,1,0,()=>{se(a,1)}),Ce()}r?(t=Ue(r,l()),ae(t.$$.fragment),V(t.$$.fragment,1),oe(t,o.parentNode,o)):t=null}else r&&t.$set(u)},i(c){n||(t&&V(t.$$.fragment,c),n=!0)},o(c){t&&B(t.$$.fragment,c),n=!1},d(c){c&&P(o),t&&se(t,c)}}}function tn(e){let t,o,n=e[1]!==null&&e[1].route===e[7]&&Ge(e);return{c(){n&&n.c(),t=fe()},m(s,r){n&&n.m(s,r),M(s,t,r),o=!0},p(s,[r]){s[1]!==null&&s[1].route===s[7]?n?(n.p(s,r),r&2&&V(n,1)):(n=Ge(s),n.c(),V(n,1),n.m(t.parentNode,t)):n&&(Ae(),B(n,1,1,()=>{n=null}),Ce())},i(s){o||(V(n),o=!0)},o(s){B(n),o=!1},d(s){n&&n.d(s),s&&P(t)}}}function nn(e,t,o){let n,s,{$$slots:r={},$$scope:l}=t,{path:c=""}=t,{component:i=null}=t;const{registerRoute:u,unregisterRoute:a,activeRoute:f}=be(Pe);ee(e,f,w=>o(1,n=w));const p=be(Te);ee(e,p,w=>o(4,s=w));const h={path:c,default:c===""};let _={},E={};return u(h),typeof window<"u"&&Et(()=>{a(h)}),e.$$set=w=>{o(13,t=ve(ve({},t),qe(w))),"path"in w&&o(8,c=w.path),"component"in w&&o(0,i=w.component),"$$scope"in w&&o(9,l=w.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&n&&n.route===h&&o(2,_=n.params);{const{path:w,component:S,...U}=t;o(3,E=U)}},t=qe(t),[i,n,_,E,s,f,p,h,c,l,r]}class We extends de{constructor(t){super(),pe(this,t,nn,tn,re,{path:8,component:0})}}function on(e){function t(n,s){for(;s&&s.tagName!==n;)s=s.parentNode;return s}function o(n){const s=t("A",n.target);s&&s.target===""&&Yt(s)&&Ft(n)&&!s.hasAttribute("noroute")&&(n.preventDefault(),Mt(s.pathname+s.search,{replace:s.hasAttribute("replace")}))}return e.addEventListener("click",o),{destroy(){e.removeEventListener("click",o)}}}const I=e=>e.substring(0,e.length-2),_e=e=>e.substring(0,e.length-1),y=(e,t)=>/ar$/.test(e)?t:"",A=(e,t)=>/er$/.test(e)?t:"",C=(e,t)=>/ir$/.test(e)?t:"",x=(e,t)=>/(i|e)r$/.test(e)?t:"",m=e=>I(e)+y(e,"ado")+x(e,"ido"),Qe={particípio:{examples:{"The work is done":"O trabalho é feito"},"*":m},gerundio:{examples:{"I am reading":"Eu estou lendo","He's thinking":"Ele está pensando"},"*":e=>_e(e)+"ndo"},presente:{examples:{"I read":"Eu leio","You eat":"Você come"},eu:e=>I(e)+"o",tu:e=>I(e)+y(e,"as")+x(e,"es"),vós:e=>I(e)+y(e,"ais")+C(e,"is")+A(e,"eis"),"você, ele, ela":e=>I(e)+y(e,"a")+x(e,"e"),"vocês, eles, elas":e=>I(e)+y(e,"am")+x(e,"em"),nós:e=>I(e)+y(e,"amos")+A(e,"emos")+C(e,"imos")},"pretérito imperfeito":{examples:{"I read a lot when I was little":"Eu lia muito quando era criança"},"eu, você, ele, ela":e=>I(e)+y(e,"ava")+x(e,"ia"),tu:e=>I(e)+y(e,"ava")+x(e,"ias"),vós:e=>I(e)+y(e,"áveis")+x(e,"íeis"),"vocês, eles, elas":e=>I(e)+y(e,"ava")+x(e,"ia"),nós:e=>I(e)+y(e,"ávamos")+x(e,"íamos")},"pretérito perfeito":{examples:{"I already read that":"Eu já li isso"},eu:e=>I(e)+y(e,"ei")+x(e,"i"),tu:e=>I(e)+y(e,"aste")+A(e,"este")+C(e,"iste"),vós:e=>I(e)+y(e,"astes")+A(e,"estes")+C(e,"istes"),"você, ele, ela":e=>I(e)+y(e,"ou")+A(e,"eu")+C(e,"iu"),"vocês, eles, elas":e=>I(e)+y(e,"aram")+A(e,"eram")+C(e,"iram"),nós:e=>I(e)+y(e,"amos")+A(e,"emos")+C(e,"imos")},"futuro do pretérito":{examples:{"I would read that":"Eu leria isso"},"eu, você, ele, ela":e=>e+y(e,"ia")+A(e,"ia")+C(e,"ia"),tu:e=>e+y(e,"ias")+A(e,"ias")+C(e,"ias"),vós:e=>e+y(e,"íeis")+A(e,"íeis")+C(e,"íeis"),"vocês, eles, elas":e=>e+y(e,"iam")+A(e,"iam")+C(e,"iam"),nós:e=>e+y(e,"íamos")+A(e,"íamos")+C(e,"íamos")},"futuro do presente":{examples:{"I will read that":"Eu lerei isso"},eu:e=>e+"ei",tu:e=>e+"ás",vós:e=>e+"eis","você, ele, ela":e=>e+"á","vocês, eles, elas":e=>e+"ão",nós:e=>e+"emos"},imperativo:{examples:{"Read it":"Leia isso"},você:e=>I(e)+y(e,"e")+x(e,"a"),tu:e=>I(e)+y(e,"a")+x(e,"e"),vós:e=>I(e)+y(e,"ai")+A(e,"ei")+C(e,"i"),vocês:e=>I(e)+y(e,"em")+x(e,"am"),nós:e=>I(e)+y(e,"emos")+x(e,"amos")},"subjuntivo presente":{examples:{"I want you to read that":"Eu quero que você leia isso","Even though I like it, I can't eat it":"Mesmo que eu goste dele, não posso comê-lo"},"eu, você, ele, ela":e=>I(e)+y(e,"e")+x(e,"a"),tu:e=>I(e)+y(e,"es")+x(e,"as"),vós:e=>I(e)+y(e,"eis")+x(e,"ais"),vocês:e=>I(e)+y(e,"em")+x(e,"am"),nós:e=>I(e)+y(e,"emos")+x(e,"amos")},"subjuntivo pretérito imperfeito":{examples:{"If you had read the book, you would understand":"Se você lesse o livro, entenderia","If I had money, I would buy a car":"Se eu tivesse dinheiro, eu compraria um carro"},"eu, você, ele, ela":e=>_e(e)+"sse",tu:e=>_e(e)+"sses",vós:e=>I(e)+y(e,"ásseis")+A(e,"êsseis")+C(e,"ísseis"),vocês:e=>_e(e)+"ssem",nós:e=>I(e)+y(e,"ássemos")+A(e,"êssemos")+C(e,"íssemos")},"subjuntivo futuro":{examples:{"If you had read the book, you would understand":"Se você lesse o livro, entenderia","If I had money, I would buy a car":"Se eu tivesse dinheiro, eu compraria um carro"},"eu, você, ele, ela":e=>e,tu:e=>e+"es",vós:e=>e+"des",vocês:e=>e+"em",nós:e=>e+"mos"},"pretérito perfeito composto do indicativo":{examples:{"I have been reading a lot lately":"Eu tenho lido muito ultimamente"},eu:e=>"tenho "+m(e),tu:e=>"tens "+m(e),vós:e=>"tendes "+m(e),"você, ele, ela":e=>"tem "+m(e),"vocês, eles, elas":e=>"têm "+m(e),nós:e=>"temos "+m(e)},"pretérito mais-que-perfeito composto do indicativo":{examples:{"I had been reading a lot, but I stopped":"Eu tinha lido muito, mas parei"},"eu, você, ele, ela":e=>"tinha "+m(e),tu:e=>"tinhas "+m(e),vós:e=>"tínheis "+m(e),"vocês, eles, elas":e=>"tinham "+m(e),nós:e=>"tínhamos "+m(e)},"futuro do presente composto do indicativo":{examples:{"Tomorrow, I will have read three more books":"Amanhã, eu terei lido mais três livros"},eu:e=>"terei "+m(e),tu:e=>"terás "+m(e),vós:e=>"tereis "+m(e),"você, ele, ela":e=>"terá "+m(e),"vocês, eles, elas":e=>"terão "+m(e),nós:e=>"teremos "+m(e)},"futuro do pretérito composto do indicativo":{examples:{"I would have read the book":"Eu teria lido o livro"},"eu, você, ele, ela":e=>"teria "+m(e),tu:e=>"terias "+m(e),vós:e=>"teríeis "+m(e),"vocês, eles, elas":e=>"teriam "+m(e),nós:e=>"teríamos "+m(e)},"pretérito perfeito composto do subjuntivo":{examples:{"I hope you had already called the hospital":"Eu espero que você já tenha ligado para o hospital"},"eu, você, ele, ela":e=>"tenha "+m(e),tu:e=>"tenhas "+m(e),vós:e=>"tenhais "+m(e),"vocês, eles, elas":e=>"tenham "+m(e),nós:e=>"tenhamos "+m(e)},"pretérito mais-que-perfeito composto do subjuntivo":{examples:{"If you had looked at the map, we wouldn't be in this mess":"Se você tivesse olhado o mapa, não estaríamos nessa confusão"},"eu, você, ele, ela":e=>"tivesse "+m(e),tu:e=>"tivesses "+m(e),vós:e=>"tivestes "+m(e),"vocês, eles, elas":e=>"tivessem "+m(e),nós:e=>"tivéssemos "+m(e)},"futuro composto do subjuntivo":{examples:{"I'll tell you when I've finished the work":"Eu te aviso quando tiver terminado o trabalho"},"eu, você, ele, ela":e=>"tiver "+m(e),tu:e=>"tiveres "+m(e),vós:e=>"tiverdes "+m(e),"vocês, eles, elas":e=>"tiverem "+m(e),nós:e=>"tivermos "+m(e)}},sn=(e,t)=>/igir$/.test(e)?t.replace(/iga(s|is|m|mos)?$/,"ija$1").replace(/igo(m|mos)?$/,"ijo$1"):/gar$/.test(e)?t.replace(/ge(s|is|i|m|mos)?$/,"gue$1"):/car$/.test(e)?t.replace(/ce(s|is|i|m|mos)?$/,"que$1"):/erir$/.test(e)?t.replace(/er(o|a)(s|is|m|mos)?$/,"ir$1$2"):t,rn=(e,t,o)=>Object.keys(Qe).filter(n=>e||!n.includes("composto")).map(n=>{const s=Qe[n];return{name:n,examples:s.examples?Object.keys(s.examples).map(r=>({english:r,portuguese:s.examples[r]})):null,groups:Object.keys(s).filter(r=>r!="examples"&&(t||r!="tu")&&(o||r!="vós")).map(r=>({name:r,func:l=>sn(l,s[r](l))}))}}),xe={};function ln(e,t){if(xe[e])return xe[e];const o=localStorage.getItem(e),s=o!=null&&o!="null"&&o!="undefined"?JSON.parse(o):t,{subscribe:r,set:l,update:c}=Z(s),i={subscribe:r,update:c,set:function(u){l(u),localStorage.setItem(e,JSON.stringify(u))}};return xe[e]=i,i}function Xe(e,t,o){const n=e.slice();return n[14]=t[o],n}function Ze(e,t,o){const n=e.slice();return n[17]=t[o],n[19]=o,n}function et(e,t,o){const n=e.slice();return n[20]=t[o],n}function tt(e,t,o){const n=e.slice();return n[23]=t[o],n}function nt(e,t,o){const n=e.slice();return n[26]=t[o],n}function ot(e){let t,o=e[26]+"",n,s,r,l,c;function i(){return e[13](e[26])}return{c(){t=$("th"),n=D(o),s=L(),r=$("button"),r.textContent="x",g(r,"class","svelte-1ryru11"),g(t,"class","svelte-1ryru11")},m(u,a){M(u,t,a),d(t,n),d(t,s),d(t,r),l||(c=Q(r,"click",i),l=!0)},p(u,a){e=u,a&32&&o!==(o=e[26]+"")&&ne(n,o)},d(u){u&&P(t),l=!1,c()}}}function un(e){let t,o,n,s=e[14].name+"",r,l,c,i=e[14].examples&&st(e);return{c(){t=$("tr"),o=$("td"),n=$("strong"),r=D(s),l=L(),i&&i.c(),g(n,"class","svelte-1ryru11"),g(o,"colspan",c=e[5].length+1),g(o,"class","svelte-1ryru11"),g(t,"class","group-header")},m(u,a){M(u,t,a),d(t,o),d(o,n),d(n,r),d(o,l),i&&i.m(o,null)},p(u,a){a&16&&s!==(s=u[14].name+"")&&ne(r,s),u[14].examples?i?i.p(u,a):(i=st(u),i.c(),i.m(o,null)):i&&(i.d(1),i=null),a&32&&c!==(c=u[5].length+1)&&g(o,"colspan",c)},d(u){u&&P(t),i&&i.d()}}}function st(e){let t,o=e[14].examples,n=[];for(let s=0;s<o.length;s+=1)n[s]=rt(tt(e,o,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=fe()},m(s,r){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(s,r);M(s,t,r)},p(s,r){if(r&16){o=s[14].examples;let l;for(l=0;l<o.length;l+=1){const c=tt(s,o,l);n[l]?n[l].p(c,r):(n[l]=rt(c),n[l].c(),n[l].m(t.parentNode,t))}for(;l<n.length;l+=1)n[l].d(1);n.length=o.length}},d(s){ue(n,s),s&&P(t)}}}function rt(e){let t,o,n=e[23].english+"",s,r,l,c=e[23].portuguese+"",i,u;return{c(){t=$("div"),o=$("span"),s=D(n),r=D(`
                      =
                      `),l=$("span"),i=D(c),u=L(),g(o,"class","svelte-1ryru11"),g(l,"class","svelte-1ryru11"),g(t,"class","example svelte-1ryru11")},m(a,f){M(a,t,f),d(t,o),d(o,s),d(t,r),d(t,l),d(l,i),d(t,u)},p(a,f){f&16&&n!==(n=a[23].english+"")&&ne(s,n),f&16&&c!==(c=a[23].portuguese+"")&&ne(i,c)},d(a){a&&P(t)}}}function lt(e){let t,o=e[17].func(e[20])+"",n;return{c(){t=$("td"),n=D(o),g(t,"class","svelte-1ryru11")},m(s,r){M(s,t,r),d(t,n)},p(s,r){r&48&&o!==(o=s[17].func(s[20])+"")&&ne(n,o)},d(s){s&&P(t)}}}function it(e){let t,o,n,s,r=e[17].name+"",l,c,i,u=e[19]==0&&un(e),a=e[5],f=[];for(let p=0;p<a.length;p+=1)f[p]=lt(et(e,a,p));return{c(){u&&u.c(),t=L(),o=$("tr"),n=$("td"),s=$("em"),l=D(r),c=L();for(let p=0;p<f.length;p+=1)f[p].c();i=L(),g(n,"class","group-name svelte-1ryru11")},m(p,h){u&&u.m(p,h),M(p,t,h),M(p,o,h),d(o,n),d(n,s),d(s,l),d(o,c);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(o,null);d(o,i)},p(p,h){if(p[19]==0&&u.p(p,h),h&16&&r!==(r=p[17].name+"")&&ne(l,r),h&48){a=p[5];let _;for(_=0;_<a.length;_+=1){const E=et(p,a,_);f[_]?f[_].p(E,h):(f[_]=lt(E),f[_].c(),f[_].m(o,i))}for(;_<f.length;_+=1)f[_].d(1);f.length=a.length}},d(p){u&&u.d(p),p&&P(t),p&&P(o),ue(f,p)}}}function ut(e){let t,o=e[14].groups,n=[];for(let s=0;s<o.length;s+=1)n[s]=it(Ze(e,o,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=fe()},m(s,r){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(s,r);M(s,t,r)},p(s,r){if(r&48){o=s[14].groups;let l;for(l=0;l<o.length;l+=1){const c=Ze(s,o,l);n[l]?n[l].p(c,r):(n[l]=it(c),n[l].c(),n[l].m(t.parentNode,t))}for(;l<n.length;l+=1)n[l].d(1);n.length=o.length}},d(s){ue(n,s),s&&P(t)}}}function cn(e){let t,o,n,s,r,l,c,i,u,a,f,p,h,_,E,w,S,U,K,v,O,N,q,he,we,me,Ie,Le,F=e[5],R=[];for(let k=0;k<F.length;k+=1)R[k]=ot(nt(e,F,k));let Y=e[4],j=[];for(let k=0;k<Y.length;k+=1)j[k]=ut(Xe(e,Y,k));return{c(){t=$("div"),o=$("form"),n=$("div"),s=$("input"),r=L(),l=$("button"),l.textContent="Add",c=L(),i=$("label"),u=$("input"),a=D(`
        Include Tu`),f=L(),p=$("label"),h=$("input"),_=D(`
        Include Vós`),E=L(),w=$("label"),S=$("input"),U=D(`
        Include composite tenses`),K=L(),v=$("table"),O=$("thead"),N=$("tr"),q=$("th"),q.textContent="pronomes",he=L();for(let k=0;k<R.length;k+=1)R[k].c();we=L(),me=$("tbody");for(let k=0;k<j.length;k+=1)j[k].c();g(s,"placeholder","New verb (infinitive)"),g(s,"class","svelte-1ryru11"),g(l,"type","submit"),g(l,"class","svelte-1ryru11"),g(u,"name","inclui-tu"),g(u,"id","inclui-tu"),g(u,"type","checkbox"),g(u,"class","svelte-1ryru11"),g(i,"for","inclui-tu"),g(h,"name","inclui-vos"),g(h,"id","inclui-vos"),g(h,"type","checkbox"),g(h,"class","svelte-1ryru11"),g(p,"for","inclui-vos"),g(S,"name","inclui-tempos-compoostos"),g(S,"id","inclui-tempos-compoostos"),g(S,"type","checkbox"),g(S,"class","svelte-1ryru11"),g(w,"for","inclui-tempos-compoostos"),g(n,"class","controls svelte-1ryru11"),g(q,"class","svelte-1ryru11"),g(v,"class","svelte-1ryru11"),g(t,"class","p1")},m(k,H){M(k,t,H),d(t,o),d(o,n),d(n,s),Ve(s,e[3]),d(n,r),d(n,l),d(n,c),d(n,i),d(i,u),u.checked=e[0],d(i,a),d(n,f),d(n,p),d(p,h),h.checked=e[1],d(p,_),d(n,E),d(n,w),d(w,S),S.checked=e[2],d(w,U),d(t,K),d(t,v),d(v,O),d(O,N),d(N,q),d(N,he);for(let b=0;b<R.length;b+=1)R[b]&&R[b].m(N,null);d(v,we),d(v,me);for(let b=0;b<j.length;b+=1)j[b]&&j[b].m(me,null);Ie||(Le=[Q(s,"input",e[9]),Q(u,"change",e[10]),Q(h,"change",e[11]),Q(S,"change",e[12]),Q(o,"submit",wt(e[7]))],Ie=!0)},p(k,[H]){if(H&8&&s.value!==k[3]&&Ve(s,k[3]),H&1&&(u.checked=k[0]),H&2&&(h.checked=k[1]),H&4&&(S.checked=k[2]),H&288){F=k[5];let b;for(b=0;b<F.length;b+=1){const le=nt(k,F,b);R[b]?R[b].p(le,H):(R[b]=ot(le),R[b].c(),R[b].m(N,null))}for(;b<R.length;b+=1)R[b].d(1);R.length=F.length}if(H&48){Y=k[4];let b;for(b=0;b<Y.length;b+=1){const le=Xe(k,Y,b);j[b]?j[b].p(le,H):(j[b]=ut(le),j[b].c(),j[b].m(me,null))}for(;b<j.length;b+=1)j[b].d(1);j.length=Y.length}},i:T,o:T,d(k){k&&P(t),ue(R,k),ue(j,k),Ie=!1,J(Le)}}}function an(e,t,o){let n,s;const r=ln("verbs",["gostar","comer","desistir"]);ee(e,r,S=>o(5,s=S));let l="",c=!0,i=!1,u=!0;const a=()=>{const S=l.substring(l.length-2,l.length);["ar","er","ir"].indexOf(S)<0||(De(r,s=[...s,l],s),o(3,l=""))},f=S=>De(r,s=[...s.filter(U=>U!=S)],s);function p(){l=this.value,o(3,l)}function h(){c=this.checked,o(0,c)}function _(){i=this.checked,o(1,i)}function E(){u=this.checked,o(2,u)}const w=S=>f(S);return e.$$.update=()=>{e.$$.dirty&7&&o(4,n=rn(u,c,i))},[c,i,u,l,n,s,r,a,f,p,h,_,E,w]}class fn extends de{constructor(t){super(),pe(this,t,an,cn,re,{})}}function pn(e){let t;return{c(){t=D("WIP")},m(o,n){M(o,t,n)},p:T,i:T,o:T,d(o){o&&P(t)}}}class dn extends de{constructor(t){super(),pe(this,t,null,pn,re,{})}}function hn(e){let t,o,n,s;return t=new We({props:{component:fn}}),n=new We({props:{path:"/es",component:dn}}),{c(){ae(t.$$.fragment),o=L(),ae(n.$$.fragment)},m(r,l){oe(t,r,l),M(r,o,l),oe(n,r,l),s=!0},p:T,i(r){s||(V(t.$$.fragment,r),V(n.$$.fragment,r),s=!0)},o(r){B(t.$$.fragment,r),B(n.$$.fragment,r),s=!1},d(r){se(t,r),r&&P(o),se(n,r)}}}function mn(e){let t,o,n,s,r,l,c;return s=new Qt({props:{basepath:"/language-play",$$slots:{default:[hn]},$$scope:{ctx:e}}}),{c(){t=$("main"),o=$("nav"),o.innerHTML=`<a href="/language-play/pt" class="svelte-nir0re">PT</a> 
    <a href="/language-play/es" class="svelte-nir0re">ES</a>`,n=L(),ae(s.$$.fragment),g(o,"class","svelte-nir0re")},m(i,u){M(i,t,u),d(t,o),d(t,n),oe(s,t,null),r=!0,l||(c=kt(on.call(null,o)),l=!0)},p(i,[u]){const a={};u&1&&(a.$$scope={dirty:u,ctx:i}),s.$set(a)},i(i){r||(V(s.$$.fragment,i),r=!0)},o(i){B(s.$$.fragment,i),r=!1},d(i){i&&P(t),se(s),l=!1,c()}}}class _n extends de{constructor(t){super(),pe(this,t,null,mn,re,{})}}new _n({target:document.getElementById("app")});
