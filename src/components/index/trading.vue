<template>
	<div class="tradingWarp">
		<div class="tradingTitle">
			<div class="titleChoose">
				交易平台列表
			</div>

			<div class="titleRightChose">
				<span style="font-size: 12px;color: #9c9c9c;">筛选：</span><select @change='changeCount' >
					<option value="0" v-for='(key,val,id) in gjList'>{{key.cn_name}}</option>
					


				</select>

				<select @change='changeCount' >
					<option value="0">类型</option>
					<option value="1">xx</option>
					<option value="2">llll</option>


				</select>

				<select style="width: 98px;margin-right: 30px;" @change='changeCount' >
					<option value="0">默认排序</option>
					<option value="1">升序</option>
					<option value="2">降序</option>


				</select>


				<input  @keydown.enter='searchTrading' type="text" name="" v-model="serach" placeholder="搜索交易平台名称">
				<span @click='searchTrading' style="position: absolute;top: 0;right: 35px;">s</span>


			</div>
		</div>

		<ul class="tradingContent">
			<li @click='toTradDetali(ii.slug)' class="tradingContentItem" v-for="(ii,id) in tadingList">
				<dl class="itemImg">
					<dt><img :src="ii.logo"></dt>
					<dd>
						<p class="itemName">{{ii.name}}</p>
						<p class="itempaim">排名No.{{ii.rank}}</p>

						<p class="xx">
							<span style="background-color: #5094f1;background-image:url('/static/img/scales.png'); background-position: 6px 6px;" v-if="JSON.stringify(ii.types).indexOf('0') != -1">现货</span>
							<span style="background-color: #7a85e9;background-image:url('/static/img/stock_up.png'); background-position: 6px 6px;" v-if="JSON.stringify(ii.types).indexOf('1') != -1">期货</span>
							<span style="background-color: #f19f5f;background-image:url('/static/img/money.png'); background-position: 5px 8px;" v-if="JSON.stringify(ii.types).indexOf('2') != -1">法币</span>

						</p>

					</dd>

					

				</dl>
				<div class="itemText">
					<p class="textp1" style="    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 30px;
    box-sizing: content-box;">{{ii.introduce}}</p>
					<p class="textp2">
						<span>交易对：<i>{{ii.pairs_count}}</i>	 &nbsp; / &nbsp;</span>
						<span>地区：<i>{{ii.country?ii.country.cn_name : '未知'}}</i> &nbsp; / &nbsp;</span>
						<span>成交额(24h)：$<i>{{(Number(ii.volume_24h)/100000000).toFixed(2)}}亿</i></span>
					</p>
				</div>
			</li>

			

			

			

		</ul>

		
		<div class="block" style="width: 100px;margin-left: 450px;">
				<el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="width: 100px;"
			    layout="prev, pager, next"
			    :total="50" >
			  </el-pagination>
		</div>
	</div>	
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return({
				serach:'',
				currentPage:5,
				tadingList:[],
				gjList:[]
			})
		}
		,
		methods:{
			handleCurrentChange(val){
				this.currentPage =val
				console.log(val)
			},
			changeCount(e){
				if(e.target.selectedIndex == 0){
					return
				}
				alert(e.target.selectedIndex)
				alert(e.target.options[e.target.selectedIndex].text)
			},
			searchTrading(serach){
				alert(this.serach + ' 暂无数据')
			},
			pages(index){
				alert(index  + '页')

			},
			toTradDetali(val){
				
				this.$router.push(`/index/tradDetali/${val}`)
				

			}
		},
		mounted(){
			axios.get(`http://sdd.xtype.cn/api/exchange/list?&take=12`)//平台列表
					.then((res)=>{
						console.log(res.data.data.list)
						this.tadingList = res.data.data.list
			})
			axios.get(`http://sdd.xtype.cn/api/exchange/countries`)
				.then((res)=>{
					this.gjList =res.data.data
					console.log(this.gjList)

				})
		}
	}
</script>


<style lang="scss" scoped>
	.tradingWarp{
		width: 100%;
		min-height: 100px;
		border: 1px solid #e5e5e5;
		>.tradingTitle{
			width: 100%;
			height: 58px;
			background-color: #f2f2f2;
			>.titleChoose{
				width: 210px;
				height: 58px;
				background-color: #fff;
				border-top: 3px solid #4277ff;
				color: #4277ff;
				text-align: center;
				line-height: 56px;
				font-size: 16px;
				float: left;
				margin-left: 1px;
			}
			>.titleRightChose{
				width: 606px;
				height: 58px;
				line-height: 58px;
				float: right;
				position: relative;
				>input{
					width: 258px;
					height: 34px;
					border-radius: 14px;
					border:none;
					padding-left:17px;
					font-size: 14px;
					color: #9f9f9f; 
				}
				>select::after{
					content: '';
					position: absolute;
					top:0;
					border:4px solid #000;
					border-top:4px solid #000;
					border-right:4px solid transparent;
					border-bottom:4px solid transparent;
					border-left:4px solid transparent;

				}
				>select{
					position: relative;
					width: 75px;
					height: 34px;
					background-color: #fff;
					color: #666;
					font-size: 12px;
					background-image: url("http://ourjs.github.io/static/2015/arrow.png") ;
					background-repeat: no-repeat;
					background-position: right; 
					outline: none;
					border-radius: 10px;
					padding: 0 10px;
					margin-right: 5px;
					 padding-right: 14px;
					border:none;
					-moz-appearance:none;
  					-webkit-appearance:none;
  					appearance:none;

				}
			}
		}
		>.tradingContent{
			margin-top: 28px;
			display:flex;
			padding: 0 30px; 
			flex-wrap: wrap;		
			transform: translateX(15px);

			>.tradingContentItem{
				width: 360px;
				height: 230px;
				border:1px solid #eeeeee;
				margin-right: 15px;
				margin-bottom: 45px;
				padding: 16px 13px 0 15px;
				cursor: pointer;
				>:nth-child(3n){
					margin-right: 0;
				}
				>.itemImg{
					width: 100%;
					height: 100px;
					display: flex;
					>dt{
						width: 100px;
						height: 100px;
						border:1px solid #e5e5e5;
						margin-right: 22px;
						>img{
							width: 100%;
							height: 100%;
						}
					}
					>dd{
						>.itemName{
							font-size: 15px;
							font-weight: bold;
						}
						>.itempaim{
							font-size: 12px;
							color: #ff9a49;
							margin-bottom: 36px;
						}
						>.xx{
							>span{
								display: inline-block;
								width: 58px;
								height: 26px;
								background-color: #7a85e9;
								font-size: 12px;
								color: #fff;
								text-align: center;line-height: 26px;
								border-radius: 15px;
								background-repeat: no-repeat;
								padding-left: 18px;
							}
						}
					}
				}
				>.itemText{
					margin-top: 22px;
					font-size: 12px;
						color: #666;
					>.textp1{
						
					}
					>.textp2{
						margin-top: 20px;
						>span{
							>i{
								color: #4277ff;
								font-style: normal;
							}
						}
					}
				}
			}
		}
		>.pagesW{
			text-align: center;
			>.pages{
				display: inline-block;
				>ul{
					display: flex;
					>li{
						margin-right: 10px;
						cursor: pointer;
					}
				}
			}
			
		}
	}
</style>