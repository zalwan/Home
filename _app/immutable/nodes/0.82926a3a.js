import{s as E,n as m,c as A,u as C,g as D,d as I}from"../chunks/scheduler.e108d1fd.js";import{S as H,i as M,g as d,h as $,x as N,k as v,a as O,f as p,m as y,j as x,n as b,y as _,r as T,s as j,u as k,c as F,v as L,d as g,t as w,w as z}from"../chunks/index.5ae4157e.js";import{b as h}from"../chunks/paths.2113c126.js";import{t as V}from"../chunks/config.80a3543c.js";const q=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));function P(l){let e,n=`<ul class="navbar-menu"><li><a href="${h}/" class="navbar-item"><iconify-icon icon="system-uicons:mail-remove"></iconify-icon> <p>Home</p></a></li> <li><a href="${h}/showcase" class="navbar-item"><iconify-icon icon="system-uicons:briefcase"></iconify-icon> <p>showcase</p></a></li> <li><a href="${h}/blog" class="navbar-item"><iconify-icon icon="system-uicons:document-stack"></iconify-icon> <p>blog</p></a></li> <li><a href="${h}/about" class="navbar-item"><iconify-icon icon="system-uicons:user-male"></iconify-icon> <p>about</p></a></li></ul> <div class="navbar-menu"><button class="navbar-toggle"><iconify-icon icon="system-uicons:sun"></iconify-icon></button> <button class="button-hire"><iconify-icon icon="system-uicons:check-circle"></iconify-icon> <p>hire me</p></button></div>`;return{c(){e=d("nav"),e.innerHTML=n,this.h()},l(s){e=$(s,"NAV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-nwmhza"&&(e.innerHTML=n),this.h()},h(){v(e,"class","navbar")},m(s,a){O(s,e,a)},p:m,i:m,o:m,d(s){s&&p(e)}}}class R extends H{constructor(e){super(),M(this,e,null,P,E,{})}}function Y(l){let e,n=V+"",s,a,f=new Date().getFullYear()+"",c;return{c(){e=d("footer"),s=y(n),a=y(" © "),c=y(f),this.h()},l(i){e=$(i,"FOOTER",{class:!0});var u=x(e);s=b(u,n),a=b(u," © "),c=b(u,f),u.forEach(p),this.h()},h(){v(e,"class","text-white")},m(i,u){O(i,e,u),_(e,s),_(e,a),_(e,c)},p:m,i:m,o:m,d(i){i&&p(e)}}}class B extends H{constructor(e){super(),M(this,e,null,Y,E,{})}}function G(l){let e,n,s,a,f,c,i;n=new R({});const u=l[1].default,o=A(u,l,l[0],null);return c=new B({}),{c(){e=d("div"),T(n.$$.fragment),s=j(),a=d("main"),o&&o.c(),f=j(),T(c.$$.fragment),this.h()},l(t){e=$(t,"DIV",{class:!0});var r=x(e);k(n.$$.fragment,r),s=F(r),a=$(r,"MAIN",{class:!0});var S=x(a);o&&o.l(S),S.forEach(p),f=F(r),k(c.$$.fragment,r),r.forEach(p),this.h()},h(){v(a,"class",""),v(e,"class","page-container")},m(t,r){O(t,e,r),L(n,e,null),_(e,s),_(e,a),o&&o.m(a,null),_(e,f),L(c,e,null),i=!0},p(t,[r]){o&&o.p&&(!i||r&1)&&C(o,u,t,t[0],i?I(u,t[0],r,null):D(t[0]),null)},i(t){i||(g(n.$$.fragment,t),g(o,t),g(c.$$.fragment,t),i=!0)},o(t){w(n.$$.fragment,t),w(o,t),w(c.$$.fragment,t),i=!1},d(t){t&&p(e),z(n),o&&o.d(t),z(c)}}}function J(l,e,n){let{$$slots:s={},$$scope:a}=e;return l.$$set=f=>{"$$scope"in f&&n(0,a=f.$$scope)},[a,s]}class Z extends H{constructor(e){super(),M(this,e,J,G,E,{})}}export{Z as component,X as universal};
