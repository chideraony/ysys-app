(this["webpackJsonpapp-of-ice-and-fire"]=this["webpackJsonpapp-of-ice-and-fire"]||[]).push([[0],{28:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},88:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(15),i=s.n(a),r=(s(55),s(14)),n=(s(56),s(57),s(48)),o=s(97),j=s(103),h=s(39),l=s(44),d=s(1),g=function(e){e.fetchFilteredData;var t=e.setSidebarExpanded,s=e.sidebarExpanded,a=e.onSubmit,i=Object(c.useState)(""),g=Object(r.a)(i,2),m=g[0],b=g[1];return Object(d.jsxs)("header",{className:"app-header",children:[Object(d.jsx)(n.a,{className:"expand-button",variant:s?"primary":"secondary",onClick:function(){return t(!s)},children:s?"Hide filters":"Show filters"}),Object(d.jsx)(o.a,{textSize:"headline",children:" APIce and Fire "}),Object(d.jsxs)(j.a,{className:"header-search",placeholder:"Search by name...",value:m,onChange:function(e){return b(e.target.value)},children:[Object(d.jsx)(h.b,{align:"left",name:"magnify-glass"}),Object(d.jsx)(l.b,{className:"searchButton",variant:"primary",align:"right",onClick:function(){return a({searchInput:m})},children:"Search"})]})]})},m=(s(88),s(105)),b=s(98),p=s(46),x=s(31),u=s(32),O=s(47),f=s(106),S=s(99),v=s(16),y=function(e){var t=e.filterList,s=(e.setSidebarCategories,e.sidebarCategories,e.setSidebarLimit),a=e.expanded,i=(e.fetchFilteredData,e.onSubmit),o=Object(c.useState)(10),l=Object(r.a)(o,2),g=l[0],y=l[1],w=Object(c.useState)(),N=Object(r.a)(w,2),A=N[0],C=N[1],z=function(e){s(e)};return Object(d.jsxs)("div",{className:"app-sidebar ".concat(a?"expanded":"collapsed"),children:[a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{children:t.map((function(e){return Object(d.jsx)(b.a,{name:"filter",checked:e===A,onChange:function(){return C(e)},children:e},e)}))}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)(x.b,{children:Object(d.jsx)(j.a,{isTarget:!0,onChange:z,placeholder:"Pick an Option",value:g,children:Object(d.jsx)(h.b,{name:"chevron-down"})})}),Object(d.jsx)(u.b,{children:Object(d.jsx)(O.a,{children:Object(d.jsx)(f.a,{children:[10,25,50].map((function(e){return Object(d.jsx)(S.a,{onClick:function(){y(e),z(e)},selected:g===e,children:e},e)}))})})})]})]}),Object(d.jsx)(n.a,{onClick:function(){return i({activeCategory:A})},children:a?"Search":Object(d.jsx)(v.a,{name:"refresh"})})]})},w=(s(28),s(104)),N=function(e){var t,s=e.book,c=new Date(s.released).toDateString(),a=s.authors.join(", ");return Object(d.jsx)("div",{className:"feed",style:{height:"100%",width:"100%"},children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)(w.a,{className:"bookCover",src:(t=s.name,"A Game of Thrones"===t?"https://awoiaf.westeros.org/images/thumb/9/93/AGameOfThrones.jpg/300px-AGameOfThrones.jpg":"A Clash of Kings"===t?"https://awoiaf.westeros.org/images/thumb/3/39/AClashOfKings.jpg/300px-AClashOfKings.jpg":"A Storm of Swords"===t?"https://awoiaf.westeros.org/images/thumb/2/24/AStormOfSwords.jpg/300px-AStormOfSwords.jpg":"A Feast for Crows"===t?"https://awoiaf.westeros.org/images/thumb/a/a3/AFeastForCrows.jpg/300px-AFeastForCrows.jpg":"A Dance with Dragons"===t?"https://awoiaf.westeros.org/images/7/79/ADanceWithDragons.jpg":"A Knight of the Seven Kingdoms"===t?"https://awoiaf.westeros.org/images/thumb/5/5e/A_Knight_of_the_Seven_Kingdoms.jpg/300px-A_Knight_of_the_Seven_Kingdoms.jpg":"https://p2.piqsels.com/preview/227/127/717/book-read-book-literature-learn.jpg"),height:"250px"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"book",children:[Object(d.jsx)("h2",{children:s.name}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)("p",{children:["\ud83d\udc68: ",a]}),Object(d.jsxs)("p",{children:["\ud83d\udcd6: ",s.numberOfPages," pages"]}),Object(d.jsxs)("p",{children:["\ud83c\udfd8\ufe0f: ",s.country]}),Object(d.jsxs)("p",{children:["\u23f0: ",c]})]},"index")]})]})})},A=s(100),C=function(e){var t,s=e.character;return Object(d.jsx)("div",{className:"feed",style:{height:"100%",width:"100%"},children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"characters",style:{height:"100%",width:"100%"},children:[Object(d.jsx)(o.a,{textSize:"headtitle",children:Object(d.jsx)("h2",{children:s.name||s.aliases[0]})}),Object(d.jsx)(w.a,{className:"characterImage",src:(t=s.culture,"Braavosi"===t?"https://i.imgur.com/c6QI1cP.jpg":"Westeros"===t?"https://i.imgur.com/xDrXkJS.jpg":"Valyrian"===t?"https://i.imgur.com/0o6bNpc.jpeg":"Northmen"===t?"https://i.imgur.com/Seyls7T.jpg":"First Men"===t?"https://i.imgur.com/CMpQ7zG.jpg":"Asshai"===t?"https://i.imgur.com/gmRO91Q.jpg":"Andal"===t?"https://i.imgur.com/h3o0t7q.jpg":"Naathi"===t?"https://i.imgur.com/nEmog4o.jpg?1":"Ironborn"===t?"https://i.imgur.com/nqWyKG9.jpg":"Valemen"===t?"https://i.imgur.com/5lJ6U7j.png":"Crannogmen"===t?"https://i.imgur.com/uuWq3Ou.jpg":"Thenn"===t?"https://i.imgur.com/VIevFSY.jpg":"Free Folk"===t||"Free folk"===t?"https://i.imgur.com/DoX4j2A.jpg":"Reach"===t?"https://i.imgur.com/zhA2Trn.jpg":"Myrish"===t?"https://i.imgur.com/SfDG5IU.jpg":"Rivermen"===t?"https://i.imgur.com/ZmQEe51.jpg":"Westerlands"===t||"Westerman"===t?"https://i.imgur.com/xaHS3zt.jpg":"Lysene"===t?"https://i.imgur.com/fabkXcr.jpg?1":"https://i.imgur.com/iaqlrMy.jpg"),height:"150px",width:"300px"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"details",children:["Female"===s.gender&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"\ud83d\udc69\ud83c\udffd\u200d\u2696\ufe0f"}),": ",s.gender]}),"Male"===s.gender&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"\ud83e\uddd1\ud83c\udffd\u200d\u2696\ufe0f"}),": ",s.gender]}),""!==s.playedBy[0]&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"Played By"}),": ",s.playedBy.join(", ")]}),""!==s.born&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"Birth"}),": ",s.born]}),""!==s.culture&&Object(d.jsxs)(o.a,{textSize:"medium",children:[Object(d.jsx)("strong",{children:"Culture"}),": ",s.culture]}),""!==s.titles[0]&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Titles"}),": ",Object(d.jsx)("em",{children:s.titles.join(", ")})]}),""!==s.aliases[0]&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Other Names"}),":"," ",Object(d.jsx)("em",{children:s.aliases.join(", ")})]}),Object(d.jsx)(A.a,{size:"small",position:"left",color:s.died?"blast-off":"giant-leap",children:s.died||"Alive"})]},"index")]})})})},z=s(101),k=s(102),T=function(e){var t,s=e.house;return Object(d.jsx)("div",{className:"feed",style:{height:"100%",width:"100%"},children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"houses",style:{height:"100%",width:"100%"},children:[Object(d.jsx)(o.a,{children:Object(d.jsx)("h2",{children:s.name})}),Object(d.jsx)(w.a,{className:"houseImage",src:(t=s.region,"The Riverlands"===t?"https://i.imgur.com/ZmQEe51.jpg":"The Reach"===t?"https://i.imgur.com/zhA2Trn.jpg":"The North"===t?"https://i.imgur.com/FQJSQ27.jpg":"Dorne"===t?"https://i.imgur.com/hk0gHYL.jpg":"The Vale"===t?"https://i.imgur.com/5lJ6U7j.png":"The Westerlands"===t?"https://i.imgur.com/Z54ylIh.jpg":"The Stormlands"===t?"https://i.imgur.com/WhezIyi.jpg":"The Crownlands"===t?"https://i.imgur.com/xaHS3zt.jpg":"Iron Islands"===t?"https://i.imgur.com/nqWyKG9.jpg":"The Neck"===t?"https://i.imgur.com/reyXne4.jpg":"https://i.imgur.com/ivbCD57.jpg"),height:"150px",width:"300px",children:Object(d.jsxs)(z.a,{textStrong:!0,children:[" ",Object(d.jsxs)(k.a,{style:"center",children:["  ",s.region,"  "]})," "]})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"details",children:[""!==s.region&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"\ud83c\udfd8\ufe0f"}),": ",s.region]}),""!==s.words&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Words"}),": ",Object(d.jsx)("em",{children:s.words})]}),""!==s.founded&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Founded"}),": ",Object(d.jsx)("em",{children:s.founded})]}),""!==s.diedOut&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Died out"}),": ",Object(d.jsx)("em",{children:s.diedOut})]}),s.ancestralWeapons&&""!==s.ancestralWeapons[0]&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Ancestral weapons"}),": ",Object(d.jsx)("em",{children:s.ancestralWeapons.join(", ")})]}),s.seats&&""!==s.seats[0]&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"House seats"}),": ",Object(d.jsx)("em",{children:s.seats.join(", ")})]}),s.titles&&""!==s.titles[0]&&Object(d.jsxs)(o.a,{textSize:"small",children:[Object(d.jsx)("strong",{children:"Titles"}),": ",Object(d.jsx)("em",{children:s.titles.join(", ")})]}),""!==s.coatOfArms&&Object(d.jsxs)(o.a,{textSize:"large",children:[Object(d.jsx)("strong",{children:"Coat of arms"}),": ",s.coatOfArms]})]},"index")]})})})},F=s(43),D=(s(92),function(e){var t=e.responseData;return t?(console.log(t),Object(d.jsxs)("div",{className:"feed",children:[0===t.data.length&&Object(d.jsx)("div",{className:"empty-feed-prompt",children:Object(d.jsx)(F.a,{textColor:"disabled",children:"Nothing to show..."})}),t&&t.data.map((function(e,s){return Object(d.jsxs)("div",{children:["Characters"===t.category&&Object(d.jsx)(C,{character:e}),"Houses"===t.category&&Object(d.jsx)(T,{house:e}),"Books"===t.category&&Object(d.jsx)(N,{book:e})]},e.name+"-"+s)}))]})):null}),I=s(11),W=["Characters","Houses","Books"];var K=function(){var e=Object(c.useState)(10),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)({data:[],category:null}),n=Object(r.a)(i,2),o=n[0],j=n[1],h=Object(c.useState)(!0),l=Object(r.a)(h,2),m=l[0],b=l[1],p=function(e){var t=e.activeCategory,c=void 0===t?o.category:t,a=e.searchInput,i=void 0===a?"":a;console.log(c),function(e,t,s){var c=e?"&name=".concat(e):"";return console.log(e),console.log("https://anapioficeandfire.com/api/".concat(t,"?pageSize=").concat(s).concat(c)),fetch("https://anapioficeandfire.com/api/".concat(t,"?pageSize=").concat(s).concat(c)).then((function(e){return e.json()}))}(i,c,s).then((function(e){return j({data:e,category:c})}))};return Object(d.jsxs)(I.a,{className:"app ax-theme--day",children:[Object(d.jsx)(g,{setSidebarExpanded:b,sidebarExpanded:m,onSubmit:p}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)(y,{filterList:W,setSidebarLimit:a,expanded:m,onSubmit:p}),Object(d.jsx)(D,{responseData:o})]})]})};i.a.render(Object(d.jsx)(K,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.87d66845.chunk.js.map