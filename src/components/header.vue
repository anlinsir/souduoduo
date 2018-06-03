<template>
	<div class="headerWarp">
		<div class="headerwarp">
			<header>
				<dl class="headerlogo">
					<dt>
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
						<li>
							<img src="/static/img/headerlist1.png">
							<span>智能情报机器</span>
						</li>
						<li>
							<img src="/static/img/headerlist2.png">
							<span>APP下载</span>
						</li>
						<li @click='toLogin'>
							<img src="/static/img/headerlist3.png">
							<span>登录注册</span>
						</li>
					</ul>
				</div>

				<div class="headerCounty">
					<img src="/static/img/countyImg.png">
					<span @click='changeLaugage'>简体中文</span>
				</div>

			</header>	
		</div>
		<div class="stein" style="width: 100%;height: 120px;"></div>

		<div class="headerBtmWarp">
			<div class="haderBom">
				<div class="inputGup">
					<input type="text" placeholder="请输入需要查询的区块地址">
					<input type="text" placeholder="输入需要搜索代币号">
					<span>ETH</span>
					<button class="Hbtn1">
						<img src="/static/img/headersearch.png">
					</button>
					<button class="Hbtn2">
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

						<li @click='activeBtn(3,$event)'  style="background-image: url('/static/img/headerG.png')">
							<img  class="imgo2" src="/static/img/headerbtn4bg1.png">
							<img style="transform: translateY(-40px) translateX(-70px);" class="imgt2" src="/static/img/headerbtn4bg2.png">
							<span style="color: #fff;    transform:translateY(-47px) translateX(-6px);letter-spacing: 2px;display: inline-block;">ICO项目汇总</span>
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
				]
			})
		},
		methods:{
			toLogin(){
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
				}
				console.log(id)


				
			},
			changeLaugage(){
				alert('暂不支持其他语言')
			}
		}
	}

</script>


<style lang="scss" scoped>
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
			z-index: 1;
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
							cursor: pointer;
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
					margin-left: 27px;
					margin-top:15px;
						>img{
							width: 30px;
							vertical-align: middle;
							height: 30px;
							border-radius:50%;
							margin-right: 5px;
						}
						>span{
							position: relative;
						}
						>span::after{
							display: inline-block;
							content: '';
							position: absolute;
							top: 7px;
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
					>:nth-child(1){
						padding: 0 0 0 100px;
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
						content:'';
						border:4px solid;
						border-top:4px solid  ;
						border-right:4px solid transparent;
						border-bottom:4px solid transparent;
						border-left:4px solid transparent;
						position: absolute;
						top: 6px;
						right: -15px;

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