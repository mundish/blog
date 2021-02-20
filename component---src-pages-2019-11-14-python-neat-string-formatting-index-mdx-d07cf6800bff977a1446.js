(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TV9A:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),o={path:"/python-neat-string-formatting",date:"2019-11-14",title:"Python: Neat string formatting",tags:["python"],excerpt:"In my efforts to learn python, I've been spending some time on Codewars doing katas. Apart from being a good place to come across problems to solve, Codewars also lists top voted solutions for katas which are a great source for learning some new tricks."},m={_frontmatter:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)("wrapper",Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"In my efforts to learn python, I've been spending some time on ",Object(r.mdx)("a",{parentName:"p",href:"https://www.codewars.com"},"Codewars")," doing katas.\nApart from being a good place to come across problems to solve,\nCodewars also lists top voted solutions for katas which are a great source for learning some new tricks."),Object(r.mdx)("br",null),"One such trick I've picked up is the following:",Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'def create_phone_number(n):\n  return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)\n\ncreate_phone_number([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])\n')),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"This function will take an array ",Object(r.mdx)("inlineCode",{parentName:"p"},"n")," consisting of 10 integers (0-9) and return them in the format ",Object(r.mdx)("em",{parentName:"p"},"(012) 345-6789"),"."),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"So how does this work?"),Object(r.mdx)("p",null,"Well, there's two (fairly basic) main concepts here: the ",Object(r.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#str.format"},Object(r.mdx)("inlineCode",{parentName:"a"},"format"),"-method"),"\nand the ",Object(r.mdx)("a",{parentName:"p",href:"https://docs.python.org/3.4/tutorial/controlflow.html#unpacking-argument-lists"},Object(r.mdx)("inlineCode",{parentName:"a"},"*"),"-operator"),"."),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"format"),"-method interpolates each of the arguments passed into the corresponding ",Object(r.mdx)("em",{parentName:"p"},"replacement field")," (",Object(r.mdx)("inlineCode",{parentName:"p"},"{}"),") in the target string."),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"In the function ",Object(r.mdx)("inlineCode",{parentName:"p"},"create_phone_number")," above, ",Object(r.mdx)("inlineCode",{parentName:"p"},"n")," is an array, which with the help of ",Object(r.mdx)("inlineCode",{parentName:"p"},"*"),' is "unpacked",\nor split into a series of single arguments passed into the function.'),Object(r.mdx)("p",null,"If you're familiar with ",Object(r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread"),"\nin JavaScript this should be familiar."),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"This is cool and all, but passing that phone number as an array feels cumbersome, don't you think?"),Object(r.mdx)("p",null,"Not a problem, since (like with ",Object(r.mdx)("em",{parentName:"p"},"spread")," ) we can unpack strings too:"),Object(r.mdx)("br",null),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'def format_phone_number(n):\n  return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)\n\nformat_phone_number("0123456789")\n')),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"That's nicer!"),Object(r.mdx)("br",null),Object(r.mdx)("p",null,"To wrap up, here's a couple of examples for other cases where this could be a suitable solution:"),Object(r.mdx)("br",null),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'def format_date(date):\n    # YYYY-MM-DD\n    return "{}{}{}{}-{}{}-{}{}".format(*date)\n\ndef format_swedish_personal_id_number(n): # YYYYMMDD-XXXX\n    return "{}{}{}{}{}{}{}{}-{}{}{}{}".format(*n)\n')))}s.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-2019-11-14-python-neat-string-formatting-index-mdx-d07cf6800bff977a1446.js.map