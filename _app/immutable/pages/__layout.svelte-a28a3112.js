import{F as W,S as D,i as K,s as L,e as A,k as B,t as S,c as m,a as v,d as p,m as x,h as V,G as R,b as e,H as k,g as Y,I as o,n as I,J as Z,f as T,K as P,x as z,y as X,z as q,L as $,M as ee,N as te,r as M,p as H,C as N}from"../chunks/index-f5b05074.js";const ae=()=>{const c=W("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session,updated:c.updated}},re={subscribe(c){return ae().page.subscribe(c)}};var se="/_app/immutable/assets/logo-140d8fa6.png";function oe(c){let t,l,a,w,h,r,f,y,b,u,n,i,s,g,_,d,C;return{c(){t=A("header"),l=A("a"),a=A("img"),h=B(),r=A("nav"),f=A("a"),y=S("About"),b=B(),u=A("a"),n=S("Experience & Skill"),i=B(),s=A("a"),g=S("Projects"),_=B(),d=A("a"),C=S("Get in Touch"),this.h()},l(F){t=m(F,"HEADER",{class:!0});var U=v(t);l=m(U,"A",{href:!0});var J=v(l);a=m(J,"IMG",{src:!0,width:!0,height:!0,alt:!0}),J.forEach(p),h=x(U),r=m(U,"NAV",{id:!0,class:!0});var E=v(r);f=m(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var O=v(f);y=V(O,"About"),O.forEach(p),b=x(E),u=m(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var j=v(u);n=V(j,"Experience & Skill"),j.forEach(p),i=x(E),s=m(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var G=v(s);g=V(G,"Projects"),G.forEach(p),_=x(E),d=m(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=v(d);C=V(Q,"Get in Touch"),Q.forEach(p),E.forEach(p),U.forEach(p),this.h()},h(){R(a.src,w=se)||e(a,"src",w),e(a,"width","100px"),e(a,"height","100px"),e(a,"alt","logo"),e(l,"href","/"),e(f,"sveltekit:prefetch",""),e(f,"href","/about"),e(f,"class","svelte-19ec3aw"),k(f,"active",c[0].url.pathname==="/about"),e(u,"sveltekit:prefetch",""),e(u,"href","/skills"),e(u,"class","svelte-19ec3aw"),k(u,"active",c[0].url.pathname==="/skills"),e(s,"sveltekit:prefetch",""),e(s,"href","/projects"),e(s,"class","svelte-19ec3aw"),k(s,"active",c[0].url.pathname==="/projects"),e(d,"sveltekit:prefetch",""),e(d,"href","/contact"),e(d,"class","svelte-19ec3aw"),k(d,"active",c[0].url.pathname==="/contact"),e(r,"id","fancy-header"),e(r,"class","fancy-nav svelte-19ec3aw"),e(t,"class","fancy-header svelte-19ec3aw")},m(F,U){Y(F,t,U),o(t,l),o(l,a),o(t,h),o(t,r),o(r,f),o(f,y),o(r,b),o(r,u),o(u,n),o(r,i),o(r,s),o(s,g),o(r,_),o(r,d),o(d,C)},p(F,[U]){U&1&&k(f,"active",F[0].url.pathname==="/about"),U&1&&k(u,"active",F[0].url.pathname==="/skills"),U&1&&k(s,"active",F[0].url.pathname==="/projects"),U&1&&k(d,"active",F[0].url.pathname==="/contact")},i:I,o:I,d(F){F&&p(t)}}}function ne(c,t,l){let a;return Z(c,re,w=>l(0,a=w)),[a]}class le extends D{constructor(t){super(),K(this,t,ne,oe,L,{})}}var ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANDSURBVHgBtVZfWtpAEJ9Z9KPtkzco3gCf+iVAS04gnqBwgtYTCCeQnsBwAu0JiOULaX0BTyBH8EWFSHY6E4kC2SCK/l6SzGT3tzv/EdZELwiqOcR90lAF0gVA3IkVRNeEOFQKh1Otz7/a9tk6++Eq5WAw2Lm9Hf/k3X88Ej2/4SiKdGc6/dR2nL3rFf+ZEd+Q4IQACvAKyAEQVdOyvnRMemUS+n7QVATd15IKZK0m7fZ6fhPMB0uTsvQI3hA60q1KpdTMJH4P0izyR2LxqZh3/mdCqCvCIgHVYE2zE0e5QuVqpCESuIvkU6dSqXgLxP1+cDXvU373yrblJN9B8O+IfVbnFbJwtMRW5HAp8PMsDD/8SqLZ7/8dsLI4d8uRbVu78r4V/+AH9eVAQqCFVODobPGjBS8B35pvUJy7TIG5jkolqxVHNRr8SrBe3q7kNbiHueryVOJbY9oQbUxMlD68cPV6varKEe6bFt2HeAAbggPs0CRXauubYj8UDafyHMcawYaoWJaHD8G4COZUREY/ePBWIBymhViU4CqkxISZxf2lmFJ0aRAXjLWacPPASpBT6rNJrqSfLguR8M2Is/bi4EqbVUM64DZgTgcv0ZDLatr5nPhV3/c3Jg+CoMDBW03tjzBSfD3PtIhQHcOG4LQ8MckRlIdyKk1wlbHS5aJ/uGqEMUFGppubuzZb87tJH05gN+5O/SDoJiaRVogy0M1qajLCsOfPLWt1UYkvoWVd9oyWdL24O0XcdTivqjERUS0MPza283eXCHgstZV4hBEdt7lhOMk7yxbodgc7+fx4oKUY4ey4WcCHHh3n8WJpw9p2fnxatu02aeosrgHXZHaRsVVceBZ0VrasziOxYDKGRpLTEtXSQcplux6RbsSnJGhOJvQ7a8t7c4V6ouS9wwkezl3iCX/6/VoO8HSm4lyjg+f8msA0Os0jAjqYH/ZNU6aMNycz5YiDzePqM5QyGo6hk9W1VhFzsagvz9epWs1jiSunAyGVBkLAYxG1xdT5PBnrbhbEvDxCVU1DvbFJiEk41xxYmhJfRMppw8PEnm3b5yb9VtbCmUkb/YsLl+4jMX89l8tlFhIlumkUE3LnaZYyCBP8B0TNlCzV4+8SAAAAAElFTkSuQmCC",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMQSURBVHgBvVfdUdtAEN49g8HkAaWCmAoSnoKlMGNXkBJwKkhcAaYCoALsCoAKbA9ISp4wFUTpwHnIjH9vsyt0stCPcTJj1mPp7tPtfrurvR8hJMR1vQtA/BwDRBb3LfgfIRqx7sh09UJ3j4+dtumjadzfex1UeAKbFIKO49S+SFPJxXX99sZJRRCa9553HjaZtMnAFbyikKYWep7/kwCq8JrC71+9OqkIF6wKqy8rQYFKEQ4FdvJ1JGKlShfZB9Dhy82/4EV2FKpOBge82KrVPp553neLgL4Re4IMIqpHovktDxhJJRpcKxgoTWmcHdGXWmvOYMnSpJuh6QJcHLGdo7NwOtn2Ucuxa/hmr3IgOkSLKya/1nreTeJMei04N28E/+TYb9mZboT1EHEoY9M4k/8yuHA9ORYJR30uUcMGRbJmiLcMSMjLI+UN53fKkYDm6keoQ8EskLRLGtnOKBrbzIwRjkhiYk6TxcopD6lu2/bA9Hs9v7qzg1+TBozMJpVWo3EYV7brupf8ch5S3mWJk+BTH9q2syQVaTRqAd9asIY4jjP0/R9tLqr20uRyw1G5Wpy26RS6sEI4og/yXzVmPC5fFs3vfGKu2ii6QlKpVvmvIg9Tr/BmbWJS0IeXSGWfDvfq1eQLrQdrE8/GkDu413uweDE4Ialy4yS3BYMi4uneehFzZQ+L0iypk3nIBbN8/wgdMzeLdBCzGdzKeIKqDy/IYqr6pbI+xO3t/emf7ceXxiOoPoGu5xPL+Sicxzo3NeEppYT74fpMOJoT/IbZDErl2YHr++/CdWBBIz7anKV156AH6dQuV66o7CeTSm4EnK4TPjlUw7H8K2HCFIX60hAbWeLx7rC8MxYbgcFibYlC7snVJxntWgcGjvruzm2nYWPTcDwjhmjD5tNmvFH4vl99OvLCKawpqqROOfVXomuwhM0g9tE07ny/zuegHmxQkms/Jh+4fPCDzZ3BAt7DD0zn2XSaTqBRruB7rhRZiaoYOcF1E93JwoIvi7Da4y8Huesg+pIIuD6C2Xj3Njn+LyXLlzrLxQ4dAAAAAElFTkSuQmCC",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAzCAYAAADVY1sUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM5SURBVHgB7ZhdUhpBEMd7BiT4FI6AN8CnuEAlcgK5geQE4gk0JwieIOYGcALUcnd9g5zAvUF4sHDdsNPpBjVoxMzOjlbKmt8L1M7nf3u7p3sAHA6Hw+FwOP47BFhkNBpVruK4VhBiBxVsA6oqCFGZNyJOUIixEBCliIOP9XofLGJFCAuYTuMu7XbvfuP/XjhSgH0SfeR5XgQ5yS3k/Dzo0ls+0BXwxAYiIeSh5334DjnIJcT3gx4J2AMLIGCvWa/vgyHGQsgSx0KKXbAJwnGj4X0GAyQYwJawLoIR0DkPgq9gQGaL+H7YoVHf4AVBhfvNZr2XZUwmIWEYVhFhiADVBwtTaJVCHtMvOTy2TR1/acJJkqxvtFqbE90hRciAUsDWqD5+/isRm63WVsT/g+BizI4LeaAXUSrFHES+6A7J5CMUZlf4Rfn+zWFRnoIVsDscjrQtqy3kLAjajz+pO4rFaZd/+WCE2ewAbEBWKRavarrdtYVw2rFykoI88IMQp9fxT9pBGyxRKKzt6PbV9hGKClVc0SYFHKZ0Qs/7cY5FYZQcto9S9BftoqJSdShAkO+ogVhbe5/OZjUJgi1ZXbWmQrUNtoVQSKyxkzzZhnhCp/LcN858XxRAdmj346bnzdMOjnYUEAat1oOc6nQ4DAelEo5WRTnxjMjH6Dt7jpDKSSGLYEHLz/mZlIWejTWNTnYTOBtQCJdBEF4uR6MZKCtRTl8IHVJgyHzjt8klR753727uw3jx1rfyrpnh05IRGFIuxw8+ERSo9clwIQaaaAshxzuBV4aimn0hqcABvDKI6YluX20hs7g8zuMnBkSNRkP75WkL4Uz02VBpGyqysnTPlP3GcemoVLru/h3fZZsOwg3+V5DyE4cmsl6NnnX4Gd2aVMRyxfBc24IoSSBTDZ+5sKIKrksLG1VxuiClOHdZgS6ZD0RKRXqLnOll4LmziliMM+RNXD4wVFN3bFqG5zIVweTKter1rf0UFS8egSG39X6H54IcWLkypXS8Wi7LXaofOqCZerMAtkKSlI+yXDKswuolNuNfXOwsiiusKaphxJ9QHdFyk0Wqo/o3N+s/bAhwOBwOh8PxFvkNlzZHhO+Pr5oAAAAASUVORK5CYII=";function ue(c){let t,l,a,w,h,r,f,y,b,u,n,i;return{c(){t=A("div"),l=A("a"),a=A("img"),h=B(),r=A("a"),f=A("img"),b=B(),u=A("a"),n=A("img"),this.h()},l(s){t=m(s,"DIV",{class:!0});var g=v(t);l=m(g,"A",{href:!0,target:!0,rel:!0});var _=v(l);a=m(_,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0}),_.forEach(p),h=x(g),r=m(g,"A",{href:!0,target:!0,rel:!0});var d=v(r);f=m(d,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0}),d.forEach(p),b=x(g),u=m(g,"A",{href:!0,target:!0,rel:!0});var C=v(u);n=m(C,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0}),C.forEach(p),g.forEach(p),this.h()},h(){R(a.src,w=ie)||e(a,"src",w),e(a,"width","30px"),e(a,"height","30px"),e(a,"alt","GitHub"),e(a,"style","padding: 20px 0 30px; 0"),e(l,"href","https://github.com/arffdev"),e(l,"target","_blank"),e(l,"rel","noopener noreferrer"),R(f.src,y=ce)||e(f,"src",y),e(f,"width","30px"),e(f,"height","30px"),e(f,"alt","itch.io"),T(f,"padding-bottom","20px"),e(r,"href","https://pugdev.itch.io/"),e(r,"target","_blank"),e(r,"rel","noopener noreferrer"),R(n.src,i=fe)||e(n,"src",i),e(n,"width","50px"),e(n,"height","50px"),e(n,"alt","LinkedIn"),T(n,"padding-bottom","30px"),e(u,"href","https://www.linkedin.com/in/coby-arff-12a675139/"),e(u,"target","_blank"),e(u,"rel","noopener noreferrer"),e(t,"class","side-nav svelte-1hsmxsw")},m(s,g){Y(s,t,g),o(t,l),o(l,a),o(t,h),o(t,r),o(r,f),o(t,b),o(t,u),o(u,n)},p:I,i:I,o:I,d(s){s&&p(t)}}}class Ae extends D{constructor(t){super(),K(this,t,null,ue,L,{})}}function me(c){let t,l,a,w,h,r,f,y,b;a=new le({}),r=new Ae({});const u=c[1].default,n=P(u,c,c[0],null);return{c(){t=A("main"),l=A("div"),z(a.$$.fragment),w=B(),h=A("div"),z(r.$$.fragment),f=B(),y=A("div"),n&&n.c(),this.h()},l(i){t=m(i,"MAIN",{class:!0});var s=v(t);l=m(s,"DIV",{class:!0});var g=v(l);X(a.$$.fragment,g),g.forEach(p),w=x(s),h=m(s,"DIV",{class:!0});var _=v(h);X(r.$$.fragment,_),_.forEach(p),f=x(s),y=m(s,"DIV",{class:!0});var d=v(y);n&&n.l(d),d.forEach(p),s.forEach(p),this.h()},h(){e(l,"class","topbar svelte-1kw0o3r"),e(h,"class","sidebar svelte-1kw0o3r"),e(y,"class","content svelte-1kw0o3r"),e(t,"class","svelte-1kw0o3r")},m(i,s){Y(i,t,s),o(t,l),q(a,l,null),o(t,w),o(t,h),q(r,h,null),o(t,f),o(t,y),n&&n.m(y,null),b=!0},p(i,[s]){n&&n.p&&(!b||s&1)&&$(n,u,i,i[0],b?te(u,i[0],s,null):ee(i[0]),null)},i(i){b||(M(a.$$.fragment,i),M(r.$$.fragment,i),M(n,i),b=!0)},o(i){H(a.$$.fragment,i),H(r.$$.fragment,i),H(n,i),b=!1},d(i){i&&p(t),N(a),N(r),n&&n.d(i)}}}function pe(c,t,l){let{$$slots:a={},$$scope:w}=t;return c.$$set=h=>{"$$scope"in h&&l(0,w=h.$$scope)},[w,a]}class de extends D{constructor(t){super(),K(this,t,pe,me,L,{})}}export{de as default};