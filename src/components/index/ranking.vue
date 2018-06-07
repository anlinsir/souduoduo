<template>
	
	<div class="rankingWarp">
		<div class="rankHeadChoose">
			<ul class="rankUl1">
				<li  @click='rachange(index)' :class="rankavtive == index ? 'rankavtive' : '' " v-for='(item,index) in headChoose'>{{item}}</li>
			</ul>
			<ul class="rankUl2">
				<li @click='headeractivesChange(0,index,item.id)' :class="headeractives0 == index ? 'headeractives0' : '' " :data-id='item.id' v-if='rankavtive == 0' v-for='(item,index) in headTchoose0'>{{item.pr}}
					<span @click='more' class="rankUl2SpanIcon" v-if='item.ci '></span>

					<ul v-if='item.ci && moreShow'><!-- 有下拉的时候出来 -->
						<li @click='childChoose($event,indexs)'  :class="headeractives0Chi ==indexs ? 'headeractives0Chi' : '' "  :data-id='items.id' v-for="(items,indexs) in item.ci" :key='indexs'>{{items.pr}}</li>
					</ul>
				</li>

				<li @click='headeractivesChange(1,index,item.id)' :class="headeractives1 == index ? 'headeractives1' : '' "  :data-id='item.id' v-if='rankavtive == 1' v-for='(item,index) in headTchoose1' :key='index'>
					{{item.pr}}
				</li>
				
				<li @click='headeractivesChange(2,index,item.id)' :class="headeractives2 == index ? 'headeractives2' : '' "  :data-id='item.id' v-if='rankavtive == 2' v-for='(item,index) in headTchoose2' :key='index'>
					{{item.pr}}
				</li>

			</ul>	
		</div>

		<div class="listDataWarp">
			<table class="listData">
				<thead>
					<tr>
						<td v-if='rankavtive != 2' v-for='(item,index) in thead'>{{item}}</td>
						<td v-if='rankavtive == 2' v-for='(item,index) in thead2'>{{item}}</td>

					</tr>
				</thead>

				<tbody cellspacing="0">
					<tr @click='Bdetalis(index)' v-for="(item,index) in tbody">
						<td>{{item.id}}</td>
						<td>
							<img  style="transform: translateY(5px);height: 21px;width: 21px;" :src="item.img" />
						{{item.name}}</td>
						<td v-if='rankavtive != 2'>{{item.price}}</td>
						<td v-if='rankavtive != 2'>{{item.shi}}</td>
						<td v-if='rankavtive != 2'>{{item.num}}</td>
						<td v-if='rankavtive != 2'>{{item.cj}}</td>
						<td  v-if='rankavtive != 2' :style="{color: item.zf.indexOf('+') != -1 ? '#33b862' : 'red' }">{{item.zf}}</td>

						<td v-if='rankavtive == 2'>{{item.jydou}}</td>
						<td v-if='rankavtive == 2'>{{item.con}}</td>

						<td style="    width: 280px;" class="type" v-if='rankavtive == 2'>
							<span class="xh" v-if='item.type[0]'>{{item.type[0] ? '现货' : ''}}</span>
							<span class="qh" v-if='item.type[1]'>{{item.type[1] ? '期货' : ''}}</span>
							<span class="fb" v-if='item.type[2]'>{{item.type[2] ? '法币' : ''}}</span>

						</td>

						<td v-if='rankavtive == 2'>{{item.cjl}}</td>
						<td v-if='rankavtive == 2'>{{item.zb}}</td>
						<td v-if='rankavtive == 2'>{{item.gx}}</td>



						

					</tr>
				</tbody>
			</table>
		</div>



	</div>


</template>


