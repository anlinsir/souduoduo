<template>

	<div class="ConWarp">
		<div class="Left">
			<Nav :navList='navList'/>

			<table class='data'>
				<thead>
					<tr>
						<td>概念</td>
						<td>24小时成交额</td>
						<td>平涨跌幅</td>                                                
						<td>表现最强 </td>
						<td>表现最弱</td>
						<td>币数总数</td>
						<td>上涨数/下跌数</td>
					</tr>
				</thead>

				<tbody>
					<tr v-for='(ii,ind) in 17'>
						<td style="color: #4277ff;">支付概念</td>
						<td>¥56,239万</td>
						<td>0.48%</td>
						<td>
							<span style="color: #4277ff;">CASH </span>
							<span style="display: inline-block;min-width: 50px;height: 20px;background-color: #33b862;border-radius: 10px;vertical-align: initial;color: #fff;text-align: center;line-height: 20px;">+0.23%</span>
						</td>
						<td>
							<span style="color: #4277ff;">XWC</span>
							<span style="display: inline-block;min-width: 50px;height: 20px;background-color: #e74343;border-radius: 10px;vertical-align: initial;color: #fff;text-align: center;line-height: 20px;">-0.23%</span>
						</td>
						<td>18</td>
						<td>
							<span style="color: #33b862">4 </span>/<span style="color: #e74343"> 14</span>
						</td>
					</tr>
				</tbody>
			</table> 
			<div class="block" style="width: 100px;margin-left:300px;margin-top: 20px;">
							<el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="width: 100px;"
						    layout="prev, pager, next"
						    :total="50" >
						  </el-pagination>
						</div>
		</div>

		<div class="Right">
				<div class="rOf">
					<div class="rOfTitle">
						<p>
							<span @click='rofChoose(index)' v-for='(item,index) in rof' :key='index' :class="rofActive == index ? 'rofActive' : '' ">{{item}}</span>
							
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
							<tr class="tbr" v-for='(item,index) in tbody' :key='index'>
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
			

		</div>

	</div>

</template>


<script>
	import Nav from '../nav'
	export default{
		components:{
			Nav
		},
		data(){
			return({
				currentPage:5,
				navList:['概念行情']
				,rof:['涨幅','跌幅'],
				rofdetalislist:['排名','名称','价格','涨幅'],
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
				rofActive:0,
				rofActives:0,
				rofData:['1小时','24小时','一周'],
				rankingActives:0,
				rankingListChoose:['币种','交易所'],
			})
		},
		methods:{
			handleCurrentChange(val){
				this.currentPage =val
				console.log(val)
			},
			rofChoose(index){
				this.rofActive = index
			},
			rofChooses(index){
				this.rofActives = index
			},
			changeRanChoose(index){
				this.rankingActives = index
			},
		}
	}
</script>

<style scoped lang="scss">
	.ConWarp{
		width: 100%;
		min-height: 100px;
		overflow: hidden;
		>.Left{
			width: 866px;
			min-height: 100px;
			border:1px solid #e5e5e5;
			float: left;
			>.data{
				font-size: 12px;
				color: #666;
				padding:  0 34px 0 22px; 
				width: 100%;
				>thead{
					width: 100%;
					>tr{

						height: 50px;
						>td{

						}

					}
				}
				>tbody{
					>tr{
						>td{
							height: 54px;
						}
					}
				}
			}

		}
		>.Right{
			width: 320px;
			float: right;
			>.rOf{
				width: 320px;
				border:1px solid #e4e4e4;
				min-height: 373px;
				>.rOfTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					cursor: pointer;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 0px 0 0px;
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
					cursor: pointer;
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
						cursor: pointer;
						display: flex;
						justify-content: space-around;
						height: 32px;
						line-height: 32px;

					}
				}
			}
			>.rankingList{
				margin-top: 15px;
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
		}
	}
</style>