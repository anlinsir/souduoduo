webpackJsonp([16],{TvCx:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={data:function(){return{duos:0,kongs:0,rof:["涨幅","跌幅"],rofdetalislist:["排名","名称","价格","涨幅"],tbody:[{id:1,img:"/static/img/btc.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"},{id:2,img:"/static/img/eth.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"},{id:3,img:"/static/img/xrp.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"},{id:4,img:"/static/img/btc.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"},{id:5,img:"/static/img/btc.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"},{id:6,img:"/static/img/btc.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"},{id:7,img:"/static/img/btc.png",name:"BTC-比特币",circulationVale:"¥8,377亿",price:"¥49,128",sum:"1,705万",transaction:"¥4,208,503万",rises:"-2.75%",tendency:"0 5 2 4 4 8 6 2 8 10 10 3"}],rofActive:0,rofActives:0,rofData:["1小时","24小时","一周"]}},methods:{duo:function(){localStorage.dou||localStorage.kong?alert("已选择"):(this.duos=1,localStorage.dou=1)},kong:function(){localStorage.kong||localStorage.dou?alert("已选择"):(this.kongs=1,localStorage.kong=1)},rofChoose:function(t){this.rofActive=t},rofChooses:function(t){this.rofActives=t}},created:function(){1==localStorage.dou&&(this.duos=1),1==localStorage.kong&&(this.kongs=1)}},e={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"FdetaliWarp"},[n("div",{staticClass:"detaliLeft"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"Main"},[n("p",{staticClass:"text"},[t._v("百度区块链负责人肖伟今日发朋友圈表示，百科与区块链的结合，虽然简单，但是太经典了！从此百科不背锅。4月27日，肖伟曾表示：百度希望通过区块链建立和社会垂直行业建立一些联盟，通过区块链网络多中心共识以及用户评价确保内容质量，建立公信力，从而保证百度百科的权威性。他认为，愿意被区块链改变的，一定是落后者，而不会是领先者，行业老二老三特别希望用区块链实现反超。\n\t\t\t")]),t._v(" "),n("p",{staticClass:"footerss"},[n("span",{staticStyle:{float:"left"}},[n("span",{staticStyle:{"margin-right":"33px",cursor:"pointer"},on:{click:t.duo}},[n("img",{staticStyle:{"vertical-align":"text-bottom","margin-right":"6px"},attrs:{src:"/static/img/duo.png"}}),t._v(" "),n("span",{style:{color:1==t.duos?"#4277ff":""}},[t._v("看多 152")])]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:t.kong}},[n("img",{staticStyle:{"vertical-align":"text-bottom","margin-right":"6px"},attrs:{src:"/static/img/kong.png"}}),t._v(" "),n("span",{style:{color:1==t.kongs?"#4277ff":""}},[t._v("看空 30")])])]),t._v(" "),t._m(2)])])]),t._v(" "),n("div",{staticClass:"detaliRight"},[n("div",{staticClass:"rOf"},[n("div",{staticClass:"rOfTitle"},[n("p",t._l(t.rof,function(i,a){return n("span",{key:a,class:t.rofActive==a?"rofActive":"",on:{click:function(i){t.rofChoose(a)}}},[t._v(t._s(i))])}))]),t._v(" "),n("ul",{staticClass:"rofData"},t._l(t.rofData,function(i,a){return n("li",{key:a,class:t.rofActives==a?"rofActives":"",on:{click:function(i){t.rofChooses(a)}}},[t._v(t._s(i))])})),t._v(" "),n("ul",{staticClass:"rofDatadetails"},[n("li",{staticClass:"head"},t._l(t.rofdetalislist,function(i,a){return n("span",{key:a},[t._v(t._s(i))])})),t._v(" "),t._l(t.tbody,function(i,a){return n("li",{staticClass:"body"},[n("span",{staticStyle:{width:"20px",height:"20px",transform:"translateY(6px)",display:"inline-block","text-align":"center","line-height":"20px"}},[i.id<4?n("span",{staticStyle:{width:"20px",height:"20px","background-color":"#fba73e",color:"#FFF",display:"inline-block","text-align":"center","line-height":"20px",transform:"translateY(0px)"}},[t._v(t._s(i.id))]):t._e(),t._v(t._s(i.id>=4?i.id:""))]),t._v(" "),n("span",[t._v(t._s(i.name))]),t._v(" "),n("span",[t._v(t._s(i.price))]),t._v(" "),n("span",{style:{color:parseFloat(i.rises)<0?"#33b862":"red"}},[t._v(t._s(i.rises))])])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"Top"},[i("div",{staticClass:"top"},[this._v("搜多多  > 滚动快讯 > 详情")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"Title"},[i("div",{staticClass:"title"},[i("p",{staticClass:"ttt"},[this._v("百度区块链负责人：百科与区块链结合，从此百科不背锅")]),this._v(" "),i("p",{staticClass:"ooo"},[i("span",{staticStyle:{display:"inline-block",width:"48px",height:"22px",color:"#5060a2","border-radius":"12px",border:"1px solid","text-align":"center","line-height":"22px","margin-right":"12px"}},[this._v("16:54")]),this._v(" "),i("span",[this._v("2018-05-26 · 星期一")]),this._v(" "),i("span",[this._v("276次阅读")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("span",{staticStyle:{float:"right"}},[this._v("\n\t\t\t\t\t\t分享到：\n\t\t\t\t\t\t"),i("img",{staticStyle:{"vertical-align":"middle","margin-right":"6px",cursor:"pointer"},attrs:{src:"/static/img/weixin.png"}}),this._v(" "),i("img",{staticStyle:{"vertical-align":"middle","margin-right":"6px",cursor:"pointer"},attrs:{src:"/static/img/weio.png"}}),this._v(" "),i("img",{staticStyle:{"vertical-align":"middle","margin-right":"6px",cursor:"pointer"},attrs:{src:"/static/img/qq.png"}})])}]};var d=n("vSla")(a,e,!1,function(t){n("VBjt")},"data-v-390ddd48",null);i.default=d.exports},VBjt:function(t,i,n){var a=n("uygf");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("FIqI")("37877954",a,!0,{})},uygf:function(t,i,n){(t.exports=n("UTlt")(!1)).push([t.i,"\n.FdetaliWarp[data-v-390ddd48] {\n  width: 100%;\n  min-height: 200px;\n  overflow: hidden;\n}\n.FdetaliWarp > .detaliLeft[data-v-390ddd48] {\n    width: 866px;\n    min-height: 400px;\n    float: left;\n    border: 1px solid #e5e5e5;\n}\n.FdetaliWarp > .detaliLeft > .Top[data-v-390ddd48] {\n      width: 100%;\n      height: 49px;\n      padding-left: 17px;\n      padding-right: 19px;\n}\n.FdetaliWarp > .detaliLeft > .Top > .top[data-v-390ddd48] {\n        width: 100%;\n        height: 49px;\n        font-size: 12px;\n        outline-color: #666;\n        line-height: 49px;\n        border-bottom: 1px solid #e5e5e5;\n}\n.FdetaliWarp > .detaliLeft > .Title[data-v-390ddd48] {\n      width: 100%;\n      height: 102px;\n      padding-left: 13px;\n      padding-right: 23px;\n}\n.FdetaliWarp > .detaliLeft > .Title > .title[data-v-390ddd48] {\n        width: 100%;\n        height: 100px;\n        padding-left: 23px;\n        border-bottom: 1px dashed #e5e5e5;\n}\n.FdetaliWarp > .detaliLeft > .Title > .title > .ttt[data-v-390ddd48] {\n          font-size: 18px;\n          margin-top: 27px;\n          font-weight: bold;\n          margin-bottom: 12px;\n}\n.FdetaliWarp > .detaliLeft > .Title > .title > .ooo[data-v-390ddd48] {\n          font-size: 12px;\n          color: #898989;\n}\n.FdetaliWarp > .detaliLeft > .Main[data-v-390ddd48] {\n      width: 100%;\n      padding-right: 40px;\n      padding-left: 45px;\n}\n.FdetaliWarp > .detaliLeft > .Main > p[data-v-390ddd48] {\n        font-size: 12px;\n        color: #666;\n}\n.FdetaliWarp > .detaliLeft > .Main > .text[data-v-390ddd48] {\n        margin-top: 27px;\n        margin-bottom: 178px;\n        line-height: 25px;\n}\n.FdetaliWarp > .detaliLeft > .Main > .footerss[data-v-390ddd48] {\n        overflow: hidden;\n        margin-bottom: 27px;\n}\n.FdetaliWarp > .detaliRight[data-v-390ddd48] {\n    float: right;\n    width: 320px;\n    min-height: 100px;\n    border: 1px solid #e5e5e5;\n}\n.FdetaliWarp > .detaliRight > .rOf[data-v-390ddd48] {\n      width: 320px;\n      border: 1px solid #e4e4e4;\n      min-height: 373px;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rOfTitle[data-v-390ddd48] {\n        width: 100%;\n        height: 50px;\n        line-height: 50px;\n        cursor: pointer;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rOfTitle > p[data-v-390ddd48] {\n          font-size: 12px;\n          color: #333333;\n          padding: 0 0px 0 0px;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rOfTitle > p > .rofActive[data-v-390ddd48] {\n            border-top: 3px solid #4277ff;\n            color: #4277ff;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rOfTitle > p > span[data-v-390ddd48] {\n            display: inline-block;\n            text-align: center;\n            width: 50%;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rOfTitle > p > span > img[data-v-390ddd48] {\n              float: right;\n              -webkit-transform: translateY(20px);\n                      transform: translateY(20px);\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofData[data-v-390ddd48] {\n        width: 100%;\n        font-size: 12px;\n        cursor: pointer;\n        color: #666;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 34px;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofData > li[data-v-390ddd48] {\n          width: 63px;\n          height: 20px;\n          text-align: center;\n          line-height: 20px;\n          margin-right: 11px;\n          position: relative;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofData > .rofActives[data-v-390ddd48] {\n          background-color: #dae3fb;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofData > .rofActives[data-v-390ddd48]::after {\n          content: '';\n          width: 4px;\n          height: 4px;\n          position: absolute;\n          top: 9px;\n          border-radius: 50%;\n          left: 5px;\n          background-color: #4277ff;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofDatadetails[data-v-390ddd48] {\n        width: 320px;\n        padding: 0 6px 0 7px;\n        min-height: 200px;\n        font-size: 12px;\n        color: #666;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofDatadetails > .head[data-v-390ddd48] {\n          height: 32px;\n          width: 100%;\n          background-color: #f4f4f4;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-pack: distribute;\n              justify-content: space-around;\n          line-height: 32px;\n}\n.FdetaliWarp > .detaliRight > .rOf > .rofDatadetails > .body[data-v-390ddd48] {\n          cursor: pointer;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-pack: distribute;\n              justify-content: space-around;\n          height: 32px;\n          line-height: 32px;\n}\n",""])}});
//# sourceMappingURL=16.a1d42f92bfedd8e2d882.js.map