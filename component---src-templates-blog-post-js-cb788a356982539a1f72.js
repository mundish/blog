(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});n(17);var r=n(0),a=n.n(r),c=n(194),o=n(62),u=n(211),i=n(198),l=n(199),s="2310054428";t.default=function(e){var t=e.data.mdx,n=e.pageContext,r=t.body,s=t.frontmatter,f=s.title,p=s.date,m=n.prev,d=n.next;return a.a.createElement(i.a,null,a.a.createElement("header",{className:"mb-4"},a.a.createElement("h1",{className:"text-3xl"},f),a.a.createElement("span",{className:"font-serif text-sm"},p)),a.a.createElement("div",{className:"mb-4 font-serif"},a.a.createElement(o.MDXProvider,{components:{a:function(e){return a.a.createElement("a",Object.assign({className:"underline hover:no-underline"},e))}}},a.a.createElement(u.MDXRenderer,null,r))),a.a.createElement("nav",null,a.a.createElement("div",{className:"flex justify-between"},a.a.createElement("div",null,m&&a.a.createElement(c.a,{to:m.frontmatter.path},"« ",m.frontmatter.title)),a.a.createElement("div",null,d&&a.a.createElement(c.a,{to:d.frontmatter.path},d.frontmatter.title," »"))),a.a.createElement(l.a,null)))}},194:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n(0),a=n.n(r),c=n(60),o=n.n(c);n.d(t,"a",function(){return o.a});n(195),n(9).default.enqueue;var u=a.a.createContext({});function i(e){var t=e.staticQueryData,n=e.data,r=e.query,c=e.render,o=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&c(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,n=e.query,r=e.render,c=e.children;return a.a.createElement(u.Consumer,null,function(e){return a.a.createElement(i,{data:t,query:n,render:r||c,staticQueryData:e})})}},195:function(e,t,n){var r;e.exports=(r=n(196))&&r.default||r},196:function(e,t,n){"use strict";n.r(t);n(47),n(16),n(13),n(14),n(7),n(20);var r=n(0),a=n.n(r),c=n(86);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},197:function(e){e.exports={data:{site:{siteMetadata:{title:"mundi.sh_",description:"musings"}}}}},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(200),o=n.n(c),u=n(197),i=n(194),l=function(e){var t=e.data.site.siteMetadata,n=t.title,r=t.description;return a.a.createElement("div",{className:"mb-8"},a.a.createElement(i.a,{to:"/"},a.a.createElement("h2",{className:"text-3xl text-center font-bold"},n)),a.a.createElement("p",{className:"text-center"},r))},s=function(){return a.a.createElement(i.b,{query:"3978990474",render:function(e){return a.a.createElement(l,{data:e})},data:u})};t.a=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"mundi.sh_"}),a.a.createElement("div",{className:"m-0 max-w-2xl mx-auto p-5 min-h-screen flex flex-col"},a.a.createElement(s,null),a.a.createElement("div",{className:"flex-grow"},t),a.a.createElement("footer",{className:"text-center pt-4 mt-8 border-t text-sm"},"Thanks for reading")))}},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(194);t.a=function(){return a.a.createElement("div",{className:"text-center border-t pt-4"},a.a.createElement(c.a,{className:"underline hover:no-underline",to:"/"},"Back to start"))}},203:function(e,t,n){var r=n(5),a=n(65),c=n(36),o=n(4),u=n(6),i=n(10),l=n(213),s=(n(3).Reflect||{}).construct,f=i(function(){function e(){}return!(s(function(){},[],e)instanceof e)}),p=!i(function(){s(function(){})});r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){c(e),o(t);var n=arguments.length<3?e:c(arguments[2]);if(p&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var i=n.prototype,m=a(u(i)?i:Object.prototype),d=Function.apply.call(e,m,t);return u(d)?d:m}})},211:function(e,t,n){var r=n(212);e.exports={MDXRenderer:r}},212:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(47),n(14),n(20),n(87),n(129),n(48),n(16),n(13),n(128),n(61),n(7),n(203),n(203),n(128),n(87),n(129),n(61),n(48),n(47),n(16),n(13),n(14),n(7),n(20);var l=n(0),s=n(62),f=s.useMDXComponents,p=s.mdx,m=n(110).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),i=f(n),s=m(t),d=l.useMemo(function(){if(!a)return null;var e=u({React:l,mdx:p},s),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))},[a,t]);return l.createElement(d,u({components:i},o))}},213:function(e,t,n){"use strict";var r=n(36),a=n(6),c=n(131),o=[].slice,u={};e.exports=Function.bind||function(e){var t=r(this),n=o.call(arguments,1),i=function(){var r=n.concat(o.call(arguments));return this instanceof i?function(e,t,n){if(!(t in u)){for(var r=[],a=0;a<t;a++)r[a]="a["+a+"]";u[t]=Function("F,a","return new F("+r.join(",")+")")}return u[t](e,n)}(t,r.length,r):c(t,r,e)};return a(t.prototype)&&(i.prototype=t.prototype),i}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cb788a356982539a1f72.js.map