<template>

	<div class="newFlash">
		<div class="Flash">
			<div class="Ftop">
				<span>搜多多  > 滚动快讯</span>
				<div class="tioRi">
					<input type="text" placeholder="请输入快讯关键词">
					<span><img src="/static/img/search.png"></span>
				</div>
			</div>


			<div class="Time">
				
				<span>今天 · 5月29日 · 星期二</span>
				<span style="position: absolute;top: 48px;border: 1px dashed rgb(229, 229, 229);height: 38px;"></span>
			</div>

			<div class="flashList">
				<dl :style="{marginBottom:100*0.6 + 'px'}">
					<dt>
						<span class="time">08:08</span>
						<span class="point"></span>
						<span :style="{height: 100 * 1.1 + '%'}" class="line"></span>
					</dt>
					<dd  @click='toFlashDetali' style="word-break: break-all;">
						<p style="font-size: 15px;color: #333;margin-bottom: 20px;">5月份多公司加码区块链业务</p>
						<p style="font-size: 12px;color: #666;line-height: 24px;">据中国证券报消息，环球印务28日晚间公告，公司拟与区块链服务商爱斯瑞特等共同出资设立子公司，促进印刷业务智能升级。据记者不完全统计，5月以来，已有6家A股公司公告新增或加码区块链业务。截至5月28日，A股15家区块链概念股发布的2018年上半年业绩预告中，8家预喜，多家在报告期内加大区块链的布局力度。</p>
					</dd>
					

				</dl>


				<dl :style="{marginBottom:100*0.6 + 'px'}">
					<dt>
						<span style="color: #f86b6b;" class="time">12:30</span>
						<span style="background-color: #f86b6b;" class="point"></span>
						<span :style="{height: 100 * 1.1 + '%'}" class="line"></span>
					</dt>
					<dd  @click='toFlashDetali' style="word-break: break-all;">
						<p style="font-size: 15px;color: #333;margin-bottom: 20px;">币世界早间内参：习近平首提区块链 百度百科上链</p>
						<p style="font-size: 12px;color: #666;line-height: 24px;">1.习近平表示，以人工智能、量子信息、移动通信、物联网、区块链为代表的新一代信息技术加速突破应用。世界正在进入以信息产业为主导的经济发展时期，要推进互联网、大数据、人工智能同实体经济深度融合，做大做强数字经济。
						2.印度外交部长斯瓦拉吉(Sushma Swaraj)表示，印度将不会以数字货币进行任何交易。
						3.香港财政司司长陈茂波：香港目前正着力发展金融科技。在区块链方面，特区金管局已对区块链在按揭业务、贸易融资业务，以及电子身份管理方面的应用做了系统探讨。
						4.28晚间，百度百科悄然上链，旨在利用区块链不可篡改特性，确保百科历史版本准确留存。
						5.马化腾：广西探索全国首例处方流转服务，院内开方，院外购药，甚至送药上门。用区块链解决处方不被篡改这样的难题。
						6.Stan Larimer：可从价格、灵活、性能等三个维度分析区块链生态。
						7.陈伟星：区块链的愿景是改变生产关系，降低交易成本。
						8.三点钟社区创始人玉红：今年唯一确定有价值的是比特币，EOS是最大的传销币。
						9.28日初链举行“录音门”事件线上发布会，初链创始人“永哥”表示：①录音文不对题；②录音是在4月初电话被录的，现在6月份才放出来；③初链并没有坐庄，庄家是“月哥”，他想通过录音来砸盘收货。</p>
					</dd>
					

				</dl>




				<dl :style="{marginBottom:100*0.6 + 'px'}">
					<dt>
						<span class="time">08:08</span>
						<span class="point"></span>
						<span :style="{height: 100 * 1.1 + '%'}" class="line"></span>
					</dt>
					<dd @click='toFlashDetali' style="word-break: break-all;">
						<p style="font-size: 15px;color: #333;margin-bottom: 20px;">5月份多公司加码区块链业务</p>
						<p style="font-size: 12px;color: #666;line-height: 24px;">据中国证券报消息，环球印务28日晚间公告，公司拟与区块链服务商爱斯瑞特等共同出资设立子公司，促进印刷业务智能升级。据记者不完全统计，5月以来，已有6家A股公司公告新增或加码区块链业务。截至5月28日，A股15家区块链概念股发布的2018年上半年业绩预告中，8家预喜，多家在报告期内加大区块链的布局力度。</p>
					</dd>
					

				</dl>



				<dl :style="{marginBottom:100*0.6 + 'px'}">
					<dt>
						<span style="color: #f86b6b;" class="time">12:30</span>
						<span style="background-color: #f86b6b;" class="point"></span>
						<span :style="{height: 100 * 1.1 + '%'}" class="line"></span>
					</dt>
					<dd @click='toFlashDetali' style="word-break: break-all;">
						<p style="font-size: 15px;color: #333;margin-bottom: 20px;">币世界早间内参：习近平首提区块链 百度百科上链</p>
						<p style="font-size: 12px;color: #666;line-height: 24px;">1.习近平表示，以人工智能、量子信息、移动通信、物联网、区块链为代表的新一代信息技术加速突破应用。世界正在进入以信息产业为主导的经济发展时期，要推进互联网、大数据、人工智能同实体经济深度融合，做大做强数字经济。
						2.印度外交部长斯瓦拉吉(Sushma Swaraj)表示，印度将不会以数字货币进行任何交易。
						3.香港财政司司长陈茂波：香港目前正着力发展金融科技。在区块链方面，特区金管局已对区块链在按揭业务、贸易融资业务，以及电子身份管理方面的应用做了系统探讨。
						4.28晚间，百度百科悄然上链，旨在利用区块链不可篡改特性，确保百科历史版本准确留存。
						5.马化腾：广西探索全国首例处方流转服务，院内开方，院外购药，甚至送药上门。用区块链解决处方不被篡改这样的难题。
						6.Stan Larimer：可从价格、灵活、性能等三个维度分析区块链生态。
						7.陈伟星：区块链的愿景是改变生产关系，降低交易成本。
						8.三点钟社区创始人玉红：今年唯一确定有价值的是比特币，EOS是最大的传销币。
						9.28日初链举行“录音门”事件线上发布会，初链创始人“永哥”表示：①录音文不对题；②录音是在4月初电话被录的，现在6月份才放出来；③初链并没有坐庄，庄家是“月哥”，他想通过录音来砸盘收货。</p>
					</dd>
					

				</dl>

			</div>

		</div>
	</div>

