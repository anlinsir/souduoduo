<template>
	
	<div class="rankingWarp">
		<div class="rankHeadChoose">
			<ul class="rankUl1">
				<li  style="cursor: pointer;" @click='rachange(index)' :class="rankavtive == index ? 'rankavtive' : '' " v-for='(item,index) in headChoose'>{{item}}</li>
			</ul>
			<ul class="rankUl2" v-if='rankavtive == 0'>
				<li :style="{color:index == 2 ? '#4277ff' : ''}" @click='headeractivesChange(0,index,item.id)' :class="headeractives0 == index ? 'headeractives0' : '' " :data-id='item.id' v-if='rankavtive == 0' v-for='(item,index) in headTchoose0'>{{item.pr}}
					<span @click='more' class="rankUl2SpanIcon" v-if='item.ci '></span>

					<ul style="background-color: #fff;border:1px solid #eee; border-radius: 20px;z-index: 2;" v-if='item.ci && moreShow'><!-- 有下拉的时候出来 -->
						<li style="cursor: pointer;" @click='childChoose($event,indexs)'  :class="headeractives0Chi ==indexs ? 'headeractives0Chi' : '' "  :data-id='items.id' v-for="(items,indexs) in item.ci" :key='indexs'>{{items.pr}}</li>
					</ul>
				</li>

				<li @click='headeractivesChange(1,index,item.id)' :class="headeractives1 == index ? 'headeractives1' : '' "  :data-id='item.id' v-if='rankavtive == 1' v-for='(item,index) in headTchoose1' :key='index'>
					
				</li>
				
			</ul>	
		</div>

		<div class="listDataWarp">
			<div class="jizaizhon" v-show='!datature'>
				
				<svg version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
							    <circle fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" transform="rotate(14.4021 50 50)">
							      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
							  </circle>
							  <circle fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39" transform="rotate(-14.4021 50 50)">
							      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
							  </circle>
							  <g fill="rgba(0,0,0,0.6)">
							  <rect x="30" y="35" width="5" height="30" transform="translate(0 2.99941)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform>
							  </rect>
							  <rect x="40" y="35" width="5" height="30" transform="translate(0 4.99941)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform>
							  </rect>
							  <rect x="50" y="35" width="5" height="30" transform="translate(0 3.00059)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
							  </rect>
							  <rect x="60" y="35" width="5" height="30" transform="translate(0 1.00059)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform>
							  </rect>
							  <rect x="70" y="35" width="5" height="30" transform="translate(0 -0.999405)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform>
							  </rect>
							  </g>
							</svg>
			</div>
			<table class="listData" v-show='datature'>
				<thead>
					<tr>
						<td v-if='rankavtive != 2' v-for='(item,index) in thead'>{{item}}</td>
						<td v-if='rankavtive == 2' v-for='(item,index) in thead2'>{{item}}</td>

					</tr>
				</thead>

				<tbody cellspacing="0">
					<tr @click='Bdetalis(item.slug,item.symbol)' v-for="(item,index) in rankingRise">
						<td style="width: 90px;">{{index+1}}</td>
						<td style="width: 160px;padding-right: 10px;box-sizing: border-box;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;">
							<img  style="transform: translateY(5px);height: 21px;width: 21px;" :src="item.logo" />
						{{item.name}}{{item.cn_name ? '-' + item.cn_name : ''}}</td>
						<td v-if='rankavtive != 2'>{{moneySymbol}}{{((item.price)*moneyrage).toFixed(4)}}</td>
						<td v-if='rankavtive != 2'>{{moneySymbol}}{{item.market_cap ? ((item.market_cap)*moneyrage).toFixed(2) : '?'}}</td>
						<td v-if='rankavtive != 2'>{{item.circulating_supply ? ((item.circulating_supply)/10000).toFixed(2)  +  '万' : '?'}}</td>
						<td v-if='rankavtive != 2'>{{moneySymbol}}{{item.volume_24h ? (((item.volume_24h)*moneyrage)/10000).toFixed(2) + '万' : '?'}}</td>
						<td  v-if='rankavtive != 2' :style="{color: item.percent_change_1h >= 0 ?  '#33b862' : 'red' }">{{item.percent_change_1h ? item.percent_change_1h : '?'}}%</td>

						<td  v-if='rankavtive == 2'>{{item.pairs_count}}</td>
						<td style="width:100px;" v-if='rankavtive == 2'>{{item.country_code}}</td>

						<td style="width: 280px;" class="type" v-if='rankavtive == 2'>
							<!-- {{item.type[0] ? '' : ''  {{item.type[1] ? '' : ''}}}} {{item.type[2] ? '' : ''}}  {{item.cjl}} {{item.zb}} {{item.gx}}-->
							<!-- v-if='item.types.indexOf(0) != -1'              -->
							<span class="xh"  v-show="(JSON.stringify(item.types)).indexOf('0') != -1">现货</span>
							<span class="qh" v-show="(JSON.stringify(item.types)).indexOf('1') != -1">期货</span>
							<span  class="fb" v-show="(JSON.stringify(item.types)).indexOf('2') != -1" >法币</span>

						</td>

						<td v-if='rankavtive == 2'>{{moneySymbol}}{{(Number(item.volume_24h)*moneyrage).toFixed(2)}}</td>
						<td v-if='rankavtive == 2'>%</td>
						<td v-if='rankavtive == 2'>{{item.updated_at}}</td>



						

					</tr>
				</tbody>
			</table>
			<!-- <div class="pagesW" style="text-align: center;width:100%;  transform: translateX(-151px);margin-top: 50px;" v-show='datature'>
				<div class="block" style="display: inline-block;width: 100px; top: 0px;left: 0px;bottom: 0;right: 0;margin: auto;" >


				 <el-pagination :current-page.sync='currentPage0'  @current-change="handleCurrentChange" style="width: 100px;"
				   layout="prev, pager, next"
				   :total="total" 
				   	
				   >
				  </el-pagination>



				</div>
			</div> -->
		</div>



	</div>


