(this["webpackJsonpapp-of-ice-and-fire"]=this["webpackJsonpapp-of-ice-and-fire"]||[]).push([[0],{28:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},88:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(15),i=s.n(a),r=(s(55),s(13)),n=(s(56),s(57),s(48)),j=s(97),o=s(103),l=s(39),h=s(44),d=s(1),m=function(e){var t=e.searchInput,s=e.setSearchInput,c=(e.fetchFilteredData,e.setSidebarExpanded),a=e.sidebarExpanded,i=e.onSubmit;return Object(d.jsxs)("header",{className:"app-header",children:[Object(d.jsx)(n.a,{className:"expand-button",variant:a?"primary":"secondary",onClick:function(){return c(!a)},children:a?"Hide filters":"Show filters"}),Object(d.jsx)(j.a,{textSize:"headline",children:" APIce and Fire "}),Object(d.jsxs)(o.a,{className:"header-search",placeholder:"Search by name...",value:t,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&i()},children:[Object(d.jsx)(l.b,{align:"left",name:"magnify-glass"}),Object(d.jsx)(h.b,{className:"searchButton",variant:"primary",align:"right",onClick:function(){return i({searchInput:t})},children:"Search"})]})]})},g=(s(88),s(105)),b=s(98),p=s(46),x=s(31),O=s(32),u=s(47),f=s(106),S=s(99),v=s(16),y=function(e){var t=e.filterList,s=(e.setSidebarCategories,e.sidebarCategories,e.setSidebarLimit),c=e.expanded,a=(e.fetchFilteredData,e.onSubmit),i=(e.livingStatus,e.setLivingStatus,e.setOption),r=e.selectedOption,j=e.setSelectedOption,h=e.activeCategory,m=e.setActiveCategory,y=e.options,w=e.selectedItem,A=e.setSelectedItem,C=e.items,N=function(e){s(e)};return Object(d.jsxs)("div",{className:"app-sidebar ".concat(c?"expanded":"collapsed"),children:[c&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g.a,{children:t.map((function(e){return Object(d.jsx)(b.a,{name:"filter",checked:e===h,onChange:function(){return m(e)},children:e},e)}))}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)(x.b,{children:Object(d.jsx)(o.a,{isTarget:!0,onChange:N,placeholder:"Pick an Option",value:w,children:Object(d.jsx)(l.b,{name:"chevron-down"})})}),Object(d.jsx)(O.b,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(f.a,{children:C.map((function(e){return Object(d.jsx)(S.a,{onClick:function(){A(e),N(e)},selected:w===e,children:e},e)}))})})})]}),"Characters"===h&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p.a,{children:[Object(d.jsx)(x.b,{children:Object(d.jsx)(o.a,{isTarget:!0,onChange:j,placeholder:"Pick an Option",value:r,children:Object(d.jsx)(l.b,{name:"chevron-down"})})}),Object(d.jsx)(O.b,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(f.a,{children:y.map((function(e){return Object(d.jsx)(S.a,{onClick:function(){var t;j(t=e),i(t)},selected:r===e,children:e},e)}))})})})]})})]}),Object(d.jsx)(n.a,{onClick:function(){return a()},children:c?"Display":Object(d.jsx)(v.a,{name:"refresh"})})]})},w=(s(28),s(104)),A=function(e){var t,s=e.book,c=new Date(s.released).toDateString(),a=s.authors.join(", ");return Object(d.jsx)("div",{className:"feed",style:{height:"100%",width:"100%"},children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)(w.a,{className:"bookCover",src:(t=s.name,"A Game of Thrones"===t?"https://awoiaf.westeros.org/images/thumb/9/93/AGameOfThrones.jpg/300px-AGameOfThrones.jpg":"A Clash of Kings"===t?"https://awoiaf.westeros.org/images/thumb/3/39/AClashOfKings.jpg/300px-AClashOfKings.jpg":"A Storm of Swords"===t?"https://awoiaf.westeros.org/images/thumb/2/24/AStormOfSwords.jpg/300px-AStormOfSwords.jpg":"A Feast for Crows"===t?"https://awoiaf.westeros.org/images/thumb/a/a3/AFeastForCrows.jpg/300px-AFeastForCrows.jpg":"A Dance with Dragons"===t?"https://awoiaf.westeros.org/images/7/79/ADanceWithDragons.jpg":"A Knight of the Seven Kingdoms"===t?"https://awoiaf.westeros.org/images/thumb/5/5e/A_Knight_of_the_Seven_Kingdoms.jpg/300px-A_Knight_of_the_Seven_Kingdoms.jpg":"https://p2.piqsels.com/preview/227/127/717/book-read-book-literature-learn.jpg"),height:"250px"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"book",children:[Object(d.jsx)("h2",{children:s.name}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)("p",{children:["\ud83d\udc68: ",a]}),Object(d.jsxs)("p",{children:["\ud83d\udcd6: ",s.numberOfPages," pages"]}),Object(d.jsxs)("p",{children:["\ud83c\udfd8\ufe0f: ",s.country]}),Object(d.jsxs)("p",{children:["\u23f0: ",c]})]},"index")]})]})})},C=s(100),N=function(e){var t,s=e.character;return Object(d.jsx)("div",{className:"feed",style:{height:"100%",width:"100%"},children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"characters",style:{height:"100%",width:"100%"},children:[Object(d.jsx)(j.a,{textSize:"headtitle",children:Object(d.jsx)("h2",{children:s.name||s.aliases[0]})}),Object(d.jsx)(w.a,{className:"characterImage",src:(t=s.culture,"Braavosi"===t?"https://i.imgur.com/c6QI1cP.jpg":"Westeros"===t?"https://i.imgur.com/xDrXkJS.jpg":"Valyrian"===t?"https://i.imgur.com/0o6bNpc.jpeg":"Northmen"===t?"https://i.imgur.com/Seyls7T.jpg":"First Men"===t?"https://i.imgur.com/CMpQ7zG.jpg":"Asshai"===t?"https://i.imgur.com/gmRO91Q.jpg":"Andal"===t?"https://i.imgur.com/h3o0t7q.jpg":"Naathi"===t?"https://i.imgur.com/nEmog4o.jpg?1":"Ironborn"===t?"https://i.imgur.com/nqWyKG9.jpg":"Valemen"===t?"https://i.imgur.com/5lJ6U7j.png":"Crannogmen"===t?"https://i.imgur.com/uuWq3Ou.jpg":"Thenn"===t?"https://i.imgur.com/VIevFSY.jpg":"Free Folk"===t||"Free folk"===t?"https://i.imgur.com/DoX4j2A.jpg":"Reach"===t?"https://i.imgur.com/zhA2Trn.jpg":"Myrish"===t?"https://i.imgur.com/SfDG5IU.jpg":"Rivermen"===t?"https://i.imgur.com/ZmQEe51.jpg":"Westerlands"===t||"Westerman"===t?"https://i.imgur.com/xaHS3zt.jpg":"Lysene"===t?"https://i.imgur.com/fabkXcr.jpg?1":"https://i.imgur.com/iaqlrMy.jpg"),height:"150px",width:"300px"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"details",children:["Female"===s.gender&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"\ud83d\udc69\ud83c\udffd\u200d\u2696\ufe0f"}),": ",s.gender]}),"Male"===s.gender&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"\ud83e\uddd1\ud83c\udffd\u200d\u2696\ufe0f"}),": ",s.gender]}),""!==s.playedBy[0]&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"Played By"}),": ",s.playedBy.join(", ")]}),""!==s.born&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"Birth"}),": ",s.born]}),""!==s.culture&&Object(d.jsxs)(j.a,{textSize:"medium",children:[Object(d.jsx)("strong",{children:"Culture"}),": ",s.culture]}),""!==s.titles[0]&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Titles"}),": ",Object(d.jsx)("em",{children:s.titles.join(", ")})]}),""!==s.aliases[0]&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Other Names"}),":"," ",Object(d.jsx)("em",{children:s.aliases.join(", ")})]}),Object(d.jsx)(C.a,{size:"small",position:"left",color:s.died?"blast-off":"giant-leap",children:s.died||"Alive"})]},"index")]})})})},z=s(101),k=s(102),D=function(e){var t,s=e.house;return Object(d.jsx)("div",{className:"feed",style:{height:"100%",width:"100%"},children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"houses",style:{height:"100%",width:"100%"},children:[Object(d.jsx)(j.a,{children:Object(d.jsx)("h2",{children:s.name})}),Object(d.jsx)(w.a,{className:"houseImage",src:(t=s.region,"The Riverlands"===t?"https://i.imgur.com/ZmQEe51.jpg":"The Reach"===t?"https://i.imgur.com/zhA2Trn.jpg":"The North"===t?"https://i.imgur.com/FQJSQ27.jpg":"Dorne"===t?"https://i.imgur.com/hk0gHYL.jpg":"The Vale"===t?"https://i.imgur.com/5lJ6U7j.png":"The Westerlands"===t?"https://i.imgur.com/Z54ylIh.jpg":"The Stormlands"===t?"https://i.imgur.com/WhezIyi.jpg":"The Crownlands"===t?"https://i.imgur.com/xaHS3zt.jpg":"Iron Islands"===t?"https://i.imgur.com/nqWyKG9.jpg":"The Neck"===t?"https://i.imgur.com/reyXne4.jpg":"https://i.imgur.com/ivbCD57.jpg"),height:"150px",width:"300px",children:Object(d.jsxs)(z.a,{textStrong:!0,children:[" ",Object(d.jsxs)(k.a,{style:"center",children:[" ",s.region," "]})," "]})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"details",children:[""!==s.region&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"\ud83c\udfd8\ufe0f"}),": ",s.region]}),""!==s.words&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Words"}),": ",Object(d.jsx)("em",{children:s.words})]}),""!==s.founded&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Founded"}),": ",Object(d.jsx)("em",{children:s.founded})]}),""!==s.diedOut&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Died out"}),": ",Object(d.jsx)("em",{children:s.diedOut})]}),s.ancestralWeapons&&""!==s.ancestralWeapons[0]&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Ancestral weapons"}),":"," ",Object(d.jsx)("em",{children:s.ancestralWeapons.join(", ")})]}),s.seats&&""!==s.seats[0]&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"House seats"}),": ",Object(d.jsx)("em",{children:s.seats.join(", ")})]}),s.titles&&""!==s.titles[0]&&Object(d.jsxs)(j.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Titles"}),": ",Object(d.jsx)("em",{children:s.titles.join(", ")})]}),""!==s.coatOfArms&&Object(d.jsxs)(j.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"Coat of arms"}),": ",s.coatOfArms]})]},"index")]})})})},I=s(43),T=(s(92),function(e){var t=e.responseData;return Object(d.jsxs)("div",{className:"feed",children:[console.log(t.data),0===t.data.length&&Object(d.jsx)("div",{className:"empty-feed-prompt",children:Object(d.jsx)(I.a,{textColor:"disabled",children:"Nothing to show..."})}),t&&t.data.map((function(e,s){return Object(d.jsxs)("div",{children:["Characters"===t.category&&Object(d.jsx)(N,{character:e}),"Houses"===t.category&&Object(d.jsx)(D,{house:e}),"Books"===t.category&&Object(d.jsx)(A,{book:e})]},e.name+"-"+s)}))]})}),F=s(11),W=["Characters","Houses","Books"],K=["Alive or Dead","Alive","Dead"],_=[10,25,50];var B=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!0),n=Object(r.a)(i,2),j=n[0],o=n[1],l=Object(c.useState)("Characters"),h=Object(r.a)(l,2),g=h[0],b=h[1],p=Object(c.useState)("Alive or Dead"),x=Object(r.a)(p,2),O=x[0],u=x[1],f=Object(c.useState)(null),S=Object(r.a)(f,2),v=S[0],w=S[1],A=Object(c.useState)(10),C=Object(r.a)(A,2),N=C[0],z=C[1],k=Object(c.useState)(10),D=Object(r.a)(k,2),I=D[0],B=D[1],E=Object(c.useState)(!0),G=Object(r.a)(E,2),H=(G[0],G[1],Object(c.useState)({data:[],category:null})),L=Object(r.a)(H,2),P=L[0],Q=L[1],q=function(){(function(e,t,s,c){var a=e?"&name=".concat(e):"",i="";return"Characters"===t&&("Alive"===c?i="&isAlive=true":"Dead"===c&&(i="&isAlive=false")),console.log("https://anapioficeandfire.com/api/".concat(t,"?pageSize=").concat(s).concat(i).concat(a)),fetch("https://anapioficeandfire.com/api/".concat(t,"?pageSize=").concat(s).concat(i).concat(a)).then((function(e){return e.json()}))})(s,g,N,v).then((function(e){return Q({data:e,category:g})}))};return Object(d.jsxs)(F.a,{className:"app ax-theme--day",children:[Object(d.jsx)(m,{searchInput:s,setSearchInput:a,setSidebarExpanded:o,sidebarExpanded:j,onSubmit:q}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)(y,{filterList:W,setSidebarLimit:z,selectedOption:O,setSelectedOption:u,activeCategory:g,setActiveCategory:b,options:K,items:_,selectedItem:I,setSelectedItem:B,expanded:j,livingStatus:v,setOption:function(e){w(e)},onSubmit:q}),Object(d.jsx)(T,{responseData:P})]})]})};i.a.render(Object(d.jsx)(B,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.f33212a9.chunk.js.map