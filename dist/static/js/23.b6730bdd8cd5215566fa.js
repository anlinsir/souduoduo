webpackJsonp([23],{Eyw0:function(t,n,a){(t.exports=a("UTlt")(!1)).push([t.i,"\n.annWarp[data-v-04d48840] {\n  width: 100%;\n  min-height: 100px;\n  -webkit-border: 1px solid #e5e5e5;\n  -moz-border: 1px solid red;\n}\n.annWarp > .annList[data-v-04d48840] {\n    width: 100%;\n    padding: 0 20px 0 17px;\n}\n.annWarp > .annList > li[data-v-04d48840] {\n      padding-left: 20px;\n      font-size: 12px;\n      color: #666;\n      height: 70px;\n      line-height: 70px;\n      cursor: pointer;\n      border-bottom: 1px solid #e5e5e5;\n}\n.annWarp > .annList > li > .hover[data-v-04d48840] {\n        vertical-align: top;\n}\n.annWarp > .annList > li > .hover[data-v-04d48840]:hover {\n        color: #4277ff;\n}\n.annWarp > .annList > li > span[data-v-04d48840] {\n        display: inline-block;\n}\n.annWarp > .annList > li > span > .heng[data-v-04d48840] {\n          display: inline-block;\n          width: 1px;\n          height: 17px;\n          background-color: #4277ff;\n          -webkit-transform: translateY(4px);\n                  transform: translateY(4px);\n          margin-right: 6px;\n}\n",""])},QGCB:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={components:{Nav:a("34jS").a},data:function(){return{navList:["交易所公告列表"],currentPage:5}},methods:{handleCurrentChange:function(t){this.currentPage=t,console.log(t)},toAnnDetali:function(t){-1!=t.target.dataset.id&&this.$router.push("/index/annDetali")},other:function(t){this.navList=[t.target.innerText+"公告列表"],console.log("重载数据")}}},i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"annWarp"},[a("Nav",{attrs:{navList:t.navList}}),t._v(" "),a("ul",{staticClass:"annList"},t._l(17,function(n,e){return a("li",{on:{click:t.toAnnDetali}},[a("span",{staticStyle:{color:"#4277ff",width:"68px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","margin-right":"18px"},attrs:{title:"比特儿海外","data-id":"-1"},on:{click:t.other}},[a("span",{staticClass:"heng"}),t._v("\n\t\t\t\t比特儿海外")]),t._v(" "),t._m(0,!0),t._v(" "),a("span",{staticStyle:{"vertical-align":"top",float:"right"}},[t._v("\n\t\t\t\t2018-05-28 07:32\n\t\t\t")])])})),t._v(" "),a("div",{staticClass:"block",staticStyle:{width:"100px","margin-left":"450px","margin-top":"20px"}},[a("el-pagination",{staticStyle:{width:"100px"},attrs:{"current-page":t.currentPage,layout:"prev, pager, next",total:50},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"hover"},[n("img",{staticStyle:{"vertical-align":"middle","margin-right":"11px"},attrs:{src:"/static/img/annImg.png"}}),this._v("\n\t\t\t\tBigONE 支持 EOS 主网上线的公告\n\t\t\t")])}]};var r=a("vSla")(e,i,!1,function(t){a("mj+z")},"data-v-04d48840",null);n.default=r.exports},"mj+z":function(t,n,a){var e=a("Eyw0");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("FIqI")("260d43a4",e,!0,{})}});
//# sourceMappingURL=23.b6730bdd8cd5215566fa.js.map