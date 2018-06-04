<template>
	<div class="encyDetaWarp">
		<div class="DetaliText">
			<div class="TextTop">
				<div class="topiInfo">
					搜多多 > 币圈百科 > 通证经济（Tokenomics）的三种定义
				</div>
			</div>

			<div class="TextTtile">
				<div class="TtileInfo">
					<p class="p1">通证经济（Tokenomics）的三种定义</p>
					<p class="p2">
						<span>Alan</span>|
						<span>2018-05-26</span>|
						<span>276次阅读</span>
					</p>
				</div>
			</div>

			<div class="mainText">
				<div class="mainInfo">
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<img src="/static/img/encyimg.png" />
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<p>Dr. Paul J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司J. Ennis是都柏林大学商学院的一位ico顾问和讲师。James Waugh是Blueblock咨询公司</p>
					<br/>
					<p>
						分享到：
						<img style="vertical-align: middle;margin-right: 6px; cursor: pointer;" src="/static/img/weixin.png">
						<img style="vertical-align: middle;margin-right: 6px;cursor: pointer;" src="/static/img/weio.png">
						<img style="vertical-align: middle;margin-right: 6px;cursor: pointer;" src="/static/img/qq.png">

					</p>
				</div>
			</div>
		</div>


		<div class="encyMore">
			<div class="guess">
				<div class="guessTitle">您可能会喜欢</div>	
				<dl v-for='(ii,id) in 6'>
					<dt><img src="/static/img/encyDeMore.png"></dt>
					<dd>
						<p style="color: #333;">数字资产安全之冷热钱包</p>
						<p style="color: #999;">
							<span>2018-05-22</span>
							<span style="float: right;"><img src="/static/img/auge.png">893</span>
						</p>
					</dd>
				</dl>
			</div>

			<div class="MoreImg" style="margin-top: 12px;width: 100%;cursor: pointer;">
				<img src="/static/img/encymoreing.png">
			</div>

		</div>

	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>
	.encyDetaWarp{
		width: 1200px;
		min-height: 100px;
		overflow: hidden;
		>.DetaliText{
			width: 866px;
			border:1px solid #e5e5e5;
			margin-right: 14px;
			float: left;
			>.TextTop{
				width: 100%;
				padding: 0 19px 0 18px;
				>.topiInfo{
					width: 100%;
					border-bottom:1px solid #e5e5e5;
					height: 49px;
					font-size: 12px;
					color: #898989;
					line-height: 49px;
				}
			}
			>.TextTtile{
				width: 100%;
				padding: 0 23px 0 14px;
				>.TtileInfo{
					width: 100%;
					height: 102px;
					text-align: center;
					border-bottom: 1px dashed #e5e5e5;
					>.p1{
						margin-top: 27px;
						font-size: 18px;
						font-weight: bold;
					}
					>.p2{
						margin-top: 18px;
						font-size: 12px;
						color: #898989;
						>span{
							margin: 0 15px;
						}
					}
				}
			}
			>.mainText{
				width: 100%;
				padding: 27px 44px 0 37px;
				>.mainInfo{
					width: 100%;
					font-size: 12px;
					color: #666666;
					text-align: center;
					>p{
						margin-bottom: 36px;
						text-align: left;
					}
					>img{
						margin-bottom: 37px;
					}
				}
			}
		}
		>.encyMore{
			width:320px;
			min-height: 100px;
			float: right;
			>.guess{
				width: 100%;
				border:1px solid #e5e5e5; 

				margin-bottom: 12px;
				>.guessTitle{
					width: 100%;
					height: 50px;
					border-top:3px solid #4277ff;
					border-bottom: 1px solid #e5e5e5;
					padding-left: 10px;
					line-height: 50px; 
					font-size: 12px;
					color: #333;
				}
				>dl{
					width: 100%;
					height: 95px;
					cursor: pointer;
					display: flex;
					padding: 17px 0 0 11px;
					>dt{
						width: 100px;
						height: 62px;
						margin-right: 10px;
						>img{
							width: 100%;
							height: 100%;
						}
					}
					>dd{
						width: 185px;
						height: 62px;
						font-size: 12px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;


					}
				}
			}
		}
	}
</style>