</template>


<script>
	import axios from 'axios'
	export default{
		data(){
			return({
				datature:false,
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
								pr:'24小时',
								id:20
							},
							{
								pr:'7天',
								id:21
							}
						]
					}
				],
				headTchoose1:[
					
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
				],
				rankingRise:[],
				currentPage0:1,
				total:null,
				time:null,
				rank:null,
				jys:false,
				jysType:null,
				moneyrage:6.67,
				moneySymbol:'￥'
				
			})
		},
		methods:{
			rachange(index){
				console.log()
				this.rankavtive = index
				if(index == 0){
					this.headeractives0 = 0
					this.headeractives1 = 0
					this.headeractives2 = 0

					this.currentPage0 = 1
					this.jys = false
					this.datature = false
					axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h`)
						.then((res)=>{
							this.rankingRise = res.data.data.list
							console.log(this.rankingRise)
							this.total  = Math.ceil(res.data.data.count)
							this.datature = true
						})
				}
				if(index == 1){
					this.headeractives0 = 0
					this.headeractives1 = 0
					this.headeractives2 = 0
					this.currentPage0 = 1
					this.jys = false
					this.datature = false
					axios.get(`${href}/api/currencie/list?&order_by=volume_24h&take=30&order_type=desc`)
						.then((res)=>{
							this.rankingRise = res.data.data.list
							this.datature = true
						})
				}else if(index == 2){
					this.headeractives0 = 0
					this.headeractives1 = 0
					this.headeractives2 = 0
					this.jysType = 'asc'
					this.currentPage0 = 1
					this.jys = true
					this.datature = false
					axios.get(`${href}/api/exchange/list?&order_by=volume_24h&order_type=asc&take=30`)
						.then((res)=>{
							console.log(res.data.data)
							this.rankingRise = res.data.data.list
							this.total = Math.ceil(res.data.data.count)
							console.log(this.rankingRise[0].types.indexOf('0'))
							this.datature = true

						})
				}
			},
			more(){
				this.moreShow = true
			},
			headeractivesChange(inx,index,dataid){
				var _this = this 
				switch (inx){
					case 0:						
						if(index == 0){
							this.headeractives0 = index
							this.currentPage0 = 1
							this.rank = 'desc'
							this.datature = false
							axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&take=30`)
								.then((res)=>{
									this.rankingRise = res.data.data.list
									console.log(this.rankingRise)
									this.datature = true
								})
						}else if(index == 1){
						this.currentPage0 = 1
							this.headeractives0 = index
							this.rank = 'asc'
							this.datature = false
							axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&take=30`)
								.then((res)=>{
									this.rankingRise = res.data.data.list
									console.log(this.rankingRise)
									this.datature = true
								})
						}else if(index == 2){

						}
						break;
					case 1:
						this.headeractives1 = index
					
						break;
					case 2:
						this.headeractives2 = index
						if(dataid == 0 ){
							this.currentPage0 = 1
							this.jysType = 'asc'
							this.datature = false
							axios.get(`${href}/api/exchange/list?&order_by=volume_24h&order_type=asc`)
						.then((res)=>{
							console.log(res.data.data)
							this.rankingRise = res.data.data.list
							console.log(this.rankingRise[0].types.indexOf('0'))
							this.datature = true

						})
					}else if(dataid == 1){
						this.currentPage0 = 1
							this.jysType = 'desc'
							this.datature = false
						axios.get(`${href}/api/exchange/list?&order_by=volume_24h&order_type=desc`)
						.then((res)=>{
							console.log(res.data.data)
							this.rankingRise = res.data.data.list
							this.datature = true

						})
					}

						break;

				}
			},
			childChoose(e,index){
				
				var _this = this
				this.headeractives0Chi = index
				if(index == 0){
					this.time = 'percent_change_1h'
					this.datature = false
					axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&take=30`)
						.then((res)=>{
						this.rankingRise = res.data.data.list
						console.log(this.rankingRise)
						this.datature = true
					})
				}else if(index == 1){
					this.time = 'percent_change_24h'
					this.datature = false
					axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&take=30`)
						.then((res)=>{
						this.rankingRise = res.data.data.list
						console.log(this.rankingRise)
						this.datature = true
					})
				}else if(index == 2){
					this.time = 'percent_change_7d'
					this.datature = false
					axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&take=30`)
						.then((res)=>{
						this.rankingRise = res.data.data.list
						console.log(this.rankingRise)
						this.datature = true
					})
				}
				this.headTchoose0[2].pr = e.target.innerHTML
				this.moreShow = false
			},
			Bdetalis(sug,syb,val){
				if(this.rankavtive == 0 || this.rankavtive == 1){

						this.$router.push({path:`/index/cion/${sug}`,query:{symbol:syb}})
				}else if(this.rankavtive == 2){
					this.$router.push(`/index/tradDetali/${sug}`)
				}
			},
			handleCurrentChange(pages){
				var _this = this
				this.currentPage0 =  pages
				
				if(this.rankavtive == 0){
					if(this.headeractives0 == 0){
						this.rank = 'asc'
						this.datature = false
							axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&skip=${(Number(pages)-1)*10}`)
								.then((res)=>{
									this.rankingRise = res.data.data.list
									console.log(this.rankingRise)
									this.datature = true
						})
					}else if(this.headeractives0 == 1){
						this.rank = 'desc'
						this.datature = false
							axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&skip=${(Number(pages)-1)*10}`)
								.then((res)=>{
									this.rankingRise = res.data.data.list
									console.log(this.rankingRise)
									this.datature = true
								})
					}
				}else if(this.rankavtive == 1){
					this.datature = false
					axios.get(`${href}/api/currencie/list?&order_by=volume_24h&skip=${(Number(pages)-1)*10}`)
						.then((res)=>{
							this.rankingRise = res.data.data.list
							this.datature = true
						})
					}else if(this.rankavtive == 2){
							this.datature = false
								axios.get(`${href}/api/exchange/list?&order_by=volume_24h&order_type=${_this.jysType}&skip=${(Number(pages)-1)*10}`)
									.then((res)=>{
										console.log(res.data.data)
										this.rankingRise = res.data.data.list
										this.total = Math.ceil(res.data.data.count)
										console.log(this.rankingRise[0].types.indexOf('0'))
										this.datature = true

								})
					}





					
				// else{
				// 	axios.get(`${href}/api/currencie/list?&order_by=${_this.time}&order_type=${_this.rank}&skip=${(Number(pages)-1)*10}`)
				// 	.then((res)=>{
				// 		this.rankingRise = res.data.data.list
				// 		console.log(this.rankingRise)
				// 		this.total  = Math.ceil(res.data.data.count)
				// 	})			
				// }

					
			},
			
		},
		beforeRouteEnter (to, from, next) {
		  next(vm => {
		  	console.log(vm.$route)
		  	vm.moneyrage =localStorage.moneyrage
		  	vm.moneySymbol = localStorage.moneySymbol

		  })
		},	
		mounted(){
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0
			this.time = 'percent_change_1h'
			this.rank = 'desc'
			axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&order_type=${this.rank}&take=30`)
				.then((res)=>{
					this.rankingRise = res.data.data.list
					console.log(this.rankingRise)
					this.total  = Math.ceil(res.data.data.count)
					this.datature = true
				})
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
					cursor: pointer;
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
						position: absolute;
						width: 100%;
						min-height: 100%;
						z-index: 50;
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
			padding: 0 21px 0 17px;
			min-height:400px;
			position: relative;
			>.jizaizhon{
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: rgba(255,255,255,0.6);
				z-index: 2;
				>svg{
					width: 50px;
					height: 50px;
					position: absolute;
					top:0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: auto;
				}
			}
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

							cursor: pointer;
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

</style>