<template>
	<div class="RobotWarp">
		<Header/>
			
		<main>
			<div class="main">
				<div class="Top" style="position: relative;">
					<img src="/static/img/bluebg.png">
					<p style="width: 314px;height: 47px;border:12px;position: absolute;top:78px;left: 203px;background-color: #4277ff;border-radius: 25px;color: #fff;font-size: 24px;text-align: center;line-height: 47px;">免费的数字货币报价机器人</p>
					<p style="font-size: 12px;color: #fff;position: absolute;top:167px;left: 203px;">最新的价格查询  &nbsp;&nbsp; | &nbsp;&nbsp; 免费邀请加入QQ群提供行情报价</p>
					<p style="font-size: 12px;color: #fff;position: absolute;top:192px;left: 203px;">50多家虚拟币交易所最新公告实时提醒</p>
					<p style="position: absolute;top:92px;left: 700px;height: 115px;width: 87px;text-align: center;">
						<img style="widows: 87px;height: 87px;" src="/static/img/e.png">
						<span style="font-size: 12px;color: #fff;">商务合作QQ</span>
					</p>

					<p style="position: absolute;top:92px;left: 843px;height: 115px;width: 87px;text-align: center;">
						<img style="widows: 87px;height: 87px;" src="/static/img/e.png">
						<span style="font-size: 12px;color: #fff;">商务合作QQ</span>
					</p>

				</div>

				<div class="Btn">
					<div class="title">
						<p style="font-size: 20px;color: #4277ff;box-sizing: content-box;padding-bottom: 20px;border-bottom: 1px solid #e5e5e5;width: 247px;margin-bottom: 20px;">币价动态  一手掌握</p><br>
						<p style="font-size: 14px;color: #666;margin-bottom: 5px;">多平台、高实时、大数据。</p><br>
						<p style="font-size: 14px;color: #666;"> 24小时全天候，币价动态一手掌控。</p>
					</div>

					<ul>
						<li>
							<img src="/static/img/ro1.png">
							<span style="display: inline-block;">
								<img src="/static/img/e.png">
								<span>
									<span style="font-size: 16px;color: #666;margin-bottom: 25px;display: inline-block;">操作使用</span><br>
									<span style="font-size: 12px;color: #e5e5e5">微信机器人</span><br>
									<span style="font-size: 12px;color: #e5e5e5">添加到群即可</span>
								</span>
							</span>
						</li>
						<li>
							<img src="/static/img/ro2.png">
							<span style="display: inline-block;">
								<img src="/static/img/e.png">
								<span>
									<span style="font-size: 16px;color: #666;margin-bottom: 25px;display: inline-block;">操作使用</span><br>
									<span style="font-size: 12px;color: #e5e5e5">微信机器人</span><br>
									<span style="font-size: 12px;color: #e5e5e5">添加到群即可</span>
								</span>
							</span>
						</li>
						<li>
							<img src="/static/img/ro3.png">
							<span style="display: inline-block;">
								<img src="/static/img/e.png">
								<span>
									<span style="font-size: 16px;color: #666;margin-bottom: 25px;display: inline-block;">操作使用</span><br>
									<span style="font-size: 12px;color: #e5e5e5">微信机器人</span><br>
									<span style="font-size: 12px;color: #e5e5e5">添加到群即可</span>
								</span>
							</span>

						</li>


					</ul>


					<div class="shuoWarp">
						<div class="shuo">
							<p style="font-size: 20px;color: #333;margin-bottom: 37px;">操作说明：</p>
							<p style="margin-bottom: 25px;">
								<span style="display: inline-block;width: 22px;height: 22px;background-color: #4277ff;border-radius: 50%;color: #fff;text-align: center;line-height: 22px;font-size: 14px;">1</span>
								<span style="font-size: 12px;color: #666;">添加机器人为好友，并加入你的社群。  在群里发送币种名称(英文缩写/中文名称都支持)，机器人会自动回复币种实时价格，比如：BT</span>
							</p>

							<p style="margin-bottom: 25px;">
								<span style="display: inline-block;width: 22px;height: 22px;background-color: #4277ff;border-radius: 50%;color: #fff;text-align: center;line-height: 22px;font-size: 14px;">2</span>
								<span style="font-size: 12px;color: #666;">在群里发送币种名称(英文缩写/中文名称都支持)，机器人会自动回复币种实时价格，比如：BTC</span>
							</p>

							<p >
								<span style="display: inline-block;width: 22px;height: 22px;background-color: #4277ff;border-radius: 50%;color: #fff;text-align: center;line-height: 22px;font-size: 14px;">3</span>
								<span style="font-size: 12px;color: #666;">支持统计指令，获取最近统计报告，比如：“公告”、“关注”、“上币”、“空投”</span>
							</p>
						</div>
					</div>

				</div>
			</div>			
		</main>	

		<Footer />
	</div>
</template>


<script>
	import Header from '../components/header'
	import Footer from '../components/footer'
	export default{
		components:{
			Header,
			Footer
		}
	}
</script>


<style scoped lang="scss">
	.RobotWarp{
		width: 	100%;
		min-height: 100px;
		>main{
			width: 100%;
			margin-top: 23px;
			min-height: 45px;
			>.main{
				width: 1200px;
				min-height: 120px;
				margin: auto;
				border:1px solid #e5e5e5;
				>.Top{
					width: 1200px;
					height: 300px;
					>img{
						width: 100%;
						height: 100%;
					}
				}
				>.Btn{
					width: 100%;
					min-height: 1000px;
					padding-left: 78px;
					padding-right: 85px;
					>.title{
						width: 100%;
						height: 100px;
						margin-top: 70px;
						margin-bottom: 70px;
						text-align: center;
						>p{
							display: inline-block;
						}
					}
					>ul{
						width: 100%;
						min-height: 720px;
						justify-content: space-between;
						display: flex;
						padding-bottom: 78px;
						border-bottom:1px solid #e5e5e5;
						margin-bottom: 70px;
						>li{
							width: 274px;
							height: 482px;
							>span{
								margin-top: 15px;
								width: 270px;
								height: 122px;border:1px solid #e5e5e5;
								border-radius: 18px;
								padding-left: 17px;
								padding-top: 15px;
								padding-right: 17px;
								>img{
									float: left;
								}
								>span{
									float: right;
									text-align: right;
								}
							}
						}
					}
					>.shuoWarp{
						width: 100%;
						min-height: 100px;
						margin-bottom: 70px;
						>.shuo{
						min-height: 100px;

							width: 100%;
						}
					}
				}
			}
		}
	}
</style>