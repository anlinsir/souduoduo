<template>
	<div class="cionWarp">
		<div class="iconTop">
			<dl v-show='dataShow'>
				<dt><img src="/static/img/countyImg.png"></dt>
				<dd class="iconInfo">
					<p class="p1">
						<span class="iconName">BTC 比特币</span>
						<span class="iconEnName">Bitcoin</span>
					</p>

					<p class="p2">
						<span class="priceY">￥47,736</span>
						<span class="zf">+0.23%</span>
						<span class="add">添加自选</span>
					</p>

					<p class="p3">
						<span class="priceU">≈ $7,470</span>
						<span class="UHouPrice">24H最高   ￥49,082</span>
					</p>
					<p class="p4">
						<span class="priceU">≈ 1 BTC</span>
						<span class="UHouPrice">24H最低   ￥47,010</span>
					</p>
				</dd>
				<dd class="iconInfoMore">比特币（BitCoin）的概念最初由中本聪在2009年提比特币（BitCoin）的概念最初由中本聪在2009年提比特币（BitCoin）的概念最初由中本聪在2009年提比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币...<i @click='cionMoreInfo(0)' style="color: #4277ff;font-style: normal;cursor: pointer;">查看更多</i></dd>				
			</dl>

			<dl v-show='!dataShow'>
				<dt><img src="/static/img/countyImg.png"></dt>
				<dd style="font-size: 16px;color: #4277ff;margin-top: 3px;width: 100%;"">
					<span>比特币（BTC）简介</span>
					<span style="float: right;width: 100px;height: 30px;border:1px solid #4277ff;color: #4277ff;text-align: center;line-height: 28px;border-radius: 10px;font-size: 12px;" @click='cionMoreInfo(1)'>查看行情</span><br />
					<span style="margin-top: 33px;color: #666;display: inline-block;font-size: 12px;">比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币比特币</span>
				</dd>
			</dl>

			<div class="iconTopTableWarp">

				<ul class="iconTopTable"  v-for='(item,index) in detalis'>
					<li >英文名：{{item.enName}}</li>

					<li >上架交易所：{{item.jytime}}</li>
					<li >发行时间：{{item.fxsj}}</li>
					<li >白皮书： <a :href="item.bps">{{item.bps}}</a>	</li>
					<li >相关概念{{item.gn}}</li>
					<li >区块站： <a :href='nam0'  v-for='(nam0,it0,id0) in item.qkz'>{{it0}}</a></li>
					<li >网站： <a :href='nam'  v-for='(nam,it,id) in item.web'>{{it}}</a></li>
					<li >GitHub地址：<a :href="item.github">{{item.github}}</a>	</li>
					<li >Twitter:<a :href="item.Twitter">点击查看</a></li>
					<li >持币排行： <a :href="item.ph">点击查看</a></li>
					<li >众筹价： <span class="jiage">{{item.zc.jiage}}</span> <span class="beishu">{{item.zc.beishu + ' ↑' }}</span></li>
				</ul>
			</div>
		</div>

		<div v-show='dataShow' class="iconBom">
			<div class="iconBomTOP">
				<ul>
					<li>
						<div class="Left">
						<p style="margin-bottom: 8px">流通市值</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">¥814,238,770,434</p>
						<p style="width: 70px;height: 23px;background-color: #4277ff;color: #fff;border-radius: 10px;text-align: center;line-height: 24px;margin-bottom: 20px;">排名NO.1</p>
						<p style="margin-bottom: 8px;">≈$127,464,800,199 </p>
						<p> ≈17,053,787BTC</p>
						</div>
						<div class="right">
							 <div id="EFAMC" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="EFAMC1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px">流通量</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">814,238,7BTC</p>
							
						<p style="margin-top: 45px;margin-bottom: 8px;">发行总量</p>
						<p style="color:#4277ff;font-weight: bold; ">210000 BTC</p>							
						</div>
						<div class="right">
							


							 <div id="turnover" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="turnover1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>


							
								
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px">24H成交额</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">¥814,238,770,434</p>
						<p style="width: 70px;height: 23px;background-color: #33b862;color: #fff;border-radius: 10px;text-align: center;line-height: 23px;margin-bottom: 20px;">排名NO.1</p>
						<p style="margin-bottom: 8px;">≈$127,464,800,199 </p>
						<p> ≈17,053,787BTC</p>
						</div>
						<div class="right">
							<div id="24pay" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="24pay1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>	
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px">24H资金流入</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">814,238,7BTC</p>
							
						<p style="margin-top: 45px;margin-bottom: 8px;">24H资金流入</p>
						<p style="color:#4277ff;font-weight: bold; ">210000 BTC</p>	
						</div>
						<div class="right">
							<div id="cionin" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="cionin1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>	

							 <div id="cionin2" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>	

						</div>
					</li>

				</ul>
			</div>


			<div class="iconBomBOM">
				<div class="BomBOMLeft">
					<ul class="Head">
						<li>交易平台</li>
						<li>最新价</li>
						<li>24H额(￥)</li>
					</ul>

					<ul class="Body">
						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>

						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>

						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>

						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>


						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>

						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>

						<li>
							<p><span>OKEX-季度合约</span><br>
								<span></span><br>
								<span>USD</span>
							</p>
							<p><span>4521752</span><br>
								<span></span><br>
								<span>￥545231</span>
							</p>
							<p>
								<span></span><br>
								<span>90.33亿</span><br>
								<span></span>
							</p>

						</li>
						


					</ul>
				</div>


				<div class="BomBOMRight">
					<ul class="ChooseTitle">
						<li style="margin-right: 47px;">价格走势图</li>
						<li @click='chengChoosrTitle(index)' style="margin-right: 28px;" :class="choosetitleactive == index ? 'choosetitleactive' : '' " v-for='(item,index) in ChooseTitle'>{{item}}</li>
					</ul>

					<div class="TablessWarp">
						<div class="Tabless">
							图表后做
						</div>
					</div>


				</div>

			</div>

		</div>
	</div>
