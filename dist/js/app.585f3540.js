(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"02ce":function(e,t,s){},"1b50":function(e,t,s){"use strict";s("1e38")},"1e38":function(e,t,s){},2981:function(e,t,s){var n={"./af":"f826","./af.js":"f826","./ar":"0fa2","./ar-dz":"8ec6","./ar-dz.js":"8ec6","./ar-kw":"36f4","./ar-kw.js":"36f4","./ar-ly":"0e86","./ar-ly.js":"0e86","./ar-ma":"3d3d","./ar-ma.js":"3d3d","./ar-sa":"cfe1","./ar-sa.js":"cfe1","./ar-tn":"0608","./ar-tn.js":"0608","./ar.js":"0fa2","./az":"9cec","./az.js":"9cec","./be":"609d","./be.js":"609d","./bg":"3f4f","./bg.js":"3f4f","./bm":"43e9","./bm.js":"43e9","./bn":"d345","./bn-bd":"3037","./bn-bd.js":"3037","./bn.js":"d345","./bo":"fe43","./bo.js":"fe43","./br":"927d","./br.js":"927d","./bs":"1808","./bs.js":"1808","./ca":"2a24","./ca.js":"2a24","./cs":"8bb4","./cs.js":"8bb4","./cv":"1788","./cv.js":"1788","./cy":"8cb6","./cy.js":"8cb6","./da":"9fca","./da.js":"9fca","./de":"3f20","./de-at":"a8f1","./de-at.js":"a8f1","./de-ch":"2b68","./de-ch.js":"2b68","./de.js":"3f20","./dv":"6a7c","./dv.js":"6a7c","./el":"7f03","./el.js":"7f03","./en-au":"e33b","./en-au.js":"e33b","./en-ca":"563d","./en-ca.js":"563d","./en-gb":"6e59","./en-gb.js":"6e59","./en-ie":"a02d","./en-ie.js":"a02d","./en-il":"2dd2","./en-il.js":"2dd2","./en-in":"b674","./en-in.js":"b674","./en-nz":"2e16","./en-nz.js":"2e16","./en-sg":"49e7","./en-sg.js":"49e7","./eo":"3645","./eo.js":"3645","./es":"8669","./es-do":"1ef1","./es-do.js":"1ef1","./es-mx":"aa4f","./es-mx.js":"aa4f","./es-us":"2adb","./es-us.js":"2adb","./es.js":"8669","./et":"7672","./et.js":"7672","./eu":"666c","./eu.js":"666c","./fa":"691e","./fa.js":"691e","./fi":"b486","./fi.js":"b486","./fil":"e425","./fil.js":"e425","./fo":"60e4","./fo.js":"60e4","./fr":"bc2c","./fr-ca":"028a","./fr-ca.js":"028a","./fr-ch":"de9b","./fr-ch.js":"de9b","./fr.js":"bc2c","./fy":"de08","./fy.js":"de08","./ga":"c134","./ga.js":"c134","./gd":"680a","./gd.js":"680a","./gl":"3a5c","./gl.js":"3a5c","./gom-deva":"3ab2","./gom-deva.js":"3ab2","./gom-latn":"9bbd","./gom-latn.js":"9bbd","./gu":"3123","./gu.js":"3123","./he":"a3bb","./he.js":"a3bb","./hi":"74d5","./hi.js":"74d5","./hr":"3d1a","./hr.js":"3d1a","./hu":"8930","./hu.js":"8930","./hy-am":"5368","./hy-am.js":"5368","./id":"4d1d","./id.js":"4d1d","./is":"d8c2","./is.js":"d8c2","./it":"b571","./it-ch":"26a2","./it-ch.js":"26a2","./it.js":"b571","./ja":"f409","./ja.js":"f409","./jv":"24ca","./jv.js":"24ca","./ka":"57b4","./ka.js":"57b4","./kk":"7af1","./kk.js":"7af1","./km":"368b","./km.js":"368b","./kn":"c931","./kn.js":"c931","./ko":"8472","./ko.js":"8472","./ku":"41c3","./ku.js":"41c3","./ky":"7229","./ky.js":"7229","./lb":"febd","./lb.js":"febd","./lo":"b36b","./lo.js":"b36b","./lt":"2654","./lt.js":"2654","./lv":"6e31","./lv.js":"6e31","./me":"f72d","./me.js":"f72d","./mi":"2bcd","./mi.js":"2bcd","./mk":"c0de","./mk.js":"c0de","./ml":"e75d","./ml.js":"e75d","./mn":"b37a","./mn.js":"b37a","./mr":"a76b","./mr.js":"a76b","./ms":"2bf0","./ms-my":"2b02","./ms-my.js":"2b02","./ms.js":"2bf0","./mt":"e717","./mt.js":"e717","./my":"e2e2","./my.js":"e2e2","./nb":"bdfc","./nb.js":"bdfc","./ne":"75c0","./ne.js":"75c0","./nl":"3e8e","./nl-be":"de3b","./nl-be.js":"de3b","./nl.js":"3e8e","./nn":"90a3","./nn.js":"90a3","./oc-lnc":"8195","./oc-lnc.js":"8195","./pa-in":"bf7a","./pa-in.js":"bf7a","./pl":"210f","./pl.js":"210f","./pt":"12e3","./pt-br":"294f","./pt-br.js":"294f","./pt.js":"12e3","./ro":"7a04","./ro.js":"7a04","./ru":"75cb","./ru.js":"75cb","./sd":"f957","./sd.js":"f957","./se":"4169","./se.js":"4169","./si":"951b9","./si.js":"951b9","./sk":"1c1d","./sk.js":"1c1d","./sl":"eb2c","./sl.js":"eb2c","./sq":"7c7d","./sq.js":"7c7d","./sr":"5f14","./sr-cyrl":"20a0","./sr-cyrl.js":"20a0","./sr.js":"5f14","./ss":"3a89","./ss.js":"3a89","./sv":"87ac","./sv.js":"87ac","./sw":"91c3","./sw.js":"91c3","./ta":"41cd","./ta.js":"41cd","./te":"5a49","./te.js":"5a49","./tet":"0e56","./tet.js":"0e56","./tg":"2495","./tg.js":"2495","./th":"db96","./th.js":"db96","./tk":"593b","./tk.js":"593b","./tl-ph":"b593","./tl-ph.js":"b593","./tlh":"04f0","./tlh.js":"04f0","./tr":"d11d","./tr.js":"d11d","./tzl":"6da8","./tzl.js":"6da8","./tzm":"11af","./tzm-latn":"2eac","./tzm-latn.js":"2eac","./tzm.js":"11af","./ug-cn":"f551","./ug-cn.js":"f551","./uk":"89a5","./uk.js":"89a5","./ur":"faa7","./ur.js":"faa7","./uz":"c23b","./uz-latn":"d399","./uz-latn.js":"d399","./uz.js":"c23b","./vi":"6811","./vi.js":"6811","./x-pseudo":"52a9","./x-pseudo.js":"52a9","./yo":"f28c","./yo.js":"f28c","./zh-cn":"39cf","./zh-cn.js":"39cf","./zh-hk":"25ad","./zh-hk.js":"25ad","./zh-mo":"1689","./zh-mo.js":"1689","./zh-tw":"2dba","./zh-tw.js":"2dba"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="2981"},"2fe3":function(e,t,s){"use strict";s("02ce")},"4fc8":function(e,t,s){"use strict";s("9b89")},"517e":function(e,t,s){},5426:function(e,t,s){"use strict";s("517e")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("app-header"),s("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("header",[s("h1",[e._v(e._s(e.msg))])]),s("ul",[s("li",[s("router-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),s("li",[s("router-link",{attrs:{to:"/orders",exact:""}},[e._v(" Orders ")])],1),s("li",[s("router-link",{attrs:{to:"/dashboard",exact:""}},[e._v(" Dashboard ")])],1)])])},c=[],i={data:function(){return{msg:"Daniel's Zi Char"}}},l=i,d=(s("f838"),s("2877")),u=Object(d["a"])(l,o,c,!1,null,"679eaec6",null),f=u.exports,h={data:function(){return{}},components:{"app-header":f}},b=h,p=Object(d["a"])(b,a,r,!1,null,"48ee4bd2",null),m=p.exports,j=s("951b"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",e._l(e.items,(function(t){return s("li",{key:t.name},[s("h2",[e._v(e._s(t.name))]),s("img",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{src:t.imageURL}}),s("p",[e._v("$"+e._s(t.price))]),s("qtyCounter",{attrs:{item:t},on:{counter:e.onCounter}})],1)})),0),s("basket",{attrs:{itemsSelected:e.itemsSelected,items:e.items}})],1)},g=[],_=(s("159b"),s("b0c0"),s("a434"),s("1196")),y={apiKey:"AIzaSyCP1ia78KUPxGPAUvS0pAg5XNB26I7Ayj4",authDomain:"bt3103-week-6-43329.firebaseapp.com",projectId:"bt3103-week-6-43329",storageBucket:"bt3103-week-6-43329.appspot.com",messagingSenderId:"820017910775",appId:"1:820017910775:web:7d6a7cf60af9a1605654f2",measurementId:"G-L2RR4SNDYX"};_["a"].initializeApp(y);var k=_["a"].firestore(),O=k,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("button",{on:{click:e.decrement}},[e._v(" - ")]),e._v(" "+e._s(e.value)+" "),s("button",{on:{click:e.increment}},[e._v(" + ")])])},w=[],S={props:["item"],data:function(){return{value:0}},methods:{decrement:function(){this.value>0&&(this.value-=1),this.$emit("counter",this.item,this.value)},increment:function(){this.value<10?this.value+=1:alert("You cannot buy more than 10 items"),this.$emit("counter",this.item,this.value)}}},z=S,I=(s("4fc8"),Object(d["a"])(z,x,w,!1,null,null,null)),$=I.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",[s("p",[e._v(" Menu: ")]),e._l(e.itemsSelected,(function(t){return s("li",{key:t[0]},[s("p",[e._v(e._s(t[0])+" x "+e._s(t[1]))])])}))],2),s("button",{on:{click:function(t){e.findTotal(),e.sendOrder()}}},[e._v("Calculate Total")]),e.calculate?s("p",[e._v("Subtotal : $"+e._s(e.total)+" "),s("br"),e._v(" Grandtotal : $"+e._s(e.grandTotal)+" ")]):e._e()])},E=[],D=(s("b680"),{props:{itemsSelected:{type:Array},items:{type:Array}},data:function(){return{total:0,calculate:!1,fullBasket:[]}},methods:{findTotal:function(){this.total=0,this.calculate=!0;for(var e=0;e<this.itemsSelected.length;e++){var t=this.itemsSelected[e];this.total+=t[1]*t[2]}},sendOrder:function(){for(var e=0;e<this.itemsSelected.length;e++)this.fullBasket.push(this.itemsSelected[e]);for(var t=0;t<this.items.length;t++)for(var s=!1,n=0;n<this.fullBasket.length;n++)this.items[t].name==this.fullBasket[n][0]&&(s=!0),s||n!=this.fullBasket.length-1||this.fullBasket.push([this.items[t].name,0,this.items[t].price]);O.collection("orders").add(Object.assign({},this.fullBasket)).then((function(){return location.reload()}))}},computed:{grandTotal:function(){var e=1.07*this.total;return e.toFixed(2)}},components:{}}),N=D,P=(s("1b50"),Object(d["a"])(N,C,E,!1,null,"0e7e18c4",null)),A=P.exports,B={data:function(){return{items:[],itemsSelected:[]}},methods:{fetchItems:function(){var e=this;O.collection("menu").get().then((function(t){var s={};t.forEach((function(t){s=t.data(),s.id=t.id,e.items.push(s)}))}))},onCounter:function(e,t){if(0===this.itemsSelected.length&&t>0)this.itemsSelected.push([e.name,t,e.price]);else for(var s=0;s<this.itemsSelected.length;s++){var n=this.itemsSelected[s],a=n[0];if(a==e.name&&t>0)return this.itemsSelected.splice(s,1),void this.itemsSelected.push([e.name,t,e.price]);if(a==e.name&&0==t)return void this.itemsSelected.splice(s,1);if(s==this.itemsSelected.length-1&&a!=e.name)return void this.itemsSelected.push([e.name,t,e.price])}}},created:function(){this.fetchItems()},components:{qtyCounter:$,basket:A}},T=B,M=(s("5426"),Object(d["a"])(T,v,g,!1,null,"65ec8e94",null)),U=M.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",e._l(this.orders,(function(t){return s("li",{key:t[0]},[e._l(t[1],(function(t){return s("span",{key:t[0]},[e._v(" "+e._s(t[0])+": "+e._s(t[1])+" "),s("br")])})),s("button",{attrs:{id:t[0]},on:{click:e.deleteItem}},[e._v("Delete")]),s("button",{attrs:{id:t[0]},on:{click:e.route}},[e._v(" Modify ")])],2)})),0)])},q=[],L={data:function(){return{orders:[]}},methods:{fetchItems:function(){var e=this;O.collection("orders").get().then((function(t){var s={};t.forEach((function(t){s=t.data(),"null"!=t.id&&e.orders.push([t.id,s])}))}))},deleteItem:function(e){var t=e.target.getAttribute("id");O.collection("orders").doc(t).delete().then((function(){location.reload()}))},route:function(e){var t=e.target.getAttribute("id");this.$router.push({name:"modify",params:{orderId:t}})}},created:function(){this.fetchItems()}},F=L,G=(s("8647"),Object(d["a"])(F,R,q,!1,null,"97ac2f32",null)),H=G.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(this.datapacket[0],(function(t,n){return s("div",{key:n},[e._v(" "+e._s(t[0])+": "+e._s(t[1])),s("br"),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.updateNumbers[n],expression:"updateNumbers[index]",modifiers:{number:!0}}],attrs:{type:"number",id:"index",placeholder:"0",min:"0"},domProps:{value:e.updateNumbers[n]},on:{input:function(t){t.target.composing||e.$set(e.updateNumbers,n,e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),s("br")])})),s("br"),s("button",{on:{click:e.updateOrder}},[e._v("Update Order")])],2)},K=[],X=(s("b64b"),{props:{items:{type:Array}},data:function(){return{docId:this.$route.params.orderId,datapacket:[],copiedData:[],updateNumbers:[]}},methods:{fetchItems:function(){var e=this;O.collection("orders").doc(this.docId).get().then((function(t){e.datapacket.push(t.data())}))},updateOrder:function(){this.copiedData=Object.assign({},this.datapacket[0]);for(var e=0;e<Object.keys(this.copiedData).length;e++)null!=this.updateNumbers[e]&&(this.copiedData[e][1]=this.updateNumbers[e]);O.collection("orders").doc(this.docId).set(this.copiedData).then(this.$router.push("/orders"))}},created:function(){this.fetchItems()}}),Y=X,Q=(s("d67b"),Object(d["a"])(Y,J,K,!1,null,"5dbadf6e",null)),Z=Q.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Dashboard")]),s("bar-chart"),s("line-chart")],1)},W=[],ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chart"},[s("h3",[e._v("Bar Chart for Food Orders")]),s("chart")],1)},te=[],se=s("4331"),ne={extends:se["a"],data:function(){return{datacollection:{labels:[],datasets:[{label:"Quantity Ordered",backgroundColor:["blue","purple","green","brown","red","yellow"],data:[]}]},options:{legend:{display:!1},title:{display:!0,text:"Total Order"},responsive:!0,maintainAspectRatio:!1},orders:[],processed:[]}},methods:{process:function(){for(var e=0;e<this.orders.length;e++)for(var t=this.orders[e],s=0;s<Object.keys(t).length;s++){var n=t[s][0],a=t[s][1];if(console.log(s),0==this.processed.length)this.processed.push([n,a]);else for(var r=0;r<this.processed.length;r++){if(this.processed[r][0]==n){this.processed[r][1]+=a;break}r==this.processed.length-1&&this.processed[r][0]!=n&&this.processed.push([n,a])}}for(var o=0;o<this.processed.length;o++)this.datacollection.labels.push(this.processed[o][0]),this.datacollection.datasets[0].data.push(this.processed[o][1])},fetchItems:function(){var e=this;O.collection("orders").get().then((function(t){t.forEach((function(t){"null"!=t.id&&e.orders.push(t.data())})),e.process(),e.renderChart(e.datacollection,e.options)}))}},created:function(){this.fetchItems()}},ae={components:{Chart:ne}},re=ae,oe=Object(d["a"])(re,ee,te,!1,null,null,null),ce=oe.exports,ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chart"},[s("h3",[e._v("Line Chart for PSI 24hr")]),s("chart")],1)},le=[],de=(s("07ac"),s("62c3")),ue=s.n(de),fe={extends:se["b"],data:function(){return{datacollection:{labels:[],datasets:[]},options:{legend:{display:!0},title:{display:!0,text:"PSI 24Hr Hourly (By Region)"},responsive:!0,maintainAspectRatio:!1},color:["red","blue","green","yellow","black","purple"]}},methods:{fetchItems:function(){var e=this;ue.a.get("https://api.data.gov.sg/v1/environment/psi?date=2021-02-23").then((function(t){t.data.region_metadata.forEach((function(t){e.datacollection.datasets.push({data:[],label:t.name,fill:!1})})),t.data.items.forEach((function(t){e.datacollection.labels.push(t.timestamp);for(var s=0;s<Object.keys(t.readings.psi_twenty_four_hourly).length;s++)e.datacollection.datasets[s].data.push(Object.values(t.readings.psi_twenty_four_hourly)[s]),e.datacollection.datasets[s].borderColor=e.color[s]})),e.renderChart(e.datacollection,e.options)}))}},created:function(){this.fetchItems()}},he={components:{Chart:fe}},be=he,pe=Object(d["a"])(be,ie,le,!1,null,null,null),me=pe.exports,je={components:{"bar-chart":ce,"line-chart":me}},ve=je,ge=(s("2fe3"),Object(d["a"])(ve,V,W,!1,null,null,null)),_e=ge.exports,ye=[{path:"/",component:U},{path:"/orders",component:H},{path:"/modify/:orderId",name:"modify",component:Z,props:!0},{path:"/dashboard",component:_e}];n["a"].config.productionTip=!1,n["a"].use(j["a"]);var ke=new j["a"]({routes:ye,mode:"history"});new n["a"]({render:function(e){return e(m)},router:ke}).$mount("#app")},"5ffc":function(e,t,s){},"655f":function(e,t,s){},8647:function(e,t,s){"use strict";s("b02a")},"9b89":function(e,t,s){},b02a:function(e,t,s){},d67b:function(e,t,s){"use strict";s("655f")},f838:function(e,t,s){"use strict";s("5ffc")}});
//# sourceMappingURL=app.585f3540.js.map