<template>
	<div class="headerWarp">
		<div class="headerwarp">
			<header>

				<dl class="headerlogo">
					<dt @click='toIdex'>
						<img src="/static/img/headerlogo.png">
					</dt>
					
				</dl>

				<div  class="headerPicWarp">
					<div class="headerPic">
						<dl v-for='(item,index) in headerData'>
							<dt>{{item.name}}</dt>
							<dd>
								<span>{{'￥' + item.price}}</span>
								 <svg class="peity" height="30" width="70" >	
									 <polyline :points="item.pic" style="fill:none;stroke:#5a8bf9;stroke-width:1" />
								</svg>
							</dd>
							
						</dl>

					
					</div>
				</div>

				<div class="headerChoose">
					<ul>
						<li @click='toRobot'>
							<img src="/static/img/headerlist1.png">
							<span>智能情报机器</span>
						</li>
						<li>
							<img src="/static/img/headerlist2.png">
							<span>APP下载</span>
						</li>
						<li @click='toLogin'>

							

							<img src="/static/img/headerlist3.png">
							<span :title="loginInfo ? loginInfo : '' " style="transform: translateY(2px);display: inline-block;    width: 67px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ">{{loginInfo ? loginInfo : '登录注册'}}</span>
							<span v-if='loginInfo && loginInfoActive' style="position: absolute;top: 20px;left: -10px;">
								<img src="/static/img/logindui.png">
								<span class="userInfo" style="">
									<span @click='toUser(0)' style="width: 100%;display: inline-block;margin-bottom: 10px;">个人中心</span>
									<span @click='toUser(1)' style="width: 100%;display: inline-block;">退出登录</span>
								</span>
							</span>
						</li>
					</ul>
				</div>

				<div class="headerCounty">
					<img src="/static/img/countyImg.png">
					<span @click='changeLaugage'>{{language}}</span>
					<span class="afters"></span>
					<transition name="custom-classes-transition" enter-active-class="animated slideInDown "
    					leave-active-class="animated slideInUp ">
						<div v-if="laugageShow" style="position: absolute;top:30px;width: 150%;left:-5px;min-height: 100%;border:1px solid #e5e5e5;border-radius: 20px;margin-top: 10px;background-color: #fff;padding: 10px 0px 10px 5px;">
							<p  @click='chooseLugage(id)' v-for="(ii,id) in languageList" style="margin-bottom: 10px;">
								<img style="vertical-align: middle;width: 30px;height: 30px;" src="/static/img/countyImg.png">
								<span>{{ii}}</span>
							</p>
						</div>
					</transition>
				</div>

			</header>	
		</div>
		<div class="stein" style="width: 100%;height: 120px;"></div>

		<div v-if='show' class="headerBtmWarp">
			<div class="haderBom">
				<div class="inputGup">
					<transition name="custom-classes-transition"

					 enter-active-class="animated flipInX"
    					leave-active-class="animated flipOutX">
						<div class="Tip" v-if='tip'>
							<div  class="hb" style="width: 45%;float: left;overflow: hidden;margin-top: 40px;">
									<div style="width: 100%;height: 30px;;padding-left: 20px;line-height: 20px;border-bottom: 1px solid #e5e5e5;">货币</div>
									<div style="padding: 5px;" >
										<img src="/static/img/ejoy.png" style="vertical-align: middle;">
										<p  class="activesssss" @click='unquery' style="height: 35px;width: 100px;color: #676a6c;text-decoration: none;font-size: 14px;display: inline-block;cursor: pointer;width: 87%;line-height: 35px;">dsd</p>

									</div>
								</div>

								<div class="pt" style="width: 45%;float: right;margin-top:40px;">
									<div style="width: 100%;height: 30px;padding-left: 20px;line-height: 20px;border-bottom: 1px solid #e5e5e5;">市场</div>
									<div style="min-height: 100px;padding: 5px;">
										<img src="/static/img/ejoy.png" style="vertical-align: middle;">
										<p  class="activesssss" @click='unquery'style="height: 35px;width: 100px;color: #676a6c;text-decoration: none;font-size: 14px;display: inline-block;cursor: pointer;width:87%;line-height: 35px;">dsd</p>
									</div>
									
								</div>	
					</div>
			</transition>

					<input class="lefleflef"  v-model='quAddress' type="text" placeholder="请输入需要查询的区块地址">
					<input style="position: relative;z-index: 2;" @input='query'  @blur='unquery' @keydown.enter='seIconYype' v-model='iconTypeModel' type="text" placeholder="输入关键词搜索币种、平台">
					<span @click='iconTypeShow'  class="iconType" >
						<span style="display: inline-block;width: 30px;overflow-x: hidden;text-overflow: ellipsis;white-space: nowrap;">{{icon}}</span>
						<transition name="custom-classes-transition"

					 enter-active-class="animated flipInX"
    					leave-active-class="animated flipOutX">
							<span v-if='iconTypeShows'  style="
							position: absolute;
							top:20px;
							width: 50px;
							left: -10px;
							text-align: center;
							font-size: 12px;
							background-color: #fff;
							min-height: 30px;
							padding-bottom: 5px;
							padding-top:10px;
							display: inline-block;
							border:1px solid #e5e5e5;
							z-index: 2;
							border-radius: 20px;"

							
							>
								<span @click='iconTypeChoose(idd)' class="iconTypeSpan" v-for='(itm,idd) in iconList' style="width: 80%;margin-bottom: 10px;border-radius: 10px;display: inline-block;cursor:pointer;">{{itm}}</span>
							</span>
						</transition>

					</span>
					<button class="Hbtn1">
						<img src="/static/img/headersearch.png">
					</button>
					<button  @click='seIconYype' class="Hbtn2">
						<img src="/static/img/headersearch.png">
					</button>
				</div>

				<div class="buttonGup">
					<ul>
						<!-- background-image: url('/static/img/headerbtn1.png') -->
						<li @click='activeBtn(0,$event)' style=" background: linear-gradient(#4e66a7, #403f72);border-radius: 10px;">
							<img class="imgo1" src="/static/img/headerbtn1bg1.png">
							<img style="transform: translateY(-35px) translateX(-81px);" class="imgt1" src="/static/img/headerbtn1bg2.png">
							<span style="color: #fff;transform: translateY(-52px) translateX(40px);display: inline-block;letter-spacing: 2px;">排行榜</span>
						</li>
						<li @click='activeBtn(1,$event)'  style="background-image: url('/static/img/headerbtn2.png')">
							<img  class="imgo2" src="/static/img/headerbtn2bg1.png">
							<img style="transform: translateY(-50px) translateX(-107px);" class="imgt2" src="/static/img/headerbtn2bg2.png">
							<span style="color: #fff;transform: translateY(-57px) translateX(0px);letter-spacing: 2px;display: inline-block;">交易平台</span>
						</li>

						<li @click='activeBtn(2,$event)'  style="background-image: url('/static/img/headerbtn3.png')">
							<img  class="imgo2" src="/static/img/headerbtn3bg1.png">
							<img style="transform: translateY(-31px) translateX(-70px);" class="imgt2" src="/static/img/headerbtn3bg2.png">
							<span style="color: #fff;    transform: translateY(-38px) translateX(30px);letter-spacing: 2px;display: inline-block;">币圈百科</span>
						</li>

						<li @click='activeBtn(3,$event)'  style="background-image: url('/static/img/headerG.png');position: relative;">
							<img  class="imgo2" src="/static/img/headerbtn4bg1.png">
							<img style="transform: translateY(-40px) translateX(-70px);" class="imgt2" src="/static/img/headerbtn4bg2.png">
							<span style="color: #fff;    transform:translateY(-47px) translateX(-6px);letter-spacing: 2px;display: inline-block;">ICO项目汇总</span>
							<span style="    float: right;
						    display: inline-block;
						    transform: translateY(-47px) translateX(-35px);
						    font-size: 12px;
						    color: rgb(144, 144, 144);">即将上线</span>
						</li>

					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return({
				headerData:[
					{
						name:'BTC/Bitfinex',
						price:'48321.98',
						pic:'0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5'
					}
					,
					{
						name:'ETH/Binance',
						price:'3761.48',
						pic:'0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5'
					},
					{
						name:'EOS/Bitfinex',
						price:'69.83',
						pic:'0 3.1511627906976756 2.962962962962963 6.244186046511624 5.925925925925926 6.02325581395349 8.88888888888889 5.802325581395355 11.851851851851851 4.697674418604642 14.814814814814813 0.5 17.77777777777778 1.1627906976744242 20.74074074074074 4.034883720930237 23.703703703703702 5.360465116279066 26.666666666666664 8.674418604651157 29.629629629629626 14.197674418604645 32.59259259259259 15.081395348837205 35.55555555555556 11.325581395348832 38.51851851851852 19.5 41.48148148148148 16.62790697674419 44.44444444444444 14.639534883720925 47.407407407407405 15.523255813953485 50.37037037037037 17.953488372093027 53.33333333333333 13.534883720930232 56.29629629629629 14.41860465116279 59.25925925925925 13.534883720930232 62.22222222222222 10.220930232558139 65.18518518518518 10.220930232558139 68.14814814814814 12.430232558139537 71.11111111111111 14.639534883720925 74.07407407407408 12.430232558139537 77.03703703703704 13.313953488372086 80 15.523255813953485 80 19.5'
					}
				],
				quAddress:'',
				iconTypeModel:'',
				loginInfo:'',
				loginInfoActive:false,
				show:true,
				tip:false,
				laugageShow:false,
				language:'简体中文',
				languageList:['简体中文','繁体中文','Deutsch','English','Rosstsch'],
				iconList:['BTN','RNG','IJF','PHX'],
				iconTypeShows:false,
				icon:'ETH'
			})
		},
		methods:{
			iconTypeChoose(id){
				this.icon = this.iconList[id]
			},
			iconTypeShow(){
				if(this.iconTypeShows){
					this.iconTypeShows = false
					return
				}
				this.iconTypeShows = true
			},
			chooseLugage(id){
				this.language = this.languageList[id]
				this.laugageShow = false

			},
			query(){
				console.log(this.iconTypeModel)
				this.tip = true
			},
			unquery(){
				this.tip = false

			},
			toLogin(e){
				if(e.target.innerText == '退出登录'){
					this.loginInfo = ''
					localStorage.removeItem('login')
					location.reload()
					return
				}
				if(this.loginInfo){
					if(this.loginInfoActive){
						this.loginInfoActive = false	
					}else{
						this.loginInfoActive = true	

					}
					
					return
				}
				this.$router.push('/login')
			},
			activeBtn(id,e){
				switch (id){
					case 0:
						this.$router.push('/index/ranking')
						break;
					case 1:
						this.$router.push('/index/trading')
						break;
					case 2:
						this.$router.push('/index/ency')
						break;
					case 3:
						alert('即将上线')
						return
						this.$router.push('/index/ency')
						break;
				}
				console.log(id)


				
			},
			changeLaugage(){
				if(this.laugageShow == true){
					this.laugageShow = false
					return
				}
				this.laugageShow = true
				console.log('语言')
			},
			toIdex(){
				this.$router.push('/index/index')
			},
			seIconYype(){
				this.$router.push({path:'/index/searchIcontypes',query:{searchText:this.iconTypeModel}})
				console.log(this.iconTypeModel)
			},
			toUser(id){
				switch (id){
					case 0:
						console.log('去个人中心')
						this.$router.push('/index/my')
						break;
					case 1:
						console.log('去退出登录')
						this.loginInfo = ''
						localStorage.removeItem('login')
						this.$router.push('/index/index')
						break;
				}

			},
			toRobot(){
				this.$router.push('/robot')
			}
		},
		mounted(){
			this.loginInfo = localStorage.login
			console.log(localStorage.login)
			if(this.$route.name == 'robot'){

				this.show =  false
			}
		}
	}