<script>
	export default{
		data(){
			return({
				headChoose:['涨跌幅排行榜','24小时成交额排行榜（币种）','24小时成交额排行榜（交易所）'],
				rankavtive:0,
				headTchoose0:[
					{
						pr:'涨幅',
						id:0
					},
					{
						pr:'跌幅',
						id:1
					},
					{
						pr:'一小时',
						id:2,
						ci:[
							{
								pr:'一小时',
								id:20
							},
							{
								pr:'两小时',
								id:20
							},
							{
								pr:'三小时',
								id:21
							}
						]
					}
				],
				headTchoose1:[
					{
						pr:'涨幅',
						id:0
					},
					{
						pr:'跌幅',
						id:1
					}
				],
				headTchoose2:[
					{
						pr:'升序',
						id:0
					},
					{
						pr:'降序',
						id:1
					}
				],
				headeractives0:0,
				headeractives0Chi:0,
				headeractives1:0,
				headeractives2:0,
				moreShow:false,
				thead:['#','名称','价格','流通市值','流通数量','成交额','涨幅'],
				thead2:['#','名称','交易对','国家','类型','成交量','占比','更新'],
				tbody:[
					{
						id:1,
						img:'/static/img/rise.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+8.84%',

						jydou:6,
						con:'美国',
						type:['1'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'
					},
					{
						id:2,
						img:'/static/img/ejoy.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+18.84%',

						jydou:500,
						con:"未知",
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'




					},
					{
						id:3,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'-8.84%',

						jydou:80,
						con:'中国香港',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},
					{
						id:4,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+5.84%',

						jydou:655,
						con:'塞舌尔',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},
					{
						id:1,
						img:'/static/img/rise.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+8.84%',

						jydou:6,
						con:'美国',
						type:['1'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'
					},
					{
						id:2,
						img:'/static/img/ejoy.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+18.84%',

						jydou:500,
						con:"未知",
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'




					},
					{
						id:3,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'-8.84%',

						jydou:80,
						con:'中国香港',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},
					{
						id:4,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+5.84%',

						jydou:655,
						con:'塞舌尔',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},{
						id:1,
						img:'/static/img/rise.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+8.84%',

						jydou:6,
						con:'美国',
						type:['1'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'
					},
					{
						id:2,
						img:'/static/img/ejoy.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+18.84%',

						jydou:500,
						con:"未知",
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'




					},
					{
						id:3,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'-8.84%',

						jydou:80,
						con:'中国香港',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},
					{
						id:4,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+5.84%',

						jydou:655,
						con:'塞舌尔',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},{
						id:1,
						img:'/static/img/rise.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+8.84%',

						jydou:6,
						con:'美国',
						type:['1'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'
					},
					{
						id:2,
						img:'/static/img/ejoy.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+18.84%',

						jydou:500,
						con:"未知",
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'




					},
					{
						id:3,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'-8.84%',

						jydou:80,
						con:'中国香港',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					},
					{
						id:4,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+5.84%',

						jydou:655,
						con:'塞舌尔',
						type:['1','2','3'],
						cjl:'¥410.2亿',
						zb:'13.92%',
						gx:'刚刚'



					}
				],
				tbody2:[
					{
						id:1,
						img:'/static/img/rise.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+118.84%'
					},
					{
						id:2,
						img:'/static/img/ejoy.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+108.84%'
					},
					{
						id:3,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+58.84%'
					},
					{
						id:4,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'-5.84%'
					}
				]
			})
		},
		methods:{
			rachange(index){
				console.log()
				this.rankavtive = index
				if(index == 1){
					console.log('24小时')
				}
			},
			more(){
				this.moreShow = true
			},
			headeractivesChange(inx,index,dataid){
				switch (inx){
					case 0:
						this.headeractives0 = index
						if(index == 0){
							// this.tbody =[
							// 		{
							// 			id:1,
							// 			img:'/static/img/rise.png',
							// 			name:'RISE-R币',
							// 			price:'¥49,128',
							// 			shi:'¥8,377亿',
							// 			num:'1,705万',
							// 			cj:'¥4,208,503万',
							// 			zf:'+8.84%'
							// 		},
							// 		{
							// 			id:2,
							// 			img:'/static/img/ejoy.png',
							// 			name:'RISE-R币',
							// 			price:'¥49,128',
							// 			shi:'¥8,377亿',
							// 			num:'1,705万',
							// 			cj:'¥4,208,503万',
							// 			zf:'+18.84%'
							// 		},
							// 		{
							// 			id:3,
							// 			name:'RISE-R币',
							// 			price:'¥49,128',
							// 			shi:'¥8,377亿',
							// 			num:'1,705万',
							// 			cj:'¥4,208,503万',
							// 			zf:'-8.84%'
							// 		},
							// 		{
							// 			id:4,
							// 			name:'RISE-R币',
							// 			price:'¥49,128',
							// 			shi:'¥8,377亿',
							// 			num:'1,705万',
							// 			cj:'¥4,208,503万',
							// 			zf:'-5.84%'
							// 		}
							// 	]
						}
						// if(index == 1){
						// 	this.tbody = this.tbody2
						// }
						console.log(dataid)
						break;
					case 1:
						this.headeractives1 = index
						if(index == 0){
							alert('涨幅')
						}
						console.log(dataid)

						break;
					case 2:
						this.headeractives2 = index
						
						console.log(dataid)

						break;

				}
			},
			childChoose(e,index){
				this.headeractives0Chi = index
				console.log(e.target.innerHTML)
				this.headTchoose0[2].pr = e.target.innerHTML
				this.moreShow = false
			},
			Bdetalis(index){
				this.$router.push('/index/cion/' + index)
			}
		},
		mounted(){
			
		}
	}
</script>


<style lang="scss" scoped>
	.rankingWarp{
		width: 100%;
		min-height:500px;
		border:1px solid #e5e5e5;
		>.rankHeadChoose{
			>.rankUl1{
				width: 100%;
				height: 58px;
				margin-bottom: 14px;
				display: flex;
				justify-content: space-between;
				>.rankavtive{
					border-top:3px solid #4277ff;
					background-color: #fff;
					color: #4277ff;
				}
				>li{
					background-color: #f2f2f2;
					width: 33.3%;
					color: #333333;
					text-align: center;
					line-height: 58px;
				}
			}
			>.rankUl2{
				margin-bottom: 11px;
				width: 100%;
				height: 40px;
				display: flex;
				justify-content: center;
				>:nth-last-child(1){
					margin-right: 0;
				}
				>.headeractives0,.headeractives1,.headeractives2,{
					color: #4277ff;
				}
				>li{
					width: 114px;
					margin-right: 28px;
					height: 40px;
					border:1px solid #e8e8e8;
					border-radius: 7px;
					font-size: 12px;
					color: #666666;
					position: relative;
					text-align: center;
					line-height: 40px;
					>.rankUl2SpanIcon{
						position: absolute;
						display: inline-block;
						width: 10px;

						top: 17px;
						right: 23px;
						border:4px solid #666;
						border-top:4px solid #666;
						border-bottom:4px solid transparent;
						border-left:4px solid transparent;
						border-right:4px solid transparent;

					}
					>ul{
						>.headeractives0Chi{
							color: #4277ff;
						}
						>li{
							color: #666;
						}
					}
				}
			}
		}
		>.listDataWarp{
			width: 100%;
			min-height:200px;
			>.listData{
				padding: 0 21px 0 17px;
				width: 100%;
				border-collapse:collapse;
				>thead{
					>tr{
						>td{
							height: 46px;
							line-height: 46px;
							color: #666666;
							border-bottom:1px solid #e5e5e5;
						}
					}
				}
				>tbody{
					>tr{
						>td{
							height: 56px;
							line-height: 56px;
							font-size: 12px;
							color: #666666;
						}
						>.type{
							>.xh,.qh,.fb{
								width: 58px;
								height: 26px;
								border-radius: 20px;
								text-align: center;
								line-height: 26px;
								display: inline-block;
								font-size: 12px;
								background-repeat: no-repeat;
								background-position: 7px 7px;
								color: #fff;
								padding-left:15px; 
							}
							>.xh{
								background-color: #5094f1;							
								background-image: url('/static/img/stock_up.png');					

							}
							>.qh{
								background-color: #7a85e9;
								background-image: url('/static/img/scales.png');
							}
							>.fb{
								background-color: #f19f5f;
							    background-position: 6px 8px;
								padding-left: 20px;
								background-image: url('/static/img/money.png');
							}
						}
					}
				}
			}
		}
		
	}

</style>