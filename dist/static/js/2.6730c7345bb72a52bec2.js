webpackJsonp([2],{"34jS":function(n,t,a){"use strict";var i={data:function(){return{active1:0}},props:{navList:{type:Array},input:{type:String},placeholder:{type:String}},methods:{changeActive:function(n){this.active1=n}}},e={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"NavWarp"},[a("ul",{staticClass:"ul1"},[a("li",{staticClass:"active"},[a("ul",n._l(n.navList,function(t,i){return a("li",{class:n.active1==i?"active1":"",on:{click:function(t){n.changeActive(i)}}},[n._v(n._s(t))])}))]),n._v(" "),n.input?a("li",{staticClass:"input"},[a("input",{attrs:{type:"text",placeholder:n.placeholder}}),n._v(" "),n._m(0)]):n._e()])])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("span",[t("img",{attrs:{src:"/static/img/search.png"}})])}]};var r=a("VU/8")(i,e,!1,function(n){a("Xjc+")},"data-v-86f758ce",null);t.a=r.exports},Hvzm:function(n,t,a){(n.exports=a("FZ+f")(!1)).push([n.i,"\n.NavWarp[data-v-86f758ce] {\n  width: 100%;\n  background-color: #f2f2f2;\n  height: 58px;\n}\n.NavWarp > .ul1[data-v-86f758ce] {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 58px;\n    float: left;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.NavWarp > .ul1 > .active > ul[data-v-86f758ce] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.NavWarp > .ul1 > .active > ul > .active1[data-v-86f758ce] {\n        background-color: #fff;\n        border-top: 3px solid #4277ff;\n        color: #4277ff;\n}\n.NavWarp > .ul1 > .active > ul > li[data-v-86f758ce] {\n        font-size: 16px;\n        width: 210px;\n        text-align: center;\n        line-height: 58px;\n        height: 58px;\n}\n.NavWarp > .ul1 > .input[data-v-86f758ce] {\n      width: 258px;\n      margin-top: 12px;\n      margin-right: 20px;\n      position: relative;\n}\n.NavWarp > .ul1 > .input > input[data-v-86f758ce] {\n        width: 258px;\n        height: 34px;\n        border: none;\n        border-radius: 15px;\n        padding-left: 16px;\n}\n.NavWarp > .ul1 > .input > span[data-v-86f758ce] {\n        position: absolute;\n        top: 10px;\n        right: 12px;\n}\n",""])},QGCB:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{Nav:a("34jS").a},data:function(){return{navList:["交易所公告列表"]}},methods:{toAnnDetali:function(){alert("还没写呢")}}},e={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"annWarp"},[a("Nav",{attrs:{navList:n.navList}}),n._v(" "),a("ul",{staticClass:"annList"},n._l(17,function(t,i){return a("li",{on:{click:n.toAnnDetali}},[n._m(0,!0),n._v(" "),n._m(1,!0),n._v(" "),a("span",{staticStyle:{"vertical-align":"top",float:"right"}},[n._v("\n\t\t\t\t2018-05-28 07:32\n\t\t\t")])])}))],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("span",{staticStyle:{color:"#4277ff",width:"68px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","margin-right":"18px"}},[t("span",{staticClass:"heng"}),this._v("\n\t\t\t\tBigOne")])},function(){var n=this.$createElement,t=this._self._c||n;return t("span",{staticClass:"hover"},[t("img",{staticStyle:{"vertical-align":"middle","margin-right":"11px"},attrs:{src:"/static/img/annImg.png"}}),this._v("\n\t\t\t\tBigONE 支持 EOS 主网上线的公告\n\t\t\t")])}]};var r=a("VU/8")(i,e,!1,function(n){a("u1bO")},"data-v-2ccec802",null);t.default=r.exports},"Xjc+":function(n,t,a){var i=a("Hvzm");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);a("rjj0")("2dee6bd9",i,!0,{})},fkSK:function(n,t,a){(n.exports=a("FZ+f")(!1)).push([n.i,"\n.annWarp[data-v-2ccec802] {\n  width: 100%;\n  min-height: 100px;\n  -webkit-border: 1px solid #e5e5e5;\n  -moz-border: 1px solid red;\n}\n.annWarp > .annList[data-v-2ccec802] {\n    width: 100%;\n    padding: 0 20px 0 17px;\n}\n.annWarp > .annList > li[data-v-2ccec802] {\n      padding-left: 20px;\n      font-size: 12px;\n      color: #666;\n      height: 70px;\n      line-height: 70px;\n      cursor: pointer;\n      border-bottom: 1px solid #e5e5e5;\n}\n.annWarp > .annList > li > .hover[data-v-2ccec802] {\n        vertical-align: top;\n}\n.annWarp > .annList > li > .hover[data-v-2ccec802]:hover {\n        color: #4277ff;\n}\n.annWarp > .annList > li > span[data-v-2ccec802] {\n        display: inline-block;\n}\n.annWarp > .annList > li > span > .heng[data-v-2ccec802] {\n          display: inline-block;\n          width: 1px;\n          height: 17px;\n          background-color: #4277ff;\n          -webkit-transform: translateY(4px);\n                  transform: translateY(4px);\n          margin-right: 6px;\n}\n",""])},u1bO:function(n,t,a){var i=a("fkSK");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);a("rjj0")("0da56d22",i,!0,{})}});
//# sourceMappingURL=2.6730c7345bb72a52bec2.js.map