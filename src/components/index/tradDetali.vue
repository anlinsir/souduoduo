<template>
	<div class="TradDeWarp">
		<div class="detaliTop" v-for="(ii,id) in cionDetali">
			<div class="detaliTopImg">
				<dl>
					<dt>
						<img :src="ii.logo">
					</dt>
					<dd>
						<p class="detaliName">{{ii.name}}</p>
						<p class="detaliiPai">排名No.{{ii.rank}}</p>
						<p class="detaliFen">
							<span style="background-color: #5094f1;background-image:url('/static/img/scales.png'); background-position: 6px 6px;"  v-if="JSON.stringify(ii.types).indexOf('0') != -1" >现货</span>
							<span style="background-color: #7a85e9;background-image:url('/static/img/stock_up.png'); background-position: 6px 6px;" v-if="JSON.stringify(ii.types).indexOf('1') != -1">期货</span>
							<span style="background-color: #f19f5f;background-image:url('/static/img/money.png'); background-position: 5px 8px;" v-if="JSON.stringify(ii.types).indexOf('2') != -1">法币</span>

						</p>
					</dd>
				</dl>
			</div>

			<div class="detaliTopText">
				<ul>
					<li class="detaliss1" >
						<p >{{ii.introduce}}</p>
							<i >查看更多</i>
					</li>


					<li class="detaliss2" >
						<div class="jz" >
							<p>官网地址： <a :href="ii.website">{{ii.website}}</a>	</p>
							<p>地区: <i>{{ii.country_code}}</i></p>
						</div>
					</li>


					<li class="detaliss3">
						<div class="chengjiao">
							<p style="
								color: #8a8a8a;
								margin-bottom: 20px;
							">24小时平台成交量：</p>
							<p style="font-size: 20px;
							color: #4277ff;font-weight: bold;margin-bottom: 10px;">￥{{Number(ii.volume_24h)*6.6322}}</p>
							<p style="margin-bottom: 13px;">≈ ${{ii.volume_24h}}</p>
							<p>≈ 5641BTC</p>
						</div>

					</li>
				</ul>
			</div>
		</div>



		<div class="detaliBom">
			<div class="BomTopChoose">
				<div class="Left">平台行情</div>
				<div class="Right">
					<select style="text-align: center;" @change='optionChange'>
						<option   :value='[ii.code,ii.symbol,ii.value]' v-for="(ii,id) in ct">{{ii.cn_name}}{{ii.code}}</option>

					</select>	
				</div>
			</div>

			<table class="BomBomTable" cellspacing="0">
				<thead>
					<tr>
						<td>#</td>
						<td>名称</td>
						<td>交易对</td>
						<td>价格</td>
						<td>成交量</td>
						<td>成交额</td>
						<td>占比</td>
						<td>更新时间</td>
						<td>自选状态</td>



					</tr>
				</thead>
				<tbody >
			

					<tr v-for="(ii,id) in jyd" style="min-height: 70px;">
						<td >{{((Number(currentPage)-1)*30) + (id)+1}}</td>
						<td >
							<img style="vertical-align: text-top;width: 15px;display: inline-block;transform: translateY(-23px);" :src="ii.logo">
							<span  style="width: 80%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;display: inline-block;color: #4277ff;" >{{ii.currencie.name +'-' + ii.currencie.cn_name}}</span>
						</td>
						<td style="color: #4277ff;"> <a :href="ii.url" :style="{color: ii.url ? '#4277ff' : '#000'}">{{ii.symbol}}/{{ii.to_symbol}}</a></td>
						<td >{{ranges[1]}}{{(Number(ii.price_usd)*Number(ranges[2])).toFixed(2)}}</td>
						<td>{{((ii.volume_usd/ii.price_usd)/10000).toFixed(2)}}万</td>
						<td>{{ranges[1]}}{{(Number(ii.volume_usd)*Number(ranges[2])).toFixed(2)}}</td>
						<td>{{((ii.volume_usd/Number(sum24))*100).toFixed(2)}}%</td>
						<td >{{ii.updated_at}}</td>
						<td @click='chengChoose(id)' style="transform: translateX(17px);">
								<img v-if='chooseArr.indexOf(id) == -1 '   src="/static/img/startNO.png">
								<img v-else-if='chooseArr.indexOf(id) != -1' src="/static/img/stratY.png">
						</td>
					</tr>
					
					
				</tbody>

			</table>
					<div class="block" style="width:100%;text-align: center;margin-top: 20px;margin-bottom: 20px;">
						  <el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="display: inline-block;"
						    layout="prev, pager, next"
						    :total="total"
						     >
						     <!-- pager-count='3'  -->
						  </el-pagination>
			</div>

		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return({
				cionDetali:[],
				jyd:[],
				ct:[],
				ranges:['us','$',1],
				sum24:null,
				chooseArr:[],
				currentPage:1,
				total:50


			})
		},
		methods:{
			handleCurrentChange(pages){
				var _this = this
				this.currentPage = pages
				axios.get(`${href}/api/pair/list?&exchange_slug=${_this.$route.params.id}&take=30&skip=${(this.currentPage-1)*30}`)
					.then((res)=>{
							console.log(res.data.data)

							this.jyd = res.data.data.list
							this.sum24 =res.data.data.sum_volume24h
							this.total = Math.ceil(Number(res.data.data.count)/30)*10

				})
			},
			optionChange(e){
				this.ranges = (e.target.value).split(',')
				console.log(this.ranges)

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
			}
		},
		mounted(){
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0
			
			this.ct.push(JSON.parse(localStorage.Rate).USD,JSON.parse(localStorage.Rate).CNY,JSON.parse(localStorage.Rate).JPY,JSON.parse(localStorage.Rate).EUR)
			console.log(this.ct)
			var _this =  this
			axios.get(`${href}/api/exchange/item?&slug=${_this.$route.params.id}`)
					.then((res)=>{
						console.log(res.data.data)

						this.cionDetali = res.data.data

			})
			axios.get(`${href}/api/pair/list?&exchange_slug=${_this.$route.params.id}&take=30`)
				.then((res)=>{
						console.log(res.data.data)

						this.jyd = res.data.data.list
						this.sum24 =res.data.data.sum_volume24h
						this.total = Math.ceil(Number(res.data.data.count)/30)*10

			})
		},
		 watch: {
		   '$route' (to, from) {
		     console.log(this.$route.path)
		     var _this = this 
		     axios.get(`${href}/api/exchange/item?&slug=${_this.$route.params.id}`)
					.then((res)=>{
						this.cionDetali = res.data.data


			})
			axios.get(`${href}/api/pair/list?&exchange_slug=${_this.$route.params.id}`)
				.then((res)=>{
						console.log(res.data.data)

						this.jyd = res.data.data.list
						this.sum24 =res.data.data.sum_volume24h

			})
		   }
		 },
	}