</template>	

<script>
	export default{
		methods:{
			toFlashDetali(){
				this.$router.push('/index/flashDetali/:id')
			}
		}
	}
</script>


<style scoped lang="scss">
	.newFlash{
		width: 100%;
		min-height: 100px;
		>.Flash{
			width: 100%;
			min-height: 500px;
			border:1px solid #e5e5e5;
			>.Ftop{
				width: 100%;
				height: 55px;
				line-height: 55px;
				font-size: 12px;
				color: #666;
				padding-left: 17px;
				>.tioRi{
					float: right;
					position: relative;					
					>input{
						transform: translateX(-20px);
						padding-left: 17px;
						width: 258px;
						height: 34px;
						border:1px solid #e5e5e5;
						border-radius: 15px;
					}
					>span{
						position: absolute;
						cursor: pointer;
						display: inline-block;
						width: 19px;
						top:4px;
						left: 210px;
						height: 19px;
					}
				}
				
			}
			>.Time{
				width: 100%;
				height: 47px;
				background-color: #5060a2;
				color: #fff;
				position: relative;
				font-size: 12px;
				line-height: 47px;
				padding-left: 120px;
				margin-bottom: 38px;
			}
			>.flashList{
				padding-left: 120px;
				padding-right: 100px;
				>dl{

					display: flex;
					>dt{
						position: relative;
						margin-right: 125px;
						font-size: 14px;
						>.time{
							display: inline-block;
							width: 55px;
							height: 26px;
							border:1px solid ;
							color: #5060a2;
							text-align: center;
							line-height: 24px;
							border-radius: 12px;
						}
						>.point{
						    display: inline-block;
						    width:10px;
						    height: 10px;
						    border-radius: 50%;
						    background-color: #5060a2;
						    position: absolute;
						    top: 8px;
						    left: 121.5px;

						}
						>.line{
							display: inline-block;
							border:1px dashed #e5e5e5;
							min-height: 10px;
							position: absolute;
							top: 16px;
    						left: 125px;
    						z-index: -1;	
						}
					}
					>dd{
						cursor: pointer;
					}
				}
			}
		}
	}
</style>