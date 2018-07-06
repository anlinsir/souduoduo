<template>
	<div class="Sicon">
		<div class="Left">
			<div class="searchAb">
				含 “<span style="color: #4277ff;">{{this.$route.query.searchText}}</span>	”的搜索共{{CionNum  + exNum}}个结果，{{CionNum}}个币种，{{exNum}}个交易所
			</div>

			<div class="searchInfo">
				<Nav :navList='navList' @choose='choose'/>
				<table cellspacing="0" v-show='searchType == 0'>

					<thead>
						<tr>
							<td style="width: 45px;">#</td>
							<td>名称</td>
							<td>流通市值</td>
							<td>价格</td>
							<td>流通数量</td>
							<td>成交额(24h)</td>
							<td>涨幅(24h)</td>
							<td>自选状态</td>

						</tr>
					</thead>

					<tbody>
						<tr @click='toCion(ii.slug,ii.symbol)' v-for="(ii,id) in searchList0">
							<td>{{id+1}}</td>
							<td><img style="vertical-align: middle;transform: translateY(-2px);margin-right: 9px;width: 15px;" :src="ii.logo">
								<span style="color: #4277ff;width: 160px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width: 100px;display: inline-block;transform: translateY(2px);">{{ii.symbol}}-{{ii.cn_name ? ii.cn_name : ii.name}}</span>
							</td>
							<td>${{(Number(ii.market_cap)/100000000).toFixed(2)}}亿</td>
							<td>${{(ii.price).toFixed(4)}}</td>
							<td>{{(Number(ii.circulating_supply)/10000).toFixed(2)}}万</td>
							<td>${{(Number(ii.volume_24h)/10000).toFixed(2)}}万</td>
							<td>{{ii.percent_change_1h}}%</td>
							<td @click='chengChoose(id)' style="transform: translateX(17px);">
								<img v-if='chooseArr.indexOf(id) == -1 '   src="/static/img/startNO.png">
								<img v-else-if='chooseArr.indexOf(id) != -1' src="/static/img/stratY.png">
							</td>

						</tr>

						
					</tbody>

				</table>


				<table cellspacing="0" v-show='searchType == 1'>

					<thead>
						<tr>
							<td style="width: 45px;">#</td>
							<td>名称</td>
							<td>交易对</td>
							<td>国家</td>
							<td>类型</td>
							<td>成交量(24h)</td>

						</tr>
					</thead>

					<tbody>
						<tr v-for="(ii,id) in searchList1" @click='toTrd(ii.slug)'>
							<td>{{id+1}}</td>
							<td style="width: 160px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;height: 20px;max-width: 100px;"><img style="vertical-align: middle;transform: translateY(-2px);margin-right: 9px;width: 15px;" :src="ii.logo">
								<span style="color: #4277ff;width: 160px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width: 100px;display: inline-block;transform: translateY(2px);">{{ii.cn_name ? ii.cn_name : ii.name}}</span>
							</td>
							<td title='交易对'>{{ii.pairs_count ?ii.pairs_count : 0 }}</td>
							<td title='国家'>{{ii.country_code}}</td>
							<td title='类型'>
								<span class="xh"  v-if="(JSON.stringify(ii.types)).indexOf('0') != -1">现货</span>
								<span class="qh" v-if="(JSON.stringify(ii.types)).indexOf('1') != -1">期货</span>
								<span  class="fb" v-if="(JSON.stringify(ii.types)).indexOf('2') != -1" >法币</span>
							</td>
							<td title='类型'>
								${{(Number(ii.volume_24h)/10000).toFixed(2)}}万
							</td>
							
							

						</tr>

						
					</tbody>

				</table>

				<div @click='clickMoreCion' v-if='searchType == 0' class="more" style="display: block;background: #f1f1f1;height: 35px;line-height: 35px;text-align: center;color: #666;cursor: pointer;">加载更多</div>
				<div @click='clickMoreexchang' v-if='searchType == 1' class="more" style="display: block;background: #f1f1f1;height: 35px;line-height: 35px;text-align: center;color: #666;cursor: pointer;">加载更多</div>


			</div>
		</div>

		<div class="Right">
			<div class="hotSearch">
				<div class="HotTop">
					<p>热门搜索</p>
				</div>

				<ul class="hotChooseItem">
					<li v-for='(ii,id) in 8'>
						BTC
					</li>
					<li style="width: 100%;visibility: hidden;"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from '../nav'
	import axios from 'axios'
	export default {
		data(){
			return({
				navList:['币种','交易平台'],
				chooseArr:[]
				,
				choosea:-1,
				searchList0:[],
				searchList1:[],
				searchType:0,
				moreSumCion:1,
				moreSumexchang:1,
				CionNum:null,
				exNum:null
			})
		},
		components:{
			Nav
		},
		mounted(){
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0
		},
		methods:{
			choose(index){
				this.searchType = index
				switch (index){
					case 0:
						break;
					case 1:
						break;
						default:
						break;
				}
				console.log(index)
			},
			chengChoose(id){
				if(this.chooseArr.indexOf(id) != -1){
					this.chooseArr = this.chooseArr.filter(function(i,d){
							return i != id
						})
					console.log(this.chooseArr)
					return

				}
				this.chooseArr.push(id)
				console.log(this.chooseArr)
			},
			clickMoreCion(){
				axios.get(`${href}/api/search/currenciemore?&word=${this.$route.query.searchText}&take=10&skip=${(this.moreSumCion)*10}`)
				.then((res)=>{
					console.log(res.data.data)
					if(res.data.data.length == 0){
						alert('没有了')
						return
					}
					for(var i of res.data.data){
						this.searchList0.push(i)	
					} 
					this.moreSumCion++
				})
			},
			clickMoreexchang(){
				axios.get(`${href}/api/search/exchangemore?&word=${this.$route.query.searchText}&skip=${(this.moreSumexchang)*10}&take=10`)
					.then((res)=>{
						console.log(res.data.data)
						if(res.data.data.length == 0){
							alert('没有了')
							return
						}
						for(var i of res.data.data){
							this.searchList1.push(i)	
						} 
						this.moreSumexchang ++

					})
			},
			toCion(slug,sym){
				this.$router.push({path:`/index/cion/${slug}`,query:{symbol:sym}})
			},
			toTrd(sul){
				this.$router.push(`/index/tradDetali/${sul}`)

			}
		},
		created(){
			console.log(this.$route.query.searchText) // 做数据查询



			axios.get(`${href}/api/search/currenciemore?&word=${this.$route.query.searchText}&take=10`)
				.then((res)=>{
					console.log(res.data.data)
					this.searchList0 = res.data.data

			})
			axios.get(`${href}/api/search/exchangemore?&word=${this.$route.query.searchText}&take=10`)
				.then((res)=>{
					this.searchList1 = res.data.data
			})

			axios.get(`${href}/api/search/index?&word=${this.$route.query.searchText}`)
				.then((res)=>{					
					this.CionNum  = res.data.data.currencie_count 
					this.exNum = res.data.data.exchange_count
				})
		},
		watch: {
		   '$route' (to, from) {
		    	axios.get(`${href}/api/search/currenciemore?&word=${this.$route.query.searchText}&take=10`)
				.then((res)=>{
					console.log(res.data.data)
					this.searchList0 = res.data.data
				})

				axios.get(`${href}/api/search/exchangemore?&word=${this.$route.query.searchText}&take=10`)
					.then((res)=>{
						this.searchList1 = res.data.data
				})
		 	}
		 }
	}
