<template>
	<div class="Sicon">
		<div class="Left">
			<div class="searchAb">
				含 “<span style="color: #4277ff;">{{this.$route.query.searchText}}</span>	”的搜索共47个结果，25个币种，22个交易所
			</div>

			<div class="searchInfo">
				<Nav :navList='navList' @choose='choose'/>
				<table cellspacing="0">

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
						<tr v-for="(ii,id) in 18">
							<td>1</td>
							<td><img style="vertical-align: middle;    transform: translateY(-2px);margin-right: 9px;" src="/static/img/btc.png"><span style="color: #4277ff;">BTC-比特币</span></td>
							<td>¥8,377亿</td>
							<td> ¥49,128</td>
							<td>1,705万</td>
							<td> ¥4,208,503万</td>
							<td>-2.75%</td>
							<td @click='chengChoose(id)' style="transform: translateX(17px);">
								<img v-if='chooseArr.indexOf(id) == -1 '   src="/static/img/startNO.png">
								<img v-else-if='chooseArr.indexOf(id) != -1' src="/static/img/stratY.png">
							</td>

						</tr>

						
					</tbody>

				</table>
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
	export default {
		data(){
			return({
				navList:['币种','交易平台'],
				chooseArr:[]
				,
				choosea:-1,
			})
		},
		components:{
			Nav
		},
		methods:{
			choose(index){
				switch (index){
					case 0:
						alert('币种')
						break;
					case 1:
						alert('交易平台')
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
			}
		},
		created(){
			console.log(this.$route.query.searchText) // 做数据查询
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