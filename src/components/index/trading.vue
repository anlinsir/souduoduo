<template>
	<div class="tradingWarp">
		<div class="tradingTitle">
			<div class="titleChoose">
				交易平台列表
			</div>

			<div class="titleRightChose">
				<span style="font-size: 12px;color: #9c9c9c;">筛选：</span>
				<select @change='changeCount($event)'>
					<option :value="null">所有</option>
					<option  :value="key.code" v-for='(key,val,id) in gjList'>{{key.cn_name}}</option>
					


				</select>

				<select @change='changeCount2' >
					<option value="0">全部</option>
					<option value="1">期货</option>
					<option value="2">现货</option>
					<option value="3">法币</option>



				</select>

				<select style="width: 98px;margin-right: 30px;" @change='changeCount3' >
					<option value="asc">升序</option>
					<option value="desc">降序</option>


				</select>


				<input  @keydown.enter='searchTrading' type="text" name="" v-model="serach" placeholder="搜索交易平台名称">
				<span @click='searchTrading' style="width: 25px;height: 25px;
				border-radius: 54%;background-color: #556fb5;text-align:center;line-height: 32px;position: absolute;right: 20px;top:16px;cursor: pointer;"><img src="/static/img/headersearch.png"></span>


			</div>
		</div>

		<ul class="tradingContent" v-show='!none'>
			<li @click='toTradDetali(ii.slug)' class="tradingContentItem" v-for="(ii,id) in tadingList">
				<dl class="itemImg">
					<dt><img :src="ii.logo"></dt>
					<dd>
						<p class="itemName">{{ii.name}}</p>
						<p class="itempaim">排名No.{{ii.rank}}</p>

						<p class="xx">
							<span style="background-color: #5094f1;background-image:url('/static/img/scales.png'); background-position: 6px 6px;line-height: 29px;" v-if="JSON.stringify(ii.types).indexOf('1') != -1">现货</span>
							<span style="background-color: #7a85e9;background-image:url('/static/img/stock_up.png'); background-position: 6px 6px;line-height: 29px;" v-if="JSON.stringify(ii.types).indexOf('2') != -1">期货</span>
							<span style="background-color: #f19f5f;background-image:url('/static/img/money.png'); background-position: 5px 8px;line-height: 29px;" v-if="JSON.stringify(ii.types).indexOf('3') != -1">法币</span>

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

		<div class="none" style="text-align: center;height: 200px;line-height: 200px;" v-show='none'>没有更多数据了</div>


		
		<div class="block" style="width: 100%;text-align: center;" v-show='!none'>
				<el-pagination :current-page="currentPage" @current-change="handleCurrentChange" 
			    layout="prev, pager, next"
			    :total="pagestotal" >
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
				currentPage:1,
				pagestotal:null,
				tadingList:[],
				gjList:[],
				countryCode:'',
				orderType:'asc',
				type:0,
				none:false,
				tem:[]

			})
		}
		,
		methods:{
			handleCurrentChange(val){
				var _this = this
				this.currentPage = val
				console.log(this.currentPage)
				axios.get(`http://sdd.xtype.cn/api/exchange/list?&country_code=${_this.countryCode}&take=12&skip=${(Number(_this.currentPage)-1)*12}&order_type=${this.orderType}&type=${this.type}`)
					.then((res)=>{
						console.log(res.data.data)
						this.tadingList = res.data.data.list
						if(res.data.data.list.length == 0){
							this.none = true
							
						}else {
							this.none = false

						}
						this.pagestotal = (Number(res.data.data.count)/12)*10
						document.documentElement.scrollTop = 0

				})
			},

			changeCount(e,code){

				var _this = this
				this.countryCode = e.target.value
				// alert(e.target.value)
				// alert(e.target.options[e.target.selectedIndex].text)

				axios.get(`http://sdd.xtype.cn/api/exchange/list?&country_code=${_this.countryCode}&take=12&order_type=${this.orderType}&type=${this.type}`)
					.then((res)=>{
						if(res.data.data.list.length == 0){
							this.none = true
							
						}else {
							this.none = false

						}
						this.tadingList = res.data.data.list

						this.pagestotal = (Number(res.data.data.count)/12)*10
						this.currentPage  = 1

				})
			},
			changeCount2(e){
				var _this = this
				console.log(e.target.value)
				this.type = e.target.value
				axios.get(`http://sdd.xtype.cn/api/exchange/list?&country_code=${_this.countryCode}&take=12&order_type=${this.orderType}&type=${this.type}`)
					.then((res)=>{
						if(res.data.data.list.length == 0){
							this.none = true
							
						}else {
							this.none = false

						}
						this.tadingList = res.data.data.list
						this.pagestotal = (Number(res.data.data.count)/12)*10
						this.currentPage  = 1

				})


			},
			changeCount3(e){
				var _this = this
				this.orderType = e.target.value
				console.log(this.orderType)

				axios.get(`http://sdd.xtype.cn/api/exchange/list?&country_code=${_this.countryCode}&take=12&order_type=${this.orderType}&type=${this.type}`)
					.then((res)=>{
						if(res.data.data.list.length == 0){
							this.none = true
							
						}else {
							this.none = false

						}
						this.tadingList = res.data.data.list
						this.pagestotal = (Number(res.data.data.count)/12)*10
						this.currentPage  = 1

				})


			},
			searchTrading(serach){
				if(!this.serach){
					alert('请输入关键字')
					return
				}
				var aa ;
				aa = this.tadingList
				this.tadingList =  this.tem.filter((ii,id)=>{
					return  ((ii.name).toLocaleUpperCase()).indexOf(((this.serach).toLocaleUpperCase())) != -1 ||  ((ii.slug).toLocaleUpperCase()).indexOf(((this.serach).toLocaleUpperCase())) != -1 
				})
				if(!this.tadingList.length){
					alert('暂无数据')
				
					this.tadingList = aa
				}
				this.pagestotal = 1

			},
			pages(index){
				alert(index  + '页')

			},
			toTradDetali(val){
				
				this.$router.push(`/index/tradDetali/${val}`)
				

			}
		},
		mounted(){
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0

			axios.get(`http://sdd.xtype.cn/api/exchange/list?&take=12&order_type=${this.orderType}&order_by=rank`)//平台列表
					.then((res)=>{
						console.log(res.data.data.list)
						if(res.data.data.list.length == 0){
							this.none = true

						}else {
							this.none = false

						}
						this.tadingList = res.data.data.list
						this.pagestotal = (Number(res.data.data.count)/12)*10

			})
			axios.get(`http://sdd.xtype.cn/api/exchange/list?&take=12&order_type=${this.orderType}&take=100`)//平台列表
				.then((res)=>{
					axios.get(`http://sdd.xtype.cn/api/exchange/list?&take=12&order_type=${this.orderType}&take=100&skip=100`)//平台列表
						.then((res)=>{
							this.tem = res.data.data.list
						})
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