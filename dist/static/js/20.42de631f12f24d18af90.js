webpackJsonp([20],{Cz1P:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={data:function(){return{serach:""}},methods:{changeCount:function(t){0!=t.target.selectedIndex&&(alert(t.target.selectedIndex),alert(t.target.options[t.target.selectedIndex].text))},searchTrading:function(t){alert(this.serach+" 暂无数据")},pages:function(t){alert(t+"页")},toTradDetali:function(){this.$router.push("/index/tradDetali/:id")}}},e={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"tradingWarp"},[n("div",{staticClass:"tradingTitle"},[n("div",{staticClass:"titleChoose"},[t._v("\n\t\t\t交易平台列表\n\t\t")]),t._v(" "),n("div",{staticClass:"titleRightChose"},[n("span",{staticStyle:{"font-size":"12px",color:"#9c9c9c"}},[t._v("筛选：")]),n("select",{on:{change:t.changeCount}},[n("option",{attrs:{value:"0"}},[t._v("国家")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("中国")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("德国")])]),t._v(" "),n("select",{on:{change:t.changeCount}},[n("option",{attrs:{value:"0"}},[t._v("类型")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("xx")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("llll")])]),t._v(" "),n("select",{staticStyle:{width:"98px","margin-right":"30px"},on:{change:t.changeCount}},[n("option",{attrs:{value:"0"}},[t._v("默认排序")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("升序")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("降序")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.serach,expression:"serach"}],attrs:{type:"text",name:"",placeholder:"搜索交易平台名称"},domProps:{value:t.serach},on:{keydown:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.searchTrading(a):null},input:function(a){a.target.composing||(t.serach=a.target.value)}}}),t._v(" "),n("span",{staticStyle:{position:"absolute",top:"0",right:"35px"},on:{click:t.searchTrading}},[t._v("s")])])]),t._v(" "),n("ul",{staticClass:"tradingContent"},[n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("li",{staticClass:"tradingContentItem",staticStyle:{"margin-right":"0"},on:{click:function(a){t.toTradDetali(1)}}},[t._m(4),t._v(" "),t._m(5)]),t._v(" "),n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(6),t._v(" "),t._m(7)]),t._v(" "),n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(8),t._v(" "),t._m(9)]),t._v(" "),n("li",{staticClass:"tradingContentItem",staticStyle:{"margin-right":"0"},on:{click:function(a){t.toTradDetali(1)}}},[t._m(10),t._v(" "),t._m(11)]),t._v(" "),n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(12),t._v(" "),t._m(13)]),t._v(" "),n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(14),t._v(" "),t._m(15)]),t._v(" "),n("li",{staticClass:"tradingContentItem",staticStyle:{"margin-right":"0"},on:{click:function(a){t.toTradDetali(1)}}},[t._m(16),t._v(" "),t._m(17)]),t._v(" "),n("li",{staticClass:"tradingContentItem",on:{click:function(a){t.toTradDetali(1)}}},[t._m(18),t._v(" "),t._m(19)])]),t._v(" "),n("div",{staticClass:"pagesW"},[n("div",{staticClass:"pages"},[n("ul",[n("li",[t._v("<")]),t._v(" "),t._l(6,function(a,i){return n("li",{on:{click:function(a){t.pages(i)}}},[t._v(t._s(a))])}),t._v(" "),n("li",[t._v(">")])],2)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("dl",{staticClass:"itemImg"},[n("dt",[n("img",{attrs:{src:"/static/img/pic_logobg.png"}})]),t._v(" "),n("dd",[n("p",{staticClass:"itemName"},[t._v("BitMEX")]),t._v(" "),n("p",{staticClass:"itempaim"},[t._v("排名No.1")]),t._v(" "),n("p",{staticClass:"xx"},[n("span",{staticStyle:{"background-color":"#5094f1","background-image":"url('/static/img/scales.png')","background-position":"6px 6px"}},[t._v("现货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#7a85e9","background-image":"url('/static/img/stock_up.png')","background-position":"6px 6px"}},[t._v("期货")]),t._v(" "),n("span",{staticStyle:{"background-color":"#f19f5f","background-image":"url('/static/img/money.png')","background-position":"5px 8px"}},[t._v("法币")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"itemText"},[n("p",{staticClass:"textp1"},[t._v("#Binance是全球领先的区块链资产交易平台，为全球区块链爱好者提供多币种、多语言的币币兑换服务，目前…")]),t._v(" "),n("p",{staticClass:"textp2"},[n("span",[t._v("交易对："),n("i",[t._v("11")]),t._v("\t   /  ")]),t._v(" "),n("span",[t._v("地区："),n("i",[t._v("中国")]),t._v("   /  ")]),t._v(" "),n("span",[t._v("成交额(24h)："),n("i",[t._v("￥160.2亿")])])])])}]};var s=n("VU/8")(i,e,!1,function(t){n("mDQP")},"data-v-0a8da0a3",null);a.default=s.exports},QvqA:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.tradingWarp[data-v-0a8da0a3] {\n  width: 100%;\n  min-height: 100px;\n  border: 1px solid #e5e5e5;\n}\n.tradingWarp > .tradingTitle[data-v-0a8da0a3] {\n    width: 100%;\n    height: 58px;\n    background-color: #f2f2f2;\n}\n.tradingWarp > .tradingTitle > .titleChoose[data-v-0a8da0a3] {\n      width: 210px;\n      height: 58px;\n      background-color: #fff;\n      border-top: 3px solid #4277ff;\n      color: #4277ff;\n      text-align: center;\n      line-height: 56px;\n      font-size: 16px;\n      float: left;\n      margin-left: 1px;\n}\n.tradingWarp > .tradingTitle > .titleRightChose[data-v-0a8da0a3] {\n      width: 606px;\n      height: 58px;\n      line-height: 58px;\n      float: right;\n      position: relative;\n}\n.tradingWarp > .tradingTitle > .titleRightChose > input[data-v-0a8da0a3] {\n        width: 258px;\n        height: 34px;\n        border-radius: 14px;\n        border: none;\n        padding-left: 17px;\n        font-size: 14px;\n        color: #9f9f9f;\n}\n.tradingWarp > .tradingTitle > .titleRightChose > select[data-v-0a8da0a3]::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        border: 4px solid #000;\n        border-top: 4px solid #000;\n        border-right: 4px solid transparent;\n        border-bottom: 4px solid transparent;\n        border-left: 4px solid transparent;\n}\n.tradingWarp > .tradingTitle > .titleRightChose > select[data-v-0a8da0a3] {\n        position: relative;\n        width: 75px;\n        height: 34px;\n        background-color: #fff;\n        color: #666;\n        font-size: 12px;\n        background-image: url(\"http://ourjs.github.io/static/2015/arrow.png\");\n        background-repeat: no-repeat;\n        background-position: right;\n        outline: none;\n        border-radius: 10px;\n        padding: 0 10px;\n        margin-right: 5px;\n        padding-right: 14px;\n        border: none;\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        appearance: none;\n}\n.tradingWarp > .tradingContent[data-v-0a8da0a3] {\n    margin-top: 28px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0 30px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.tradingWarp > .tradingContent > .tradingContentItem[data-v-0a8da0a3] {\n      width: 360px;\n      height: 230px;\n      border: 1px solid #eeeeee;\n      margin-right: 29px;\n      margin-bottom: 45px;\n      padding: 16px 13px 0 15px;\n      cursor: pointer;\n}\n.tradingWarp > .tradingContent > .tradingContentItem[data-v-0a8da0a3] > :nth-child(3n) {\n        margin-right: 0;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemImg[data-v-0a8da0a3] {\n        width: 100%;\n        height: 100px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemImg > dt[data-v-0a8da0a3] {\n          width: 100px;\n          height: 100px;\n          border: 1px solid #e5e5e5;\n          margin-right: 22px;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemImg > dt > img[data-v-0a8da0a3] {\n            width: 100%;\n            height: 100%;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemImg > dd > .itemName[data-v-0a8da0a3] {\n          font-size: 15px;\n          font-weight: bold;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemImg > dd > .itempaim[data-v-0a8da0a3] {\n          font-size: 12px;\n          color: #ff9a49;\n          margin-bottom: 36px;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemImg > dd > .xx > span[data-v-0a8da0a3] {\n          display: inline-block;\n          width: 58px;\n          height: 26px;\n          background-color: #7a85e9;\n          font-size: 12px;\n          color: #fff;\n          text-align: center;\n          line-height: 26px;\n          border-radius: 15px;\n          background-repeat: no-repeat;\n          padding-left: 18px;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemText[data-v-0a8da0a3] {\n        margin-top: 22px;\n        font-size: 12px;\n        color: #666;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemText > .textp2[data-v-0a8da0a3] {\n          margin-top: 20px;\n}\n.tradingWarp > .tradingContent > .tradingContentItem > .itemText > .textp2 > span > i[data-v-0a8da0a3] {\n            color: #4277ff;\n            font-style: normal;\n}\n.tradingWarp > .pagesW[data-v-0a8da0a3] {\n    text-align: center;\n}\n.tradingWarp > .pagesW > .pages[data-v-0a8da0a3] {\n      display: inline-block;\n}\n.tradingWarp > .pagesW > .pages > ul[data-v-0a8da0a3] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.tradingWarp > .pagesW > .pages > ul > li[data-v-0a8da0a3] {\n          margin-right: 10px;\n          cursor: pointer;\n}\n",""])},mDQP:function(t,a,n){var i=n("QvqA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("4f8dcef1",i,!0,{})}});
//# sourceMappingURL=20.42de631f12f24d18af90.js.map