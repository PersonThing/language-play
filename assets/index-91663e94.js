(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function C(){}function ue(e,t){for(const s in t)e[s]=t[s];return e}function Xe(e){return e()}function $e(){return Object.create(null)}function Y(e){e.forEach(Xe)}function ce(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function mt(e){return Object.keys(e).length===0}function Ze(e,...t){if(e==null)return C;const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function B(e,t,s){e.$$.on_destroy.push(Ze(t,s))}function et(e,t,s,o){if(e){const n=tt(e,t,s,o);return e[0](n)}}function tt(e,t,s,o){return e[1]&&o?ue(s.ctx.slice(),e[1](o(t))):s.ctx}function st(e,t,s,o){if(e[2]&&o){const n=e[2](o(s));if(t.dirty===void 0)return n;if(typeof n=="object"){const r=[],l=Math.max(t.dirty.length,n.length);for(let i=0;i<l;i+=1)r[i]=t.dirty[i]|n[i];return r}return t.dirty|n}return t.dirty}function ot(e,t,s,o,n,r){if(n){const l=tt(t,s,o,r);e.p(l,n)}}function nt(e){if(e.ctx.length>32){const t=[],s=e.ctx.length/32;for(let o=0;o<s;o++)t[o]=-1;return t}return-1}function Ee(e){const t={};for(const s in e)s[0]!=="$"&&(t[s]=e[s]);return t}function dt(e){return e&&ce(e.destroy)?e.destroy:C}function g(e,t){e.appendChild(t)}function S(e,t,s){e.insertBefore(t,s||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function I(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function T(){return R(" ")}function ee(){return R("")}function X(e,t,s,o){return e.addEventListener(t,s,o),()=>e.removeEventListener(t,s,o)}function pt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function k(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function ht(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Se(e,t){e.value=t??""}function xe(e,t){return new e(t)}let re;function oe(e){re=e}function fe(){if(!re)throw new Error("Function called outside component initialization");return re}function _t(e){fe().$$.on_mount.push(e)}function gt(e){fe().$$.on_destroy.push(e)}function Oe(e,t){return fe().$$.context.set(e,t),t}function ie(e){return fe().$$.context.get(e)}const G=[],je=[];let Z=[];const Ne=[],bt=Promise.resolve();let _e=!1;function vt(){_e||(_e=!0,bt.then(rt))}function ge(e){Z.push(e)}const me=new Set;let F=0;function rt(){if(F!==0)return;const e=re;do{try{for(;F<G.length;){const t=G[F];F++,oe(t),yt(t.$$)}}catch(t){throw G.length=0,F=0,t}for(oe(null),G.length=0,F=0;je.length;)je.pop()();for(let t=0;t<Z.length;t+=1){const s=Z[t];me.has(s)||(me.add(s),s())}Z.length=0}while(G.length);for(;Ne.length;)Ne.pop()();_e=!1,me.clear(),oe(e)}function yt(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ge)}}function kt(e){const t=[],s=[];Z.forEach(o=>e.indexOf(o)===-1?t.push(o):s.push(o)),s.forEach(o=>o()),Z=t}const ae=new Set;let H;function we(){H={r:0,c:[],p:H}}function Ie(){H.r||Y(H.c),H=H.p}function U(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function A(e,t,s,o){if(e&&e.o){if(ae.has(e))return;ae.add(e),H.c.push(()=>{ae.delete(e),o&&(s&&e.d(1),o())}),e.o(t)}else o&&o()}function wt(e,t){const s={},o={},n={$$scope:1};let r=e.length;for(;r--;){const l=e[r],i=t[r];if(i){for(const a in l)a in i||(o[a]=1);for(const a in i)n[a]||(s[a]=i[a],n[a]=1);e[r]=i}else for(const a in l)n[a]=1}for(const l in o)l in s||(s[l]=void 0);return s}function Te(e){return typeof e=="object"&&e!==null?e:{}}function z(e){e&&e.c()}function D(e,t,s,o){const{fragment:n,after_update:r}=e.$$;n&&n.m(t,s),o||ge(()=>{const l=e.$$.on_mount.map(Xe).filter(ce);e.$$.on_destroy?e.$$.on_destroy.push(...l):Y(l),e.$$.on_mount=[]}),r.forEach(ge)}function V(e,t){const s=e.$$;s.fragment!==null&&(kt(s.after_update),Y(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function It(e,t){e.$$.dirty[0]===-1&&(G.push(e),vt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,s,o,n,r,l,i=[-1]){const a=re;oe(e);const u=e.$$={fragment:null,ctx:[],props:r,update:C,not_equal:n,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:$e(),dirty:i,skip_bound:!1,root:t.target||a.$$.root};l&&l(u.root);let f=!1;if(u.ctx=s?s(e,t.props||{},(c,m,...b)=>{const p=b.length?b[0]:m;return u.ctx&&n(u.ctx[c],u.ctx[c]=p)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](p),f&&It(e,c)),m}):[],u.update(),f=!0,Y(u.before_update),u.fragment=o?o(u.ctx):!1,t.target){if(t.hydrate){const c=ht(t.target);u.fragment&&u.fragment.l(c),c.forEach(E)}else u.fragment&&u.fragment.c();t.intro&&U(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),rt()}oe(a)}class se{$destroy(){V(this,1),this.$destroy=C}$on(t,s){if(!ce(s))return C;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(s),()=>{const n=o.indexOf(s);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!mt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function $t(e,t){return{subscribe:W(e,t).subscribe}}function W(e,t=C){let s;const o=new Set;function n(i){if(J(e,i)&&(e=i,s)){const a=!Q.length;for(const u of o)u[1](),Q.push(u,e);if(a){for(let u=0;u<Q.length;u+=2)Q[u][0](Q[u+1]);Q.length=0}}}function r(i){n(i(e))}function l(i,a=C){const u=[i,a];return o.add(u),o.size===1&&(s=t(n)||C),i(e),()=>{o.delete(u),o.size===0&&s&&(s(),s=null)}}return{set:n,update:r,subscribe:l}}function Et(e,t,s){const o=!Array.isArray(e),n=o?[e]:e,r=t.length<2;return $t(s,l=>{let i=!1;const a=[];let u=0,f=C;const c=()=>{if(u)return;f();const b=t(o?a[0]:a,l);r?l(b):f=ce(b)?b:C},m=n.map((b,p)=>Ze(b,w=>{a[p]=w,u&=~(1<<p),i&&c()},()=>{u|=1<<p}));return i=!0,c(),function(){Y(m),f()}})}const be={},ve={};function de(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function St(e,t){const s=[];let o=de(e);return{get location(){return o},listen(n){s.push(n);const r=()=>{o=de(e),n({location:o,action:"POP"})};return e.addEventListener("popstate",r),()=>{e.removeEventListener("popstate",r);const l=s.indexOf(n);s.splice(l,1)}},navigate(n,{state:r,replace:l=!1}={}){r={...r,key:Date.now()+""};try{l?e.history.replaceState(r,null,n):e.history.pushState(r,null,n)}catch{e.location[l?"replace":"assign"](n)}o=de(e),s.forEach(i=>i({location:o,action:"PUSH"}))}}}function xt(e="/"){let t=0;const s=[{pathname:e,search:""}],o=[];return{get location(){return s[t]},addEventListener(n,r){},removeEventListener(n,r){},history:{get entries(){return s},get index(){return t},get state(){return o[t]},pushState(n,r,l){const[i,a=""]=l.split("?");t++,s.push({pathname:i,search:a}),o.push(n)},replaceState(n,r,l){const[i,a=""]=l.split("?");s[t]={pathname:i,search:a},o[t]=n}}}}const Ot=Boolean(typeof window<"u"&&window.document&&window.document.createElement),ye=St(Ot?window:xt()),{navigate:jt}=ye,lt=/^:(.+)/,Ue=4,Nt=3,Tt=2,Ut=1,Ct=1;function Rt(e){return e===""}function At(e){return lt.test(e)}function at(e){return e[0]==="*"}function ke(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function pe(e){return e.replace(/(^\/+|\/+$)/g,"")}function Lt(e,t){const s=e.default?0:ke(e.path).reduce((o,n)=>(o+=Ue,Rt(n)?o+=Ct:At(n)?o+=Tt:at(n)?o-=Ue+Ut:o+=Nt,o),0);return{route:e,score:s,index:t}}function Pt(e){return e.map(Lt).sort((t,s)=>t.score<s.score?1:t.score>s.score?-1:t.index-s.index)}function ut(e,t){let s,o;const[n]=t.split("?"),r=ke(n),l=r[0]==="",i=Pt(e);for(let a=0,u=i.length;a<u;a++){const f=i[a].route;let c=!1;if(f.default){o={route:f,params:{},uri:t};continue}const m=ke(f.path),b={},p=Math.max(r.length,m.length);let w=0;for(;w<p;w++){const $=m[w],L=r[w];if($!==void 0&&at($)){const x=$==="*"?"*":$.slice(1);b[x]=r.slice(w).map(decodeURIComponent).join("/");break}if(L===void 0){c=!0;break}let P=lt.exec($);if(P&&!l){const x=decodeURIComponent(L);b[P[1]]=x}else if($!==L){c=!0;break}}if(!c){s={route:f,params:b,uri:"/"+r.slice(0,w).join("/")};break}}return s||o||null}function Mt(e,t){return ut([e],t)}function Ce(e,t){return`${pe(t==="/"?e:`${pe(e)}/${pe(t)}`)}/`}function qt(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dt(e){const t=location.host;return e.host==t||e.href.indexOf(`https://${t}`)===0||e.href.indexOf(`http://${t}`)===0}function Vt(e){let t;const s=e[9].default,o=et(s,e,e[8],null);return{c(){o&&o.c()},m(n,r){o&&o.m(n,r),t=!0},p(n,[r]){o&&o.p&&(!t||r&256)&&ot(o,s,n,n[8],t?st(s,n[8],r,null):nt(n[8]),null)},i(n){t||(U(o,n),t=!0)},o(n){A(o,n),t=!1},d(n){o&&o.d(n)}}}function Yt(e,t,s){let o,n,r,{$$slots:l={},$$scope:i}=t,{basepath:a="/"}=t,{url:u=null}=t;const f=ie(be),c=ie(ve),m=W([]);B(e,m,y=>s(6,n=y));const b=W(null);let p=!1;const w=f||W(u?{pathname:u}:ye.location);B(e,w,y=>s(5,o=y));const $=c?c.routerBase:W({path:a,uri:a});B(e,$,y=>s(7,r=y));const L=Et([$,b],([y,j])=>{if(j===null)return y;const{path:M}=y,{route:q,uri:ft}=j;return{path:q.default?M:q.path.replace(/\*.*$/,""),uri:ft}});function P(y){const{path:j}=r;let{path:M}=y;if(y._path=M,y.path=Ce(j,M),typeof window>"u"){if(p)return;const q=Mt(y,o.pathname);q&&(b.set(q),p=!0)}else m.update(q=>(q.push(y),q))}function x(y){m.update(j=>{const M=j.indexOf(y);return j.splice(M,1),j})}return f||(_t(()=>ye.listen(j=>{w.set(j.location)})),Oe(be,w)),Oe(ve,{activeRoute:b,base:$,routerBase:L,registerRoute:P,unregisterRoute:x}),e.$$set=y=>{"basepath"in y&&s(3,a=y.basepath),"url"in y&&s(4,u=y.url),"$$scope"in y&&s(8,i=y.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:y}=r;m.update(j=>(j.forEach(M=>M.path=Ce(y,M._path)),j))}if(e.$$.dirty&96){const y=ut(n,o.pathname);b.set(y)}},[m,w,$,a,u,o,n,r,i,l]}class Ht extends se{constructor(t){super(),te(this,t,Yt,Vt,J,{basepath:3,url:4})}}const Bt=e=>({params:e&4,location:e&16}),Re=e=>({params:e[2],location:e[4]});function Ae(e){let t,s,o,n;const r=[zt,Kt],l=[];function i(a,u){return a[0]!==null?0:1}return t=i(e),s=l[t]=r[t](e),{c(){s.c(),o=ee()},m(a,u){l[t].m(a,u),S(a,o,u),n=!0},p(a,u){let f=t;t=i(a),t===f?l[t].p(a,u):(we(),A(l[f],1,1,()=>{l[f]=null}),Ie(),s=l[t],s?s.p(a,u):(s=l[t]=r[t](a),s.c()),U(s,1),s.m(o.parentNode,o))},i(a){n||(U(s),n=!0)},o(a){A(s),n=!1},d(a){l[t].d(a),a&&E(o)}}}function Kt(e){let t;const s=e[10].default,o=et(s,e,e[9],Re);return{c(){o&&o.c()},m(n,r){o&&o.m(n,r),t=!0},p(n,r){o&&o.p&&(!t||r&532)&&ot(o,s,n,n[9],t?st(s,n[9],r,Bt):nt(n[9]),Re)},i(n){t||(U(o,n),t=!0)},o(n){A(o,n),t=!1},d(n){o&&o.d(n)}}}function zt(e){let t,s,o;const n=[{location:e[4]},e[2],e[3]];var r=e[0];function l(i){let a={};for(let u=0;u<n.length;u+=1)a=ue(a,n[u]);return{props:a}}return r&&(t=xe(r,l())),{c(){t&&z(t.$$.fragment),s=ee()},m(i,a){t&&D(t,i,a),S(i,s,a),o=!0},p(i,a){const u=a&28?wt(n,[a&16&&{location:i[4]},a&4&&Te(i[2]),a&8&&Te(i[3])]):{};if(a&1&&r!==(r=i[0])){if(t){we();const f=t;A(f.$$.fragment,1,0,()=>{V(f,1)}),Ie()}r?(t=xe(r,l()),z(t.$$.fragment),U(t.$$.fragment,1),D(t,s.parentNode,s)):t=null}else r&&t.$set(u)},i(i){o||(t&&U(t.$$.fragment,i),o=!0)},o(i){t&&A(t.$$.fragment,i),o=!1},d(i){i&&E(s),t&&V(t,i)}}}function Jt(e){let t,s,o=e[1]!==null&&e[1].route===e[7]&&Ae(e);return{c(){o&&o.c(),t=ee()},m(n,r){o&&o.m(n,r),S(n,t,r),s=!0},p(n,[r]){n[1]!==null&&n[1].route===n[7]?o?(o.p(n,r),r&2&&U(o,1)):(o=Ae(n),o.c(),U(o,1),o.m(t.parentNode,t)):o&&(we(),A(o,1,1,()=>{o=null}),Ie())},i(n){s||(U(o),s=!0)},o(n){A(o),s=!1},d(n){o&&o.d(n),n&&E(t)}}}function Ft(e,t,s){let o,n,{$$slots:r={},$$scope:l}=t,{path:i=""}=t,{component:a=null}=t;const{registerRoute:u,unregisterRoute:f,activeRoute:c}=ie(ve);B(e,c,$=>s(1,o=$));const m=ie(be);B(e,m,$=>s(4,n=$));const b={path:i,default:i===""};let p={},w={};return u(b),typeof window<"u"&&gt(()=>{f(b)}),e.$$set=$=>{s(13,t=ue(ue({},t),Ee($))),"path"in $&&s(8,i=$.path),"component"in $&&s(0,a=$.component),"$$scope"in $&&s(9,l=$.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&o&&o.route===b&&s(2,p=o.params);{const{path:$,component:L,...P}=t;s(3,w=P)}},t=Ee(t),[a,o,p,w,n,c,m,b,i,l,r]}class Le extends se{constructor(t){super(),te(this,t,Ft,Jt,J,{path:8,component:0})}}function Qt(e){function t(o,n){for(;n&&n.tagName!==o;)n=n.parentNode;return n}function s(o){const n=t("A",o.target);n&&n.target===""&&Dt(n)&&qt(o)&&!n.hasAttribute("noroute")&&(o.preventDefault(),jt(n.pathname+n.search,{replace:n.hasAttribute("replace")}))}return e.addEventListener("click",s),{destroy(){e.removeEventListener("click",s)}}}const h=e=>e.substring(0,e.length-2),le=e=>e.substring(0,e.length-1),d=(e,t)=>/ar$/.test(e)?t:"",O=(e,t)=>/er$/.test(e)?t:"",N=(e,t)=>/ir$/.test(e)?t:"",_=(e,t)=>/(i|e)r$/.test(e)?t:"",v=e=>h(e)+d(e,"ado")+_(e,"ido"),Pe={particípio:{examples:{"The work is done":"O trabalho é feito"},"*":v},gerundio:{examples:{"I am reading":"Eu estou lendo","He's thinking":"Ele está pensando"},"*":e=>le(e)+"ndo"},presente:{examples:{"I read":"Eu leio","You eat":"Você come"},eu:e=>h(e)+"o",tu:e=>h(e)+d(e,"as")+_(e,"es"),vós:e=>h(e)+d(e,"ais")+N(e,"is")+O(e,"eis"),"você, ele, ela":e=>h(e)+d(e,"a")+_(e,"e"),"vocês, eles, elas":e=>h(e)+d(e,"am")+_(e,"em"),nós:e=>h(e)+d(e,"amos")+O(e,"emos")+N(e,"imos")},"pretérito imperfeito":{examples:{"I read a lot when I was little":"Eu lia muito quando era criança"},"eu, você, ele, ela":e=>h(e)+d(e,"ava")+_(e,"ia"),tu:e=>h(e)+d(e,"ava")+_(e,"ias"),vós:e=>h(e)+d(e,"áveis")+_(e,"íeis"),"vocês, eles, elas":e=>h(e)+d(e,"ava")+_(e,"ia"),nós:e=>h(e)+d(e,"ávamos")+_(e,"íamos")},"pretérito perfeito":{examples:{"I already read that":"Eu já li isso"},eu:e=>h(e)+d(e,"ei")+_(e,"i"),tu:e=>h(e)+d(e,"aste")+O(e,"este")+N(e,"iste"),vós:e=>h(e)+d(e,"astes")+O(e,"estes")+N(e,"istes"),"você, ele, ela":e=>h(e)+d(e,"ou")+O(e,"eu")+N(e,"iu"),"vocês, eles, elas":e=>h(e)+d(e,"aram")+O(e,"eram")+N(e,"iram"),nós:e=>h(e)+d(e,"amos")+O(e,"emos")+N(e,"imos")},"pretérito mais-que-perfeito":{examples:{"When I noticed, the water had already overflowed from the bathtub":"Quando notei, a água já transbordara da banheira"},"eu, você, ele, ela":e=>e+"a",tu:e=>e+"as",vós:e=>e+"ais","vocês, eles, elas":e=>e+"am",nós:e=>e+"amos"},"futuro do pretérito":{examples:{"I would read that":"Eu leria isso"},"eu, você, ele, ela":e=>e+d(e,"ia")+O(e,"ia")+N(e,"ia"),tu:e=>e+d(e,"ias")+O(e,"ias")+N(e,"ias"),vós:e=>e+d(e,"íeis")+O(e,"íeis")+N(e,"íeis"),"vocês, eles, elas":e=>e+d(e,"iam")+O(e,"iam")+N(e,"iam"),nós:e=>e+d(e,"íamos")+O(e,"íamos")+N(e,"íamos")},"futuro do presente":{examples:{"I will read that":"Eu lerei isso"},eu:e=>e+"ei",tu:e=>e+"ás",vós:e=>e+"eis","você, ele, ela":e=>e+"á","vocês, eles, elas":e=>e+"ão",nós:e=>e+"emos"},imperativo:{examples:{"Read it":"Leia isso"},você:e=>h(e)+d(e,"e")+_(e,"a"),tu:e=>h(e)+d(e,"a")+_(e,"e"),vós:e=>h(e)+d(e,"ai")+O(e,"ei")+N(e,"i"),vocês:e=>h(e)+d(e,"em")+_(e,"am"),nós:e=>h(e)+d(e,"emos")+_(e,"amos")},"subjuntivo presente":{examples:{"I want you to read that":"Eu quero que você leia isso","Even though I like it, I can't eat it":"Mesmo que eu goste dele, não posso comê-lo"},"eu, você, ele, ela":e=>h(e)+d(e,"e")+_(e,"a"),tu:e=>h(e)+d(e,"es")+_(e,"as"),vós:e=>h(e)+d(e,"eis")+_(e,"ais"),vocês:e=>h(e)+d(e,"em")+_(e,"am"),nós:e=>h(e)+d(e,"emos")+_(e,"amos")},"subjuntivo pretérito imperfeito":{examples:{"If you had read the book, you would understand":"Se você lesse o livro, entenderia","If I had money, I would buy a car":"Se eu tivesse dinheiro, eu compraria um carro"},"eu, você, ele, ela":e=>le(e)+"sse",tu:e=>le(e)+"sses",vós:e=>h(e)+d(e,"ásseis")+O(e,"êsseis")+N(e,"ísseis"),vocês:e=>le(e)+"ssem",nós:e=>h(e)+d(e,"ássemos")+O(e,"êssemos")+N(e,"íssemos")},"subjuntivo futuro":{examples:{"If you had read the book, you would understand":"Se você lesse o livro, entenderia","If I had money, I would buy a car":"Se eu tivesse dinheiro, eu compraria um carro"},"eu, você, ele, ela":e=>e,tu:e=>e+"es",vós:e=>e+"des",vocês:e=>e+"em",nós:e=>e+"mos"},"pretérito perfeito composto do indicativo":{examples:{"I have been reading a lot lately":"Eu tenho lido muito ultimamente"},eu:e=>"tenho "+v(e),tu:e=>"tens "+v(e),vós:e=>"tendes "+v(e),"você, ele, ela":e=>"tem "+v(e),"vocês, eles, elas":e=>"têm "+v(e),nós:e=>"temos "+v(e)},"pretérito mais-que-perfeito composto do indicativo":{examples:{"I had been reading a lot, but I stopped":"Eu tinha lido muito, mas parei"},"eu, você, ele, ela":e=>"tinha "+v(e),tu:e=>"tinhas "+v(e),vós:e=>"tínheis "+v(e),"vocês, eles, elas":e=>"tinham "+v(e),nós:e=>"tínhamos "+v(e)},"futuro do presente composto do indicativo":{examples:{"Tomorrow, I will have read three more books":"Amanhã, eu terei lido mais três livros"},eu:e=>"terei "+v(e),tu:e=>"terás "+v(e),vós:e=>"tereis "+v(e),"você, ele, ela":e=>"terá "+v(e),"vocês, eles, elas":e=>"terão "+v(e),nós:e=>"teremos "+v(e)},"futuro do pretérito composto do indicativo":{examples:{"I would have read the book":"Eu teria lido o livro"},"eu, você, ele, ela":e=>"teria "+v(e),tu:e=>"terias "+v(e),vós:e=>"teríeis "+v(e),"vocês, eles, elas":e=>"teriam "+v(e),nós:e=>"teríamos "+v(e)},"pretérito perfeito composto do subjuntivo":{examples:{"I hope you had already called the hospital":"Eu espero que você já tenha ligado para o hospital"},"eu, você, ele, ela":e=>"tenha "+v(e),tu:e=>"tenhas "+v(e),vós:e=>"tenhais "+v(e),"vocês, eles, elas":e=>"tenham "+v(e),nós:e=>"tenhamos "+v(e)},"pretérito mais-que-perfeito composto do subjuntivo":{examples:{"If you had looked at the map, we wouldn't be in this mess":"Se você tivesse olhado o mapa, não estaríamos nessa confusão"},"eu, você, ele, ela":e=>"tivesse "+v(e),tu:e=>"tivesses "+v(e),vós:e=>"tivestes "+v(e),"vocês, eles, elas":e=>"tivessem "+v(e),nós:e=>"tivéssemos "+v(e)},"futuro composto do subjuntivo":{examples:{"I'll tell you when I've finished the work":"Eu te aviso quando tiver terminado o trabalho"},"eu, você, ele, ela":e=>"tiver "+v(e),tu:e=>"tiveres "+v(e),vós:e=>"tiverdes "+v(e),"vocês, eles, elas":e=>"tiverem "+v(e),nós:e=>"tivermos "+v(e)}},Gt=(e,t)=>/igir$/.test(e)?t.replace(/iga(s|is|m|mos)?$/,"ija$1").replace(/igo(m|mos)?$/,"ijo$1"):/gar$/.test(e)?t.replace(/ge(s|is|i|m|mos)?$/,"gue$1"):/car$/.test(e)?t.replace(/ce(s|is|i|m|mos)?$/,"que$1"):/erir$/.test(e)?t.replace(/er(o|a)(s|is|m|mos)?$/,"ir$1$2"):t,Wt=(e,t,s)=>Object.keys(Pe).filter(o=>e||!o.includes("composto")).map(o=>{const n=Pe[o];return{name:o,examples:n.examples?Object.keys(n.examples).map(r=>({english:r,portuguese:n.examples[r]})):null,groups:Object.keys(n).filter(r=>r!="examples"&&(t||r!="tu")&&(s||r!="vós")).map(r=>({name:r,func:l=>Gt(l,n[r](l))}))}}),he={};function it(e,t){if(he[e])return he[e];const s=localStorage.getItem(e),n=s!=null&&s!="null"&&s!="undefined"?JSON.parse(s):t,{subscribe:r,set:l,update:i}=W(n),a={subscribe:r,update:i,set:function(u){l(u),localStorage.setItem(e,JSON.stringify(u))}};return he[e]=a,a}function Me(e,t,s){const o=e.slice();return o[7]=t[s],o}function qe(e,t,s){const o=e.slice();return o[10]=t[s],o[12]=s,o}function De(e,t,s){const o=e.slice();return o[13]=t[s],o}function Ve(e,t,s){const o=e.slice();return o[16]=t[s],o}function Ye(e,t,s){const o=e.slice();return o[19]=t[s],o}function He(e){let t,s,o,n,r,l,i,a=e[0],u=[];for(let m=0;m<a.length;m+=1)u[m]=Be(Ye(e,a,m));let f=e[1],c=[];for(let m=0;m<f.length;m+=1)c[m]=Ge(Me(e,f,m));return{c(){t=I("table"),s=I("thead"),o=I("tr"),n=I("th"),n.textContent="pronouns",r=T();for(let m=0;m<u.length;m+=1)u[m].c();l=T(),i=I("tbody");for(let m=0;m<c.length;m+=1)c[m].c();k(n,"class","svelte-1sb43a2"),k(t,"class","svelte-1sb43a2")},m(m,b){S(m,t,b),g(t,s),g(s,o),g(o,n),g(o,r);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(o,null);g(t,l),g(t,i);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(i,null)},p(m,b){if(b&17){a=m[0];let p;for(p=0;p<a.length;p+=1){const w=Ye(m,a,p);u[p]?u[p].p(w,b):(u[p]=Be(w),u[p].c(),u[p].m(o,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=a.length}if(b&3){f=m[1];let p;for(p=0;p<f.length;p+=1){const w=Me(m,f,p);c[p]?c[p].p(w,b):(c[p]=Ge(w),c[p].c(),c[p].m(i,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=f.length}},d(m){m&&E(t),ne(u,m),ne(c,m)}}}function Be(e){let t,s=e[19]+"",o,n,r,l,i;function a(){return e[6](e[19])}return{c(){t=I("th"),o=R(s),n=T(),r=I("button"),r.textContent="x",k(r,"class","svelte-1sb43a2"),k(t,"class","svelte-1sb43a2")},m(u,f){S(u,t,f),g(t,o),g(t,n),g(t,r),l||(i=X(r,"click",a),l=!0)},p(u,f){e=u,f&1&&s!==(s=e[19]+"")&&K(o,s)},d(u){u&&E(t),l=!1,i()}}}function Xt(e){let t,s,o,n=e[7].name+"",r,l,i,a,u=e[7].explanation&&Ke(e),f=e[7].examples&&ze(e);return{c(){t=I("tr"),s=I("td"),o=I("strong"),r=R(n),l=T(),u&&u.c(),i=T(),f&&f.c(),k(o,"class","svelte-1sb43a2"),k(s,"colspan",a=e[0].length+1),k(s,"class","svelte-1sb43a2"),k(t,"class","group-header")},m(c,m){S(c,t,m),g(t,s),g(s,o),g(o,r),g(s,l),u&&u.m(s,null),g(s,i),f&&f.m(s,null)},p(c,m){m&2&&n!==(n=c[7].name+"")&&K(r,n),c[7].explanation?u?u.p(c,m):(u=Ke(c),u.c(),u.m(s,i)):u&&(u.d(1),u=null),c[7].examples?f?f.p(c,m):(f=ze(c),f.c(),f.m(s,null)):f&&(f.d(1),f=null),m&1&&a!==(a=c[0].length+1)&&k(s,"colspan",a)},d(c){c&&E(t),u&&u.d(),f&&f.d()}}}function Ke(e){let t,s=e[7].explanation+"",o;return{c(){t=I("div"),o=R(s),k(t,"class","explanation")},m(n,r){S(n,t,r),g(t,o)},p(n,r){r&2&&s!==(s=n[7].explanation+"")&&K(o,s)},d(n){n&&E(t)}}}function ze(e){let t,s=e[7].examples,o=[];for(let n=0;n<s.length;n+=1)o[n]=Je(Ve(e,s,n));return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=ee()},m(n,r){for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,r);S(n,t,r)},p(n,r){if(r&2){s=n[7].examples;let l;for(l=0;l<s.length;l+=1){const i=Ve(n,s,l);o[l]?o[l].p(i,r):(o[l]=Je(i),o[l].c(),o[l].m(t.parentNode,t))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},d(n){ne(o,n),n&&E(t)}}}function Je(e){let t,s,o=e[16].english+"",n,r,l,i=e[16].portuguese+"",a,u;return{c(){t=I("div"),s=I("span"),n=R(o),r=R(`\r
                      =\r
                      `),l=I("span"),a=R(i),u=T(),k(s,"class","svelte-1sb43a2"),k(l,"class","svelte-1sb43a2"),k(t,"class","example svelte-1sb43a2")},m(f,c){S(f,t,c),g(t,s),g(s,n),g(t,r),g(t,l),g(l,a),g(t,u)},p(f,c){c&2&&o!==(o=f[16].english+"")&&K(n,o),c&2&&i!==(i=f[16].portuguese+"")&&K(a,i)},d(f){f&&E(t)}}}function Fe(e){let t,s=e[10].func(e[13])+"",o;return{c(){t=I("td"),o=R(s),k(t,"class","svelte-1sb43a2")},m(n,r){S(n,t,r),g(t,o)},p(n,r){r&3&&s!==(s=n[10].func(n[13])+"")&&K(o,s)},d(n){n&&E(t)}}}function Qe(e){let t,s,o,n,r=e[10].name+"",l,i,a,u=e[12]==0&&Xt(e),f=e[0],c=[];for(let m=0;m<f.length;m+=1)c[m]=Fe(De(e,f,m));return{c(){u&&u.c(),t=T(),s=I("tr"),o=I("td"),n=I("em"),l=R(r),i=T();for(let m=0;m<c.length;m+=1)c[m].c();a=T(),k(o,"class","group-name svelte-1sb43a2")},m(m,b){u&&u.m(m,b),S(m,t,b),S(m,s,b),g(s,o),g(o,n),g(n,l),g(s,i);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(s,null);g(s,a)},p(m,b){if(m[12]==0&&u.p(m,b),b&2&&r!==(r=m[10].name+"")&&K(l,r),b&3){f=m[0];let p;for(p=0;p<f.length;p+=1){const w=De(m,f,p);c[p]?c[p].p(w,b):(c[p]=Fe(w),c[p].c(),c[p].m(s,a))}for(;p<c.length;p+=1)c[p].d(1);c.length=f.length}},d(m){u&&u.d(m),m&&E(t),m&&E(s),ne(c,m)}}}function Ge(e){let t,s=e[7].groups,o=[];for(let n=0;n<s.length;n+=1)o[n]=Qe(qe(e,s,n));return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=ee()},m(n,r){for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,r);S(n,t,r)},p(n,r){if(r&3){s=n[7].groups;let l;for(l=0;l<s.length;l+=1){const i=qe(n,s,l);o[l]?o[l].p(i,r):(o[l]=Qe(i),o[l].c(),o[l].m(t.parentNode,t))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},d(n){ne(o,n),n&&E(t)}}}function Zt(e){let t,s,o,n,r,l,i,a,u,f=e[0]&&e[1]&&He(e);return{c(){t=I("form"),s=I("div"),o=I("input"),n=T(),r=I("button"),r.textContent="Add",l=T(),f&&f.c(),i=ee(),k(o,"placeholder","New verb (infinitive)"),k(r,"type","submit"),k(s,"class","flex mb1")},m(c,m){S(c,t,m),g(t,s),g(s,o),Se(o,e[2]),g(s,n),g(s,r),S(c,l,m),f&&f.m(c,m),S(c,i,m),a||(u=[X(o,"input",e[5]),X(t,"submit",pt(e[3]))],a=!0)},p(c,[m]){m&4&&o.value!==c[2]&&Se(o,c[2]),c[0]&&c[1]?f?f.p(c,m):(f=He(c),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},i:C,o:C,d(c){c&&E(t),c&&E(l),f&&f.d(c),c&&E(i),a=!1,Y(u)}}}function es(e,t,s){let{verbs:o}=t,{tenses:n}=t,r="";const l=()=>{const f=r.substring(r.length-2,r.length);["ar","er","ir"].indexOf(f)<0||(s(0,o=[...o,r]),s(2,r=""))},i=f=>s(0,o=[...o.filter(c=>c!=f)]);function a(){r=this.value,s(2,r)}const u=f=>i(f);return e.$$set=f=>{"verbs"in f&&s(0,o=f.verbs),"tenses"in f&&s(1,n=f.tenses)},[o,n,r,l,i,a,u]}class ct extends se{constructor(t){super(),te(this,t,es,Zt,J,{verbs:0,tenses:1})}}function ts(e){let t,s,o,n,r,l,i,a,u,f,c,m,b,p,w,$,L,P;return w=new ct({props:{tenses:e[3],verbs:e[4]}}),{c(){t=I("div"),s=I("div"),o=I("label"),n=I("input"),r=R(`
      Include Tu`),l=T(),i=I("label"),a=I("input"),u=R(`
      Include Vós`),f=T(),c=I("label"),m=I("input"),b=R(`
      Include composite tenses`),p=T(),z(w.$$.fragment),k(n,"name","inclui-tu"),k(n,"id","inclui-tu"),k(n,"type","checkbox"),k(o,"for","inclui-tu"),k(a,"name","inclui-vos"),k(a,"id","inclui-vos"),k(a,"type","checkbox"),k(i,"for","inclui-vos"),k(m,"name","inclui-tempos-compoostos"),k(m,"id","inclui-tempos-compoostos"),k(m,"type","checkbox"),k(c,"for","inclui-tempos-compoostos"),k(s,"class","flex"),k(t,"class","p1")},m(x,y){S(x,t,y),g(t,s),g(s,o),g(o,n),n.checked=e[0],g(o,r),g(s,l),g(s,i),g(i,a),a.checked=e[1],g(i,u),g(s,f),g(s,c),g(c,m),m.checked=e[2],g(c,b),g(t,p),D(w,t,null),$=!0,L||(P=[X(n,"change",e[6]),X(a,"change",e[7]),X(m,"change",e[8])],L=!0)},p(x,[y]){y&1&&(n.checked=x[0]),y&2&&(a.checked=x[1]),y&4&&(m.checked=x[2]);const j={};y&8&&(j.tenses=x[3]),y&16&&(j.verbs=x[4]),w.$set(j)},i(x){$||(U(w.$$.fragment,x),$=!0)},o(x){A(w.$$.fragment,x),$=!1},d(x){x&&E(t),V(w),L=!1,Y(P)}}}function ss(e,t,s){let o,n;const r=it("verbs",["gostar","comer","desistir"]);B(e,r,m=>s(4,n=m));let l=!0,i=!1,a=!0;function u(){l=this.checked,s(0,l)}function f(){i=this.checked,s(1,i)}function c(){a=this.checked,s(2,a)}return e.$$.update=()=>{e.$$.dirty&7&&s(3,o=Wt(a,l,i))},[l,i,a,o,n,r,u,f,c]}class os extends se{constructor(t){super(),te(this,t,ss,ts,J,{})}}const We={particípio:{examples:{"The work is done":"O trabalho é feito"},"*":v},gerundio:{examples:{"I am eating":"Eu estou comiendo","He's eating":"Ele está comiendo"},"*":e=>h(e)+d(e,"ando")+_(e,"iendo")},presente:{examples:{"I eat":"Yo como","You eat":"Tu comes"},yo:e=>h(e)+"o",tú:e=>h(e)+d(e,"as")+_(e,"es"),"él, Ud.":e=>h(e)+d(e,"a")+_(e,"e"),nosotros:e=>h(e)+d(e,"amos")+O(e,"emos")+N(e,"imos"),vosotros:e=>h(e)+d(e,"áis")+O(e,"éis")+N(e,"ís"),"ellos, Uds.":e=>h(e)+d(e,"an")+_(e,"en")},imperfecto:{examples:{"I ate a lot when I was little":"Yo comía mucho cuando era pequeño"},"yo, él, Ud.":e=>h(e)+d(e,"aba")+_(e,"ía"),tú:e=>h(e)+d(e,"abas")+_(e,"ías"),nosotros:e=>h(e)+d(e,"ábamos")+_(e,"íamos"),vosotros:e=>h(e)+d(e,"abais")+_(e,"íais"),"ellos, Uds.":e=>h(e)+d(e,"aban")+_(e,"ían")},"pretérito perfecto simple":{examples:{"I already ate that":"Me comi eso"},yo:e=>h(e)+d(e,"é")+_(e,"í"),tú:e=>h(e)+d(e,"aste")+_(e,"iste"),"él, Ud.":e=>h(e)+d(e,"ó")+_(e,"ió"),nosotros:e=>h(e)+d(e,"amos")+O(e,"imos"),vosotros:e=>h(e)+d(e,"asteis")+O(e,"isteis"),"ellos, Uds.":e=>h(e)+d(e,"aron")+_(e,"ieron")},futuro:{examples:{"I will eat that":"Yo comeré eso"},yo:e=>e+"é",tú:e=>e+"ás","él, Ud.":e=>e+"á",nosotros:e=>e+"emos",vosotros:e=>e+"éis","ellos, Uds.":e=>e+"án"},condicional:{examples:{"I would eat that":"Me comería eso"},"yo, él, Ud.":e=>e+"ía",tú:e=>e+"ías",nosotros:e=>e+"íamos",vosotros:e=>e+"íais","ellos, Uds.":e=>e+"ían"},"imperativo afirmativo":{examples:{"Eat it":"?????"},tú:e=>h(e)+d(e,"a")+_(e,"e"),"Ud.":e=>h(e)+d(e,"e")+_(e,"a"),nosotros:e=>h(e)+d(e,"emos")+_(e,"amos"),"Uds.":e=>h(e)+d(e,"en")+_(e,"an")},"imperativo negativo":{examples:{"Don't eat it":"No te lo comas"},tú:e=>"no "+h(e)+d(e,"es")+_(e,"as"),"Ud.":e=>"no "+h(e)+d(e,"e")+_(e,"a"),nosotros:e=>"no "+h(e)+d(e,"emos")+_(e,"amos"),"Uds.":e=>"no "+h(e)+d(e,"en")+_(e,"an")},"presente de subjuntivo":{examples:{"I want you to eat that":"Quiero que comas eso"},"yo, él, Ud.":e=>h(e)+d(e,"e")+_(e,"a"),tú:e=>h(e)+d(e,"es")+_(e,"as"),nosotros:e=>h(e)+d(e,"emos")+_(e,"amos"),vosotros:e=>h(e)+d(e,"éis")+_(e,"áis"),"Uds.":e=>h(e)+d(e,"en")+_(e,"an")},"imperfecto de subjuntivo (option 1)":{examples:{"If you had read the book, you would understand":"Si hubieras leído el libro, lo entenderías","If I had money, I would buy a car":"Si tuviera dinero, compraría un auto"},"yo, él, Ud.":e=>h(e)+d(e,"ara")+_(e,"iera"),tú:e=>h(e)+d(e,"aras")+_(e,"ieras"),nosotros:e=>h(e)+d(e,"áramos")+_(e,"iéramos"),vosotros:e=>h(e)+d(e,"arais")+_(e,"ieráis"),"Uds.":e=>h(e)+d(e,"aran")+_(e,"ieran")},"imperfecto de subjuntivo (option 2)":{examples:{"If you had read the book, you would understand":"Si hubieses leído el libro, lo entenderías","If I had money, I would buy a car":"Si tuviese dinero, compraría un auto"},"yo, él, Ud.":e=>h(e)+d(e,"ase")+_(e,"iese"),tú:e=>h(e)+d(e,"ases")+_(e,"ieses"),nosotros:e=>h(e)+d(e,"ásemos")+_(e,"iésemos"),vosotros:e=>h(e)+d(e,"aséis")+_(e,"ieséis"),"Uds.":e=>h(e)+d(e,"asen")+_(e,"iesen")}},ns=(e,t)=>t,rs=(e,t,s)=>Object.keys(We).filter(o=>e||!o.includes("composto")).map(o=>{const n=We[o];return{name:o,examples:n.examples?Object.keys(n.examples).map(r=>({english:r,portuguese:n.examples[r]})):null,groups:Object.keys(n).filter(r=>r!="examples"&&(t||r!="tu")&&(s||r!="vós")).map(r=>({name:r,func:l=>ns(l,n[r](l))}))}});function ls(e){let t,s,o;return s=new ct({props:{tenses:e[0],verbs:e[1]}}),{c(){t=I("div"),z(s.$$.fragment),k(t,"class","p1")},m(n,r){S(n,t,r),D(s,t,null),o=!0},p(n,[r]){const l={};r&1&&(l.tenses=n[0]),r&2&&(l.verbs=n[1]),s.$set(l)},i(n){o||(U(s.$$.fragment,n),o=!0)},o(n){A(s.$$.fragment,n),o=!1},d(n){n&&E(t),V(s)}}}let as=!0;function us(e,t,s){let o,n;const r=it("verbs-es2",["hablar","comer","vivir"]);return B(e,r,l=>s(1,n=l)),o=rs(as),[o,n,r]}class is extends se{constructor(t){super(),te(this,t,us,ls,J,{})}}function cs(e){let t,s,o,n;return t=new Le({props:{component:os}}),o=new Le({props:{path:"/es",component:is}}),{c(){z(t.$$.fragment),s=T(),z(o.$$.fragment)},m(r,l){D(t,r,l),S(r,s,l),D(o,r,l),n=!0},p:C,i(r){n||(U(t.$$.fragment,r),U(o.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),A(o.$$.fragment,r),n=!1},d(r){V(t,r),r&&E(s),V(o,r)}}}function fs(e){let t,s,o,n,r,l,i;return n=new Ht({props:{basepath:"/language-play",$$slots:{default:[cs]},$$scope:{ctx:e}}}),{c(){t=I("main"),s=I("nav"),s.innerHTML=`<a href="/language-play/pt" class="svelte-nir0re">PT</a> 
    <a href="/language-play/es" class="svelte-nir0re">ES</a>`,o=T(),z(n.$$.fragment),k(s,"class","svelte-nir0re")},m(a,u){S(a,t,u),g(t,s),g(t,o),D(n,t,null),r=!0,l||(i=dt(Qt.call(null,s)),l=!0)},p(a,[u]){const f={};u&1&&(f.$$scope={dirty:u,ctx:a}),n.$set(f)},i(a){r||(U(n.$$.fragment,a),r=!0)},o(a){A(n.$$.fragment,a),r=!1},d(a){a&&E(t),V(n),l=!1,i()}}}class ms extends se{constructor(t){super(),te(this,t,null,fs,J,{})}}new ms({target:document.getElementById("app")});