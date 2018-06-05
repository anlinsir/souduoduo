
<template>
	<div class="annDetaliWarp">
		<div class="annDeLeft">
			<div class="Top">
				<div class="topInfo">
					搜多多 > 公告列表 > 公告详情
				</div>
			</div>

			<div class="Title">
				<div class="titleInfo">
					<p style="font-size: 18px;color: #333;font-weight: bold;margin-bottom: 17px;">CEX即将（6月1日前）为平台所有用户进行EOS主网映射</p>	
					<p style="color: #666;font-size: 12px;">
						<span><img style="vertical-align: middle;transform: translateY(-2px);" src="/static/img/ejoy.png">CEX.COM</span>|
						<span>2018-05-26 16:30</span>|
						<span>320次阅读</span>|
						<span>原文链接</span>
					</p>
				</div>
			</div>

			<div class="Text">
				<p style="margin-bottom: 78px;">尊敬的用户：  </p>
				<p style="line-height: 25px;
						margin-bottom: 78px;				
				">根据EOS官方公布的消息，EOS主网将很快上线，所有EOS原ERC20持有者，必须在6月1日之前通过智能合约调用完成主网地址注册，否则将无法收到主网资产。由于用户自行操作有一定的危险性，所以对于EOS原ERC20持有者，建议6月1号之前充值EOS到CEX交易平台，CEX平台已经完成为平台ERC20地址进行EOS映射的注册，在EOS主网上线后即可从CEX提取EOS主网资产。 平台内原持有EOS的用户无需额外操作，等待即可！</p>
				<p style="margin-bottom: 48px;">CEX运营</p>
				<p style="margin-bottom: 125px;">2018.5.26</p>
				<p>
						分享到：
						<img style="vertical-align: middle;margin-right: 6px; cursor: pointer;" src="/static/img/weixin.png">
						<img style="vertical-align: middle;margin-right: 6px;cursor: pointer;" src="/static/img/weio.png">
						<img style="vertical-align: middle;margin-right: 6px;cursor: pointer;" src="/static/img/qq.png">

				</p>
			</div>



		</div>


		<div class="annDeRight">
			<div class="RTop">
				CEX.COM的最新公告
			</div>

			<ul class="RBom">
				<li v-for='(ii,id) in 9'>
					<img style="vertical-align: bottom;" src="/static/img/newDealImg2.png">
					<span>CEX即将（6月1日前）为平台所…</span>
					<time style="float: right;color: #666;">16分钟前</time>
				</li>
			</ul>
		</div>


	</div>

</template>


<script>
	export default {

	}
</script>


<style scoped lang="scss">
	.annDetaliWarp{
		width: 100%;
		min-height: 100px;
		overflow: hidden;
		.annDeLeft{
			width: 866px;
			min-height: 300px;
			border:1px solid #e5e5e5;
			margin-right: 14px;
			float: left;
			>.Top{
				width: 100%;
				height: 49px;
				padding-left: 17px;
				padding-right: 19px;
				>.topInfo{
					width: 100%;
					height: 49px;
					font-size: 12px;
					color: #666;
					line-height: 49px;
					padding-left: 1px;
					border-bottom:1px solid #e5e5e5;
				}
			}
			>.Title{
				width: 100%;
				padding-left: 13px;
				padding-right: 23px;
				text-align: center;
				>.titleInfo{
					display: inline-block;
					width: 100%;
					height: 102px;
					margin-top: 27px;
					border-bottom:1px dashed #e5e5e5;
					>p{
						>span{
							margin: 0 18px;
						}
					}
				}
			}
			>.Text{
				width: 100%;
				min-height: 587px;
				padding: 0 35px;
				color: #333;
				font-size: 12px;
				padding-top: 27px;
							}
		}
		>.annDeRight{
			width: 320px;
			min-height: 100px;border:1px solid #e5e5e5;
			float: right;
			>.RTop{
				width: 100%;
				height: 50px;
				font-size: 12px;
				color: #333;
				line-height: 50px;
				padding-left: 10px;
				border-top: 3px solid #4277ff;
				border-bottom: 1px solid #e5e5e5;
			}
			>.RBom{
				width: 100%;
				padding: 0 7px;
				padding-top: 18px;
				font-size: 12px;
				color: #333;
				>li{
					margin-bottom: 22px;
				}

			}
		}
	}
</style>