</script>


<style lang="scss" scoped>
.activesssss:hover{
	color: #fff;
	background-color: #3499da;
	
}
.Tip{
	position: absolute;top:70px;width: 585px;top: 19px;left: 609px;min-height: 100px;background-color: #fff;padding: 0;z-index: 2;padding-left: 40px;padding-right: 60px;border:1px solid #e5e5e5;border-radius: 20px;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}


@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}




@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -30%, 0);
    transform: translate3d(0, -30%, 0);
    visibility: visible;
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}


@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 0%, 0);
    transform: translate3d(0, 0%, 0);
    visibility: visible;
    opacity: 1;

  }

  to {
    -webkit-transform: translate3d(0, -30%, 0);
    transform: translate3d(0, -30%, 0);
    opacity: 0;

  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}





.iconTypeSpan:hover{
	background-color: #e5e5e5;
}






	.headerWarp{
		width: 100%;
		>.headerwarp{
			width: 100%;
			height: 120px;
			box-shadow: 0px 0 5px -5px #ccc, /*左边阴影*/
             			0 -5px 5px -5px #ccc, /*顶部阴影*/
             			0 5px 5px -5px #ccc, /*底部阴影*/
            			0px 0 5px 1px #ccc; /*右边阴影*/
			border-top: 3px solid #4277ff;
			position: fixed;
			top: 0;
			z-index: 3;
			background-color: #fff;
				>header{
					width: 1200px;
					padding-top:30px; 
					margin: auto;
					height: 120px;
					display: flex;
					>.headerlogo{
					display: flex;
					font-size: 16px;
					margin-right: 54px;
					>dt{
						width: 210px;
						height: 60px;
						cursor: pointer;
						>img{
							width: 100%;
							height: 100%;
						}
					}
					>dd{
						display: flex;
						flex-direction: column;
						transform: translateY(10%);
						>:nth-child(1){
							font-weight: bold;
							margin-bottom: 5px;
							>b{
								color: #4073c3;
							}
						}
						>:nth-child(2){
							color: #939497;
							font-size: 14px;
						letter-spacing:1px;

						}
					}
					}
					>.headerPicWarp{
					display: inline-block;
					>.headerPic{
						margin-top: 9px;
						display: flex;
						font-size: 12px;
						>dl{
							width: 156px;
							margin-right: 10px;
							>dt{
								color: #4277ff;
								margin-bottom: 10px;

							}
							>dd{
								>svg{
									display: inline-block;
									vertical-align: middle;
									margin-left: 10px;
								}
							}
						}
					}
					}
					>.headerChoose{
					color: #333;
					margin-top: 21px;
					>ul{
						width: 315px;

						font-size: 14px;
						display:flex;
						justify-content: space-between;
						>li{
							position: relative;
							cursor: pointer;
							.userInfo{
								position: absolute;width: 100%;height: 100%;text-align: center;top:13px;
								>span:hover{
									color:#4277ff;
								}
							}
							>img{
								vertical-align: bottom;
								margin-right: 4px;
							}
						}
					}
					}
					>.headerCounty{
					color: #333;
					font-size: 14px;
					margin-left: 20px;
					margin-top:15px;
					position: relative;
					cursor: pointer;
						>img{
							width: 30px;
							vertical-align: middle;
							height: 30px;
							border-radius:50%;
							margin-right: 5px;
						}
						>span:not(.afters){
							    position: relative;
							    display: inline-block;
							    width: 57px;
							    overflow-x: hidden;
							    transform: translateY(4px);
							    text-overflow: ellipsis;
							    white-space: nowrap;


						}
						>.afters{
							display: inline-block;
							position: absolute;
							top: 13px;
							right: -13px;
							z-index: 10;
							border:4px solid #000;
							border-top:4px solid #000;
							border-right:4px solid transparent;
							border-bottom:4px solid transparent;
							border-left:4px solid transparent;

						}
					}
				}

		}

		>.headerBtmWarp{
			width: 100%;
			height: 200px;
			>.haderBom{
				width: 1200px;
				height: 200px;
				margin: auto;
				padding-top:21px; 
				>.inputGup{
					display: flex;
					justify-content: space-between;
					padding: 0 5px;
					position: relative;
					>.lefleflef{
						padding: 0 0 0 100px;
					}
					>.iconType{
						cursor: pointer;

					}
					
					>input{
						width: 587px;
						height: 49px;
						padding:  0 0 0 30px;
						border:1px solid #dcdcdc;
						border-radius: 50px;
					}					
					>span,button{
						position: absolute;
						top: 0;
					}
					>span{
						
					    top: 16px;
						left: 30px;
						font-size: 12px;
					}
					>span::after{
						border:4px solid;
						content :'';
						border-top:4px solid  ;
						border-right:4px solid transparent;
						border-bottom:4px solid transparent;
						border-left:4px solid transparent;
						position: absolute;
						top: 5px;
						right: -5px;

					}
					>button{
						width: 37px;
						cursor: pointer;
					    height: 37px;
					    border-radius: 50%;
					    border: none;
					    text-align: center;
					    outline: none;
					    background-color: #556fb5;
					    line-height: 46px;
					}
					>.Hbtn1{
					    top: 6px;
						left: 545px;
					}
					>.Hbtn2{
						top: 6px;
   						right: 14px;
   						z-index: 2;
					}
				}
				>.buttonGup{
					cursor: pointer;
					width: 100%;
					margin-top: 19px;
					>ul{
						display: flex;

						justify-content: space-between;
						>li{
							overflow: hidden;
							font-size: 20px;
							width: 284px;
							height: 90px;
							>.imgt{
								
							}
						}
					}
				}
			}
		}
		
	}
</style>