(function(t){function e(e){for(var r,s,l=e[0],i=e[1],c=e[2],p=0,f=[];p<l.length;p++)s=l[p],o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-palette-generator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1689:function(t,e,n){"use strict";var r=n("85e3"),o=n.n(r);o.a},"4a69":function(t,e,n){},"4d82":function(t,e,n){"use strict";var r=n("b5a2"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-area")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mainAreaWrapper"},[n("settings-panel",{on:{generate:t.getColorBlocks}}),n("palette-blocks",{attrs:{palette:t.palette}})],1)},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"settingsPanel"},[n("div",{staticClass:"settingsPanelInputs"},[n("div",{staticClass:"inputGroup"},[n("span",{staticClass:"label",domProps:{textContent:t._s("Number of colors")}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.settings.numOfColors,expression:"settings.numOfColors"}],staticClass:"input",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.settings,"numOfColors",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"2"},domProps:{textContent:t._s("2")}}),n("option",{attrs:{value:"3"},domProps:{textContent:t._s("3")}}),n("option",{attrs:{value:"4"},domProps:{textContent:t._s("4")}}),n("option",{attrs:{value:"5"},domProps:{textContent:t._s("5")}})])])]),n("div",{staticClass:"settingsPanelFooter"},[n("button",{staticClass:"generateBtn",domProps:{textContent:t._s("Generate!")},on:{click:t.emitPalette}})])])},c=[],u=n("75fc"),p=(n("14b9"),n("5df3"),n("1c4c"),{data:function(){return{settings:{numOfColors:3}}},methods:{emitPalette:function(){this.$emit("generate",{palette:this.getRandomPalette()})},getRandomPalette:function(){var t=this,e=Array.from("0".repeat(this.settings.numOfColors));return e.map(function(){return t.getRandomColor()})},getRandomColor:function(){var t=this,e=[1,2,3];e=e.map(function(){return t.getRandomNumber(0,255)});var n=Object(u["a"])(e),r=n[0],o=n[1],a=n[2];return"rgb(".concat(r,", ").concat(o,", ").concat(a,")")},getRandomNumber:function(t,e){return Math.floor(Math.random()*(e+1-t))+t}}}),f=p,d=(n("955c"),n("2877")),m=Object(d["a"])(f,i,c,!1,null,"978d73b8",null),v=m.exports,g=function(t,e){var n=e._c;return n("section",{staticClass:"paletteBlocks"},[e.props.palette.length?n("div",{staticClass:"colorBlocksWrapper"},e._l(e.props.palette,function(t){return n("div",{staticClass:"colorBlock",style:"background: "+t},[n("div",{staticClass:"colorName",domProps:{textContent:e._s(t)}})])}),0):e._e()])},b=[],h={props:{palette:{required:!0,type:Array}}},C=h,_=(n("1689"),Object(d["a"])(C,g,b,!0,null,"e393a5b0",null)),P=_.exports,y={name:"MainArea",components:{SettingsPanel:v,PaletteBlocks:P},data:function(){return{palette:[]}},methods:{getColorBlocks:function(t){this.palette=t.palette}}},O=y,x=(n("4d82"),Object(d["a"])(O,s,l,!1,null,"2c59f22c",null)),j=x.exports,k={name:"App",components:{MainArea:j}},w=k,M=(n("5c0b"),Object(d["a"])(w,o,a,!1,null,null,null)),A=M.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},"85e3":function(t,e,n){},"955c":function(t,e,n){"use strict";var r=n("4a69"),o=n.n(r);o.a},b5a2:function(t,e,n){}});