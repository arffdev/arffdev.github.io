import{R as z,T as ee,S as X,i as Y,s as Z,e as m,G as A,k as N,t as G,c as _,a as g,H,d as v,m as $,h as U,b as n,f as Q,g as L,K as o,U as W,j as F,E as P,V as te,L as se,w as oe,Q as re,x as ne,I as le,y as ae,q as ie,o as ce,B as de}from"../chunks/index-9fe72fd8.js";import{w as ue}from"../chunks/index-92d65ea7.js";function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,s,t,r){if(typeof t=="number"||J(t)){const l=r-t,a=(t-s)/(e.dt||1/60),c=e.opts.stiffness*l,i=e.opts.damping*a,f=(c-i)*e.inv_mass,u=(a+f)*e.dt;return Math.abs(u)<e.opts.precision&&Math.abs(l)<e.opts.precision?r:(e.settled=!1,J(t)?new Date(t.getTime()+u):t+u)}else{if(Array.isArray(t))return t.map((l,a)=>V(e,s[a],t[a],r[a]));if(typeof t=="object"){const l={};for(const a in t)l[a]=V(e,s[a],t[a],r[a]);return l}else throw new Error(`Cannot spring ${typeof t} values`)}}function ve(e,s={}){const t=ue(e),{stiffness:r=.15,damping:l=.8,precision:a=.01}=s;let c,i,f,u=e,M=e,S=1,k=0,y=!1;function j(h,p={}){M=h;const T=f={};if(e==null||p.hard||x.stiffness>=1&&x.damping>=1)return y=!0,c=z(),u=h,t.set(e=M),Promise.resolve();if(p.soft){const w=p.soft===!0?.5:+p.soft;k=1/(w*60),S=0}return i||(c=z(),y=!1,i=ee(w=>{if(y)return y=!1,i=null,!1;S=Math.min(S+k,1);const E={inv_mass:S,opts:x,settled:!0,dt:(w-c)*60/1e3},b=V(E,u,e,M);return c=w,u=e,t.set(e=b),E.settled&&(i=null),!E.settled})),new Promise(w=>{i.promise.then(()=>{T===f&&w()})})}const x={set:j,update:(h,p)=>j(h(M,e),p),subscribe:t.subscribe,stiffness:r,damping:l,precision:a};return x}function pe(e){let s,t,r,l,a,c,i,f,u=Math.floor(e[1]+1)+"",M,S,k,y=Math.floor(e[1])+"",j,x,h,p,T,w,E;return{c(){s=m("div"),t=m("button"),r=A("svg"),l=A("path"),a=N(),c=m("div"),i=m("div"),f=m("strong"),M=G(u),S=N(),k=m("strong"),j=G(y),x=N(),h=m("button"),p=A("svg"),T=A("path"),this.h()},l(b){s=_(b,"DIV",{class:!0});var d=g(s);t=_(d,"BUTTON",{"aria-label":!0,class:!0});var I=g(t);r=H(I,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=g(r);l=H(B,"path",{d:!0,class:!0}),g(l).forEach(v),B.forEach(v),I.forEach(v),a=$(d),c=_(d,"DIV",{class:!0});var O=g(c);i=_(O,"DIV",{class:!0,style:!0});var R=g(i);f=_(R,"STRONG",{class:!0,"aria-hidden":!0});var C=g(f);M=U(C,u),C.forEach(v),S=$(R),k=_(R,"STRONG",{class:!0});var D=g(k);j=U(D,y),D.forEach(v),R.forEach(v),O.forEach(v),x=$(d),h=_(d,"BUTTON",{"aria-label":!0,class:!0});var q=g(h);p=H(q,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var K=g(p);T=H(K,"path",{d:!0,class:!0}),g(T).forEach(v),K.forEach(v),q.forEach(v),d.forEach(v),this.h()},h(){n(l,"d","M0,0.5 L1,0.5"),n(l,"class","svelte-sx9eo4"),n(r,"aria-hidden","true"),n(r,"viewBox","0 0 1 1"),n(r,"class","svelte-sx9eo4"),n(t,"aria-label","Decrease the counter by one"),n(t,"class","svelte-sx9eo4"),n(f,"class","hidden svelte-sx9eo4"),n(f,"aria-hidden","true"),n(k,"class","svelte-sx9eo4"),n(i,"class","counter-digits svelte-sx9eo4"),Q(i,"transform","translate(0, "+100*e[2]+"%)"),n(c,"class","counter-viewport svelte-sx9eo4"),n(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(T,"class","svelte-sx9eo4"),n(p,"aria-hidden","true"),n(p,"viewBox","0 0 1 1"),n(p,"class","svelte-sx9eo4"),n(h,"aria-label","Increase the counter by one"),n(h,"class","svelte-sx9eo4"),n(s,"class","counter svelte-sx9eo4")},m(b,d){L(b,s,d),o(s,t),o(t,r),o(r,l),o(s,a),o(s,c),o(c,i),o(i,f),o(f,M),o(i,S),o(i,k),o(k,j),o(s,x),o(s,h),o(h,p),o(p,T),w||(E=[W(t,"click",e[4]),W(h,"click",e[5])],w=!0)},p(b,[d]){d&2&&u!==(u=Math.floor(b[1]+1)+"")&&F(M,u),d&2&&y!==(y=Math.floor(b[1])+"")&&F(j,y),d&4&&Q(i,"transform","translate(0, "+100*b[2]+"%)")},i:P,o:P,d(b){b&&v(s),w=!1,te(E)}}}function fe(e,s){return(e%s+s)%s}function he(e,s,t){let r,l,a=0;const c=ve();se(e,c,u=>t(1,l=u));const i=()=>t(0,a-=1),f=()=>t(0,a+=1);return e.$$.update=()=>{e.$$.dirty&1&&c.set(a),e.$$.dirty&2&&t(2,r=fe(l,1))},[a,l,r,c,i,f]}class ge extends X{constructor(s){super(),Y(this,s,he,pe,Z,{})}}function me(e){let s,t,r,l,a,c,i,f,u,M,S,k,y,j,x,h,p,T,w,E,b;return E=new ge({}),{c(){s=m("meta"),t=N(),r=m("section"),l=m("h1"),a=m("span"),c=m("picture"),i=m("source"),f=N(),u=m("img"),S=G(`

		to your new`),k=m("br"),y=G("SvelteKit app"),j=N(),x=m("h2"),h=G("try editing "),p=m("strong"),T=G("src/routes/index.svelte"),w=N(),oe(E.$$.fragment),this.h()},l(d){const I=re('[data-svelte="svelte-t32ptj"]',document.head);s=_(I,"META",{name:!0,content:!0}),I.forEach(v),t=$(d),r=_(d,"SECTION",{class:!0});var B=g(r);l=_(B,"H1",{class:!0});var O=g(l);a=_(O,"SPAN",{class:!0});var R=g(a);c=_(R,"PICTURE",{});var C=g(c);i=_(C,"SOURCE",{srcset:!0,type:!0}),f=$(C),u=_(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(v),R.forEach(v),S=U(O,`

		to your new`),k=_(O,"BR",{}),y=U(O,"SvelteKit app"),O.forEach(v),j=$(B),x=_(B,"H2",{});var D=g(x);h=U(D,"try editing "),p=_(D,"STRONG",{});var q=g(p);T=U(q,"src/routes/index.svelte"),q.forEach(v),D.forEach(v),w=$(B),ne(E.$$.fragment,B),B.forEach(v),this.h()},h(){document.title="Home",n(s,"name","description"),n(s,"content","Svelte demo app"),n(i,"srcset","svelte-welcome.webp"),n(i,"type","image/webp"),le(u.src,M="svelte-welcome.png")||n(u,"src",M),n(u,"alt","Welcome"),n(u,"class","svelte-1egtvge"),n(a,"class","welcome svelte-1egtvge"),n(l,"class","svelte-1egtvge"),n(r,"class","svelte-1egtvge")},m(d,I){o(document.head,s),L(d,t,I),L(d,r,I),o(r,l),o(l,a),o(a,c),o(c,i),o(c,f),o(c,u),o(l,S),o(l,k),o(l,y),o(r,j),o(r,x),o(x,h),o(x,p),o(p,T),o(r,w),ae(E,r,null),b=!0},p:P,i(d){b||(ie(E.$$.fragment,d),b=!0)},o(d){ce(E.$$.fragment,d),b=!1},d(d){v(s),d&&v(t),d&&v(r),de(E)}}}const xe=!0;class ye extends X{constructor(s){super(),Y(this,s,null,me,Z,{})}}export{ye as default,xe as prerender};