</script>


<style scoped lang="scss">
	.Sicon{
		width: 100%;
		min-height: 100px;
		overflow: hidden;
		>.Left{
			width: 866px;
			min-height: 500px;
			float: left;
			>.searchAb{
				width: 100%;
				height: 35px;
				line-height: 35px;
				color: #666;
				font-size: 12px;
			}
			>.searchInfo{
				width: 100%;
				min-height: 300px;
				border:1px solid #e5e5e5;
				>table{
					width: 100%;
					padding-left: 17px;	
					padding-right: 31px;
					font-size: 12px;
					color: #666;
					>thead{
						>tr{

							width: 100%;
							height: 50px;
							>td{
								border-bottom:1px solid #e5e5e5;
								cursor: pointer;
								
							}
						}
					}
					>tbody{
						>tr{
							height: 54px;
							>td{
								cursor: pointer;
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
								 background-position: 7px 5px;
								 line-height: 	28px;
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
		>.Right{
			width: 320px;	
			float: right;		
			>.hotSearch{
				width: 320px;
				margin-top: 35px;
				min-height: 100px;
				border:1px solid #e5e5e5;
				border-top:none;
				>.HotTop{
					width: 100%;
					height: 50px;
					border-bottom:1px solid #e5e5e5;
					border-top:3px solid #4277ff;
					font-size: 12px;
					color: #333;
					padding-left: 10px;
					line-height: 47px;

				}
				>.hotChooseItem{
					width: 100%;
					min-height:50px; 
					display:flex;
					flex-wrap: wrap;
					padding: 0 17px;
					justify-content: flex-start;
					>:nth-child(3n){
						margin-right: 0;
					}
					>li{
						width: 86px;
						margin-right: 12px;
						height: 30px;
						border-radius: 15px;
						font-size: 12px;
						text-align: center;line-height: 30px;
						border:1px solid #e5e5e5;
						margin-top: 18px;
						color: #666;
						cursor: pointer;
					}
					>li:hover{
						border-color: #4277ff;
						color: #4277ff;
					}
				}
			}
		}
	}
</style>