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
						<td v-for='(item,index) in thead'>{{item}}</td>
					</tr>
				</thead>

				<tbody >
					<tr v-for="(item,index) in tbody">
						<td>{{item.id}}</td>
						<td>
							<img  style="transform: translateY(5px);height: 21px;width: 21px;" :src="item.img" />
						{{item.name}}</td>
						<td>{{item.price}}</td>
						<td>{{item.shi}}</td>
						<td>{{item.num}}</td>
						<td>{{item.cj}}</td>
						<td :style="{color: item.zf.indexOf('+') != -1 ? '#33b862' : 'red' }">{{item.zf}}</td>
						

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
				tbody:[
					{
						id:1,
						img:'/static/img/rise.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+8.84%'
					},
					{
						id:2,
						img:'/static/img/ejoy.png',
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+18.84%'
					},
					{
						id:3,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'-8.84%'
					},
					{
						id:4,
						name:'RISE-R币',
						price:'¥49,128',
						shi:'¥8,377亿',
						num:'1,705万',
						cj:'¥4,208,503万',
						zf:'+5.84%'
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
				this.rankavtive = index
			},
			more(){
				this.moreShow = true
			},
			headeractivesChange(inx,index,dataid){
				switch (inx){
					case 0:
						this.headeractives0 = index
						if(index == 0){
							this.tbody =[
									{
										id:1,
										img:'/static/img/rise.png',
										name:'RISE-R币',
										price:'¥49,128',
										shi:'¥8,377亿',
										num:'1,705万',
										cj:'¥4,208,503万',
										zf:'+8.84%'
									},
									{
										id:2,
										img:'/static/img/ejoy.png',
										name:'RISE-R币',
										price:'¥49,128',
										shi:'¥8,377亿',
										num:'1,705万',
										cj:'¥4,208,503万',
										zf:'+18.84%'
									},
									{
										id:3,
										name:'RISE-R币',
										price:'¥49,128',
										shi:'¥8,377亿',
										num:'1,705万',
										cj:'¥4,208,503万',
										zf:'-8.84%'
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
						}
						if(index == 1){
							this.tbody = this.tbody2
						}
						console.log(dataid)
						break;
					case 1:
						this.headeractives1 = index
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
		border:1px solid red;
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
			border:1px solid red;
			>.listData{
				padding: 0 21px 0 17px;
				width: 100%;
				border:1px solid;
				>thead{
					>tr{
						>td{
							height: 46px;
							line-height: 46px;
							color: #666666;
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
					}
				}
			}
		}
		
	}

</style>