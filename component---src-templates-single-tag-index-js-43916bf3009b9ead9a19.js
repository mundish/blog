(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(190),l=a(194),u=a(195),s=a(197);t.default=function(e){var t=e.pageContext,a=t.posts,n=t.tag,o="untagged"===n?"Untagged posts":r.a.createElement(r.a.Fragment,null,"Posts tagged with ",r.a.createElement("em",null,n));return r.a.createElement(l.a,null,r.a.createElement("div",{className:"mb-4"},r.a.createElement("h1",{className:"text-center text-2xl mb-4"},o),r.a.createElement("ul",null,a.map(function(e,t){var a=e.frontmatter,n=a.title,c=a.date,l=a.excerpt,u=a.path;return r.a.createElement(s.a,{key:t,title:n,date:c,excerpt:l,path:u})}))),r.a.createElement("div",{className:"text-center p-4"},r.a.createElement(c.a,{className:"underline hover:no-underline",to:"/tags"},"Browse all tags")),r.a.createElement(u.a,null))}},190:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),c=a(60),l=a.n(c);a.d(t,"a",function(){return l.a});a(191),a(9).default.enqueue;var u=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&c(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||c,staticQueryData:e})})}},191:function(e,t,a){var n;e.exports=(n=a(192))&&n.default||n},192:function(e,t,a){"use strict";a.r(t);a(47),a(16),a(13),a(14),a(7),a(20);var n=a(0),r=a.n(n),c=a(86);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){u(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},193:function(e){e.exports={data:{site:{siteMetadata:{title:"mundi.sh_",description:"musings"}}}}},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(196),l=a.n(c),u=a(193),s=a(190),o=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.description;return r.a.createElement("div",{className:"mb-8"},r.a.createElement(s.a,{to:"/"},r.a.createElement("h2",{className:"text-3xl text-center font-bold"},a)),r.a.createElement("p",{className:"text-center"},n))},i=function(){return r.a.createElement(s.b,{query:"3978990474",render:function(e){return r.a.createElement(o,{data:e})},data:u})};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"mundi.sh_"}),r.a.createElement("div",{className:"m-0 max-w-2xl mx-auto p-5 min-h-screen flex flex-col"},r.a.createElement(i,null),r.a.createElement("div",{className:"flex-grow"},t),r.a.createElement("footer",{className:"text-center pt-4 mt-8 border-t text-sm"},"Thanks for reading")))}},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(190);t.a=function(){return r.a.createElement("div",{className:"text-center border-t pt-4"},r.a.createElement(c.a,{className:"underline hover:no-underline",to:"/"},"Back to start"))}},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(190);t.a=function(e){var t=e.title,a=e.date,n=e.excerpt,l=e.path;return r.a.createElement(c.a,{to:l},r.a.createElement("section",{className:"p-5 mb-5"},r.a.createElement("header",null,r.a.createElement("h3",{className:"text-xl font-bold"},t),r.a.createElement("span",{className:"font-serif text-sm"},a)),r.a.createElement("p",{className:"font-serif"},n)))}}}]);
//# sourceMappingURL=component---src-templates-single-tag-index-js-43916bf3009b9ead9a19.js.map