</template>

<script>
	var echarts = require('echarts')
	
	export default{

		data(){
			
			return({
				detalis:[
						{
							enName:'Bitcoin / BTC',
							jytime:'165',
							fxsj:'2014-07-24',
							bps:' https://github.com/ether...',
							gn:'：--',
							qkz:{
								'区块1':'https://www.baidu.com',
								'区块2':'https://www.baidu.com',
								'区块3':'https://www.baidu.com',
							},
							web:{
								'官网':'https://www.baidu.com',
								'网站2':'www.baidu.com'
							},
							github:'https://github.com/ether',
							Twitter:'https://github.com/ether',
							ph:'https://github.com/ether',
							zc:{
								jiage:'¥1.89',
								beishu:"2128.24倍"	
							}
						}
					],
				ChooseTitle:['1分钟','5分钟','15分钟','30分钟','1小时','4小时','12小时','1天',],
				choosetitleactive:0,
				dataShow:true,
				value1:18,
				turnover:1.3,
				pay1:4.34,
				cionin:99

			})
		}
		,
		methods:{
			cionMoreInfo(idx){
				this.dataShow = idx
			},
			chengChoosrTitle(index){
				this.choosetitleactive = index

			}
		}
		,
		created(){
			console.log(this.$route.params.id)
		},
		

		mounted() {
			// setInterval(()=>{
				
			// 	this.value1 = this.value1 + 1
			// 	console.log(this.value1)
			// },1000)
			if(timer1 || timer2 || timer3){
			clearinterval(timer1)
			clearinterval(timer2)
			clearinterval(timer3)

			}
			var EFAMC1 = echarts.init(document.getElementById('EFAMC1'));
			// 绘制图表
				EFAMC1.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['60%', '80%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:this.value1,itemStyle:{ normal:{color:'#7696eb'} }},
			                {value:100 - (this.value1),itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

			            labelLine:{show:false},
			            
				    }]
				});

			var EFAMC = echarts.init(document.getElementById('EFAMC'));
				EFAMC.setOption({
				    title:{
				    	text:this.value1 + '%',
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
						            radius: ['50%', '70%'],
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

				var timer1 = setInterval(()=>{
					this.value1 += 1 
					if(this.value1 == 30){
						this.value1 =1
					}
					var EFAMC1 = echarts.init(document.getElementById('EFAMC1'));
					EFAMC1.setOption({
				    title: { },
				    	series: [{
				         type: 'pie',
				         radius: ['60%', '80%'],
				         hoverAnimation:false,
				         legendHoverLink:false,
				         data:[
			                {value:this.value1,itemStyle:{ normal:{color:'#7696eb'} }},
			                {value:100 - (this.value1),itemStyle:{ normal:{color:'transparent'} }},

			              
			            ],

				            labelLine:{show:false},
				            
					    }]
					});

					EFAMC.setOption({
				    title:{
				    	text:this.value1 + '%',
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
						            radius: ['50%', '70%'],
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
				},1000)


				//第一个图



			var turnover1 = echarts.init(document.getElementById('turnover1'));

				turnover1.setOption({
			    title: { },
			    			    series: [{
			         type: 'pie',
			         radius: ['60%', '80%'],
			         hoverAnimation:false,
			         legendHoverLink:false,
			         data:[
		                {value:this.turnover,itemStyle:{ normal:{color:'#84bbff'} }},
		                {value:100 - (this.turnover),itemStyle:{ normal:{color:'transparent'} }},

		              
		            ],

		            labelLine:{show:false},
		            
			    }]
			});

			var turnover = echarts.init(document.getElementById('turnover'));
				turnover.setOption({
				    title:{
				    	text:this.turnover + '%',
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
						            radius: ['50%', '70%'],
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


				var timer2 = setInterval(()=>{
					this.turnover += 1 
					if(this.turnover >= 10){
						this.turnover = 1
					}
					var turnover1 = echarts.init(document.getElementById('turnover1'));
					turnover1.setOption({
					    title: { },
					    			    series: [{
					         type: 'pie',
					         radius: ['60%', '80%'],
					         hoverAnimation:false,
					         legendHoverLink:false,
					         data:[
				                {value:this.turnover,itemStyle:{ normal:{color:'#84bbff'} }},
				                {value:100 - (this.turnover),itemStyle:{ normal:{color:'transparent'} }},

				              
				            ],

				            labelLine:{show:false},
				            
					    }]
					});

						turnover.setOption({
						    title:{
						    	text:this.turnover + '%',
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
								            radius: ['50%', '70%'],
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
				},1000)


				//第二个图


			var pay241 = echarts.init(document.getElementById('24pay1'));

				pay241.setOption({
			    title: { },
			    	series: [{
			         type: 'pie',
			         radius: ['60%', '80%'],
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
						            radius: ['50%', '70%'],
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

				var timer3 = setInterval(()=>{
					var pay241 = echarts.init(document.getElementById('24pay1'));
						this.pay1 += 4.5
						if(this.pay1 >= 88){
							this.pay1 = 10 
						}
							pay241.setOption({
						    title: { },
						    	series: [{
						         type: 'pie',
						         radius: ['60%', '80%'],
						         hoverAnimation:false,
						         legendHoverLink:false,
						         data:[
					                {value:this.pay1,itemStyle:{ normal:{color:'#87f8c2'} }},
					                {value:100 - (this.pay1),itemStyle:{ normal:{color:'transparent'} }},

					              
					            ],

					            labelLine:{show:false},
					            
						    }]
						});


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
						            radius: ['50%', '70%'],
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
				},500)

				//第三个图








			var cionin2 = echarts.init(document.getElementById('cionin2'));

				cionin2.setOption({
			    title: { },
			    	series: [{
			         type: 'pie',
			         radius: ['60%', '80%'],
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
			         radius: ['60%', '80%'],
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
						            radius: ['50%', '70%'],
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



				var timer4 = setInterval(()=>{
					this.cionin -= 3
					if(this.cionin <= 10){
						this.cionin = 99
					}
					cionin1.setOption({
						    title: { },
						    	series: [{
						         type: 'pie',
						         radius: ['60%', '80%'],
						         hoverAnimation:false,
						         legendHoverLink:false,
						         data:[
					                {value:50,itemStyle:{ normal:{color:'#fee387'} }},
					                {value:50,itemStyle:{ normal:{color:'transparent'} }},

					              
					            ],

					            labelLine:{show:false},
					            
						    }]
						});


					cionin2.setOption({
					    title: { },
					    	series: [{
					         type: 'pie',
					         radius: ['60%', '80%'],
					         hoverAnimation:false,
					         legendHoverLink:false,
					         data:[
				                {value:this.cionin,itemStyle:{ normal:{color:'#f7cc69'} }},
				                {value:100 - this.cionin,itemStyle:{ normal:{color:'transparent'} }},

				              
				            ],

				            labelLine:{show:false},
				            
					    }]
					});

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
							            radius: ['50%', '70%'],
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



				},2000)








			//图4



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
						height: 670px;
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