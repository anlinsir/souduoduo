webpackJsonp([0],{"2NXm":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{headerData:[{name:"BTC/Bitfinex",price:"48321.98",pic:"0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5"},{name:"ETH/Binance",price:"3761.48",pic:"0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5"},{name:"EOS/Bitfinex",price:"69.83",pic:"0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5"}]}},methods:{toLogin:function(){this.$router.push("/login")},activeBtn:function(a,t){switch(a){case 0:this.$router.push("/index/ranking");break;case 1:this.$router.push("/index/trading")}console.log(a)},changeLaugage:function(){alert("暂不支持其他语言")}}},r={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"headerWarp"},[e("div",{staticClass:"headerwarp"},[e("header",[a._m(0),a._v(" "),e("div",{staticClass:"headerPicWarp"},[e("div",{staticClass:"headerPic"},a._l(a.headerData,function(t,n){return e("dl",[e("dt",[a._v(a._s(t.name))]),a._v(" "),e("dd",[e("span",[a._v(a._s("￥"+t.price))]),a._v(" "),e("svg",{staticClass:"peity",attrs:{height:"30",width:"70"}},[e("polyline",{staticStyle:{fill:"none",stroke:"#5a8bf9","stroke-width":"1"},attrs:{points:t.pic}})])])])}))]),a._v(" "),e("div",{staticClass:"headerChoose"},[e("ul",[a._m(1),a._v(" "),a._m(2),a._v(" "),e("li",{on:{click:a.toLogin}},[e("img",{attrs:{src:"/static/img/headerlist3.png"}}),a._v(" "),e("span",[a._v("登录注册")])])])]),a._v(" "),e("div",{staticClass:"headerCounty"},[e("img",{attrs:{src:"/static/img/countyImg.png"}}),a._v(" "),e("span",{on:{click:a.changeLaugage}},[a._v("简体中文")])])])]),a._v(" "),e("div",{staticClass:"stein",staticStyle:{width:"100%",height:"120px"}}),a._v(" "),e("div",{staticClass:"headerBtmWarp"},[e("div",{staticClass:"haderBom"},[a._m(3),a._v(" "),e("div",{staticClass:"buttonGup"},[e("ul",[e("li",{staticStyle:{background:"linear-gradient(#4e66a7, #403f72)","border-radius":"10px"},on:{click:function(t){a.activeBtn(0,t)}}},[e("img",{staticClass:"imgo1",attrs:{src:"/static/img/headerbtn1bg1.png"}}),a._v(" "),e("img",{staticClass:"imgt1",staticStyle:{transform:"translateY(-35px) translateX(-81px)"},attrs:{src:"/static/img/headerbtn1bg2.png"}}),a._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-52px) translateX(40px)",display:"inline-block","letter-spacing":"2px"}},[a._v("排行榜")])]),a._v(" "),e("li",{staticStyle:{"background-image":"url('/static/img/headerbtn2.png')"},on:{click:function(t){a.activeBtn(1,t)}}},[e("img",{staticClass:"imgo2",attrs:{src:"/static/img/headerbtn2bg1.png"}}),a._v(" "),e("img",{staticClass:"imgt2",staticStyle:{transform:"translateY(-50px) translateX(-107px)"},attrs:{src:"/static/img/headerbtn2bg2.png"}}),a._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-57px) translateX(0px)","letter-spacing":"2px",display:"inline-block"}},[a._v("交易平台")])]),a._v(" "),e("li",{staticStyle:{"background-image":"url('/static/img/headerbtn3.png')"},on:{click:function(t){a.activeBtn(2,t)}}},[e("img",{staticClass:"imgo2",attrs:{src:"/static/img/headerbtn3bg1.png"}}),a._v(" "),e("img",{staticClass:"imgt2",staticStyle:{transform:"translateY(-31px) translateX(-70px)"},attrs:{src:"/static/img/headerbtn3bg2.png"}}),a._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-38px) translateX(30px)","letter-spacing":"2px",display:"inline-block"}},[a._v("币圈百科")])]),a._v(" "),e("li",{staticStyle:{"background-image":"url('/static/img/headerG.png')"},on:{click:function(t){a.activeBtn(3,t)}}},[e("img",{staticClass:"imgo2",attrs:{src:"/static/img/headerbtn4bg1.png"}}),a._v(" "),e("img",{staticClass:"imgt2",staticStyle:{transform:"translateY(-40px) translateX(-70px)"},attrs:{src:"/static/img/headerbtn4bg2.png"}}),a._v(" "),e("span",{staticStyle:{color:"#fff",transform:"translateY(-47px) translateX(-6px)","letter-spacing":"2px",display:"inline-block"}},[a._v("ICO项目汇总")])])])])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("dl",{staticClass:"headerlogo"},[t("dt",[t("img",{attrs:{src:"/static/img/headerlogo.png"}})])])},function(){var a=this.$createElement,t=this._self._c||a;return t("li",[t("img",{attrs:{src:"/static/img/headerlist1.png"}}),this._v(" "),t("span",[this._v("智能情报机器")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("li",[t("img",{attrs:{src:"/static/img/headerlist2.png"}}),this._v(" "),t("span",[this._v("APP下载")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"inputGup"},[t("input",{attrs:{type:"text",placeholder:"请输入需要查询的区块地址"}}),this._v(" "),t("input",{attrs:{type:"text",placeholder:"输入需要搜索代币号"}}),this._v(" "),t("span",[this._v("ETH")]),this._v(" "),t("button",{staticClass:"Hbtn1"},[t("img",{attrs:{src:"/static/img/headersearch.png"}})]),this._v(" "),t("button",{staticClass:"Hbtn2"},[t("img",{attrs:{src:"/static/img/headersearch.png"}})])])}]};var i={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"footerWarp"},[e("div",{staticClass:"footerTopWarp"},[e("div",{staticClass:"footerTop"},[e("p",[a._v("友情链接：")]),a._v(" "),e("ul",a._l(a.linkList,function(t,n){return e("li",[a._v("\n\t\t\t\t\t\t\t\t"+a._s(t)+"\n\t\t\t\t\t\t\t")])}))])]),a._v(" "),a._m(0)])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"footerBomWarp"},[e("div",{staticClass:"footerBom"},[e("div",{staticClass:"Bom1"},[e("img",{attrs:{src:"/static/img/indexlogo.png"}}),a._v(" "),e("dl",[e("dt",[a._v("SODUODUO")]),a._v(" "),e("dd",[a._v("查币就去搜多多")])]),a._v(" "),e("ul",{staticClass:"ul1"},[e("li",[a._v("关于我们 "),e("span",[a._v("|")])]),a._v(" "),e("li",[a._v("联系我们 "),e("span",[a._v("|")])]),a._v(" "),e("li",[a._v("常见问题 "),e("span",[a._v("|")])]),a._v(" "),e("li",[a._v("下载APP   ")])]),a._v(" "),e("div",{staticClass:"ul2W"},[e("ul",{staticClass:"ul2"},[e("li",[e("img",{attrs:{src:"/static/img/footerWein.png"}})]),a._v(" "),e("li",[e("img",{attrs:{src:"/static/img/footerWeibo.png"}})]),a._v(" "),e("li",[e("img",{attrs:{src:"/static/img/footerQQ.png"}})]),a._v(" "),e("li",[e("img",{attrs:{src:"/static/img/footerPlant.png"}})])])]),a._v(" "),e("p",[a._v("Copyright ©2018 Souduoduo Ltd. All Rights Reserved.")])])])])}]};var o={components:{Header:e("vSla")(n,r,!1,function(a){e("KOz/")},"data-v-4faa63a4",null).exports,Footer:e("vSla")({data:function(){return{linkList:["火星财经","比特头条","币源社区","链向财经","区块网","COBO钱包","鱼池","链闻","币易","未来财经","易派支付","金色财经","芭比财经"]}}},i,!1,function(a){e("DBkq")},"data-v-89a4b8fa",null).exports}},p={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"Warp"},[t("Header"),this._v(" "),t("div",{staticClass:"warp"},[t("router-view")],1),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var s=e("vSla")(o,p,!1,function(a){e("M3bb")},"data-v-0fafe786",null);t.default=s.exports},DBkq:function(a,t,e){var n=e("rxp/");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("FIqI")("2ca561cd",n,!0,{})},"KOz/":function(a,t,e){var n=e("z9SE");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("FIqI")("4c815754",n,!0,{})},M3bb:function(a,t,e){var n=e("YXvG");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("FIqI")("8ae92c66",n,!0,{})},YXvG:function(a,t,e){(a.exports=e("UTlt")(!1)).push([a.i,"\n.Warp[data-v-0fafe786] {\n  width: 100%;\n  min-height: 100%;\n}\n.Warp .warp[data-v-0fafe786] {\n    width: 1200px;\n    min-height: 100px;\n    margin: auto;\n}\n",""])},"rxp/":function(a,t,e){(a.exports=e("UTlt")(!1)).push([a.i,"\n.footerWarp[data-v-89a4b8fa] {\n  width: 100%;\n  margin-top: 80px;\n  height: 100%;\n}\n.footerWarp > .footerTopWarp[data-v-89a4b8fa] {\n    width: 100%;\n    height: 128px;\n    background-color: #11161e;\n}\n.footerWarp > .footerTopWarp > .footerTop[data-v-89a4b8fa] {\n      width: 1200px;\n      height: 128px;\n      margin: auto;\n      padding: 26px 0 0 0;\n}\n.footerWarp > .footerTopWarp > .footerTop > p[data-v-89a4b8fa] {\n        color: #fff;\n        margin-left: 2px;\n        margin-bottom: 15px;\n        font-size: 12px;\n}\n.footerWarp > .footerTopWarp > .footerTop > ul[data-v-89a4b8fa] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        margin-left: 2px;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        font-size: 12px;\n}\n.footerWarp > .footerTopWarp > .footerTop > ul > li[data-v-89a4b8fa] {\n          width: 10%;\n          margin-bottom: 12px;\n          color: #aebbcf;\n          cursor: pointer;\n}\n.footerWarp > .footerBomWarp[data-v-89a4b8fa] {\n    width: 100%;\n    height: 300px;\n    background-color: #08090e;\n}\n.footerWarp > .footerBomWarp > .footerBom[data-v-89a4b8fa] {\n      width: 1200px;\n      margin: auto;\n      color: #fff;\n      height: 300px;\n      background-color: #08090e;\n      text-align: center;\n      padding: 55px 0 0 0;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1[data-v-89a4b8fa] {\n        text-align: center;\n        display: inline-block;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > img[data-v-89a4b8fa] {\n          margin-right: 0px;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > dl[data-v-89a4b8fa] {\n          float: right;\n          -webkit-transform: translateY(10px) translateX(-95px);\n                  transform: translateY(10px) translateX(-95px);\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > dl > dt[data-v-89a4b8fa] {\n            font-size: 17px;\n            font-weight: bold;\n            color: #fff;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > dl > dd[data-v-89a4b8fa] {\n            font-size: 14px;\n            color: #5a778b;\n            letter-spacing: 1.2px;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul1[data-v-89a4b8fa] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-top: 70px;\n          -webkit-transform: translateX(20px);\n                  transform: translateX(20px);\n          font-size: 12px;\n          color: #aebbcf;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul1 > li > span[data-v-89a4b8fa] {\n            margin: 0 29px;\n            color: #252833;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul2W[data-v-89a4b8fa] {\n          display: inline-block;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > .ul2W > .ul2[data-v-89a4b8fa] {\n            width: 138px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 29px;\n            margin-bottom: 10px;\n}\n.footerWarp > .footerBomWarp > .footerBom > .Bom1 > p[data-v-89a4b8fa] {\n          font-size: 12px;\n          color: #3f4753;\n}\n",""])},z9SE:function(a,t,e){(a.exports=e("UTlt")(!1)).push([a.i,"\n@charset \"UTF-8\";\n.headerWarp[data-v-4faa63a4] {\n  width: 100%;\n}\n.headerWarp > .headerwarp[data-v-4faa63a4] {\n    width: 100%;\n    height: 120px;\n    -webkit-box-shadow: 0px 0 5px -5px #ccc, 0 -5px 5px -5px #ccc, 0 5px 5px -5px #ccc, 0px 0 5px 1px #ccc;\n            box-shadow: 0px 0 5px -5px #ccc, 0 -5px 5px -5px #ccc, 0 5px 5px -5px #ccc, 0px 0 5px 1px #ccc;\n    /*右边阴影*/\n    border-top: 3px solid #4277ff;\n    position: fixed;\n    top: 0;\n    z-index: 1;\n    background-color: #fff;\n}\n.headerWarp > .headerwarp > header[data-v-4faa63a4] {\n      width: 1200px;\n      padding-top: 30px;\n      margin: auto;\n      height: 120px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.headerWarp > .headerwarp > header > .headerlogo[data-v-4faa63a4] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 16px;\n        margin-right: 54px;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dt[data-v-4faa63a4] {\n          width: 210px;\n          height: 60px;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dt > img[data-v-4faa63a4] {\n            width: 100%;\n            height: 100%;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd[data-v-4faa63a4] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-transform: translateY(10%);\n                  transform: translateY(10%);\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd[data-v-4faa63a4] > :nth-child(1) {\n            font-weight: bold;\n            margin-bottom: 5px;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd > :nth-child(1) > b[data-v-4faa63a4] {\n              color: #4073c3;\n}\n.headerWarp > .headerwarp > header > .headerlogo > dd[data-v-4faa63a4] > :nth-child(2) {\n            color: #939497;\n            font-size: 14px;\n            letter-spacing: 1px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp[data-v-4faa63a4] {\n        display: inline-block;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic[data-v-4faa63a4] {\n          margin-top: 9px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 12px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic > dl[data-v-4faa63a4] {\n            width: 156px;\n            margin-right: 10px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic > dl > dt[data-v-4faa63a4] {\n              color: #4277ff;\n              margin-bottom: 10px;\n}\n.headerWarp > .headerwarp > header > .headerPicWarp > .headerPic > dl > dd > svg[data-v-4faa63a4] {\n              display: inline-block;\n              vertical-align: middle;\n              margin-left: 10px;\n}\n.headerWarp > .headerwarp > header > .headerChoose[data-v-4faa63a4] {\n        color: #333;\n        margin-top: 21px;\n}\n.headerWarp > .headerwarp > header > .headerChoose > ul[data-v-4faa63a4] {\n          width: 315px;\n          font-size: 14px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n}\n.headerWarp > .headerwarp > header > .headerChoose > ul > li[data-v-4faa63a4] {\n            cursor: pointer;\n}\n.headerWarp > .headerwarp > header > .headerChoose > ul > li > img[data-v-4faa63a4] {\n              vertical-align: bottom;\n              margin-right: 4px;\n}\n.headerWarp > .headerwarp > header > .headerCounty[data-v-4faa63a4] {\n        color: #333;\n        font-size: 14px;\n        margin-left: 27px;\n        margin-top: 15px;\n}\n.headerWarp > .headerwarp > header > .headerCounty > img[data-v-4faa63a4] {\n          width: 30px;\n          vertical-align: middle;\n          height: 30px;\n          border-radius: 50%;\n          margin-right: 5px;\n}\n.headerWarp > .headerwarp > header > .headerCounty > span[data-v-4faa63a4] {\n          position: relative;\n}\n.headerWarp > .headerwarp > header > .headerCounty > span[data-v-4faa63a4]::after {\n          display: inline-block;\n          content: '';\n          position: absolute;\n          top: 7px;\n          right: -13px;\n          z-index: 10;\n          border: 4px solid #000;\n          border-top: 4px solid #000;\n          border-right: 4px solid transparent;\n          border-bottom: 4px solid transparent;\n          border-left: 4px solid transparent;\n}\n.headerWarp > .headerBtmWarp[data-v-4faa63a4] {\n    width: 100%;\n    height: 200px;\n}\n.headerWarp > .headerBtmWarp > .haderBom[data-v-4faa63a4] {\n      width: 1200px;\n      height: 200px;\n      margin: auto;\n      padding-top: 21px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup[data-v-4faa63a4] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 0 5px;\n        position: relative;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup[data-v-4faa63a4] > :nth-child(1) {\n          padding: 0 0 0 100px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > input[data-v-4faa63a4] {\n          width: 587px;\n          height: 49px;\n          padding: 0 0 0 30px;\n          border: 1px solid #dcdcdc;\n          border-radius: 50px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > span[data-v-4faa63a4], .headerWarp > .headerBtmWarp > .haderBom > .inputGup button[data-v-4faa63a4] {\n          position: absolute;\n          top: 0;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > span[data-v-4faa63a4] {\n          top: 16px;\n          left: 30px;\n          font-size: 12px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > span[data-v-4faa63a4]::after {\n          content: '';\n          border: 4px solid;\n          border-top: 4px solid;\n          border-right: 4px solid transparent;\n          border-bottom: 4px solid transparent;\n          border-left: 4px solid transparent;\n          position: absolute;\n          top: 6px;\n          right: -15px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > button[data-v-4faa63a4] {\n          width: 37px;\n          cursor: pointer;\n          height: 37px;\n          border-radius: 50%;\n          border: none;\n          text-align: center;\n          outline: none;\n          background-color: #556fb5;\n          line-height: 46px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > .Hbtn1[data-v-4faa63a4] {\n          top: 6px;\n          left: 545px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .inputGup > .Hbtn2[data-v-4faa63a4] {\n          top: 6px;\n          right: 14px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .buttonGup[data-v-4faa63a4] {\n        cursor: pointer;\n        width: 100%;\n        margin-top: 19px;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .buttonGup > ul[data-v-4faa63a4] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n}\n.headerWarp > .headerBtmWarp > .haderBom > .buttonGup > ul > li[data-v-4faa63a4] {\n            overflow: hidden;\n            font-size: 20px;\n            width: 284px;\n            height: 90px;\n}\n",""])}});
//# sourceMappingURL=0.5b625c511e475a76165b.js.map