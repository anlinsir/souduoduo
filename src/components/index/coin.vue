<template>
	<div class="cionWarp">
		<div class="iconTop">
			<dl>
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
				<dd class="iconInfoMore">比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币</dd>				
			</dl>
		</div>

		<div class="iconBom"></div>
	</div>
</template>

<script>
	export default{

		created(){
			console.log(this.$route.params.id)
		}
	}
</script>

<style scoped lang="scss">
	.cionWarp{
		width: 100%;
		min-height: 300px;
		border:1px solid yellow;
		>.iconTop{
			width: 100%;
			min-height: 366px;
			border:1px solid;
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
						>.priceY{
							font-size: 20px;
							color: #4277ff;
							font-weight: bold;
						}
						>.zf{
							color: #fff;
							display: inline-block;
							width: 74px;
							height: 30px;
							background-color: #33b862;
							border-radius: 10px;
						}
					}
				}
			}
		}
	}	

	
</style>