</script>

<style scoped lang="scss">
	.TradDeWarp{
		width: 100%;
		min-height: 100px;
		>.detaliTop{
			width: 100%;
			height: 235px;
			border: 1px solid #e5e5e5;
			padding: 23px 0 0 29px ;
			margin-bottom: 24px;
			>.detaliTopImg{
				width: 50%;
				height: 100px;
				>dl{
					width: 100%;
					height:100px;
					display: flex;
					>dt{
						width: 100px;
						height: 100px;
						border:1px solid #e5e5e5;
						margin-right: 21px;
						>img{
							width: 100%;
							height: 100%;
						}
					}
					>dd{
						>.detaliName{
							font-size: 15px;
							font-weight: bold;
							margin-bottom: 10px;

						}							
						>.detaliiPai{
							font-size: 12px;
							color: #ff9a49;
							margin-bottom: 35px;
						}
						>.detaliFen{
							font-size: 12px;
							>span{
								border-radius: 10px;
								text-align: center;
								line-height: 26px;
								padding-left: 24px;
								display: inline-block;
								color: #fff;
								width: 58px;
								height: 26px;
								background-repeat: no-repeat;
							}
						}
					}
				}
			}
			>.detaliTopText{
				width: 100%;
				height: 60px;
				margin-top:  9px;
				font-size: 12px;
				color: #333;
				>ul{
					width: 100%;
					height: 60px;
					display: flex;
					>:nth-last-child(1){
						border:none;
					}
					>.detaliss1{
						padding-top: 10px;
						padding-right: 4px;
						>p{
							height: 55px;
							text-overflow: ellipsis;

							overflow : hidden;
							line-height:25px;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;

						}
					}
					>.detaliss2{
						 position: relative;
						 >.jz{
						 	position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;width: 238px;height: 40px;line-height: 20px;
						 }
					}
					>.detaliss3{
						padding-left: 57px;
						>.chengjiao{
							width: 100%;
							height: 120px;
							margin-top: -47px;
						}
					}
					>li{
						width: 33.33%;
						height: 60px;
						border-right: 1px solid #e5e5e5;
						i{
							font-style: normal;color: #4277ff;
						}
						>p{
							
						}
					}
				}
			}
		}
		>.detaliBom{
			width: 100%;
			min-height: 180px;
			border:1px solid #e5e5e5;
			border-collapse: collapse;
			font-size: 12px;
			color: #666666;
			>.BomTopChoose{
				width: 100%;
				height: 58px;
				background-color: #f2f2f2;
				margin-bottom: 7px;
				>.Left{
					width: 210px;
					height: 58px;
					border-top:3px solid #4277ff;
					background-color: #fff;
					text-align: center;
					line-height: 58px;
					margin-left: -1px;
					border-left:1px solid #e5e5e5;
					font-size: 16px;
					color: #4277ff;
					float: left;

				}
				>.Right{
					float: right;
					>select{
						width: 116px;
						height: 34px;
						background-color: #fff;
						border:none;
						border-radius: 8px;
						-moz-appearance:none;
  						-webkit-appearance:none;
  						appearance:none;
  						padding-left: 14px;
  						color: #666;
  						font-size: 12px;
  						outline: none;
  						margin-top: 12px;
  						margin-right: 25px;
						background-image: url("http://ourjs.github.io/static/2015/arrow.png") ;
						background-repeat: no-repeat;
						background-position: right; 
						>option{

						}
					}
				}
			}
			>.BomBomTable{
				width: 100%;
				min-height: 200px;
				padding: 0 21px 0 17px;	
				>thead{
					width: 100%;
					height: 40px;
					>tr{
						display: flex;
						justify-content:space-between;
						>:nth-child(1){
							text-align: center;
						}
						>td{
							width: 11.11%;
							height: 40px;
							line-height: 40px;
							border-bottom:1px solid #e5e5e5;
							
						}
					}
				}
				>tbody{
					>tr{
						display: flex;
						justify-content:space-between;
						>:nth-child(1){
							text-align: center;
						}
						>td{

							height: 53px;
							width: 11.11%;
							line-height: 53px;
						}
					}
				}
			}
		}
	}
</style>