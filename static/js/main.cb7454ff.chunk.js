(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"Filter_input__LSwXe"}},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(9),s=n.n(o),u=n(5),i=n(3),l=n(19),b=n(2),j=n.n(b);var m=function(t){var e=t.contacts,n=t.onSubmit,r=Object(c.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],b=Object(c.useState)(""),m=Object(i.a)(b,2),d=m[0],f=m[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l(""),f(""),function(){var t=e.reduce((function(t,e){return[].concat(Object(u.a)(t),[e.name])}),[]),n=e.reduce((function(t,e){return[].concat(Object(u.a)(t),[e.number])}),[]);(t.includes(s)||n.includes(d))&&alert("".concat(s).concat(d," is already in contacts")),""!==s&&""!==d||alert("Enter all data, please")}()||n(s,d)},className:j.a.form,children:[Object(a.jsxs)("label",{className:j.a.label,children:["Name:",Object(a.jsx)("input",{type:"text",name:"name",value:s,placeholder:"Jack Sparrow",onChange:function(t){return l(t.currentTarget.value)},className:j.a.input})]}),Object(a.jsxs)("label",{className:j.a.label,children:["Number:",Object(a.jsx)("input",{type:"tel",name:"number",value:d,placeholder:"111-11-11",onChange:function(t){return f(t.currentTarget.value)},className:j.a.input})]}),Object(a.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})},d=n(10),f=n.n(d);var O=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name:",Object(a.jsx)("input",{className:f.a.input,type:"text",value:e,onChange:n})]})},h=n(6),p=n.n(h);var x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:p.a.item,children:[Object(a.jsxs)("p",{className:p.a.text,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:p.a.button,children:"Delete"})]},e)}))})},_=[{id:"id-1",name:"Elon Mask",number:"10664888778"},{id:"id-2",name:"Lena Kharchenko",number:"380664969795"},{id:"id-3",name:"Bill Gates",number:"10662475771"},{id:"id-4",name:"Mark Zuckerberg ",number:"10625884318"}];var v=function(){var t=Object(c.useState)(_),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),b=s[0],j=s[1],d=Object(c.useRef)(!0);Object(c.useEffect)((function(){if(d.current){var t=JSON.parse(localStorage.getItem("contacts"));return t&&r(t),void(d.current=!1)}localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var f=function(){var t=b.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),h=n.length;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(m,{onSubmit:function(t,e){var a={id:Object(l.a)(),name:t,number:e};r([a].concat(Object(u.a)(n)))},contacts:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e: ",h]}),Object(a.jsx)(O,{value:b,onChange:function(t){return j(t.currentTarget.value)}}),Object(a.jsx)(x,{contacts:f,onDeleteContact:function(t){r(n.filter((function(e){return e.id!==t})))}})]})};n(16);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__jhsrf",label:"ContactForm_label__383NX",input:"ContactForm_input__1Xf8U",button:"ContactForm_button__2qAPs"}},6:function(t,e,n){t.exports={list:"ContactList_list__1pho2",item:"ContactList_item__3OXWy",text:"ContactList_text__1fvuO",span:"ContactList_span__2PQQx",button:"ContactList_button__u0C51"}}},[[17,1,2]]]);
//# sourceMappingURL=main.cb7454ff.chunk.js.map