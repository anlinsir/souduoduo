webpackJsonp([1],{"2NXm":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{headerData:[{name:"BTC/Bitfinex",price:"48321.98",pic:"0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5"},{name:"ETH/Binance",price:"3761.48",pic:"0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5"},{name:"EOS/Bitfinex",price:"69.83",pic:"0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5"}]}},methods:{toLogin:function(){this.$router.push("/login")},activeBtn:function(t,a){switch(t){case 0:this.$router.push("/index/ranking");break;case 1:this.$router.push("/index/trading");break;case 2:this.$router.push("/index/ency");break;case 3:return void alert("即将上线")}console.log(t)},changeLaugage:function(){alert("暂不支持其他语言")},toIdex:function(){this.$router.push("/index/index")}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"headerWarp"},[e("div",{staticClass:"headerwarp"},[e("header",[e("dl",{staticClass:"headerlogo"},[e("dt",{on:{click:t.toIdex}},[e("img",{attrs:{src:"/static/img/headerlogo.png"}})])]),t._v(" "),e("div",{staticClass:"headerPicWarp"},[e("div",{staticClass:"headerPic"},t._l(t.headerData,function(a,n){return e("dl",[e("dt",[t._v(t._s(a.name))]),t._v(" "),e("dd",[e("span",[t._v(t._s("￥"+a.price))]),t._v(" "),e("svg",{staticClass:"peity",attrs:{height:"30",width:"70"}},[e("polyline",{staticStyle:{fill:"none",stroke:"#5a8bf9","stroke-width":"1"},attrs:{points:a.pic}})])])])}))]),t._v(" "),e("div",{staticClass:"headerChoose"},[e("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),e("li",{on:{click:t.toLogin}},[e("img",{attrs:{src:"/static/img/headerlist3.png"}}),t._v(" "),e("span",[t._v("登录注册")])])])]),t._v(" "),e("div",{staticClass:"headerCounty"},[e("img",{attrs:{src:"/static/img/countyImg.png"}}),t._v(" "),e("span",{on:{click:t.changeLaugage}},[t._v("简体中文")])])])]),t._v(" "),e("div",{staticClass:"stein",staticStyle:{width:"100%",height:"120px"}}),t._v(" "),e("div",{staticClass:"headerBtmWarp"},[e("div",{staticClass:"haderBom"},[t._m(2),t._v(" "),e("div",{staticClass:"buttonGup"},[e("ul",[e("li",{staticStyle:{background:"linear-gradient(#4e66a7, #403f72)","border-radius":"10px"},on:{click:function(a){t.activeBtn(0,a)}}},[e("img",{staticClass:"imgo1",attrs:{src:"/static/img/headerbtn1bg1.png"}}),t._v(" "),e("img",{staticClass:"imgt1",staticStyle:{transform:"translateY(-35px) translateX(-81px)"},attrs:{src:"/static/img/headerbtn1bg2.png"}}),t._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-52px) translateX(40px)",display:"inline-block","letter-spacing":"2px"}},[t._v("排行榜")])]),t._v(" "),e("li",{staticStyle:{"background-image":"url('/static/img/headerbtn2.png')"},on:{click:function(a){t.activeBtn(1,a)}}},[e("img",{staticClass:"imgo2",attrs:{src:"/static/img/headerbtn2bg1.png"}}),t._v(" "),e("img",{staticClass:"imgt2",staticStyle:{transform:"translateY(-50px) translateX(-107px)"},attrs:{src:"/static/img/headerbtn2bg2.png"}}),t._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-57px) translateX(0px)","letter-spacing":"2px",display:"inline-block"}},[t._v("交易平台")])]),t._v(" "),e("li",{staticStyle:{"background-image":"url('/static/img/headerbtn3.png')"},on:{click:function(a){t.activeBtn(2,a)}}},[e("img",{staticClass:"imgo2",attrs:{src:"/static/img/headerbtn3bg1.png"}}),t._v(" "),e("img",{staticClass:"imgt2",staticStyle:{transform:"translateY(-31px) translateX(-70px)"},attrs:{src:"/static/img/headerbtn3bg2.png"}}),t._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-38px) translateX(30px)","letter-spacing":"2px",display:"inline-block"}},[t._v("币圈百科")])]),t._v(" "),e("li",{staticStyle:{"background-image":"url('/static/img/headerG.png')",position:"relative"},on:{click:function(a){t.activeBtn(3,a)}}},[e("img",{staticClass:"imgo2",attrs:{src:"/static/img/headerbtn4bg1.png"}}),t._v(" "),e("img",{staticClass:"imgt2",staticStyle:{transform:"translateY(-40px) translateX(-70px)"},attrs:{src:"/static/img/headerbtn4bg2.png"}}),t._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-47px) translateX(-6px)","letter-spacing":"2px",display:"inline-block"}},[t._v("ICO项目汇总")]),t._v(" "),e("span",{staticStyle:{float:"right",display:"inline-block",transform:"translateY(-47px) translateX(-35px)","font-size":"12px",color:"rgb(144, 144, 144)"}},[t._v("即将上线")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("img",{attrs:{src:"/static/img/headerlist1.png"}}),this._v(" "),a("span",[this._v("智能情报机器")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("img",{attrs:{src:"/static/img/headerlist2.png"}}),this._v(" "),a("span",[this._v("APP下载")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"inputGup"},[a("input",{attrs:{type:"text",placeholder:"请输入需要查询的区块地址"}}),this._v(" "),a("input",{attrs:{type:"text",placeholder:"输入需要搜索代币号"}}),this._v(" "),a("span",[this._v("ETH")]),this._v(" "),a("button",{staticClass:"Hbtn1"},[a("img",{attrs:{src:"/static/img/headersearch.png"}})]),this._v(" "),a("button",{staticClass:"Hbtn2"},[a("img",{attrs:{src:"/static/img/headersearch.png"}})])])}]};var i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"footerWarp"},[e("div",{staticClass:"footerTopWarp"},[e("div",{staticClass:"footerTop"},[e("p",[t._v("友情链接：")]),t._v(" "),e("ul",t._l(t.linkList,function(a,n){return e("li",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(a)+"\n\t\t\t\t\t\t\t")])}))])]),t._v(" "),e("div",{staticClass:"footerBomWarp"},[e("div",{staticClass:"footerBom"},[e("div",{staticClass:"Bom1"},[e("img",{attrs:{src:"/static/img/indexlogo.png"}}),t._v(" "),t._m(0),t._v(" "),e("ul",{staticClass:"ul1"},[e("li",{on:{click:function(a){t.toFaq(0)}}},[t._v("关于我们 "),e("span",[t._v("|")])]),t._v(" "),e("li",{on:{click:function(a){t.toFaq(1)}}},[t._v("联系我们 "),e("span",[t._v("|")])]),t._v(" "),e("li",{on:{click:function(a){t.toFaq(2)}}},[t._v("常见问题 "),e("span",[t._v("|")])]),t._v(" "),e("li",[t._v("下载APP   ")])]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Copyright ©2018 Souduoduo Ltd. All Rights Reserved.")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("dl",[a("dt",[this._v("SODUODUO")]),this._v(" "),a("dd",[this._v("查币就去搜多多")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"ul2W"},[a("ul",{staticClass:"ul2"},[a("li",[a("img",{attrs:{src:"/static/img/footerWein.png"}})]),this._v(" "),a("li",[a("img",{attrs:{src:"/static/img/footerWeibo.png"}})]),this._v(" "),a("li",[a("img",{attrs:{src:"/static/img/footerQQ.png"}})]),this._v(" "),a("li",[a("img",{attrs:{src:"/static/img/footerPlant.png"}})])])])}]};var o={components:{Header:e("vSla")(n,r,!1,function(t){e("GtnH")},"data-v-49bc9366",null).exports,Footer:e("vSla")({data:function(){return{linkList:["火星财经","比特头条","币源社区","链向财经","区块网","COBO钱包","鱼池","链闻","币易","未来财经","易派支付","金色财经","芭比财经"]}},methods:{toFaq:function(t){switch(t){case 0:this.$router.push("/index/faq/about");break;case 1:this.$router.push("/index/faq/call");break;case 2:this.$router.push("/index/faq/faq")}}}},i,!1,function(t){e("ZWc8")},"data-v-964cc7ec",null).exports}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"Warp"},[a("Header"),this._v(" "),a("div",{staticClass:"warp"},[a("router-view")],1),this._v(" "),a("Footer")],1)},staticRenderFns:[]};var s=e("vSla")(o,p,!1,function(t){e("DuDC")},"data-v-a47c14ec",null);a.default=s.exports},DuDC:function(t,a,e){var n=e("MUi1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("07cbede1",n,!0,{})},GtnH:function(t,a,e){var n=e("lHCs");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("be0b4212",n,!0,{})},MUi1:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,"\n.Warp[data-v-a47c14ec] {\n  width: 100%;\n  min-height: 100%;\n}\n.Warp .warp[data-v-a47c14ec] {\n    width: 1200px;\n    min-height: 100px;\n    margin: auto;\n}\n",""])},ZWc8:function(t,a,e){var n=e("qHqq");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("5ca72cd5",n,!0,{})},lHCs:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,"\n@charset \"UTF-8\";\n.headerWarp[data-v-49bc9366] {\n  width: 100%;\n}\n.headerWarp > .headerwarp[data-v-49bc9366] {\n    width: 100%;\n    height: 120px;\n    -webkit-box-shadow: 0px 0 5px -5px #ccc, 0 -5px 5px -5px #ccc, 0 5px 5px -5px #ccc, 0px 0 5px 1px #ccc;\n            box-shadow: 0px 0 5px -5px #ccc, 0 -5px 5px -5px #ccc, 0 5px 5px -5px #ccc, 0px 0 5px 1px #ccc;\n    /*右边阴影*/\n    border-top: 3px solid #4277ff;\n    position: fixed;\n    top: 0;\n    z-index: 1;\n    background-color: #fff;\n}\n.headerWarp > .headerwarp > header[data-v-49bc9366] {\n      width: 1200px;\n      padding-top: 30px;\n      margin: auto;\n      height: 120px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.headerWarp > .headerwarp > header > .headerlogo[data-v-49bc9366] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 16px;\n        margin-right: 54px;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dt[data-v-49bc9366] {\n          width: 210px;\n          height: 60px;\n          cursor: pointer;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dt > img[data-v-49bc9366] {\n            width: 100%;\n            height: 100%;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd[data-v-49bc9366] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-transform: translateY(10%);\n                  transform: translateY(10%);\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd[data-v-49bc9366] > :nth-child(1) {\n            font-weight: bold;\n            margin-bottom: 5px;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd > :nth-child(1) > b[data-v-49bc9366] {\n              color: #4073c3;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd[data-v-49bc9366] > :nth-child(2) {\n            color: #939497;\n            font-size: 14px;\n            letter-spacing: 1px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp[data-v-49bc9366] {\n        display: inline-block;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic[data-v-49bc9366] {\n          margin-top: 9px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 12px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic > dl[data-v-49bc9366] {\n            width: 156px;\n            margin-right: 10px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic > dl > dt[data-v-49bc9366] {\n              color: #4277ff;\n              margin-bottom: 10px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic > dl > dd > svg[data-v-49bc9366] {\n              display: inline-block;\n              vertical-align: middle;\n              margin-left: 10px;\n}\n.headerWarp > .headerwarp > header > .headerChoose[data-v-49bc9366] {\n        color: #333;\n        margin-top: 21px;\n}\n.headerWarp > .headerwarp > header > .headerChoose > ul[data-v-49bc9366] {\n          width: 315px;\n          font-size: 14px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n}\n.headerWarp > .headerwarp > header > .headerChoose > ul > li[data-v-49bc9366] {\n            cursor: pointer;\n}\n.headerWarp > .headerwarp > header > .headerChoose > ul > li > img[data-v-49bc9366] {\n              vertical-align: bottom;\n              margin-right: 4px;\n}\n.headerWarp > .headerwarp > header > .headerCounty[data-v-49bc9366] {\n        color: #333;\n        font-size: 14px;\n        margin-left: 27px;\n        margin-top: 15px;\n}\n.headerWarp > .headerwarp > header > .headerCounty > img[data-v-49bc9366] {\n          width: 30px;\n          vertical-align: middle;\n          height: 30px;\n          border-radius: 50%;\n          margin-right: 5px;\n}\n.headerWarp > .headerwarp > header > .headerCounty > span[data-v-49bc9366] {\n          position: relative;\n}\n.headerWarp > .headerwarp > header > .headerCounty > span[data-v-49bc9366]::after {\n          display: inline-block;\n          content: '';\n          position: absolute;\n          top: 7px;\n          right: -13px;\n          z-index: 10;\n          border: 4px solid #000;\n          border-top: 4px solid #000;\n          border-right: 4px solid transparent;\n          border-bottom: 4px solid transparent;\n          border-left: 4px solid transparent;\n}\n.headerWarp > .headerBtmWarp[data-v-49bc9366] {\n    width: 100%;\n    height: 200px;\n}\n.headerWarp > .headerBtmWarp > .haderBom[data-v-49bc9366] {\n      width: 1200px;\n      height: 200px;\n      margin: auto;\n      padding-top: 21px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup[data-v-49bc9366] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 0 5px;\n        position: relative;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup[data-v-49bc9366] > :nth-child(1) {\n          padding: 0 0 0 100px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > input[data-v-49bc9366] {\n          width: 587px;\n          height: 49px;\n          padding: 0 0 0 30px;\n          border: 1px solid #dcdcdc;\n          border-radius: 50px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > span[data-v-49bc9366], .headerWarp > .headerBtmWarp > .haderBom > .inputGup button[data-v-49bc9366] {\n          position: absolute;\n          top: 0;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > span[data-v-49bc9366] {\n          top: 16px;\n          left: 30px;\n          font-size: 12px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > span[data-v-49bc9366]::after {\n          content: '';\n          border: 4px solid;\n          border-top: 4px solid;\n          border-right: 4px solid transparent;\n          border-bottom: 4px solid transparent;\n          border-left: 4px solid transparent;\n          position: absolute;\n          top: 6px;\n          right: -15px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > button[data-v-49bc9366] {\n          width: 37px;\n          cursor: pointer;\n          height: 37px;\n          border-radius: 50%;\n          border: none;\n          text-align: center;\n          outline: none;\n          background-color: #556fb5;\n          line-height: 46px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > .Hbtn1[data-v-49bc9366] {\n          top: 6px;\n          left: 545px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > .Hbtn2[data-v-49bc9366] {\n          top: 6px;\n          right: 14px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .buttonGup[data-v-49bc9366] {\n        cursor: pointer;\n        width: 100%;\n        margin-top: 19px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .buttonGup > ul[data-v-49bc9366] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .buttonGup > ul > li[data-v-49bc9366] {\n            overflow: hidden;\n            font-size: 20px;\n            width: 284px;\n            height: 90px;\n}\n",""])},qHqq:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,"\n.footerWarp[data-v-964cc7ec] {\n  width: 100%;\n  margin-top: 80px;\n  height: 100%;\n}\n.footerWarp > .footerTopWarp[data-v-964cc7ec] {\n    width: 100%;\n    height: 128px;\n    background-color: #11161e;\n}\n.footerWarp > .footerTopWarp > .footerTop[data-v-964cc7ec] {\n      width: 1200px;\n      height: 128px;\n      margin: auto;\n      padding: 26px 0 0 0;\n}\n.footerWarp > .footerTopWarp > .footerTop > p[data-v-964cc7ec] {\n        color: #fff;\n        margin-left: 2px;\n        margin-bottom: 15px;\n        font-size: 12px;\n}\n.footerWarp > .footerTopWarp > .footerTop > ul[data-v-964cc7ec] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        margin-left: 2px;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        font-size: 12px;\n}\n.footerWarp > .footerTopWarp > .footerTop > ul > li[data-v-964cc7ec] {\n          width: 10%;\n          margin-bottom: 12px;\n          color: #aebbcf;\n          cursor: pointer;\n}\n.footerWarp > .footerBomWarp[data-v-964cc7ec] {\n    width: 100%;\n    height: 300px;\n    background-color: #08090e;\n}\n.footerWarp > .footerBomWarp > .footerBom[data-v-964cc7ec] {\n      width: 1200px;\n      margin: auto;\n      color: #fff;\n      height: 300px;\n      background-color: #08090e;\n      text-align: center;\n      padding: 55px 0 0 0;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1[data-v-964cc7ec] {\n        text-align: center;\n        display: inline-block;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > img[data-v-964cc7ec] {\n          margin-right: 0px;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > dl[data-v-964cc7ec] {\n          float: right;\n          -webkit-transform: translateY(10px) translateX(-95px);\n                  transform: translateY(10px) translateX(-95px);\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > dl > dt[data-v-964cc7ec] {\n            font-size: 17px;\n            font-weight: bold;\n            color: #fff;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > dl > dd[data-v-964cc7ec] {\n            font-size: 14px;\n            color: #5a778b;\n            letter-spacing: 1.2px;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul1[data-v-964cc7ec] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-top: 70px;\n          -webkit-transform: translateX(20px);\n                  transform: translateX(20px);\n          font-size: 12px;\n          color: #aebbcf;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul1 > li[data-v-964cc7ec] {\n            cursor: pointer;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul1 > li > span[data-v-964cc7ec] {\n              margin: 0 29px;\n              color: #252833;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul2W[data-v-964cc7ec] {\n          display: inline-block;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul2W > .ul2[data-v-964cc7ec] {\n            width: 138px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 29px;\n            margin-bottom: 10px;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > p[data-v-964cc7ec] {\n          font-size: 12px;\n          color: #3f4753;\n}\n",""])}});
//# sourceMappingURL=1.f0f7dc212af5f72973c0.js.map