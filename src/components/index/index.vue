<template>
	<div>
		<div class="warp">
			<div class="indexLeft">
				<div class="indexLeftTopChoose">
					<ul>
						<li @click='choosed(index)' :class="active == index ? 'active' : '' "  v-for='(item,index) in nav' :key='index'>{{item}}</li>					

					</ul>

					<div class="TopChooseRight">
						<div  @click='ShowmoneyItem'  class="yuan">
							<span :title='money' style="display: inline-block;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{money}}</span>
				<transition name="custom-classes-transition"

					 enter-active-class="animated flipInX"
    					leave-active-class="animated flipOutX">

							<div  v-if='moneyShow' class="yuanItem">
								<p @click='choosemoneyItem(id)' v-for='(ii,id) in moneyList'>{{ii}}</p>
							</div>
						</transition>

						</div>
						<div class="flesh"><img src="/static/img/refresh.png"></div>
					<!-- 	<ul> 
							<li @click='changeActives(index)' :class="actives == index ? 'actives' : '' "  v-for='(item,index) in 5'>{{item}}</li>
						</ul> -->

						<div class="block" style="width: 100px; position: absolute;top: 4px;left: 51px;">
						  <el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="width: 100px;"
						    layout="prev, pager, next"
						    :total="50" >
						  </el-pagination>
						</div>
					</div>


				</div>

				<div class="indexLeftBomTable">
					<table class="dataTable">
						<thead>
							<tr>
								<td :class="'th' + (index) " v-for='(item,index) in thead' :key='index'>{{item}}</td>
							</tr>
						</thead>
						<tbody>
							<tr  @click='toIconDetali' v-for='(item,index) in tbody' :key='index'>
								<td class="td0">{{item.id}}</td>
								<td class="name td1"><img :src="item.img" /><span>{{item.name}}</span></td>
								<td class="td2">{{item.circulationVale}}</td>
								<td class="td3">{{item.price}}</td>
								<td class="td4">{{item.sum}}</td>
								<td class="td5">{{item.transaction}}</td>
								<td class="td6" >{{item.rises}}</td>
								<td class="td7">
									<svg width='80' height='20' style='margin-top: 20px;'>
										 <polyline :points="item.tendency" style="fill:none;stroke:#3f7cdc;stroke-width:1" />
									</svg>
								</td>


							</tr>
							
						</tbody>

					</table>
					<div class="pagesW" style="text-align: center;width:100%; ">
						<div class="block" style="display: inline-block;width: 100px; top: 4px;left: 51px;">
						  <el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="width: 100px;"
						    layout="prev, pager, next"
						    :total="50" >
						  </el-pagination>
						</div>
					</div>

				</div>
			</div>



			<div  class="indexRight">
				<div class="newDeal">
					<div class="newDealTitle">
						<p @click='ann'>
							<span>交易所最新公告</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<ul>
						<li v-for='(item,index) in newDeal' :key='index'>
							<img :src="item.img">
							<span>{{item.text}}</span>
							<time>{{item.time}}</time>
						</li>
					</ul>
				</div>



				<div @click='Event' class="event">
					<p><img src="/static/img/calendar.png">币圈事件</p>
					<span class="point pointLeft"></span>
					<span class="point pointRitgh"></span>
				</div>



				<div class="scrollExpress">
					<div @click='toFalsh' class="scrollExpressTitle">
						<p>
							<span>滚动快讯</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<div class="scrollExpressInfo">
						<dl v-for='(item,index) in scrollExpressInfo' :key='index'>
							<dt>
								<span class="time"   :style="{color:item.iss ? '#f86b6b' : '', border:item.iss ? '1px solid #f86b6b' : ''}">{{item.time}}</span>
								<div class="line"></div>
							</dt>
							<dd>
								<p>{{item.text}}</p>
							</dd>
						</dl>
					</div>

				</div>



				<div class="rankingList">
					<div class="rankingListTitle">
						<p>
							<span>成交量排行榜</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<ul class="rankingListChoose">
						<li @click='changeRanChoose(index)' :class="rankingActives == index ? 'rankingActives' : 'rankingActives1' "  :key='index' v-for='(item,index) in rankingListChoose'>
							{{item}}
						</li>
					</ul>

					<table>
						<thead>
							<tr>
								<td>排名 </td>
								<td>名称</td>
								<td>成交额</td>

							</tr>
						</thead>
						<tbody>
							<tr  class="tbr" v-for='(item,index) in tbody' :key='index'>
								<td :style="{paddingLeft: item < 4 ?  '20px' : '0' , marginLeft:item < 4 ?  '0' : '-6px'}"><span v-if='item.id<4' style="width: 20px;
								height: 20px;
								background-color: #fba73e;
								color: #fff;
								text-align: center;
								line-height:20px; 
								display: inline-block;
								">{{item.id}}</span>{{item.id < 4 ? '' : item.id }}</td>
								<td style="color: #4277ff">{{item.name}}</td>
								<td>{{item.transaction}}</td>
								

							</tr>
						</tbody>	
					</table>


				</div>




				<div class="rOf">
					<div class="rOfTitle">
						<p>
							<span @click='rofChoose(index)' v-for='(item,index) in rof' :key='index' :class="rofActive == index ? 'rofActive' : '' ">{{item}}<img v-if='index == 1' src="/static/img/right_arrow.png"></span>
							
						</p>
					</div>	

					<ul class="rofData">
							<li @click='rofChooses(index)' v-for='(item,index) in rofData' :key='index' :class="rofActives == index ? 'rofActives' : '' ">{{item}}</li>
						
					</ul>

					<ul class="rofDatadetails">
						<li class="head"><span v-for='(item,index) in rofdetalislist' :key='index'>{{item}}</span></li>
						<li class="body" v-for='(items,index) in tbody'>
							<span style='width: 20px;height: 20px;transform: translateY(6px);display: inline-block;text-align: center;line-height: 20px;'><span v-if='items.id < 4' style='width: 20px;height: 20px;background-color: #fba73e;color: #FFF;display: inline-block;text-align: center;line-height: 20px;transform: translateY(0px);'>{{items.id}}</span>{{items.id >= 4 ? items.id : ''}}</span>
							<span>{{items.name}}</span>
							<span>{{items.price}}</span>
							<span :style="{color: parseFloat(items.rises) < 0 ? '#33b862' : 'red' }">{{items.rises}}</span>

							
						</li>
					</ul>

				</div>



				<div class="twitterMessages">
					<div class="twitterMessagesTitle">
						<p @click='toTwiter'>
							<span>推特消息</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<div class="message">
						<dl>
							<dt><img src="/static/img/"></dt>
							<dd>
								<p style="margin-bottom: 20px;">
									<span style="font-weight: bold;margin-bottom: 16px;display: inline-block;">Vitalik “Not giving away ETH”Buterin</span>
									<span style="line-height: 20px;">OTOH the foundation NOT having any of its ETH in a validator noOTOH the foundation NOT having any of its ETH in a validator noOTOH the foundation NOT having any of its ETH in a validator no</span>
								</p>
								<p style="padding-right: 15px;">
									<span style="display: block;margin-bottom: 11px;color: #9c9b9b;">中文翻译</span>
									<span style="line-height: 20px;">OTOH在验证者节点中没有任何ETH的的基础创造了相反的激励，并且最重要的是它拒绝获得“实地”知识。也许最好的基础是复制整个社区</span>
								</p>
							</dd>
						</dl>
					</div>
	

				</div>


				<div class="miningData">
					<div class="miningDataTitle">
						<p>
							<span>挖矿数据</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<ul class="minidataChoose">
						<li @click='minidatachange(index)' :class="minidataAvtive == index ? 'minidataAvtive' : '' " v-for='(item,index) in minidataChoose'>
							{{item}}
						</li>
					</ul>


					<ul class="data">
						<li v-for='(item,index) in data' :key='index'>
							<span class="left">{{item.left}}</span>
							<span class="right" :style="{color:item.color ? item.color : ''}">{{item.right}}</span>
							<span class="right" v-if='item.input'><input  type="number"  style="width: 100px;background-color: #e5e5e5;border:none;height: 30px;text-align: right;" />TH/s</span>	
						</li>

					</ul>


				</div>





				<div class="market">
					<div @click='toConcept' class="marketTitle">
						<p>
							<span>概念行情</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<div class="datar">
						<span v-for='(i,d) in datar'>{{i}}</span>
					</div>

				</div>


			</div>

		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return({
				nav:['货币','关注'],
				active:0,
				actives:0,
				rankingActives:0,
				thead:['#','名称','流通市值','价格','流通数量','成交额(24h)','涨幅(24h)','价格趋势(7D)'],
				tbody:[
					{
						id:1,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'

					},
					{
						id:2,
						img:'/static/img/eth.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:3,
						img:'/static/img/xrp.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:4,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:5,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:6,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:7,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					}
					
				],
				newDeal:[
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					},
					{
						img:'/static/img/newDealImg2.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					}
					,
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					},
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					},
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					}
					,
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					}
				],
				scrollExpressInfo:[
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现'
					},
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现',
						iss:true
					},
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现',
						iss:true
					},
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现'
					}
				],
				rankingListChoose:['币种','交易所'],
				rof:['涨幅','跌幅'],
				rofData:['1小时','24小时','一周'],
				rofActive:0,
				rofActives:0,
				rofdetalislist:['排名','名称','价格','涨幅'],
				minidataChoose:['比特币','莱特币'],
				minidataAvtive:0,
				data:[
					{
						left:'预计产量减半时间',
						right:'2020-05-26'
					},
					{
						left:'产量减半倒计时',
						right:'两年后'
					}
					,
					{
						left:'全网算力',
						right:'30865PH/s'
					},
					{
						left:'目前难度',
						right:'30865PH/s'
					},
					{
						left:'下次难度',
						right:'30865PH/s'
					},
					{
						left:'当前难度(1T*24h)',
						right:'30865PH/s'
					},
					{
						left:'下次难度(1T*24h)',
						right:'30865PH/s'
					},
					{
						left:'调整难度时间',
						right:'30865PH/s'
					},
					{
						left:'下次难度增幅',
						right:'30865PH/s'
					},
					{
						left:'已开采总数',
						right:'30865PH/s'
					},
					{
						left:'未开采总数',
						right:'30865PH/s'
					},
					{
						left:'您的算力',
						input:20
					},
					{
						left:'计算日收益',
						right:'30865PH/s',
						color:'#4277ff'
					}
					
				],
				datar:['数据存储','匿名货币','公正防伪','去中心化交易所','比特币山寨币','侧链概念','支付概念','平台币','资产交易','数据经济'],
				money:'人民币CNY',
				moneyList:['人民币CNY','美元USD'],
				moneyShow:false,
				currentPage:5

			})
		}
		,
		methods:{
			handleCurrentChange(val){
				this.currentPage =val
				console.log(val)
			},
			toIconDetali(){
				this.$router.push('/index/cion/1')
			},
			choosemoneyItem(id){
				this.money = this.moneyList[id]
				if(this.moneyShow){
					this.moneyShow =true
					return
				}
				this.moneyShow = false

			},
			ShowmoneyItem(){
				if(this.moneyShow){
					this.moneyShow =false
					return
				}
				this.moneyShow = true

			},
			choosed(index){
				this.active = index			
			},
			// changeActives(index){
			// 	this.actives = index
			// },
			changeRanChoose(index){
				this.rankingActives = index
			},
			rofChoose(index){
				this.rofActive = index
			},
			rofChooses(index){
				this.rofActives = index
			},
			minidatachange(index){
				this.minidataAvtive = index
			},
			toTwiter(){
				this.$router.push('/index/twitter')
			},
			ann(){
				this.$router.push('/index/announcement')
			},
			Event(){
				this.$router.push('/index/event')
			}
			,
			toConcept(){
				this.$router.push('/index/concept')

			},
			toFalsh(){
				this.$router.push('/index/flash')
			}
			

		}
	}
