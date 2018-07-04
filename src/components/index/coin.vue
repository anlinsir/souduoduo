<template>
	<div class="cionWarp">
		<div class="iconTop">
			<dl v-show='dataShow' v-for="(ii,id) in cionDetalis">
				<dt><img :src="ii.logo"></dt>
				<dd class="iconInfo">
					<p class="p1">
						<span class="iconName">{{ii.symbol}} {{ii.cn_name}}</span>
						<span class="iconEnName">{{ii.name}}</span>
					</p>

					<p class="p2" style="width: 401px">
						<span class="priceY">￥{{(ii.price_cny).toFixed(2)}}</span>
						<span class="zf" :style="{backgroundColor:Number(ii.percent_change_24h) >=0 ? '' : '#e74343' }">{{ii.percent_change_24h}}%</span>
						<span class="add">添加自选</span>
					</p>

					<p class="p3">
						<span class="priceU">≈ ${{ii.price}}</span>
						<span class="UHouPrice">24H最高   ${{ii.price_height}}</span>
					</p>
					<p class="p4">
						<span class="priceU">≈ 1 BTC</span>
						<span class="UHouPrice">24H最低   ${{ii.price_low}}</span>
					</p>
				</dd>
				<dd class="iconInfoMore" >
					<p style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;height: 50px;box-sizing: content-box;">{{ii.introduce}}</p>
					<p><i @click='cionMoreInfo(0)' style="color: #4277ff;font-style: normal;cursor: pointer;">查看更多</i></p>
				</dd>				
			</dl>

			<dl v-show='!dataShow' v-for="(ii,id) in cionDetalis">
				<dt><img :src="ii.logo"></dt>
				<dd style="font-size: 16px;color: #4277ff;margin-top: 3px;width: 100%;"">
					<span style='min-height:50px;padding-bottom:10px;'>{{ii.cn_name}} ({{ii.name}})简介</span>
					<span style="float: right;width: 100px;height: 30px;border:1px solid #4277ff;color: #4277ff;text-align: center;line-height: 28px;border-radius: 10px;font-size: 12px;" @click='cionMoreInfo(1)'>查看行情</span><br />
					<span style="margin-top: 33px;color: #666;display: inline-block;font-size: 12px;">{{ii.introduce}}</span>
				</dd>
			</dl>

			<div class="iconTopTableWarp">

				<ul class="iconTopTable"  v-for='(item,index) in cionDetalis'>
					<li >英文名：{{item.name}} / {{item.symbol}}</li>

					<li >上架交易所：{{item.created_at}}</li>
					<li >发行时间：{{item.updated_at}}</li>
					<li >白皮书： <a :href="item.bps" style="display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 174px;
    height: 37px;">{{whitePaper}}</a>	</li>
					<li >相关概念</li>
					<li >区块站： <a :href='ii'  v-for='(ii,id) in JSON.parse(blockUrl)'>{{ii}}</a></li>
					<li >网站： <a :href='it'  v-for='(it,id) in JSON.parse(website)'>{{it}}</a></li>
					<li >GitHub地址：<a :href="github">{{github}}</a>	</li>
					<li >Twitter:<a :href="twitter">点击查看</a></li>
					<li >持币排行： <a :href="haveRank">点击查看</a></li>
					<li >众筹价： <span class="jiage"></span> <span class="beishu">{{publishedprice}}<span style="display: inline-block;transform: translateX(2px) translateY(-2px);">↑</span></span></li>
				</ul>
			</div>
		</div>

		<div v-show='dataShow' class="iconBom">
			<div class="iconBomTOP">
				<ul >
					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 12px;">流通市值</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;font-size: 16px;">$ {{marketCap}}</p>
						<p style="height: 23px;background-color: #4277ff;color: #fff;border-radius: 10px;text-align: center;line-height: 24px;margin-bottom: 20px;padding: 0 15px;box-sizing: border-box;display: inline-block;">排名NO.{{rank}}</p>
						<p style="margin-bottom: 8px;font-size: 12px;">≈$127,464,800,199 </p>
						<p style="font-size: 12px;"> ≈17,053,787BTC</p>
						</div>
						<div class="right">
							 <div id="EFAMC" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="EFAMC1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 12px;">流通量</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;font-size: 16px;">{{(Number(circulatingSupply)/10000).toFixed(2)}}</p>
							
						<p style="margin-top: 45px;margin-bottom: 8px;font-size: 12px;">发行总量</p>
						<p style="color:#4277ff;font-weight: bold;font-size: 16px; ">2100000000 BTC</p>							
						</div>
						<div class="right">
							


							 <div id="turnover" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="turnover1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>


							
								
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 12px;">24H成交额</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;font-size: 16px;">${{volume24h}}</p>
						<p style="height: 23px;background-color: #33b862;color: #fff;border-radius: 10px;text-align: center;line-height: 23px;margin-bottom: 20px;display: inline-block;padding: 0 15px;box-sizing: border-box;">排名NO.{{rankFor24}}</p>
						<p style="margin-bottom: 8px;font-size: 12px;">≈$127,464,800,199 </p>
						<p style="font-size: 12px;"> ≈17,053,787BTC</p>
						</div>
						<div class="right">
							<div id="24pay" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="24pay1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>	
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 12px;">24H资金流入</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;font-size: 16px;">814,238,7BTC</p>
							
						<p style="margin-top: 45px;margin-bottom: 8px;font-size: 12px;">24H资金流出</p>
						<p style="color:#4277ff;font-weight: bold;font-size: 16px; ">210000000 BTC</p>	
						</div>
						<div class="right">
							<div id="cionin" style="width:200px; height:200px;position: absolute;top: -13px;left: 110px;"></div>

							 <div id="cionin1" style="width:200px; height:200px;position: absolute;top: -13px;left: 110px;"></div>	

							 <div id="cionin2" style="width:200px; height:200px;position: absolute;top: -13px;left: 110px;"></div>	

						</div>
					</li>

				</ul>
			</div>


			<div class="iconBomBOM">
				<div class="BomBOMLeft">
					<ul class="Head" style="text-align: center;">
						<li >交易平台</li>
						<li >最新价</li>
						<li >24H额(￥)</li>
						<li >占比</li>

					</ul>

					<ul @mouseenter='cancel' @mouseout='cann' class="Body" style="position: relative;overflow: auto;height: 647px;">
						<!-- style="position: absolute;width: 100%" :style="{top:(top)+(50*(id)) + 'px'}" -->
						<li v-for='(ii,id) in jiaoyiduiList' >
							<p style="width: 30px">
								<span></span><br>
								<span><img style="transform: translateY(-3px);" src="/static/img/startNO.png"></span><br>
								<span></span>								
							</p>

							<p><span>{{ii.exchange_slug}}</span><br>
								<span></span><br>
								<span>{{ii.symbol}}/{{ii.to_symbol}}</span>
							</p>
							<p><span>{{ii.price_usd}}</span><br>
								<span></span><br>
								<span>￥{{(Number(ii.price_usd)*cny).toFixed(2)}}</span>
							</p>
							<p style="padding-left: 33px;box-sizing: border-box;">
								<span></span><br>
								<span>{{Number(ii.volume_usd)/10000}}万</span><br>
								<span></span>
							</p>
							<p style="padding-left: 33px;box-sizing: border-box;">
								<span></span><br>
								<span>{{((Number(ii.volume_usd)/sum24)*100).toFixed(2) + '%'}}</span><br>
								<span></span>
							</p>


						</li>


						<!-- <li  v-for='(ii,id) in 10' style="position: absolute;width: 100%" :style="{top:500 + (top)+(50*(id)) + 'px'}">
							<p><span>{{id}}</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>{{id}}</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>{{id}}</span><br>
								<span></span>
							</p>

						</li> -->

						


						
						


					</ul>
				</div>


				<div class="BomBOMRight">
					<!-- <ul class="ChooseTitle">
						<li style="margin-right: 47px;">价格走势图</li>
						<li @click='chengChoosrTitle(index)' style="margin-right: 28px;" :class="choosetitleactive == index ? 'choosetitleactive' : '' " v-for='(item,index) in ChooseTitle'>{{item}}</li>
					</ul> -->

					<div class="TablessWarp">
						<div class="Tabless">
							<!-- <div id="K" style="width:685px; height:680px;"></div> -->
							<div id="container" style="width: 700px;height:700px;"></div>
						</div>
					</div>


				</div>

			</div>

		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	var ccc ,timer1 ,timer2, timer3 , timer4;
	import $ from 'jquery'
	import axios from 'axios'
	Highcharts.setOptions({ global: { useUTC: false } }); 

	export default{

		data(){
			
			return({
			
				ChooseTitle:['1分钟','5分钟','15分钟','30分钟','1小时','4小时','12小时','1天',],
				choosetitleactive:0,
				dataShow:true,
				value1:18,
				turnover:10.3,
				pay1:40.34,
				cionin:5.5,
				top:0,
				cionDetalis:[],
				marketCap:null,//流通市值
				rank:null,//排行
				percentGlobalMarketCap:null,//图表一占比,
				circulatingSupply:null,//流通量
				symbol:null,//币名
				percentCirculating:null,//流通率,
				volume24h:null,//24小时成交额
				rankFor24:null,//24小时排行,
				whitePaper:null,//白皮书
				blockUrl:null,//区块栈
				website:null,//网站
				github:null,//github地址，
				twitter:null,//推特地址
				haveRank:null,//持币排行,
				publishedprice:null,//众筹价
				jiaoyiduiList:[],
				cny:null,
				sum24:null
			})
		}
		,
		methods:{
			cancel(){
				 // clearInterval(ccc)
				 // console.log(this.top)
			},
			cann(){
				/*ccc = setInterval(()=>{
					this.top -=1
					if(this.top <= -500){
						this.top = 0
					}
				},100)*/
			}
			,
			cionMoreInfo(idx){
				this.dataShow = idx
			}
			
		}
		,
		created(){
			
		},
		watch: {
		   '$route' (to, from) {
		     console.log(this.$route.path)
		     axios.get(`http://sdd.xtype.cn/api/pair/list?&symbol=${this.$route.query.symbol}`)
				.then((res)=>{
					this.jiaoyiduiList = res.data.data.list
					this.sum24 = res.data.data.sum_volume24h

				})



			var _this = this
			axios.get(`http://sdd.xtype.cn/api/currencie/item?&slug=${this.$route.params.id}`)
				.then((res)=>{
					this.cionDetalis = ([res.data.data])									
					console.log(this.cionDetalis)
					this.marketCap = this.cionDetalis[0].market_cap
					this.rank = this.cionDetalis[0].rank
					this.percentGlobalMarketCap = (Number(this.cionDetalis[0].percent_global_market_cap)).toFixed(2)
					this.circulatingSupply = (this.cionDetalis[0].circulating_supply)
					this.symbol = this.cionDetalis[0].symbol
					this.percentCirculating = this.cionDetalis[0].percent_circulating
					this.volume24h = this.cionDetalis[0].volume_24h
					this.rankFor24 = this.cionDetalis[0].rank_volume
					this.whitePaper = this.cionDetalis[0].white_paper
					this.blockUrl = this.cionDetalis[0].block_url
					this.website = this.cionDetalis[0].website
					this.github = this.cionDetalis[0].github
					this.twitter = this.cionDetalis[0].twitter
					this.haveRank = this.cionDetalis[0].have_rank
					this.publishedprice = this.cionDetalis[0].published_price		


					var turnover1 = echarts.init(document.getElementById('turnover1'));

						turnover1.setOption({
					    title: { },
					    	series: [{
					         type: 'pie',
					         radius: ['55%', '75%'],
					         hoverAnimation:false,
					         legendHoverLink:false,
					         data:[
				                {value:this.percentCirculating,itemStyle:{ normal:{color:'#84bbff'} }},
				                {value:100 - (this.percentCirculating),itemStyle:{ normal:{color:'transparent'} }},

				              
				            ],

				            labelLine:{show:false},
				            
					    }]
					});

					var turnover = echarts.init(document.getElementById('turnover'));
						turnover.setOption({
						    title:{
						    	text:(this.percentCirculating).toFixed(2) + '%',
						    	subtext:'流通率',
						    	subtextStyle:{
						    		color:'#333333',
						    		fontWeight:'normal',
						    		fontSize:14,
						    		textAlign:'center',
						    		
						    	},
						    	subtextStyle:{
						    		color:"#8e8d8d",
						    		fontWeight:'normal',
						    		fontSize:12,
						    		textAlign:'center',
						    		lineHeight:'200'
						    	},
						    	padding:[80, 0, 0, 63],
						    	 left:'center'
						    	

						    },
						    	 series: [
								        {
								           
								            type:'pie',
								           radius: ['48%', '68%'],
								           hoverAnimation:false,
					        			 legendHoverLink:false,
								            label: {
								                normal: {
								                    show: false,
								                    position: 'center'
								                },
								              
								            },
								           
								            data:[
								                {value:335, },
								             
								            ],
								            itemStyle: {
								            	shadowBlur:15,
								            	shadowOffsetX:0,
								            	shadowOffsetY:3,
								            	shadowColor:'#3d5286',
								                color: {
								                    type: 'linear',
								                    x: 0,
								                    y: 0,
								                    x2: 0,
								                    y2: 1,
								                    colorStops: [{
								                        offset: 0, color: '#32a6ff' // 0% 处的颜色
								                    }, {
								                        offset: 0.8, color: '#3d5286' // 100% 处的颜色
								                    }],
								                    globalCoord: false // 缺省为 false
								                }
								            }
								        }
								    ]
					});

				// timer2 = setInterval(()=>{
					// 	// this.turnover += 1 
					// 	// if(this.turnover >= 10){
					// 	// 	this.turnover = 1
					// 	// }
					// 	var turnover1 = echarts.init(document.getElementById('turnover1'));
					// 	turnover1.setOption({
					// 	    title: { },
					// 	    			    series: [{
					// 	         type: 'pie',
					// 	         radius: ['60%', '80%'],
					// 	         hoverAnimation:false,
					// 	         legendHoverLink:false,
					// 	         data:[
					//                 {value:this.turnover,itemStyle:{ normal:{color:'#84bbff'} }},
					//                 {value:100 - (this.turnover),itemStyle:{ normal:{color:'transparent'} }},

					              
					//             ],

					//             labelLine:{show:false},
					            
					// 	    }]
					// 	});

					// 		turnover.setOption({
					// 		    title:{
					// 		    	text:this.turnover + '%',
					// 		    	subtext:'流通率',
					// 		    	subtextStyle:{
					// 		    		color:'#333333',
					// 		    		fontWeight:'normal',
					// 		    		fontSize:14,
					// 		    		textAlign:'center',
							    		
					// 		    	},
					// 		    	subtextStyle:{
					// 		    		color:"#8e8d8d",
					// 		    		fontWeight:'normal',
					// 		    		fontSize:12,
					// 		    		textAlign:'center',
					// 		    		lineHeight:'200'
					// 		    	},
					// 		    	padding:[80, 0, 0, 63],
					// 		    	 left:'center'
							    	

					// 		    },
					// 		    	 series: [
					// 				        {
									           
					// 				            type:'pie',
					// 				            radius: ['50%', '70%'],
					// 				           hoverAnimation:false,
					// 	        			 legendHoverLink:false,
					// 				            label: {
					// 				                normal: {
					// 				                    show: false,
					// 				                    position: 'center'
					// 				                },
									              
					// 				            },
									           
					// 				            data:[
					// 				                {value:335, },
									             
					// 				            ],
					// 				            itemStyle: {
					// 				            	shadowBlur:20,
					// 				            	shadowOffsetX:-3,
					// 				            	shadowOffsetY:7,
					// 				            	shadowColor:'#3d5286',
					// 				                color: {
					// 				                    type: 'linear',
					// 				                    x: 0,
					// 				                    y: 0,
					// 				                    x2: 0,
					// 				                    y2: 1,
					// 				                    colorStops: [{
					// 				                        offset: 0, color: '#32a6ff' // 0% 处的颜色
					// 				                    }, {
					// 				                        offset: 0.8, color: '#3d5286' // 100% 处的颜色
					// 				                    }],
					// 				                    globalCoord: false // 缺省为 false
					// 				                }
					// 				            }
					// 				        }
					// 				    ]
					// 	});
					// },1000)


				//第二个图






					var EFAMC1 = echarts.init(document.getElementById('EFAMC1'));
					// 绘制图表1
						EFAMC1.setOption({
						    title: { },
						    	series: [{
						         type: 'pie',
						         radius: ['55%', '75%'],
						         hoverAnimation:false,
						         legendHoverLink:false,
						         data:[
					                {value:this.percentGlobalMarketCap,itemStyle:{ normal:{color:'#7696eb'} }},
					                {value:100 - (this.percentGlobalMarketCap),itemStyle:{ normal:{color:'transparent'} }},

					              
					            ],

					            labelLine:{show:false},
					            
						    }]
						});

						var EFAMC = echarts.init(document.getElementById('EFAMC'));
							EFAMC.setOption({
							    title:{
							    	text:this.percentGlobalMarketCap + '%',
							    	subtext:'占全球总市值',
							    	subtextStyle:{
							    		color:'#333333',
							    		fontWeight:'normal',
							    		fontSize:14,
							    		textAlign:'center',
							    		
							    	},
							    	subtextStyle:{
							    		color:"#8e8d8d",
							    		fontWeight:'normal',
							    		fontSize:12,
							    		align:'center',
							    		lineHeight:'200'
							    	},
							    	padding:[80, 0, 0, 63],
							    	 left:'center'

							    },

							    	 series: [
									        {
									           
									            type:'pie',
									            radius: ['48%', '68%'],
									           hoverAnimation:false,
						        			 legendHoverLink:false,
									            label: {
									                normal: {
									                    show: false,
									                    position: 'center'
									                },
									              
									            },
									           
									            data:[
									                {value:335, },
									             
									            ],
									            itemStyle: {
									            	shadowBlur:15,
									            	shadowOffsetX:0,
									            	shadowOffsetY:3,
									            	shadowColor:'#556fb5',
									                color: {
									                    type: 'linear',
									                    x: 0,
									                    y: 0,
									                    x2: 0,
									                    y2: 1,
									                    colorStops: [{
									                        offset: 0, color: '#556fb5' // 0% 处的颜色
									                    }, {
									                        offset: 0.8, color: '#45447c' // 100% 处的颜色
									                    }],
									                    globalCoord: false // 缺省为 false
									                }
									            }
									        }
									    ]
							});

							//  timer1 = setInterval(()=>{
							// 	// this.value1 += 1 
							// 	// if(this.value1 == 30){
							// 	// 	this.value1 =1
							// 	// }
							// 	var EFAMC1 = echarts.init(document.getElementById('EFAMC1'));
							// 	EFAMC1.setOption({
							//     title: { },
							//     	series: [{
							//          type: 'pie',
							//          radius: ['60%', '80%'],
							//          hoverAnimation:false,
							//          legendHoverLink:false,
							//          data:[
						 //                {value:this.value1,itemStyle:{ normal:{color:'#7696eb'} }},
						 //                {value:100 - (this.value1),itemStyle:{ normal:{color:'transparent'} }},

						              
						 //            ],

							//             labelLine:{show:false},
							            
							// 	    }]
							// 	});

							// 	EFAMC.setOption({
							//     title:{
							//     	text:this.value1 + '%',
							//     	subtext:'占全球总市值',
							//     	subtextStyle:{
							//     		color:'#333333',
							//     		fontWeight:'normal',
							//     		fontSize:14,
							//     		textAlign:'center',
							    		
							//     	},
							//     	subtextStyle:{
							//     		color:"#8e8d8d",
							//     		fontWeight:'normal',
							//     		fontSize:12,
							//     		align:'center',
							//     		lineHeight:'200'
							//     	},
							//     	padding:[80, 0, 0, 63],
							//     	 left:'center'

							//     },

							//     	 series: [
							// 		        {
									           
							// 		            type:'pie',
							// 		            radius: ['50%', '70%'],
							// 		           hoverAnimation:false,
						 //        			 legendHoverLink:false,
							// 		            label: {
							// 		                normal: {
							// 		                    show: false,
							// 		                    position: 'center'
							// 		                },
									              
							// 		            },
									           
							// 		            data:[
							// 		                {value:335, },
									             
							// 		            ],
							// 		            itemStyle: {
							// 		            	shadowBlur:20,
							// 		            	shadowOffsetX:-3,
							// 		            	shadowOffsetY:7,
							// 		            	shadowColor:'#556fb5',
							// 		                color: {
							// 		                    type: 'linear',
							// 		                    x: 0,
							// 		                    y: 0,
							// 		                    x2: 0,
							// 		                    y2: 1,
							// 		                    colorStops: [{
							// 		                        offset: 0, color: '#556fb5' // 0% 处的颜色
							// 		                    }, {
							// 		                        offset: 0.8, color: '#45447c' // 100% 处的颜色
							// 		                    }],
							// 		                    globalCoord: false // 缺省为 false
							// 		                }
							// 		            }
							// 		        }
							// 		    ]
							// 	});
							// },1000)


							//第一个图
						
						})

						ccc = setInterval(()=>{
							this.top -=1
							if(this.top <= -500){
								this.top = 0
							}
						},100)
			// if(timer1 || timer2 || timer3){
			// clearInterval(timer1)
			// clearInterval(timer2)
			// clearInterval(timer3)
			// clearInterval(timer4)
			// }
				var pay241 = echarts.init(document.getElementById('24pay1'));

					pay241.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['55%', '75%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:this.pay1,itemStyle:{ normal:{color:'#87f8c2'} }},
			                {value:100 - (this.pay1),itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

				var pay = echarts.init(document.getElementById('24pay'));
					pay.setOption({
					    title:{
					    	text:this.pay1 + '%',
					    	subtext:'换手率',
					    	subtextStyle:{
					    		color:'#333333',
					    		fontWeight:'normal',
					    		fontSize:14,
					    		align:'center',
					    		
					    	},
					    	subtextStyle:{
					    		color:"#8e8d8d",
					    		fontWeight:'normal',
					    		fontSize:12,
					    		align:'center',
					    		lineHeight:'200'
					    	},
					    	padding:[80, 0, 0, 63],
					    	 left:'center'

					    },
					    	 series: [
							        {
							           
							            type:'pie',
							            radius: ['48%', '68%'],
							           hoverAnimation:false,
				        			 legendHoverLink:false,
							            label: {
							                normal: {
							                    show: false,
							                    position: 'center'
							                },
							              
							            },
							           
							            data:[
							                {value:335, },
							             
							            ],
							            itemStyle: {
							            	shadowBlur:15,
							            	shadowOffsetX:0,
							            	shadowOffsetY:3,
							            	shadowColor:'#287f66',
							                color: {
							                    type: 'linear',
							                    x: 0,
							                    y: 0,
							                    x2: 0,
							                    y2: 1,
							                    colorStops: [{
							                        offset: 0, color: '#5dd186' // 0% 处的颜色
							                    }, {
							                        offset: 0.8, color: '#287f66' // 100% 处的颜色
							                    }],
							                    globalCoord: false // 缺省为 false
							                }
							            }
							        }
							    ]
				});

					// timer3 = setInterval(()=>{
						// 	var pay241 = echarts.init(document.getElementById('24pay1'));
						// 		// this.pay1 += 4.5
						// 		// if(this.pay1 >= 88){
						// 		// 	this.pay1 = 10 
						// 		// }
						// 			pay241.setOption({
						// 		    title: { },
						// 		    	series: [{
						// 		         type: 'pie',
						// 		         radius: ['60%', '80%'],
						// 		         hoverAnimation:false,
						// 		         legendHoverLink:false,
						// 		         data:[
						// 	                {value:this.pay1,itemStyle:{ normal:{color:'#87f8c2'} }},
						// 	                {value:100 - (this.pay1),itemStyle:{ normal:{color:'transparent'} }},

							              
						// 	            ],

						// 	            labelLine:{show:false},
							            
						// 		    }]
						// 		});


						// 			pay.setOption({
						//     title:{
						//     	text:this.pay1 + '%',
						//     	subtext:'换手率',
						//     	subtextStyle:{
						//     		color:'#333333',
						//     		fontWeight:'normal',
						//     		fontSize:14,
						//     		align:'center',
						    		
						//     	},
						//     	subtextStyle:{
						//     		color:"#8e8d8d",
						//     		fontWeight:'normal',
						//     		fontSize:12,
						//     		align:'center',
						//     		lineHeight:'200'
						//     	},
						//     	padding:[80, 0, 0, 63],
						//     	 left:'center'

						//     },
						//     	 series: [
						// 		        {
								           
						// 		            type:'pie',
						// 		            radius: ['50%', '70%'],
						// 		           hoverAnimation:false,
					 //        			 legendHoverLink:false,
						// 		            label: {
						// 		                normal: {
						// 		                    show: false,
						// 		                    position: 'center'
						// 		                },
								              
						// 		            },
								           
						// 		            data:[
						// 		                {value:335, },
								             
						// 		            ],
						// 		            itemStyle: {
						// 		            	shadowBlur:20,
						// 		            	shadowOffsetX:-3,
						// 		            	shadowOffsetY:7,
						// 		            	shadowColor:'#287f66',
						// 		                color: {
						// 		                    type: 'linear',
						// 		                    x: 0,
						// 		                    y: 0,
						// 		                    x2: 0,
						// 		                    y2: 1,
						// 		                    colorStops: [{
						// 		                        offset: 0, color: '#5dd186' // 0% 处的颜色
						// 		                    }, {
						// 		                        offset: 0.8, color: '#287f66' // 100% 处的颜色
						// 		                    }],
						// 		                    globalCoord: false // 缺省为 false
						// 		                }
						// 		            }
						// 		        }
						// 		    ]
						// 	});
						// },500)

						//第三个图



				var cionin2 = echarts.init(document.getElementById('cionin2'));

					cionin2.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['55%', '75%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:this.cionin,itemStyle:{ normal:{color:'#f7cc69'} }},
			                {value:100 - this.cionin,itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

				var cionin1 = echarts.init(document.getElementById('cionin1'));

					cionin1.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['55%', '75%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:50,itemStyle:{ normal:{color:'#fee387'} }},
			                {value:50,itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

				var cionin = echarts.init(document.getElementById('cionin'));
					cionin.setOption({
					    title:{
					    	text:this.cionin + '%',
					    	subtext:'净流入',
					    	subtextStyle:{
					    		color:'#333333',
					    		fontWeight:'normal',
					    		fontSize:14,
					    		align:'center',
					    		
					    	},
					    	subtextStyle:{
					    		color:"#8e8d8d",
					    		fontWeight:'normal',
					    		fontSize:12,
					    		align:'center',
					    		lineHeight:'200'
					    	},
					    	padding:[80, 0, 0, 63],
					    	 left:'center'

					    },
					    	 series: [
							        {
							           
							            type:'pie',
							           radius: ['48%', '68%'],
							           hoverAnimation:false,
				        			 legendHoverLink:false,
							            label: {
							                normal: {
							                    show: false,
							                    position: 'center'
							                },
							              
							            },
							           
							            data:[
							                {value:335, },
							             
							            ],
							            itemStyle: {
							            	shadowBlur:20,
							            	shadowOffsetX:-3,
							            	shadowOffsetY:7,
							            	shadowColor:'#f9b25c',
							                color: {
							                    type: 'linear',
							                    x: 0,
							                    y: 0,
							                    x2: 0,
							                    y2: 1,
							                    colorStops: [{
							                        offset: 0, color: '#f9b25c' // 0% 处的颜色
							                    }, {
							                        offset: 0.8, color: '#d68f37' // 100% 处的颜色
							                    }],
							                    globalCoord: false // 缺省为 false
							                }
							            }
							        }
							    ]
				});	
				//  timer4 = setInterval(()=>{
					// 	// this.cionin -= 3
					// 	// if(this.cionin <= 10){
					// 	// 	this.cionin = 99
					// 	// }
					// 	cionin1.setOption({
					// 		    title: { },
					// 		    	series: [{
					// 		         type: 'pie',
					// 		         radius: ['60%', '80%'],
					// 		         hoverAnimation:false,
					// 		         legendHoverLink:false,
					// 		         data:[
					// 	                {value:50,itemStyle:{ normal:{color:'#fee387'} }},
					// 	                {value:50,itemStyle:{ normal:{color:'transparent'} }},

						              
					// 	            ],

					// 	            labelLine:{show:false},
						            
					// 		    }]
					// 		});


					// 	cionin2.setOption({
					// 	    title: { },
					// 	    	series: [{
					// 	         type: 'pie',
					// 	         radius: ['60%', '80%'],
					// 	         hoverAnimation:false,
					// 	         legendHoverLink:false,
					// 	         data:[
					//                 {value:this.cionin,itemStyle:{ normal:{color:'#f7cc69'} }},
					//                 {value:100 - this.cionin,itemStyle:{ normal:{color:'transparent'} }},

					              
					//             ],

					//             labelLine:{show:false},
					            
					// 	    }]
					// 	});

					// 	cionin.setOption({
					// 	    title:{
					// 	    	text:this.cionin + '%',
					// 	    	subtext:'净流入',
					// 	    	subtextStyle:{
					// 	    		color:'#333333',
					// 	    		fontWeight:'normal',
					// 	    		fontSize:14,
					// 	    		align:'center',
						    		
					// 	    	},
					// 	    	subtextStyle:{
					// 	    		color:"#8e8d8d",
					// 	    		fontWeight:'normal',
					// 	    		fontSize:12,
					// 	    		align:'center',
					// 	    		lineHeight:'200'
					// 	    	},
					// 	    	padding:[80, 0, 0, 63],
					// 	    	 left:'center'

					// 	    },
					// 	    	 series: [
					// 			        {
								           
					// 			            type:'pie',
					// 			            radius: ['50%', '70%'],
					// 			           hoverAnimation:false,
					//         			 legendHoverLink:false,
					// 			            label: {
					// 			                normal: {
					// 			                    show: false,
					// 			                    position: 'center'
					// 			                },
								              
					// 			            },
								           
					// 			            data:[
					// 			                {value:335, },
								             
					// 			            ],
					// 			            itemStyle: {
					// 			            	shadowBlur:20,
					// 			            	shadowOffsetX:-3,
					// 			            	shadowOffsetY:7,
					// 			            	shadowColor:'#f9b25c',
					// 			                color: {
					// 			                    type: 'linear',
					// 			                    x: 0,
					// 			                    y: 0,
					// 			                    x2: 0,
					// 			                    y2: 1,
					// 			                    colorStops: [{
					// 			                        offset: 0, color: '#f9b25c' // 0% 处的颜色
					// 			                    }, {
					// 			                        offset: 0.8, color: '#d68f37' // 100% 处的颜色
					// 			                    }],
					// 			                    globalCoord: false // 缺省为 false
					// 			                }
					// 			            }
					// 			        }
					// 			    ]
					// });



					//},2000)
			//图4
				$.getJSON(`http://sdd.xtype.cn//api/snapshot/index?start=1498727792&end=1530263792&slug=${_this.$route.params.id}`, function (data) {
								if(data.code !== 0) {
										alert('读取股票数据失败！');
										return false;
								}
								// 去掉多余的数据
								// Highcharts.each(data, function(d) {
								// 		d.length = 2;
								// });
								console.log(data.data)
								var price = [],fullhour = [],shizhi=[],liut=[], aa = [];
								for(var i in data.data){
									price.push([Number(data.data[i][0]),data.data[i][1]])
									fullhour.push([Number(data.data[i][0]),data.data[i][2]])
									shizhi.push([Number(data.data[i][0]),data.data[i][3]])
									liut.push([Number(data.data[i][0]),data.data[i][4]])
								}
								console.log(price)
								Highcharts.stockChart('container', {
										rangeSelector: {
												selected: 2
										},
										title: {
												text: ''
										},
											xAxis: {
												dateTimeLabelFormats: {
														millisecond: '%H:%M:%S.%L',
														second: '%H:%M:%S',
														minute: '%H:%M',
														hour: '%H:%M',
														day: '%m-%d',
														week: '%m-%d',
														month: '%y-%m',
														year: '%Y'
												}
										},
										yAxis: [{
												labels: {
														align: 'right',
														x: -3
												},
												title: {
														text: ''
												},
												height: '25%',
												resize: {
														enabled: true
												},
												lineWidth: 2
										},
										 {
												labels: {
														align: 'right',
														x: -3
												},
												title: {
														text: ''
												},
												top:'25%',
												height: '25%',
												offset: 0,
												lineWidth: 2
										},
										 {
												labels: {
														align: 'right',
														x: -3
												},
												title: {
														text: ''
												},
												top:'50%',
												height: '25%',
												offset: 0,
												lineWidth: 2
										}
										],
										plotOptions: {
												series: {
														showInLegend: true
												}
										},
										tooltip: {
												split: false,
												shared: true
										},
										series: [
										{
												// type: 'line',
												id: '000001',
												name: '价格-USD',
												data: price,

										},
										{
												 type: 'column',
												id: '000002',
												name: '24小时交易额 - USD',
												data: fullhour,
												yAxis: 2,
										},
										{
												// type: 'line',shizhi
												id: '000002',
												name: '市值-USD ',
												data: shizhi,
												yAxis: 1,
										},

										{
												// type: 'line',shizhi
												id: '000002',
												name: '流通量',
												data: liut,
												yAxis: 1,
										},
										]
								});
						});



		
		 }
		},
		// beforeRouteLeave (to, from, next) {
		// 	clearInterval(ccc)
		
		// 	next()
		// },

		mounted() {
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0
			this.cny = JSON.parse(localStorage.Rate).CNY.value
			console.log(this.cny)
			axios.get(`http://sdd.xtype.cn/api/pair/list?&symbol=${this.$route.query.symbol}`)
				.then((res)=>{
					this.jiaoyiduiList = res.data.data.list
					this.sum24 = res.data.data.sum_volume24h

				})



			var _this = this
			axios.get(`http://sdd.xtype.cn/api/currencie/item?&slug=${this.$route.params.id}`)
				.then((res)=>{
					this.cionDetalis.push(res.data.data)									
					console.log(this.cionDetalis)
					this.marketCap = this.cionDetalis[0].market_cap
					this.rank = this.cionDetalis[0].rank
					this.percentGlobalMarketCap = (Number(this.cionDetalis[0].percent_global_market_cap)).toFixed(2)
					this.circulatingSupply = (this.cionDetalis[0].circulating_supply)
					this.symbol = this.cionDetalis[0].symbol
					this.percentCirculating = this.cionDetalis[0].percent_circulating
					this.volume24h = this.cionDetalis[0].volume_24h
					this.rankFor24 = this.cionDetalis[0].rank_volume
					this.whitePaper = this.cionDetalis[0].white_paper
					this.blockUrl = this.cionDetalis[0].block_url
					this.website = this.cionDetalis[0].website
					this.github = this.cionDetalis[0].github
					this.twitter = this.cionDetalis[0].twitter
					this.haveRank = this.cionDetalis[0].have_rank
					this.publishedprice = this.cionDetalis[0].published_price		


					var turnover1 = echarts.init(document.getElementById('turnover1'));

						turnover1.setOption({
					    title: { },
					    	series: [{
					         type: 'pie',
					         radius: ['55%', '75%'],
					         hoverAnimation:false,
					         legendHoverLink:false,
					         data:[
				                {value:this.percentCirculating,itemStyle:{ normal:{color:'#84bbff'} }},
				                {value:100 - (this.percentCirculating),itemStyle:{ normal:{color:'transparent'} }},

				              
				            ],

				            labelLine:{show:false},
				            
					    }]
					});

					var turnover = echarts.init(document.getElementById('turnover'));
						turnover.setOption({
						    title:{
						    	text:(this.percentCirculating).toFixed(2) + '%',
						    	subtext:'流通率',
						    	subtextStyle:{
						    		color:'#333333',
						    		fontWeight:'normal',
						    		fontSize:14,
						    		textAlign:'center',
						    		
						    	},
						    	subtextStyle:{
						    		color:"#8e8d8d",
						    		fontWeight:'normal',
						    		fontSize:12,
						    		textAlign:'center',
						    		lineHeight:'200'
						    	},
						    	padding:[80, 0, 0, 63],
						    	 left:'center'
						    	

						    },
						    	 series: [
								        {
								           
								            type:'pie',
								           radius: ['48%', '68%'],
								           hoverAnimation:false,
					        			 legendHoverLink:false,
								            label: {
								                normal: {
								                    show: false,
								                    position: 'center'
								                },
								              
								            },
								           
								            data:[
								                {value:335, },
								             
								            ],
								            itemStyle: {
								            	shadowBlur:15,
								            	shadowOffsetX:0,
								            	shadowOffsetY:3,
								            	shadowColor:'#3d5286',
								                color: {
								                    type: 'linear',
								                    x: 0,
								                    y: 0,
								                    x2: 0,
								                    y2: 1,
								                    colorStops: [{
								                        offset: 0, color: '#32a6ff' // 0% 处的颜色
								                    }, {
								                        offset: 0.8, color: '#3d5286' // 100% 处的颜色
								                    }],
								                    globalCoord: false // 缺省为 false
								                }
								            }
								        }
								    ]
					});

	






					var EFAMC1 = echarts.init(document.getElementById('EFAMC1'));
					// 绘制图表1
						EFAMC1.setOption({
						    title: { },
						    	series: [{
						         type: 'pie',
						         radius: ['55%', '75%'],
						         hoverAnimation:false,
						         legendHoverLink:false,
						         data:[
					                {value:this.percentGlobalMarketCap,itemStyle:{ normal:{color:'#7696eb'} }},
					                {value:100 - (this.percentGlobalMarketCap),itemStyle:{ normal:{color:'transparent'} }},

					              
					            ],

					            labelLine:{show:false},
					            
						    }]
						});

						var EFAMC = echarts.init(document.getElementById('EFAMC'));
							EFAMC.setOption({
							    title:{
							    	text:this.percentGlobalMarketCap + '%',
							    	subtext:'占全球总市值',
							    	subtextStyle:{
							    		color:'#333333',
							    		fontWeight:'normal',
							    		fontSize:14,
							    		textAlign:'center',
							    		
							    	},
							    	subtextStyle:{
							    		color:"#8e8d8d",
							    		fontWeight:'normal',
							    		fontSize:12,
							    		align:'center',
							    		lineHeight:'200'
							    	},
							    	padding:[80, 0, 0, 63],
							    	 left:'center'

							    },

							    	 series: [
									        {
									           
									            type:'pie',
									            radius: ['48%', '68%'],
									           hoverAnimation:false,
						        			 legendHoverLink:false,
									            label: {
									                normal: {
									                    show: false,
									                    position: 'center'
									                },
									              
									            },
									           
									            data:[
									                {value:335, },
									             
									            ],
									            itemStyle: {
									            	shadowBlur:15,
									            	shadowOffsetX:0,
									            	shadowOffsetY:3,
									            	shadowColor:'#556fb5',
									                color: {
									                    type: 'linear',
									                    x: 0,
									                    y: 0,
									                    x2: 0,
									                    y2: 1,
									                    colorStops: [{
									                        offset: 0, color: '#556fb5' // 0% 处的颜色
									                    }, {
									                        offset: 0.8, color: '#45447c' // 100% 处的颜色
									                    }],
									                    globalCoord: false // 缺省为 false
									                }
									            }
									        }
									    ]
							});



							//第一个图
						
						})

						ccc = setInterval(()=>{
							this.top -=1
							if(this.top <= -500){
								this.top = 0
							}
						},100)

				





		


			


				var pay241 = echarts.init(document.getElementById('24pay1'));

					pay241.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['55%', '75%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:this.pay1,itemStyle:{ normal:{color:'#87f8c2'} }},
			                {value:100 - (this.pay1),itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

				var pay = echarts.init(document.getElementById('24pay'));
					pay.setOption({
					    title:{
					    	text:this.pay1 + '%',
					    	subtext:'换手率',
					    	subtextStyle:{
					    		color:'#333333',
					    		fontWeight:'normal',
					    		fontSize:14,
					    		align:'center',
					    		
					    	},
					    	subtextStyle:{
					    		color:"#8e8d8d",
					    		fontWeight:'normal',
					    		fontSize:12,
					    		align:'center',
					    		lineHeight:'200'
					    	},
					    	padding:[80, 0, 0, 63],
					    	 left:'center'

					    },
					    	 series: [
							        {
							           
							            type:'pie',
							            radius: ['48%', '68%'],
							           hoverAnimation:false,
				        			 legendHoverLink:false,
							            label: {
							                normal: {
							                    show: false,
							                    position: 'center'
							                },
							              
							            },
							           
							            data:[
							                {value:335, },
							             
							            ],
							            itemStyle: {
							            	shadowBlur:15,
							            	shadowOffsetX:0,
							            	shadowOffsetY:3,
							            	shadowColor:'#287f66',
							                color: {
							                    type: 'linear',
							                    x: 0,
							                    y: 0,
							                    x2: 0,
							                    y2: 1,
							                    colorStops: [{
							                        offset: 0, color: '#5dd186' // 0% 处的颜色
							                    }, {
							                        offset: 0.8, color: '#287f66' // 100% 处的颜色
							                    }],
							                    globalCoord: false // 缺省为 false
							                }
							            }
							        }
							    ]
				});

						//第三个图



				var cionin2 = echarts.init(document.getElementById('cionin2'));

					cionin2.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['55%', '75%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:this.cionin,itemStyle:{ normal:{color:'#f7cc69'} }},
			                {value:100 - this.cionin,itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

				var cionin1 = echarts.init(document.getElementById('cionin1'));

					cionin1.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['55%', '75%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:50,itemStyle:{ normal:{color:'#fee387'} }},
			                {value:50,itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

				var cionin = echarts.init(document.getElementById('cionin'));
					cionin.setOption({
					    title:{
					    	text:this.cionin + '%',
					    	subtext:'净流入',
					    	subtextStyle:{
					    		color:'#333333',
					    		fontWeight:'normal',
					    		fontSize:14,
					    		align:'center',
					    		
					    	},
					    	subtextStyle:{
					    		color:"#8e8d8d",
					    		fontWeight:'normal',
					    		fontSize:12,
					    		align:'center',
					    		lineHeight:'200'
					    	},
					    	padding:[80, 0, 0, 63],
					    	 left:'center'

					    },
					    	 series: [
							        {
							           
							            type:'pie',
							           radius: ['48%', '68%'],
							           hoverAnimation:false,
				        			 legendHoverLink:false,
							            label: {
							                normal: {
							                    show: false,
							                    position: 'center'
							                },
							              
							            },
							           
							            data:[
							                {value:335, },
							             
							            ],
							            itemStyle: {
							            	shadowBlur:20,
							            	shadowOffsetX:-3,
							            	shadowOffsetY:7,
							            	shadowColor:'#f9b25c',
							                color: {
							                    type: 'linear',
							                    x: 0,
							                    y: 0,
							                    x2: 0,
							                    y2: 1,
							                    colorStops: [{
							                        offset: 0, color: '#f9b25c' // 0% 处的颜色
							                    }, {
							                        offset: 0.8, color: '#d68f37' // 100% 处的颜色
							                    }],
							                    globalCoord: false // 缺省为 false
							                }
							            }
							        }
							    ]
				});	




			









			//图4
			// var chart = null;
			// 	$.getJSON(`http://sdd.xtype.cn//api/snapshot/index?start=1498727792&end=1530263792&slug=${_this.$route.params.id}`, function (data) {
			// 		console.log(data.data)
			// 					var price = [],fullhour = [],shizhi=[],liut=[], aa = [];
			// 					for(var i in data.data){
			// 						price.push([Number(data.data[i][0]),data.data[i][1]])
			// 						fullhour.push([Number(data.data[i][0]),data.data[i][2]])
			// 						shizhi.push([Number(data.data[i][0]),data.data[i][3]])
			// 						liut.push([Number(data.data[i][0]),data.data[i][4]])
			// 					}
			// 					console.log(price)
			// 			chart = Highcharts.chart('container', {
								
								
			// 					xAxis: {
			// 									dateTimeLabelFormats: {
			// 											millisecond: '%H:%M:%S.%L',
			// 											second: '%H:%M:%S',
			// 											minute: '%H:%M',
			// 											hour: '%H:%M',
			// 											day: '%m-%d',
			// 											week: '%m-%d',
			// 											month: '%y-%m',
			// 											year: '%Y'
			// 									}
			// 							},
			// 					tooltip: {
			// 							dateTimeLabelFormats: {
			// 									millisecond: '%H:%M:%S.%L',
			// 									second: '%H:%M:%S',
			// 									minute: '%H:%M',
			// 									hour: '%H:%M',
			// 									day: '%Y-%m-%d',
			// 									week: '%m-%d',
			// 									month: '%Y-%m',
			// 									year: '%Y'
			// 							}
			// 					},
			// 				yAxis: [{
			// 									labels: {
			// 										 formatter:function (){ 
			// 						                     return this.value/1000000000 + '十亿' ; 
			// 						                 },

			// 									},
			// 									title: {
			// 										text: '市值'
			// 									},
			// 									height: '100%',
			// 									resize: {
			// 											enabled: true
			// 									},

			// 							},
			// 							 {
			// 							 		labels: {
			// 										align:'',
													 
			// 									},
			// 									title: {
			// 											text: '价格(美元)'
			// 									},

			// 									height: '100%',
			// 							        opposite: true,
			// 							        reserveSpace:false,


												 
			// 							}
			// 							],
			// 					plotOptions: {
			// 									series: {
			// 										showInLegend: true
			// 									}
			// 							},
			// 							tooltip: {
			// 									split: false,
			// 									shared: true
			// 							},
			// 							series: [
			// 							{
			// 									// type: 'line',
			// 									id: '000001',
			// 									name: '价格-USD',
			// 									data: price,
			// 									yAxis: 1,

			// 							},
			// 							{
			// 									 type: 'column',
			// 									id: '000002',
			// 									name: '24小时交易额 - USD',
			// 									data: fullhour,
			// 									yAxis: 0,
			// 							},
			// 							{
			// 									// type: 'line',shizhi
			// 									id: '000002',
			// 									name: '市值-USD ',
			// 									data: shizhi,
			// 									yAxis: 0,
			// 							},

			// 							{
			// 									// type: 'line',shizhi
			// 									id: '000002',
			// 									name: '流通量',
			// 									data: liut,
			// 									yAxis: 1,
			// 							},
			// 							]
			// 			});
			// 	});


				$.getJSON(`http://sdd.xtype.cn//api/snapshot/index?start=1498727792&end=1530263792&slug=${_this.$route.params.id}`, function (data) {
								if(data.code !== 0) {
										alert('读取股票数据失败！');
										return false;
								}
								// 去掉多余的数据
								// Highcharts.each(data, function(d) {
								// 		d.length = 2;
								// });
								console.log(data.data)
								var price = [],fullhour = [],shizhi=[],liut=[], aa = [];
								for(var i in data.data){
									price.push([Number(data.data[i][0]),data.data[i][1]])
									fullhour.push([Number(data.data[i][0]),data.data[i][2]])
									shizhi.push([Number(data.data[i][0]),data.data[i][3]])
									liut.push([Number(data.data[i][0]),data.data[i][4]])
								}
								console.log(price)
								Highcharts.stockChart('container', {
										rangeSelector: {
												selected: 2
										},
										title: {
												text: ''
										},
										xAxis: {
												dateTimeLabelFormats: {
														millisecond: '%H:%M:%S.%L',
														second: '%H:%M:%S',
														minute: '%H:%M',
														hour: '%H:%M',
														day: '%m-%d',
														week: '%m-%d',
														month: '%y-%m',
														year: '%Y'
												},
										},
										credits: {
							            	text: '搜多多',
							            	href: '#'
							        	},



										yAxis: [{
												labels: {
													 formatter:function (){ 
									                     return this.value/1000000000 + '十亿' ; 
									                 },

												},
												title: {
													text: '市值'
												},
												height: '100%',
												resize: {
														enabled: true
												},
												opposite:true


										},
										 {
										 		labels: {
													align:'',
													 x:-650,
												},
												title: {
														text: '价格(美元)',
														x:-70,
														rotation:270

												},

												height: '100%',
										        opposite: true,
										        reserveSpace:false,


												 
										}
										],
											plotOptions: {
													series: {
															label: {
																	connectorAllowed: false
															},
															pointStart: 2010
													}
											},
										tooltip: {
												split: false,
												shared: true
										},
										series: [
										{
												// type: 'line',
												id: '000001',
												name: '价格-USD',
												data: price,
												yAxis: 1,

										},
										{
												 type: 'column',
												id: '000002',
												name: '24小时交易额 - USD',
												data: fullhour,
												yAxis: 0,
										},
										{
												// type: 'line',shizhi
												id: '000002',
												name: '市值-USD ',
												data: shizhi,
												yAxis: 0,
										},

										{
												// type: 'line',shizhi
												id: '000002',
												name: '流通量',
												data: liut,
												yAxis: 1,
										},
										]
								});
				});



		}
	}
</script>

<style scoped lang="scss">
	.cionWarp{
		width: 100%;
		min-height: 300px;
		>.iconTop{
			width: 100%;
			min-height: 366px;
			border:1px solid #e5e5e5;
			border-bottom:0px solid #e5e5e5;


			
			>dl{
				min-height: 173px;
				display: flex;
				padding: 27px 64px 0 29px;
				>dt{
					margin-right: 17px;
					width: 32px;
					height: 32px;
				}
				>.iconInfo{
					margin-right: 120px;
					min-width: 318px;
					>.p1{
						margin-bottom: 10px;
						>.iconName{
							font-size: 18px;
							color: #000;
							font-weight: bold;
							margin-right: 14px;
						}
						>.iconEnName{
							font-size: 14px;
							color: #838383;
						}
					}
					>.p2{
						margin-bottom: 12px;
						>.priceY{
							font-size: 20px;
							color: #4277ff;
							font-weight: bold;
							margin-right: 50px;
						}
						>.zf,.add{
							color: #fff;
							display: inline-block;
							width: 74px;
							height: 30px;
							cursor: pointer;
							border-radius: 10px;
							font-size: 12px;
							text-align: center;
							line-height: 30px;
						}
						>.zf{
							margin-right: 13px;
							background-color: #33b862;
						}
						>.add{
							border:1px solid ;
							color: #4277ff;
							line-height: 29px;
						}
					}
					>.p3{						
						font-size: 12px;
						color: #333;
						
						>.priceU{
							
						}
						>.UHouPrice{
							float: right;
							width: 175px;
						}
					}
					>.p4{
						margin-top: 13px;
						font-size: 12px;
						color: #333;
						>.priceU{

						}
						>.UHouPrice{
							float: right;
							width: 175px;
						}
					}
				}
				>.iconInfoMore{
					font-size: 12px;
					color: #333333;
					padding-top: 54px;
					line-height: 25px;
				}
			}
			>.iconTopTableWarp{
				width: 100%;
				padding: 0 30px 0 24px;
				border-bottom:1px solid #e5e5e5;
				>.iconTopTable{
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					

					>:nth-child(4n){
					border-right:none;
					}
					>:nth-last-child(1){
						width: 50%;
						border-right: none;
					}
					
					>li{
						height: 65px;
						border-top:1px solid #e5e5e5;
						border-right:1px solid #e5e5e5;
						width: 25%;	
						font-size: 12px;
						color: #333;				
						line-height: 65px;
						padding-left: 23px;
						>a{
							color: #4277ff;
							margin-right: 5px;
						}
						>.jiage{
							margin-right: 24px;
						}
						>.beishu{
							display: inline-block;
							width: 102px;
							height: 30px;
							background-color: #4277ff;
							color: #fff;
							text-align: center;
							line-height: 30px;
							border-radius: 7px;
							
						}
					}
				}
			}
		}
		>.iconBom{
			width: 100%;
			min-height: 300px;
			margin-top: 30px;
			>.iconBomTOP{
				width: 100%;
				height: 170px;
				border:1px solid #e5e5e5;
				>ul{
					width: 100%;
					height: 170px;
					display: flex;
					>li{
						width: 25%;
						position: relative;
						padding: 23px 0 0 18px;
						font-size: 12px;
						color: #666;
						>.Left{
							width: 145px;
							float: left;

						}
						>.right{
							width: 130px;
							height: 130px;
							border-radius: 50%;
							float: left;
							text-align: center;
							line-height: 130px;
						}
					}
				}	
			}
			>.iconBomBOM{
				width: 100%;
				min-height: 100px;
				border:1px solid #e5e5e5;
				margin-top: 28px;
					overflow: hidden;

				>.BomBOMLeft{
					width: 400px;
					float: left;
					border-right: 1px solid #e5e5e5;
					border-bottom: 1px solid #e5e5e5;
					>.Head{
						display: flex;
						font-size: 12px;
						color: #666;
						border-bottom: 1px solid #e5e5e5;
						>li{
							width: 33.33%;
							height: 52px;
							padding-left: 20px;
							line-height: 52px;
						}
					}
					>.Body{
						width: 100%;
						min-height:100px; 

						padding-bottom:20px; 
						>:nth-child(2n+1){
							background-color: #f9f9f9;
						}
						>:nth-last-child(1){
							

						}
						>li{
							height: 50px;
							display: flex;
							font-size: 12px;
							line-height: 50px;
							color: #666;

							>p{
								display: inline-block;
								width: 33.33%;
								line-height: 10px;
								padding-left: 20px;
								margin-top: 10px; 
								>:nth-child(1),:nth-child(3){
								
									color: #333333;
								}
							}
						}
					}
				}
				>.BomBOMRight{
					width: 796px;
					min-height: 100px;
					float: right;
					>.ChooseTitle{
						width: 100%;
						height: 52px;
						line-height: 52px;
						font-size:12px;
						color: #666666;
						padding-left: 24px;
						display: flex;
						>.choosetitleactive{
							background-color: #d2dbf4;
							text-align: center;
							border-radius: 10px;
							padding: 0 10px;
						}
						>li{
							margin-top: 12px;
							height: 24px;
							text-align: center;
							line-height: 24px;
						}
					}
					>.TablessWarp{
						min-height: 670px;
						width: 100%;
						padding: 0 54px 0 56px;
						>.Tabless{
							width:100%;
							min-height: 100px;
							border-top:1px solid #e5e5e5;
						}
					}
				}
			}
		}
	}	

	
</style>