(this.webpackJsonphw=this.webpackJsonphw||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s=n(0),b=n.n(s),l=n(10),j=n.n(l),u=n(3),d=(n(31),n(4)),O=Object(d.b)("addToCart"),m=Object(d.b)("removeFromCartByID"),f=Object(d.b)("getAllContactsFromLocaleStorage"),x=Object(d.b)("changeFilter"),p=n(14),h=n(37),g=n(5),v=n(6),y=v.a.form(c||(c=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  input,\n  button {\n    margin: 5px 0;\n  }\n"]))),C=n(1),w=function(e){var t=e.contacts,n=Object(s.useState)(""),c=Object(p.a)(n,2),r=c[0],a=c[1],i=Object(s.useState)(""),o=Object(p.a)(i,2),b=o[0],l=o[1],j=Object(u.c)(),d=function(e){e.preventDefault(),m({name:r,number:b,id:Object(h.a)()}),a(""),l("")},m=function(e){t.some((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()}))?alert("".concat(e.name," is already in contacts.")):j(O(e))},f=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}};return Object(C.jsxs)(y,{onSubmit:d,method:"post",children:[Object(C.jsxs)("label",{children:["Name",Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f,value:r})]}),Object(C.jsxs)("label",{children:["Number",Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:f,value:b})]}),r&&Object(C.jsx)("button",{type:"submit",onClick:d,children:"Add contact"})]})},A=v.a.ul(r||(r=Object(g.a)(["\n  list-style: none;\n\n  .wrapper {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .text {\n    margin: 5px 0;\n  }\n\n  button {\n    height: 25px;\n    margin-right: 20px;\n  }\n"]))),S=function(){var e=Object(u.d)((function(e){return e.contacts.items})),t=Object(u.d)((function(e){return e.contacts.filter})),n=Object(u.c)(),c=function(e){return n(m(e.target.id))};return Object(C.jsx)(A,{children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var t=e.name,n=e.number,r=e.id;return Object(C.jsx)("li",{children:Object(C.jsxs)("div",{className:"wrapper",children:[Object(C.jsxs)("p",{className:"text",children:[t," ",n]}),Object(C.jsx)("button",{type:"button",id:r,onClick:c,children:"delete"})]})},r)}))})},z=v.a.div(a||(a=Object(g.a)(["\n  text-align: center;\n"]))),k=Object(u.b)((function(e){return{filter:e.contacts.filter}}),{changeFilter:x})((function(e){var t=e.filter,n=e.changeFilter;return Object(C.jsx)(z,{children:Object(C.jsxs)("label",{children:["Find contacts by name",Object(C.jsx)("br",{}),Object(C.jsx)("input",{value:t,onChange:function(e){var t=e.target.value;n(t)},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})})),F=v.a.section(i||(i=Object(g.a)(["\n  margin-top: 10px;\n  margin-left: 10px;\n  border: 2px solid lightgrey;\n  border-radius: 10px;\n  width: 50%;\n\n  .title {\n    text-align: center;\n  }\n"]))),L=function(e){var t=e.title,n=e.children;return Object(C.jsxs)(F,{children:[Object(C.jsx)("h2",{className:"title",children:t}),n]})},N=JSON.parse(window.localStorage.getItem("contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],J=function(){var e=Object(u.d)((function(e){return e.contacts.items})),t=Object(u.c)();return Object(s.useEffect)((function(){e.length&&window.localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(s.useEffect)((function(){t(f(N))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(L,{title:"Phonebook",children:Object(C.jsx)(w,{contacts:e})}),Object(C.jsxs)(L,{title:"Contacts",children:[Object(C.jsx)(k,{}),Object(C.jsx)(S,{})]})]})},Z=n(2),B=n(7),E=n(20),I=Object(d.c)([],(o={},Object(B.a)(o,O,(function(e,t){var n=t.payload;return[].concat(Object(E.a)(e),[n])})),Object(B.a)(o,m,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(B.a)(o,f,(function(e,t){return t.payload})),o)),q=Object(d.c)("",Object(B.a)({},x,(function(e,t){return t.payload}))),M=Object(Z.b)({items:I,filter:q}),D=Object(Z.b)({contacts:M}),$=Object(d.a)({reducer:D});j.a.render(Object(C.jsx)(u.a,{store:$,children:Object(C.jsx)(b.a.StrictMode,{children:Object(C.jsx)(J,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.73707d1d.chunk.js.map