</script>


<style lang="scss" scoped>

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










	.warp{
		overflow: hidden;
		>.indexLeft{
			width: 866px;
			float: left;
			min-height:800px;
			>.indexLeftTopChoose{
				width: 866px;
				height: 58px;
				background-color: #f2f2f2;
				>ul{
					width: 264px;
					height: 58px;
					margin-left: 1px;
					float: left;
					display: flex;
					justify-content: space-between;
					>.active{background-color: #fff;border-top:2px solid #4277ff;color: #4277ff;}
					>li{
						width: 50%;
						height:58px;
						text-align: center;
						line-height: 58px;
						font-size: 16px;
						color: #333333;
					}
				}
				>.TopChooseRight{
					width: 296px;
					position: relative;
					height: 37px;
					float: right;

					margin-top: 9px;
					margin-right: 15px;
					>.yuan{
						position: absolute;
						top: 5px;
						width: 90px;
						border-radius: 5px;
						background-color: #fff;
						padding: 0 20px 0 10px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						left: -100px;
						font-size: 12px;
						color: #666;
						cursor: pointer;
						>.yuanItem{
							position: absolute;
							top:30px;
							left:0px;
							width: 90px;
							min-height: 20px;
							border:1px solid #e5e5e5;
							background-color: #fff;
							text-align: center;
							>p{
								height:20px;
								line-height: 20px;
								border-radius: 20px;
								display: inline-block;
								width: 90px;

							}
							>p:hover{
								background-color: #e5e5e5;
							}
						}
					}

					>.yuan::after{
						content: '';
						border:3px solid;
						position: absolute;
						top: 13px;
						right: 8px;
						border-top: 4px solid #000;
						border-right: 4px solid transparent;
						border-left: 4px solid transparent;
						border-bottom: 4px solid transparent;

					}
					>.flesh{
						width: 45px;
						height: 37px;
						cursor: pointer;

						text-align: center;line-height: 37px;
						margin-right: 9px;
						background-color: #fff;
					}
					>ul{
						width: 241px;
						height: 37px;
						background-color: #fff;
						float: right;
						transform: translateY(-37px);
						display: flex;
						justify-content: center;
						line-height: 37px;
						>.actives{color: #4277ff;}
						>li{
							margin-right: 22px;
							cursor: pointer;
						}
					}
				}
			}
			>.indexLeftBomTable{
				width: 866px;
				min-height: 500px;
				padding: 0 31px 0 17px;
				border:1px solid #e5e5e5;				
				>.dataTable{
					width: 100%;
					min-height: 300px;
					>thead{
						>tr{
							display: flex;
							border-bottom:1px solid #eeeeee;
							justify-content: space-between;
							>td{
								line-height: 50px;
								height: 50px;
								font-size: 12px;
								color: #666666;

								text-align: left;
							}
							>.th0{
								width: 40px;
							}
							>.th1{
								width: 186px;
							}
							>.th2{
								width: 100px;
							}
							>.th3{
								width: 90px;
							}
							>.th4{
								width: 116px;
							}
							>.th5{
								width: 118px;
							}
							>.th6{
								width: 90px;
							}
							>.th7{
								width: 81px;
							}
							

						}
					}
					>tbody{
						>:nth-last-child(1){
							border-bottom:1px solid #e5e5e5;
						}
						>tr{
							display: flex;
							font-size: 12px;
							color: #666666;
							justify-content:space-between;
							cursor: pointer;

							>td{
								/*margin-right: 45px;*/
								height: 55px;
								line-height: 55px;
								text-align: left;
							}
							>.td0{
								width: 40px;
							}
							>.td1{
								width: 186px;
							}
							>.td2{
								width: 100px;
							}
							>.td3{
								width: 90px;
							}
							>.td4{
								width: 116px;
							}
							>.td5{
								width: 118px;
							}
							>.td6{
								width: 90px;
							}
							>.td7{
								width: 81px;
							}
							>.name{
								font-size: 12px;
								color: #4277ff;
								transform: translateY(5.5px);
								>img{

								}
								>span{
								    display: inline-block;
									transform: translateY(-5px) translateX(8px);
								}
							}
						}
					}

				}
			}
		}
		>.indexRight{
			width: 320px;
			min-height: 500px;
			float: right;
			>.newDeal{
				width: 100%;
				min-height: 271px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				margin-bottom:11px; 
				>.newDealTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					border-bottom:1px solid #eeeeee;
					>p{
						cursor: pointer;
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>ul{
					width: 100%;
					font-size: 12px;					
					>li{
						height: 40px;
						line-height: 40px;
						padding: 0 6px 0 7px;
						>img{
						    vertical-align: top;
							transform: translateY(14px);
							margin-right: 2px;
						}
						>span{
							display: inline-block;
							width:60%;
							overflow: hidden;                                                                      
    						text-overflow: ellipsis;
    						white-space: nowrap;
							color: #333333;
						}
						>time{
							float: right;
							color: #787878;
						}
					}
				}
			}
			>.event{
				width: 320px;
				height: 81px;
				background-color: #fba73e;
				box-shadow: 0px 0px 16px -4px #bbb;
				padding: 0 12px 0 13px;
				text-align: center;
				line-height: 81px;
				cursor: pointer;
				position: relative;
				margin-bottom: 11px;
				>p{
					font-size: 18px;
					color: #FFF;
					letter-spacing: 2px;
					>img{
						transform: translateY(5px);
						margin-right:12px; 
					}
				}
				>.point{
					width: 6px;
					height: 6px;
					background-color: #fff;
					border-radius: 50%;
					position: absolute;
					top: 0;
				}
				>.pointLeft{
					top: 38px;
					left: 13px;
				}
				>.pointRitgh{
					right: 13px;
					top: 38px;
				}
			}
			>.scrollExpress{
				width: 320px;
				min-height: 380px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				margin-bottom: 11px;
				>.scrollExpressTitle{
					width: 100%;
					height: 50px;
					cursor: pointer;
					line-height: 50px;
					border-bottom:1px solid #eeeeee;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.scrollExpressInfo{
					width: 320px;
					padding: 14px 13px 0 11px;
					>dl{
						display: flex;
						margin-bottom: 7px;
						font-size: 12px;
						color: #333333;
						>dt{
							margin-right: 12px;
							>.time{
								color: #5060a2;
								width: 48px;
								height: 22px;
								border-radius: 10px;
								border:1px solid #5060a2;
								display: inline-block;
								text-align: center;
								line-height: 20px;
							}
							>.line{
								width: 1px;
								height: 34px;
								border:1px solid #cce0ea;
								transform: translateX(23px);
							}
						}
						>dd{
							>p{
								line-height: 23px;
								cursor: pointer;
							}
						}
					}
				}
			}
			>.rankingList{
				width: 320px;
				height: 373px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.rankingListTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.rankingListChoose{
					width: 320px;
					height: 34px;
					font-size: 12px;
					color: #666;
					display: flex;
					justify-content: center;
					>.rankingActives{
						width: 63px;
						height: 20px;
						background-color: #dae3fb;
						color: #666666;
						text-align: center;
						line-height: 20px;
						position: relative;
					}
					>.rankingActives::after{
						content:'';
						width: 4px;
						height: 4px;
						background-color: #4277ff;
						position: absolute;
						top: 8px;
						border-radius:50%;
						left: 7px;
						margin-right: 6px;
					}
					
					>li{
						margin-right: 33px;
					}
				}
				>table{
					width: 305px;
					min-height: 280px;
					margin-left: 7px;
					border-collapse:collapse;
					>thead{
						width: 305px;

						>tr{
							background-color: #f4f4f4;
							>td{
								padding: 0 0 0 9px;
								height: 32px;
								font-size: 12px;
								color: #666;

							}
						}
					}
					>tbody{
						>.tbr{
							height: 36px;
							width: 100%;

							>td{
								width: 20px;
								height: 20px;
								text-align: center;
								line-height: 20px;
								transform: translateX(-15px);
								font-size: 12px;
								color: #666;
							}
						}
					}
				}
			}
			>.rOf{
				margin-top: 11px;
				width: 320px;
				border:1px solid #e4e4e4;
				min-height: 373px;
				>.rOfTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 0px;
						>.rofActive{
							border-top:3px solid #4277ff;
							color: #4277ff;
						}
						>span{
							display: inline-block;
							text-align: center;
							width: 50%;
							>img{
							    float: right;
								transform: translateY(20px);
							}
						}
						
					}
				}
				>.rofData{
					width: 100%;
					font-size: 12px;
					color: #666;
					display: flex;
					justify-content: center;
					height: 34px;
					>li{
						width: 63px;
						height: 20px;
						text-align: center;
   			 			line-height: 20px;	
   			 			margin-right: 11px;
   			 			position: relative;
					}
					>.rofActives{background-color: #dae3fb;}
					>.rofActives::after{
						content: '';
						width: 4px;	

						height: 4px;
						position: absolute;
						top: 9px;
						border-radius: 50%;
						left: 5px;
						background-color: #4277ff;

					}

				}
				>.rofDatadetails{
					width: 320px;
					padding: 0 6px 0 7px;
					min-height: 200px;
					font-size: 12px;
					color: #666;
					>.head{
						height: 32px;
						width: 100%;
						background-color: #f4f4f4;
						display: flex;
						justify-content: space-around;
						line-height: 32px;
					}
					>.body{
						display: flex;
						justify-content: space-around;
						height: 32px;
						line-height: 32px;

					}
				}
			}
			>.twitterMessages{
				width: 320px;
				height: 347px;
				margin-top: 11px;
				margin-bottom: 11px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.twitterMessagesTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						cursor: pointer;
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.message{
					>dl{
						padding-left: 11px;
						font-size: 12px;
						color: #666;
						display: flex;

						>dt{
							margin-right: 8px;
							>img{
								width: 36px;
								height: 36px;
								border:1px solid red;
								border-radius: 50%;
							}
						}
						>dd{
							padding-top: 14px;
						}
					}
				}
			}
			>.miningData{
				width: 320px;
				height: 732px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.miningDataTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.minidataChoose{
					font-size: 12px;
					color: #666;
					display: flex;
					height: 30px;
					justify-content: center;
					>:nth-child(1){
						margin-right: 22px;
					}
					>li{
						width: 72px;
						height: 20px;
						position: relative;
						text-align: center;
						line-height: 20px;

					}
					>.minidataAvtive{
						width: 72px;
						height: 20px;
						background-color: #dae3fb;	

					}
					>.minidataAvtive::after{
						content:'';
						width: 4px;
						height: 4px;
						background-color: #4277ff;
						position: absolute;
					    top: 9px;
						left: 7px;
					}
				}
				>.data{
					width: 320px;
					min-height: 22px;
					>:nth-last-child(1){
						border-bottom: 1px solid #eee;
					}
					>li{
						font-size: 12px;
						color: #666;
						line-height: 50px;
						height: 50px;
						border-top:1px solid #eeeeee;
						>.left{
							color: #979797;
						}
						>.right{
							float: right;
						}
					}
				}
			}
			>.market{
				width: 320px;
				height: 235px;
				margin-top: 11px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.marketTitle{
					width: 100%;
					height: 50px;
					cursor: pointer;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.datar{
					width: 320px;
					min-height: 50px;
					padding: 12px 7px 0 11px;
					>span{
						font-size: 12px;
						color: #666666;
						margin-right: 9px;
						display: inline-block;
						background-color: #dedede;
						padding: 0 21px;
						border-radius: 2px;
						height: 30px;
						line-height: 30px;
						cursor: pointer;
						margin-bottom: 12px;
						text-align: center;
					}
					>span:active{
						color: white;
						background-color: #4277ff;
					}
				}
			}
		}

	}
</style> 