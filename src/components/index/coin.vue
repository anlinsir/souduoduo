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
						<p style="margin-bottom: 8px;font-size: 16px;">流通市值</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">¥814,238,770,434</p>
						<p style="width: 70px;height: 23px;background-color: #4277ff;color: #fff;border-radius: 10px;text-align: center;line-height: 24px;margin-bottom: 20px;">排名NO.1</p>
						<p style="margin-bottom: 8px;font-weight: bold;font-size: 14px;">≈$127,464,800,199 </p>
						<p style="font-size: 14px;font-weight: bold;"> ≈17,053,787BTC</p>
						</div>
						<div class="right">
							 <div id="EFAMC" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="EFAMC1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 16px;">流通量</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">814,238,7BTC</p>
							
						<p style="margin-top: 45px;margin-bottom: 8px;font-size: 16px;">发行总量</p>
						<p style="color:#4277ff;font-weight: bold; ">210000 BTC</p>							
						</div>
						<div class="right">
							


							 <div id="turnover" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="turnover1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>


							
								
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 16px;">24H成交额</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">¥814,238,770,434</p>
						<p style="width: 70px;height: 23px;background-color: #33b862;color: #fff;border-radius: 10px;text-align: center;line-height: 23px;margin-bottom: 20px;">排名NO.1</p>
						<p style="margin-bottom: 8px;font-weight: bold;font-size: 14px;">≈$127,464,800,199 </p>
						<p style="font-size: 14px;font-weight: bold;"> ≈17,053,787BTC</p>
						</div>
						<div class="right">
							<div id="24pay" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>

							 <div id="24pay1" style="width:200px; height:200px;position: absolute;top: -13px;left: 125px;"></div>	
						</div>
					</li>

					<li>
						<div class="Left">
						<p style="margin-bottom: 8px;font-size: 16px;">24H资金流入</p>
						<p style="color: #4277ff;font-weight: bold;margin-bottom: 6px;">814,238,7BTC</p>
							
						<p style="margin-top: 45px;margin-bottom: 8px;font-size: 16px;">24H资金流出</p>
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
						<li >交易平台</li>
						<li >最新价</li>
						<li >24H额(￥)</li>
					</ul>

					<ul @mouseenter='cancel' @mouseout='cann' class="Body" style="position: relative;overflow: auto;height: 500px;">
						<!-- style="position: absolute;width: 100%" :style="{top:(top)+(50*(id)) + 'px'}" -->
						<li v-for='(ii,id) in 100' >
							<p style="width: 30px">
								<span></span><br>
								<span><img style="transform: translateY(-3px);" src="/static/img/startNO.png"></span><br>
								<span></span>								
							</p>

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
				cionin:99,
				top:0

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
			console.log(this.$route.params.id)
		},
		// beforeRouteLeave (to, from, next) {
		// 	clearInterval(ccc)
		
		// 	next()
		// },

		mounted() {

			ccc = setInterval(()=>{
				this.top -=1
				if(this.top <= -500){
					this.top = 0
				}
			},100)
							
			// var K = echarts.init(document.getElementById('K'));
			// 	if(!K){
			// 		return
			// 	}
			// 	K.setOption({
			// 		 title:{
			// 		 	text:''
			// 		 },
			// 		 xAxis:[
			// 		 	{

			// 		 	  type: 'category',
			// 				show:false,

			// 			 	data:["2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08", "2004-01-09", "2004-01-12", "2004-01-13", "2004-01-14", "2004-01-15", "2004-01-16", "2004-01-20", "2004-01-21", "2004-01-22", "2004-01-23", "2004-01-26", "2004-01-27", "2004-01-28", "2004-01-29", "2004-01-30", "2004-02-02", "2004-02-03", "2004-02-04", "2004-02-05", "2004-02-06", "2004-02-09", "2004-02-10", "2004-02-11", "2004-02-12", "2004-02-13", "2004-02-17", "2004-02-18", "2004-02-19", "2004-02-20", "2004-02-23", "2004-02-24", "2004-02-25", "2004-02-26", "2004-02-27", "2004-03-01", "2004-03-02", "2004-03-03", "2004-03-04", "2004-03-05", "2004-03-08", "2004-03-09", "2004-03-10", "2004-03-11", "2004-03-12", "2004-03-15", "2004-03-16", "2004-03-17", "2004-03-18", "2004-03-19", "2004-03-22", "2004-03-23", "2004-03-24", "2004-03-25", "2004-03-26", "2004-03-29", "2004-03-30", "2004-03-31", "2004-04-01", "2004-04-02", "2004-04-05", "2004-04-06", "2004-04-07", "2004-04-08", "2004-04-12", "2004-04-13", "2004-04-14", "2004-04-15", "2004-04-16", "2004-04-19", "2004-04-20", "2004-04-21", "2004-04-22", "2004-04-23", "2004-04-26", "2004-04-27", "2004-04-28", "2004-04-29", "2004-04-30", "2004-05-03", "2004-05-04", "2004-05-05", "2004-05-06", "2004-05-07", "2004-05-10", "2004-05-11", "2004-05-12", "2004-05-13", "2004-05-14", "2004-05-17", "2004-05-18", "2004-05-19", "2004-05-20", "2004-05-21", "2004-05-24", "2004-05-25"],
			// 					splitNumber: 4,
			// 					 axisLine: {onZero: false},
			// 	                splitLine: {show: false}, min: 'dataMin',
			// 	                max: 'dataMax',
			// 	                axisPointer: {
			// 	                    z: 100
			// 	                },

			// 			 },
			// 			 {
			//                 type: 'category',
			//                 gridIndex: 1,
			// 				show:false,
			               			  
			//                 data: ["2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08", "2004-01-09", "2004-01-12", "2004-01-13", "2004-01-14", "2004-01-15", "2004-01-16", "2004-01-20", "2004-01-21", "2004-01-22", "2004-01-23", "2004-01-26", "2004-01-27", "2004-01-28", "2004-01-29", "2004-01-30", "2004-02-02", "2004-02-03", "2004-02-04", "2004-02-05", "2004-02-06", "2004-02-09", "2004-02-10", "2004-02-11", "2004-02-12", "2004-02-13", "2004-02-17", "2004-02-18", "2004-02-19", "2004-02-20", "2004-02-23", "2004-02-24", "2004-02-25", "2004-02-26", "2004-02-27", "2004-03-01", "2004-03-02", "2004-03-03", "2004-03-04", "2004-03-05", "2004-03-08", "2004-03-09", "2004-03-10", "2004-03-11", "2004-03-12", "2004-03-15", "2004-03-16", "2004-03-17", "2004-03-18", "2004-03-19", "2004-03-22", "2004-03-23", "2004-03-24", "2004-03-25", "2004-03-26", "2004-03-29", "2004-03-30", "2004-03-31", "2004-04-01", "2004-04-02", "2004-04-05", "2004-04-06", "2004-04-07", "2004-04-08", "2004-04-12", "2004-04-13", "2004-04-14", "2004-04-15", "2004-04-16", "2004-04-19", "2004-04-20", "2004-04-21", "2004-04-22", "2004-04-23", "2004-04-26", "2004-04-27", "2004-04-28", "2004-04-29", "2004-04-30", "2004-05-03", "2004-05-04", "2004-05-05", "2004-05-06", "2004-05-07", "2004-05-10", "2004-05-11", "2004-05-12", "2004-05-13", "2004-05-14", "2004-05-17", "2004-05-18", "2004-05-19", "2004-05-20", "2004-05-21", "2004-05-24", "2004-05-25"],
			//                splitNumber: 4,
			// 				 axisLine: {onZero: false},
			// 				  splitLine: {show: false},
			// 				   axisPointer: {
			// 				   		z: 100
			// 				     },
			//             },
			//              {
			//                 type: 'category',
			//                 gridIndex: 2,
			               			  
			//                 data: ["2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08", "2004-01-09", "2004-01-12", "2004-01-13", "2004-01-14", "2004-01-15", "2004-01-16", "2004-01-20", "2004-01-21", "2004-01-22", "2004-01-23", "2004-01-26", "2004-01-27", "2004-01-28", "2004-01-29", "2004-01-30", "2004-02-02", "2004-02-03", "2004-02-04", "2004-02-05", "2004-02-06", "2004-02-09", "2004-02-10", "2004-02-11", "2004-02-12", "2004-02-13", "2004-02-17", "2004-02-18", "2004-02-19", "2004-02-20", "2004-02-23", "2004-02-24", "2004-02-25", "2004-02-26", "2004-02-27", "2004-03-01", "2004-03-02", "2004-03-03", "2004-03-04", "2004-03-05", "2004-03-08", "2004-03-09", "2004-03-10", "2004-03-11", "2004-03-12", "2004-03-15", "2004-03-16", "2004-03-17", "2004-03-18", "2004-03-19", "2004-03-22", "2004-03-23", "2004-03-24", "2004-03-25", "2004-03-26", "2004-03-29", "2004-03-30", "2004-03-31", "2004-04-01", "2004-04-02", "2004-04-05", "2004-04-06", "2004-04-07", "2004-04-08", "2004-04-12", "2004-04-13", "2004-04-14", "2004-04-15", "2004-04-16", "2004-04-19", "2004-04-20", "2004-04-21", "2004-04-22", "2004-04-23", "2004-04-26", "2004-04-27", "2004-04-28", "2004-04-29", "2004-04-30", "2004-05-03", "2004-05-04", "2004-05-05", "2004-05-06", "2004-05-07", "2004-05-10", "2004-05-11", "2004-05-12", "2004-05-13", "2004-05-14", "2004-05-17", "2004-05-18", "2004-05-19", "2004-05-20", "2004-05-21", "2004-05-24", "2004-05-25"],
			//                splitNumber: 4,
			// 				 axisLine: {onZero: false},
			// 				  splitLine: {show: false},
			// 				   axisPointer: {
			// 				   		z: 100
			// 				     },
			//             }

									

			// 		 ],
			// 		 yAxis:[
			// 			 	{
			// 		 		 scale: true,
			// 		 		 min:0,
			// 			 	position:'right',
			// 			 	minInterval:1,
			// 			 	axisLine:{
			// 			 		show:false,

			// 			 	},
			// 			 	axisTick:{
			// 			 		inside:true,
			// 			 		alignWithLabel:true,
			// 			 		length:300,
			// 			 		lineStyle:{
			// 			 			type:'dashed',
			// 			 			color:'#e6e6e6'
			// 			 		}
			// 			 	},

			// 			 },
			// 			  {
			//                 gridIndex: 1,
			// 			 	minInterval:1,
			// 			 	start:0,
			// 		 		 min:0,

			//                	position:'right',
			//                	// inverse:true,
			// 			 	axisLine:{
			// 			 		show:false,

			// 			 	},
			// 			 	axisTick:{
			// 			 		inside:true,
			// 			 		alignWithLabel:true,
			// 			 		length:685,
			// 			 		lineStyle:{
			// 			 			type:'dashed',
			// 			 			color:'#e6e6e6'
			// 			 		}
			// 			 	},
			// 			 	 splitNumber: 1,
   //    					  },

			// 			 {
			// 			 	minInterval:1,

			// 			 	 scale: true,
			//                 gridIndex: 2,
			// 			 		interval:500,

			//                position:'right',
			//                inverse:true,
			// 			 	axisLine:{
			// 			 		show:false,

			// 			 	},
			// 			 	axisTick:{
			// 			 		inside:true,
			// 			 		alignWithLabel:true,
			// 			 		length:685,
			// 			 		lineStyle:{
			// 			 			type:'dashed',
			// 			 			color:'#e6e6e6'
			// 			 		}
			// 			 	},
			// 			 	 splitNumber: 2,
   //    					  }
						


			// 		 ],
			// 		  legend: {
			// 	             legend: {
			// 		            bottom: 10,
			// 		            left: 'center',
			// 		        },
			// 	        },
			// 	        tooltip: {
			// 	            trigger: 'axis',
			// 	            axisPointer: {
			// 	                type: 'cross',
			// 	                snap:true,
			// 	                label:{
			// 	                	label:true,
			// 	                }
			// 	            },
			// 	            backgroundColor: 'rgba(245, 245, 245, 0.8)',
			// 	            borderWidth: 1,
			// 	            borderColor: '#ccc',
			// 	            padding: 10,
			// 	            textStyle: {
			// 	                color: '#000'
			// 	            },
			// 			            position: function (pos, params, el, elRect, size) {
			// 			                var obj = {top: 10};
			// 			                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
			// 			                return obj;
			// 			            },
		 //          			  extraCssText: 'width: 170px'
   //   					  },
			// 	        axisPointer: {
			// 	            link: {xAxisIndex: 'all'},
			// 	            label: {
			// 	                backgroundColor: '#777'
			// 	            }
			// 	        },
			// 	        toolbox: {
			// 	            feature: {
			// 	                dataZoom: {
			// 	                    yAxisIndex: false
			// 	                },
			// 	                brush: {
			// 	                    type: ['lineX', 'clear']
			// 	                }
			// 	            }
			// 	        },
			// 	        grid: [
			// 	           {
			//                 left: '10%',
			//                 right: '8%',
			//                 height: '30%'
			//             },
			//             {
			//                 left: '10%',
			//                 right: '8%',
			//                 top: '42%',
			//                 height: '8%'
			//             },
			//              {
			//                 left: '10%',
			//                 right: '8%',
			//                 top: '58%',
			//                 height: '13%',
			//                 bottom:'-12%'
			//             }

			// 	        ],
			// 	         dataZoom: [
			// 	            {
			// 	                type: 'inside',
			// 	                 xAxisIndex: [0, 1,2],
			// 	                start: 0,
			// 	                end: 40
			// 	            },
			// 	            {
			// 	                show: true,
			// 	                 xAxisIndex: [0, 1 ,2],
			// 	                type: 'slider',
			// 	                top: '80%',
			// 	                start: 0,
			// 	                end: 40
			// 	            }
			// 	        ],
			// 		 series:[
			// 		 	{
			// 		 		type:'k',
			// 		 		name:'日交易额',
			// 		 		data:[
			// 		 			[10452.74, 10411.85, 10543.85, 10535.46], [10530.07, 10589.25, 10461.55, 10485.18], [10428.67, 10534.52, 10556.37, 10601.4], [10522.77, 10624.22, 10625.25, 10568], [10701.1, 10610.07, 10467.41, 10510.22], [10487.78, 10499.48, 10503.11], [10469.33, 10494.89, 10592, 10578.74], [10605.48, 10735.18, 10696.22, 10628.88], [10706.68, 10674.59, 10666.29, 10619.55], [10609.55, 10566.59, 10598.14, 10581.55], [10582.25, 10678.36, 10588.59, 10593.48], [10582.59, 10595.37, 10529.52, 10457.59], [10288.85, 10130.67, 10238.45, 10103.41], [10184.3, 10298.96, 10295.85, 10185.93], [10066.67, 10065.41, 10049.56, 10218.37],[ 10212.91, 10327.63, 10380.89, 10357.52], [10375.33, 10470.59, 10553.76, 10569.26], [10482.77, 10444.38, 10516.05, 10378.1], [10377.95, 10398.32, 10451.62, 10437.85], [10311.87, 10314.99, 10463.11, 10472.91], [10445.38, 10476.67, 10339.41, 10273.06], [10227.27, 10314.32, 10316.98, 10308.2], [10240.62, 10116.28, 9989.24, 10011.52], [10044.31, 10008.43, 10009.92, 9906.71], [9962.55, 9939.12, 9939.34, 9968.02],[10452.74, 10411.85, 10543.85, 10535.46], [10530.07, 10589.25, 10461.55, 10485.18], [10428.67, 10534.52, 10556.37, 10601.4], [10522.77, 10624.22, 10625.25, 10568], [10701.1, 10610.07, 10467.41, 10510.22], [10487.78, 10499.48, 10503.11], [10469.33, 10494.89, 10592, 10578.74], [10605.48, 10735.18, 10696.22, 10628.88], [10706.68, 10674.59, 10666.29, 10619.55], [10609.55, 10566.59, 10598.14, 10581.55], [10582.25, 10678.36, 10588.59, 10593.48], [10582.59, 10595.37, 10529.52, 10457.59], [10288.85, 10130.67, 10238.45, 10103.41], [10184.3, 10298.96, 10295.85, 10185.93], [10066.67, 10065.41, 10049.56, 10218.37],[ 10212.91, 10327.63, 10380.89, 10357.52], [10375.33, 10470.59, 10553.76, 10569.26],[10452.74, 10411.85, 10543.85, 10535.46], [10530.07, 10589.25, 10461.55, 10485.18], [10428.67, 10534.52, 10556.37, 10601.4], [10522.77, 10624.22, 10625.25, 10568], [10701.1, 10610.07, 10467.41, 10510.22], [10487.78, 10499.48, 10503.11], [10469.33, 10494.89, 10592, 10578.74], [10605.48, 10735.18, 10696.22, 10628.88], [10706.68, 10674.59, 10666.29, 10619.55], [10609.55, 10566.59, 10598.14, 10581.55], [10582.25, 10678.36, 10588.59, 10593.48], [10582.59, 10595.37, 10529.52, 10457.59], [10288.85, 10130.67, 10238.45, 10103.41], [10184.3, 10298.96, 10295.85, 10185.93], [10066.67, 10065.41, 10049.56, 10218.37],[ 10212.91, 10327.63, 10380.89, 10357.52], [10375.33, 10470.59, 10553.76, 10569.26],[10375.33, 10470.59, 10553.76, 10569.26], [10482.77, 10444.38, 10516.05, 10378.1], [10377.95, 10398.32, 10451.62, 10437.85], [10311.87, 10314.99, 10463.11, 10472.91], [10445.38, 10476.67, 10339.41, 10273.06], [10227.27, 10314.32, 10316.98, 10308.2], [10240.62, 10116.28, 9989.24, 10011.52], [10044.31, 10008.43, 10009.92, 9906.71], [9962.55, 9939.12, 9939.34, 9968.02],[10452.74, 10411.85, 10543.85, 10535.46], [10530.07, 10589.25, 10461.55, 10485.18], [10428.67, 10534.52, 10556.37, 10601.4], [10522.77, 10624.22, 10625.25, 10568], [10701.1, 10610.07, 10467.41, 10510.22], [10487.78, 10499.48, 10503.11], [10469.33, 10494.89, 10592, 10578.74], [10605.48, 10735.18, 10696.22, 10628.88], [10706.68, 10674.59, 10666.29, 10619.55], [10609.55, 10566.59, 10598.14, 10581.55], [10582.25, 10678.36, 10588.59, 10593.48], [10582.59, 10595.37, 10529.52, 10457.59],[10469.33, 10494.89, 10592, 10578.74], [10605.48, 10735.18, 10696.22, 10628.88], [10706.68, 10674.59, 10666.29, 10619.55], [10609.55, 10566.59, 10598.14, 10581.55], [10582.25, 10678.36, 10588.59, 10593.48], [10582.59, 10595.37, 10529.52, 10457.59], [10288.85, 10130.67, 10238.45, 10103.41], [10184.3, 10298.96, 10295.85, 10185.93], [10066.67, 10065.41, 10049.56, 10218.37],[ 10212.91, 10327.63, 10380.89, 10357.52], [10375.33, 10470.59, 10553.76, 10569.26], [10482.77, 10444.38, 10516.05, 10378.1], [10377.95, 10398.32, 10451.62, 10437.85], [10311.87, 10314.99, 10463.11, 10472.91], [10445.38, 10476.67, 10339.41, 10273.06], [10469.33, 10494.89, 10592, 10578.74], [10605.48, 10735.18, 10696.22, 10628.88], [10706.68, 10674.59, 10666.29, 10619.55], [10609.55, 10566.59, 10598.14, 10581.55], [10582.25, 10678.36, 10588.59, 10593.48], [10582.59, 10595.37, 10529.52, 10457.59], [10288.85, 10130.67, 10238.45, 10103.41], [10184.3, 10298.96, 10295.85, 10185.93], [10066.67, 10065.41, 10049.56, 10218.37],[ 10212.91, 10327.63, 10380.89, 10357.52]


			// 		 		],
			// 		 		 itemStyle: {
			// 	                    normal: {
			// 	                        color: '#449e69',
			// 	                        color0: '#ec0000',
			// 	                        borderColor: null,
			// 	                        borderColor0: null
			// 	                    }
			// 	                },
			// 	                tooltip: {
			// 	                    formatter: function (param) {
			// 	                        param = param[0];
			// 	                        return [
			// 	                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
			// 	                            '开: ' + param.data[0] + '<br/>',
			// 	                            '闭: ' + param.data[1] + '<br/>',
			// 	                            '底: ' + param.data[2] + '<br/>',
			// 	                            '高: ' + param.data[3] + '<br/>'
			// 	                        ].join('');
			// 	                    }
			// 	                }
										
			// 		 	},
			// 		 	{
					 		
			// 		 		name:"成交量",
			// 		 		 smooth: true,
			// 		 		type:'bar',
			// 		 		data:[0,900,500,800,600,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433,800,433,0,900,500,800,600,800,433],
			// 		 		barMinHeight:1,
			// 		 		 itemStyle: {
   //          					normal: {
   //          						color:function(d){
   //          							console.log(d)
   //          							return d.dataIndex == 0 ? '#d63f2a' : d.dataIndex % 3 == 0 ? '#d63f2a' : "#449e69"

   //          						}
   //          					}
					 		

   //          				}
			// 			},
			// 			{
					 		
			// 		 		name:"MACD",
			// 		 		 smooth: true,
			// 		 		type:'bar',
			// 		 		data:[0.22,-0.36,0.882,0.423,-0.681,0.336,0.159,0.22,-0.36,0.882,0.423,0.681,0.336,0.159,-0.423,0.681,0.336,-0.159,0.22,0.36,0.882,0.423,0.681,-0.336,0.159,0.423,0.681,-0.336,0.159,-0.22,0.36,0.882,0.423,0.681,0.336,0.159,-0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,-0.882,0.423,-0.681,0.336,-0.159,0.423,0.681,0.336,0.159,0.22,0.36,-0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,-0.159,0.22,0.36,0.882,-0.423,0.681,0.336,0.159,0.423,0.681,-0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,-0.423,0.681,0.336,0.159,0.423,0.681,-0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,-0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,-.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,-0.159,0.22,0.36,0.882,0.423,0.681,-0.336,0.159,0.423,0.681,-0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,-0.882,0.423,0.681,0.336,0.159],
			// 		 		xAxisIndex: 1,
   //              			yAxisIndex: 1,
			// 		 		barMinHeight:1,

   //              			  itemStyle: {
   //          					normal: {
   //          						color:function(d){
   //          							return d.data <= 0 ? '#d63f2a' : "#449e69"
   //          						}
   //          					}
   //          				}


			// 			},
			// 			{
							
			// 		        data: [-0.36,0.882,0.423,-0.681,0.336,0.159,0.22,-0.36,0.882,0.423,0.681,0.336,0.159,-0.423,0.681,0.336,-0.159,0.22,0.36,0.882,0.423,0.681,-0.336,0.159,0.423,0.681,-0.336,0.159,-0.22,0.36,0.882,0.423,0.681,0.336,0.159,-0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,-0.882,0.423,-0.681,0.336,-0.159,0.423,0.681,0.336,0.159,0.22,0.36,-0.882,0.423,0.681,0.336],
			// 		        type: 'line',
			// 		        name:'MACD线',
			// 		         xAxisIndex: 1,
   //              			yAxisIndex: 1,
   //              			symbol:'none',
   //              			smooth: true,
   //              			clipOverflow:false,

   //              			 itemStyle: {
   //          					normal: {
   //          						color:'#ffd572'
   //          					}
   //          				}
					       
			// 		    },
			// 		    {

			// 		        data: [0.681,0.336,-0.159,0.22,0.36,0.882,-0.423,0.681,0.336,0.159,0.423,0.681,-0.336,0.159,0.22,0.36,0.882,0.423,0.681,0.336,0.159,0.423,0.681,0.336,0.159,0.22,0.36,0.882,-0.423,0.681,0.336,0.159,0.423,0.681,-0.336],
			// 		        type: 'line',
			// 		        name:'信号线',
			// 		         xAxisIndex: 1,
   //              			yAxisIndex: 1,
   //              			symbol:'none',
   //              			smooth: true,
   //              			clipOverflow:false,
   //              			itemStyle: {
   //          					normal: {
   //          						color:'#5bdbc2'
   //          					}
   //          				}

			// 		    },

			// 		     {

			// 		        data: [-250,803,-500,-20,-310,-900,-205,83,-500,-200,-310,-900,-250,830,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90,-500,-200,-310,-900,-250,830,-500,-200,-301,-900,-250,803,-50,-20,-310,-900,-250,830,-500,-200,-301,-90],
			// 		        type: 'line',
			// 		        name:'净流入',
			// 		     	 xAxisIndex: 2,
   //              			yAxisIndex: 2,
   //              			symbol:'none',
   //              			clipOverflow:false,
   //              			itemStyle: {
   //          					normal: {
   //          						color:'#7db5ec'
   //          					}
   //          				}

			// 		    }
			// 		 ]
			// 		});

$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-ohlc.json&callback=?', function (data) {
		Highcharts.stockChart('container', {
				rangeSelector: {
					buttonPosition:{x:-0,y:-0},
						selected:9,
						buttons: [{
    type: 'minute',
    count: 1,
    text: '1分'
}, {
    type: 'minute',
    count: 5,
    text: '5分'
}, {
    type: 'minute',
    count: 15,
    text: '15分'
}, {
    type: 'hour',
    count: 1,
    text: '1小时'
}, {
    type: 'hour',
    count: 4,
    text: '4小时'
}, {
    type: 'hour',
    count: 12,

    text: '12小时'
},
{
    type: 'day',
    count: 1,

    text: '1天'
},
{
    type: 'month',
    count: 1,

    text: '1月'
},
{
    type: 'month',
    count: 2,

    text: '2月'
},
{
    type: 'month',
    count: 5,

    text: '5月'
},
{
    type: 'year',
    count: 1,

    text: '1年'
},
{
    type: 'year',
    count: 5,

    text: '5年'
}
,
{
    type: 'all',

    text: 'ALL'
}
]
					
				},
				yAxis:[{
						height: '40%',
						minorTickPosition:'outside',
						resize: {
								enabled: true
						},
						labels: {
								align: 'right',
								x: -3
						},
						title: {
								text: 'AAPL'
						}
				}, {
						top: '40%',
						height: '10%',
						minorTickPosition:'outside',

						labels: {
								align: 'right',
								x: -3
						},
						offset: 0,
						title: {
								text: '成交量'
						}
				}, {
						top: '50%',
						height: '20%',
						minorTickPosition:'outside',

						labels: {
								align: 'right',
								x: -3
						},
						offset: 0,
						title: {
								text: 'MACD'
						}
				},{
						top: '75%',
						height: '15%',
						minorTickPosition:'outside',

						offset: 0,
						title: {
								text: '净流入'
						}
				}],
				tooltip:{
						shared:true,
						data:[]
				},
			
				series: [{
						type: 'candlestick',
						zIndex: 0,
						id: 'aapl',
						lineWidth: 1,
						data: data,
						dataLabels: {
								crop: false,
								y: 4,
								style: {
										fontSize: 9
								}
						},
							color: 'green',
						lineColor: 'green',
						upColor: 'red',
						upLineColor: 'red',
						navigatorOptions: {
								color: Highcharts.getOptions().colors[0]
						},
				}, {
						type: 'macd',
						yAxis: 2,
						linkedTo: 'aapl',
						color:'#000000',
						negativeColor:'red',
						color:'green'

				},{
						type: 'line',
						data: data,
						yAxis:3,
						color:'#7eb6ec'
				}, {
						type: 'column',
						yAxis: 1,
						data: data,
							color: 'green',
						lineColor: 'green',
						upColor: 'red',
						upLineColor: 'red',
						navigatorOptions: {
								color: Highcharts.getOptions().colors[0]
						},
				}]
		});
});


		
			// if(timer1 || timer2 || timer3){
			// clearInterval(timer1)
			// clearInterval(timer2)
			// clearInterval(timer3)
			// clearInterval(timer4)


			// }
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